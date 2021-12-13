// background.js

let officialLinks = ['neotokyo.codes', 'opensea.io'];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ officialLinks });
  console.log(`Default officialLinks set to ${officialLinks}`);
});
