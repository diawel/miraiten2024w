<?php
require '../utils/auth.php';
require_once '../utils/filepath.php';
require_once '../utils/article.php';

$cms_path = '../cms';

$data = json_decode(file_get_contents('php://input'), true);
$article_path = $cms_path . '/articles/' . $data['api'];

if (
  $data['contents']['old'] &&
  $data['contents']['old']['publishValue']
)
  unlink($article_path . '/' . $data['contents']['old']['id'] . '.json');
if (
  $data['contents']['new'] &&
  $data['contents']['new']['publishValue']
)
  file_put_contents(
    $article_path . '/' . $data['contents']['new']['id'] . '.json',
    json_encode(read_article($data['contents']['new']['publishValue']))
  );

update_article_list($data['api']);