<?php
require '../utils/auth.php';
require_once '../utils/filepath.php';
require_once '../utils/article.php';

$cms_path = '../cms';

$data = json_decode(file_get_contents('php://input'), true);
$media_path = $cms_path . '/medias';

if ($data['old'])
  unlink($media_path . '/' . gen_file_name($data['old']['url']));
if ($data['new'])
  file_put_contents(
    $media_path . '/' . gen_file_name($data['new']['url']),
    file_get_contents($data['new']['url'] . '?w=2048'),
    LOCK_EX
  );

if ($data['type'] == 'edit') {
  update_article_list('asobi');
  update_article_list('crowdfunding');
  update_all_articles('asobi');
  update_all_articles('crowdfunding');
}