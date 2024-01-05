<?php
require '../utils/auth.php';
require_once '../utils/filepath.php';
require_once '../utils/article.php';

$cms_path = '../cms/';

$data = json_decode(file_get_contents('php://input'), true);
$article_base_path = $cms_path . 'articles/' . $data['api'] . '/';
$media_base_path = $cms_path . 'medias/';

if (
  $data['contents']['old'] &&
  $data['contents']['old']['publishValue']
)
  unlink($article_base_path . $data['contents']['old']['id'] . '.json');
if (
  $data['contents']['new'] &&
  $data['contents']['new']['publishValue']
) {
  $article = read_article($data['contents']['new']['publishValue']);

  file_put_contents(
    $article_base_path . $data['contents']['new']['id'] . '.json',
    json_encode($article)
  );
}

$curl = curl_init(
  'https://miraiten2024w.microcms.io/api/v1/' .
  $data['api'] .
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
    $article['thumbnail'] = $media_base_path . gen_file_name($article['thumbnail']['url']);
  $articles[] = $article;
}

file_put_contents(
  $article_base_path . 'list.json',
  json_encode($articles)
);
