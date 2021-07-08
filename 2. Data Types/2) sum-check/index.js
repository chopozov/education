function sumCheck(a, b) {
  try {
      if (typeof a === 'number' && typeof b === 'number') {
          return a + b;
      }
      throw new Error('Wrong arguments type!');
  } catch (error) {
      throw new Error(error);
    }
}

window.sumCheck = sumCheck;

export default sumCheck;
