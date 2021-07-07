function stringToType(str) {
    if (str === 'true'){
        return  true;
    } else if(str === 'false'){
        return false;
    } else if(str === 'null'){
        return null;
    } else if(str === 'undefined'){
        return undefined;
    } else if (isNaN(str) === false && str !== ''){
        return Number(str);
    } else if (str === ""){
      return '';
    } else {
        return String(str);
    }
};

window.stringToType = stringToType;

export default stringToType;
