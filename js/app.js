$(document).ready(function () {
    const urlInput = $('.url-input')[0];
    const qrCodeBtn = $('#qr-code-btn');
    const btnTheme = $('#theme-toggle');
    let currentTheme = document.querySelector('body').getAttribute('data-theme');

    const isValidUrl = urlString => {
        var urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator
        return !!urlPattern.test(urlString);
    };

    $(qrCodeBtn).click(function (e) {
        e.preventDefault();
        const value = urlInput.value;
        const isValid = isValidUrl(value)

        if (isValid) {
            // switch to the qr page and add parameter
            const url = `../qr-code.html?qrcode=${value}&theme=${currentTheme}`
            window.location.href = url;

        } else {
            alert('enter valid url')
        }
    });


    $(btnTheme).click(function (e) {
        e.preventDefault();

        if (currentTheme === 'light') {
            currentTheme = 'dark';
            document.body.setAttribute('data-theme', 'dark');
        } else {
            currentTheme = 'light';
            document.body.setAttribute('data-theme', 'light');
        }
    });
});



