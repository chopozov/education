function searchString(obj) {
    let str = '?';
    Object.keys(obj).forEach(function(key) {
        if (obj[key] !== null && obj[key] !== undefined && obj[key] !== '') {
            str = str + String(key) + '=' + obj[key] + '&';
        }
    });
    return str.substring(0, str.length - 1);
};

window.searchString = searchString;

export default searchString;

