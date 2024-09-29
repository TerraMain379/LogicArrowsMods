const script = document.createElement('script');
script.src = chrome.runtime.getURL('scripts/inject.js');
(document.head || document.documentElement).appendChild(script);