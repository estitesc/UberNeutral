chrome.browserAction.onClicked.addListener(function (tab) {
  const url = new URL(tab.url);
  if (url.hostname.endsWith("uber.com")) {
    chrome.tabs.executeScript(null, {
      file: "RideShareStats.js"
    });
  } else {
    chrome.tabs.executeScript(null, {
      file: "js/libs/sweetalert2.all.min.js"
    }, _ => {
      chrome.tabs.executeScript(null, {
        file: "js/incorrect-site-error.js"
      });
    });
  }
});

chrome.runtime.onInstalled.addListener(function (object) {
  chrome.tabs.create({url: chrome.extension.getURL("html/oninstall.html")}, function (tab) {
  });
});
