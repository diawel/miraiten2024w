<?php
require_once '.env.php';

if (hash('sha256', $_GET['key']) != MICROCMS_WEBHOOK_KEY_HASH) {
  http_response_code(403);
  exit;
}