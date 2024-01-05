<?php
require_once 'filepath.php';

$cms_path = '../cms/';

function read_article($article) {
  global $cms_path;
  $media_base_path = $cms_path . 'medias/';

  if (isset($article['thumbnail']))
    $article['thumbnail'] = $media_base_path . gen_file_name($article['thumbnail']['url']);
  if (isset($article['poster']))
    $article['poster'] = $media_base_path . gen_file_name($article['poster']['url']);
  if (isset($article['webCapture']))
    $article['webCapture'] = $media_base_path . gen_file_name($article['webCapture']['url']);
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
      $article['slide'] = [
        'url' => 'https:' . $match[0],
        'type' => 'speakerdeck'
      ];
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
        $media_base_path . gen_file_name($match[0]),
        $article['body']
      );
    }
  }

  return $article;
}
