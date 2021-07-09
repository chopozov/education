function asyncSum(a, b) {
        return new Promise(function (resolve, reject) {
            if (typeof a === 'number' && typeof b === 'number') {
                setTimeout(() => resolve(a + b ), 1000);
            } else {
                setTimeout(() => reject(new Error('error')), 1000);
            };
        });
}
window.asyncSum = asyncSum;

export default asyncSum;
