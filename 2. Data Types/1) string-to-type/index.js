function stringToType(str) {
    switch (str) {
        case 'false':
            return false;
        case 'true':
            return true;
        case 'null':
            return null;
        case 'undefined':
            return undefined;
        case '': return ''
        default: {
            return !!isNaN(str) ? str : Number(str);
        }
    }
};

window.stringToType = stringToType;

export default stringToType;
