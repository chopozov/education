function arraysSort(arr) {
    arr.sort((a, b) => {
        if (arrayMax(a) > arrayMax(b)) {
            return 1;
        } else if(arrayMax(a) < arrayMax(b)) {
            return -1;
        } else {
            return 0;
        }
    } );
    return [...arr];
};
const arrayMax = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
window.arraysSort = arraysSort;

export default arraysSort;
