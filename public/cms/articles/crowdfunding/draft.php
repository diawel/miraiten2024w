<?php
require_once '../../../utils/draft.php';

header('Content-Type: application/json');
echo json_encode(get_draft('crowdfunding', $_GET['id'], $_GET['draftKey']));