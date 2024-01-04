<?php
require './auth.php';
require_once './filepath.php';

$data = json_decode(file_get_contents('php://input'), true);
$base_path = '../cms/medias/';

if ($data['old'])
  unlink($base_path . gen_file_name($data['old']['url']));
if ($data['new'])
  file_put_contents(
    $base_path . gen_file_name($data['new']['url']),
    file_get_contents($data['new']['url'] . '?w=2048')
  );
