<?php
require '../utils/auth.php';
require_once '../utils/filepath.php';

$cms_path = '../cms/';

$data = json_decode(file_get_contents('php://input'), true);
$media_base_path = $cms_path . 'medias/';

if ($data['old'])
  unlink($media_base_path . gen_file_name($data['old']['url']));
if ($data['new'])
  file_put_contents(
    $media_base_path . gen_file_name($data['new']['url']),
    file_get_contents($data['new']['url'] . '?w=2048')
  );
