<?php
require_once 'article.php';
require_once 'api.php';

function get_draft($api, $id, $draft_key) {
  $article = cms_get_contents($api . '/' . $id . '?draftKey=' . $draft_key);

  return read_article($article);
}