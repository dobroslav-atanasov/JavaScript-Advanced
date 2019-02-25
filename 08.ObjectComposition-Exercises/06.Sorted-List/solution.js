function solve() {
    let sortedList = (() => {
        let array = [];

        let add = function (element) {
            array.push(element);
            array.sort((a, b) => a - b);
            this.size++;
            return array;
        }

        let remove = function (index) {
            if (index >= 0 && index < array.length) {
                array.splice(index, 1);
                array.sort((a, b) => a - b);
                this.size--;
                return array;
            }
        }

        let get = function (index) {
            if (index >= 0 && index < array.length) {
                let item = array[index];
                return item;
            }
        }

        let size = 0;
        return { add, remove, get, size };
    })();

    return sortedList;
}