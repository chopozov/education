function asyncSum(a, b) {
        return new Promise(function (resolve, reject) {
            if (typeof a === 'number' && typeof b === 'number') {
                return resolve(a + b);
            } else {
                return reject(new Error('error'));
            };
        });
}
window.asyncSum = asyncSum;

export default asyncSum;
