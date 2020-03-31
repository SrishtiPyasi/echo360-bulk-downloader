//has instructions for the extension
//Background scripts, and many other important components, must be 
//registered in the manifest. Registering a background script in the manifest 
//tells the extension which file to reference, and how that file should behave.

//Inside the onInstalled listener, the extension will set a value using the storage API. 
//This will allow multiple extension components to access that value and update it.

chrome.runtime.onInstalled.addListener(function() {
    console.log("hi.");
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: 
          [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostContains: '.' }
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
      });
  });
