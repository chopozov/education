function xhrGet(url) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.setRequestHeader('Content-Type:', 'application/json');
    xhr.send();

    return new Promise(function (resolve, reject) {
        if (xhr.status < 300 && xhr.status >= 200) {
            resolve(JSON.parse(xhr.response));
        } else {
            reject(JSON.parse(xhr.response))
        };
    });
}



window.xhrGet = xhrGet;

export default xhrGet;
