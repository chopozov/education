function stringToType(str) {
    if (str === 'true'){
        alert('Boolean');
    } else if(str === 'false'){
        alert('true');
    } else if(str === 'null'){
        alert(null);
    } else if(str === 'undefined'){
        alert(undefined);
    } else {
        alert(str)
    }
    return str;
};

window.stringToType = stringToType;

export default stringToType;
