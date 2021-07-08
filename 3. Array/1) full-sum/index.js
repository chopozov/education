function fullSum(...args) {
    let result = 0;
    try {
        for (let i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] !== 'number') {
                throw new Error('Wrong arguments type!');
            }
            result += arguments[i];
        }
        return result;
    } catch (error) {
        throw new Error(error);
    }
}

window.fullSum = fullSum;

export default fullSum;
