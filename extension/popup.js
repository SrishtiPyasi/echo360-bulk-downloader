//variables hold the element stopDownload button and changeCOlor button
let changeColor = document.getElementById('changeColor');
let stopDownload = document.getElementById('stopDownload');

//from storage. It then applies the color as the background of the button
chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
    console.log("hello");
    let color = "#fff";
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log("next line to be executed:");
        chrome.tabs.executeScript(tabs[0].id, {code: ' document.body.style.backgroundColor = "' + color + '";'});
        chrome.tabs.executeScript(null, {file: "index.js"});
    });
};

stopDownload.onclick =  function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(null, {file: "stopDownload.js"});
    });
};
