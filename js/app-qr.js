(function () {
    const qrcodeEl = document.querySelector('.qr-code');


    function getURLParams(url) {
        return Object.fromEntries(new URL(url).searchParams.entries());
    }

    const url = window.location.href

    const param = getURLParams(url);

    const qrcode = new QRCode("qrcode", {
        text: param.qrcode,
        width: 175,
        height: 175,
        colorDark: "#232323",
        colorLight: "#fefefe"
    });

    qrcodeEl.innerHTML = qrcode;

})();