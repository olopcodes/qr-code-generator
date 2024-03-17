(async function () {
    const qrcodeEl = document.querySelector('.qr-code');
    const downloadBtn = document.querySelector('#download');
    const body = document.querySelector('body');
    // get params of the url
    function getURLParams(url) {
        return Object.fromEntries(new URL(url).searchParams.entries());
    }

    // get the params of this url
    const url = window.location.href;
    const param = getURLParams(url);

    // get theme
    const currentTheme = param.theme;
    body.setAttribute('data-theme', currentTheme);

    // fetch a new qrcode with the value in the params
    const res = await fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${param.qrcode}&size=200x200`);

    // set the href of the download button to the qrcode
    downloadBtn.setAttribute('herf', res.url);

    // create a new image element
    const img = document.createElement('img');
    // set the source of the image element to the result of the fetch
    img.src = res.url;

    // clear the qrcode element
    qrcodeEl.innerHTML = '';

    // append new qrcode image
    qrcodeEl.append(img);

})();