<?php
function gen_file_name($url) {
  return hash('sha256', $url) . '.' . pathinfo($url, PATHINFO_EXTENSION);
}