(function () {
    let count = 0;

    return class Extensible {
        constructor() {
            this.id = count;
            count++;
        }

        extend(template) {
            for (let item of Object.keys(template)) {
                if (typeof (template[item]) === 'function') {
                    Object.getPrototypeOf(this)[item] = template[item];
                } else {
                    this[item] = template[item];
                }
            }
        }
    }
})();

let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
