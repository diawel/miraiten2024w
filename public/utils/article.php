<?php
require_once 'filepath.php';

$cms_path = '../cms';
$base_path = '/miraiten2024w';
$media_base_path = $base_path . '/cms/medias';

function read_article($article) {
  global $media_base_path;

  if (isset($article['thumbnail']))
    $article['thumbnail'] = $media_base_path . '/' . gen_file_name($article['thumbnail']['url']);
  if (isset($article['poster']))
    $article['poster'] = $media_base_path . '/' . gen_file_name($article['poster']['url']);
  if (isset($article['webCapture']))
    $article['webCapture'] = $media_base_path . '/' . gen_file_name($article['webCapture']['url']);
  if (isset($article['slide'])){
    if (str_starts_with($article['slide'], 'https://www.canva.com/')) 
      $article['slide'] = [
        'url' => $article['slide'],
        'type' => 'canva'
      ];
    elseif (str_starts_with($article['slide'], 'https://speakerdeck.com/')) {
      $oembed = json_decode(
        file_get_contents(
          'https://speakerdeck.com/oembed.json?url=' . $article['slide']
        ),
        true
      );
      preg_match('/\/\/speakerdeck\.com\/player\/\w+/', $oembed['html'], $match);
      if (isset($match[0])) $article['slide'] = [
        'url' => 'https:' . $match[0],
        'type' => 'speakerdeck'
      ];
      else $article['slide'] = null;
    }
    else $article['slide'] = null;
  }
  if (isset($article['body'])) {
    preg_match_all(
      '/https:\/\/images\.microcms-assets\.io\/assets(\/\w+)+\.\w+/',
      $article['body'],
      $matches,
      PREG_SET_ORDER
    );
    foreach ($matches as $match) {
      $article['body'] = str_replace(
        $match[0],
        $media_base_path . '/' . gen_file_name($match[0]),
        $article['body']
      );
    }
  }

  return $article;
}

function update_article_list($api) {
  global $cms_path, $media_base_path;
  $article_path = $cms_path . '/articles/' . $api;

  $curl = curl_init(
    'https://miraiten2024w.microcms.io/api/v1/' .
    $api .
    '?fields=id,team,thumbnail,title,shortDescription&orders=team'
  );
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl, CURLOPT_TIMEOUT, 10);
  curl_setopt($curl, CURLOPT_HTTPHEADER, [
    'X-MICROCMS-API-KEY: uLBwOhH85QkCRSRqj5GgP5MwQmuQMTyKjfx7',
  ]);
  $list = json_decode(
    curl_exec($curl),
    true
  );
  curl_close($curl);
  
  $articles = [];
  foreach ($list['contents'] as $article) {
    if (isset($article['thumbnail']))
      $article['thumbnail'] = $media_base_path . '/' . gen_file_name($article['thumbnail']['url']);
    $articles[] = $article;
  }
  
  file_put_contents(
    $article_path . '/list.json',
    json_encode($articles)
  );
}

function update_all_articles($api) {
  global $cms_path;
  $article_path = $cms_path . '/articles/' . $api;

  $curl = curl_init(
    'https://miraiten2024w.microcms.io/api/v1/' . $api
  );
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl, CURLOPT_TIMEOUT, 10);
  curl_setopt($curl, CURLOPT_HTTPHEADER, [
    'X-MICROCMS-API-KEY: uLBwOhH85QkCRSRqj5GgP5MwQmuQMTyKjfx7',
  ]);
  $list = json_decode(
    curl_exec($curl),
    true
  );
  curl_close($curl);

  foreach ($list['contents'] as $article) {
    file_put_contents(
      $article_path . '/' . $article['id'] . '.json',
      json_encode(read_article($article))
    );
  }
}