function solve() {
    let obj = {
        extend: function (other) {
            for (let prop of Object.keys(other)) {
                if (typeof(other[prop]) === 'function') {
                    Object.getPrototypeOf(obj)[prop] = other[prop];
                } else {
                    obj[prop] = other[prop];
                }
            }
        }
    };

    return obj;
}