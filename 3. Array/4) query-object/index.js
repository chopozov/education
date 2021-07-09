function queryToObject(query) {
    let a = query.slice(1);
    let b = a.split('&').map(i => i.split("="));
    let keys = [];
    let values = [];
    for (let i = 0; i < b.length; i++) {
        keys.push(b[i][0]);
        values.push(b[i][1]);
    }
    for (let j = 0; j < values.length; j++) {
        if (values[j] === 'true') {
            values[j] = true;
        } else if (values[j] === 'false') {
            values[j] = false;
        } else if (values[j] / 1 === Number(values[j])) {
            values[j] = Number(values[j]);
        }
    };
        let result = {};
        for (let i = 0; i < keys.length; i++) {
            result[keys[i]] = values[i];
        }
        return result;
};

window.queryToObject = queryToObject;

export default queryToObject;
