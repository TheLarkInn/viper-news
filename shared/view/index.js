module.exports = (render, model) => render`
<!doctype html>
<html>
  <head>
    <title> ${model.title} </title>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width'>
    <meta name="theme-color" content="#ffffff">
    <meta name="theme-color" content="#ffffff">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="/manifest.json">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="stylesheet" href="/css/bundle.css">
    <script async src='/js/bundle.js'></script>
  </head>
  <body>
    <header>${model.header}</header>
    <main>${model.main}</main>
  </body>
</html>`;
