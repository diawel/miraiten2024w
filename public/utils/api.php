<?php
require_once '.env.php';

function cms_get_contents($endpoint) {
  $curl = curl_init(
    MICROCMS_API_URL . $endpoint
  );
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl, CURLOPT_TIMEOUT, 10);
  curl_setopt($curl, CURLOPT_HTTPHEADER, [
    'X-MICROCMS-API-KEY: ' . MICROCMS_API_KEY,
  ]);
  $contents = json_decode(
    curl_exec($curl),
    true
  );
  curl_close($curl);

  return $contents;
}