function fullSum(...args) {
    let result = 0;
    try {
        for (let j = 0; j<arguments.length; j++)
            if (typeof arguments[j] !== 'number') {
                throw new Error('Wrong arguments type!');
            }
        for (let i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }
        return result;
    } catch (error) {
        throw new Error(error);
    }
}

window.fullSum = fullSum;

export default fullSum;
