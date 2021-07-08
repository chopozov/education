function findPair(arr) {
  for (let i = 0; i < arr.length; i++) {
      for(let j = arr.length ; j >= 0; j--) {
          if (arr[i] === arr[j] && j !== i ) {
              return arr[i];
          }
      }
  } return null;
};

window.findPair = findPair;

export default findPair;
