<?php
if (hash('sha256', $_GET['key']) != '6976530b8d2fae47181c49499802878b9610fc5968c0adb9c72c5f9c5773256c') {
  http_response_code(403);
  exit;
}