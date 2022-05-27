function onStartedDownload(id) {
  console.log(`Started downloading: ${id}`);
}

function onFailed(error) {
  console.log(`Download failed: ${error}`);
}

var downloadUrl = "https://example.org/image.png";

var downloading = browser.downloads.download({
  url: downloadUrl,
  filename: 'Resume.pdf',
  conflictAction: 'uniquify'
});

downloading.then(onStartedDownload, onFailed);