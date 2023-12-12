document.getElementById('generate').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        const tab = tabs[0];
        const url = encodeURIComponent(tab.url);
        const qrCodeImageUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + url;
        document.getElementById('qrcode').innerHTML = '<img src="' + qrCodeImageUrl + '">';
    });
});
