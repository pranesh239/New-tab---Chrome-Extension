chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ newTabData: "Welcome to new tab!" }, function() {});
});
