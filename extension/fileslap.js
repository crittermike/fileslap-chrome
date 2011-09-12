var linkitem = chrome.contextMenus.create({
  "title"    : "Upload link to Fileslap", 
  "contexts" : ['link'],
  "onclick"  : uploadLink
});

var imageitem = chrome.contextMenus.create({
  "title"    : "Upload image to Fileslap", 
  "contexts" : ['image'],
  "onclick"  : uploadImage
});

function uploadLink(info, tab) {
  var url = info.linkUrl;
  window.open('http://fileslap.com/upload?link=' + url);
}

function uploadImage(info, tab) {
  var url = info.srcUrl;
  window.open('http://fileslap.com/upload?link=' + url);
}
