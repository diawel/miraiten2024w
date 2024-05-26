<?php
function cms_get_contents($endpoint) {
  $curl = curl_init(
    'https://miraiten2024w.microcms.io/api/v1/' . $endpoint
  );
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl, CURLOPT_TIMEOUT, 10);
  curl_setopt($curl, CURLOPT_HTTPHEADER, [
    'X-MICROCMS-API-KEY: uLBwOhH85QkCRSRqj5GgP5MwQmuQMTyKjfx7',
  ]);
  $contents = json_decode(
    curl_exec($curl),
    true
  );
  curl_close($curl);

  return $contents;
}