function findPair(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = arr.length; j > i; j--) {
            if (arr[i] === arr[j]) {
                console.log(i,j);
                return arr[j];

            }
        }
    }
    return null;
};

window.findPair = findPair;

export default findPair;

/*function findPair(arr) {
    let findDuble = arr => arr.filter((item, index) => arr.indexOf(item) != index)
    let arr2 = findDuble(arr)
    if (arr2.length !== 0) {
        return arr2[0];
    }
  return null;
};

window.findPair = findPair;

export default findPair;*/