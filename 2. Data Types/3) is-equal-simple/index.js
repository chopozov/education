function isEqual(a, b) {
    let p
    for(p in a) {
        if(a.hasOwnProperty(p)){
            if(a[p] !== b[p]){
                return false;
            }
        }
    }
    for(p in b) {
        if(a.hasOwnProperty(p)){
            if(a[p] !== b[p]){
                return false;
            }
        }
    }
    return true;
 }

window.isEqual = isEqual;

export default isEqual;
