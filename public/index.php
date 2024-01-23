<?php
$cms_path = './cms';

if (isset($_GET['not_found'])) {
  http_response_code(404);
  readfile('index.html');
  exit;
}
if (preg_match("/Twitterbot|facebookexternalhit|line-poker|Discordbot|SkypeUriPreview|Slackbot|PlurkBot/", $_SERVER['HTTP_USER_AGENT'])) {
  ?>
  <!doctype html>
  <html lang="ja">
    <head>
      <meta property="og:title" content="はこだて未来展2024 FUN!tasista!" />
      <meta property="og:url" content="https://fundesign.jp/miraiten2024w/" />
      <meta property="og:description" content="公立はこだて未来大学の情報デザインコースに所属する2年生が主催する作品展覧会です。2024年2月1日・2日に、シエスタハコダテ4F Gスクエアで開催します。" />
      <meta property="og:image" content="<?php
        $thumbnail = 'https://fundesign.jp/miraiten2024w/assets/ogp.png';
        if (preg_match('/\/(asobi|crowdfunding)\/[\w-]+$/', $_SERVER['REQUEST_URI'], $match)) {
          $json_path = $cms_path . '/articles' . $match[0] . '.json';
          if (file_exists($json_path) && $article = json_decode(file_get_contents($json_path), true))
            $thumbnail = 'https://fundesign.jp' . $article['thumbnail'];
        }
        echo $thumbnail;
      ?>" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@miraiten2024" />
    </head>
  </html>
  <?php
  exit;
}
readfile('index.html');