chrome.browserAction.onClicked.addListener(function(tab) {
  var url = tab.url;
  var regex = /^https?:\/\/www\.kinopoisk\.ru\/(series|film)\/(\d+)\/?.*$/;
  var matches = url.match(regex);

  if (matches) {
    var type = matches[1];
    var flicksbarUrl = 'https://flicksbar.club/' + type + '/' + matches[2] + '/';

    // Открываем страницу с просмотром фильма
    chrome.tabs.update(tab.id, { url: flicksbarUrl });
  }
});
