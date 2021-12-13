// background.js

let officialLinks = [];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ officialLinks });
  console.log(`Default officialLinks set to ${officialLinks}`);
});
