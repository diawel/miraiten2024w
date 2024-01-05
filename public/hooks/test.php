<?php
$oembed = json_decode(
  file_get_contents(
    'https://speakerdeck.com/oembed.json?url=' . 'https://speakerdeck.com/potato4d/why-you-choose-spa'
  ),
  true
);
preg_match('/\/\/speakerdeck\.com\/player\/\w+/', $oembed['html'], $match);
echo $match[0];