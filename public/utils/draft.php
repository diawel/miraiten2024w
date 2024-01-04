<?php
require_once 'article.php';

function get_draft($api, $id, $draft_key) {
  $curl = curl_init(
    'https://miraiten2024w.microcms.io/api/v1/' . $api . '/' . $id .
    '?draftKey=' . $draft_key
  );
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl, CURLOPT_TIMEOUT, 10);
  curl_setopt($curl, CURLOPT_HTTPHEADER, [
    'X-MICROCMS-API-KEY: uLBwOhH85QkCRSRqj5GgP5MwQmuQMTyKjfx7',
  ]);
  $article = json_decode(
    curl_exec($curl),
    true
  );
  curl_close($curl);

  return read_article($article);
}