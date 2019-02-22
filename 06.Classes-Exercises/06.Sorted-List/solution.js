class SortedList {
    constructor() {
        this.array = [];
        this.size = 0;
    }

    add(elemenent) {
        this.array.push(elemenent);
        this.array.sort((a, b) => a - b);
        this.size++;
        return this.array;
    }

    remove(index) {
        if (index >= 0 && index < this.array.length) {
            this.array.splice(index, 1);
            this.array.sort((a, b) => a - b);
            this.size--;
            return this.array;
        }
    }

    get(index) {
        if (index >= 0 && index < this.array.length) {
            return this.array[index]
        }
    }

    size() {
        return this.size;
    }
}

let sortedList = new SortedList();
sortedList.add(5);
sortedList.add(2);
sortedList.add(1);

sortedList.remove(2);
console.log(sortedList.get(1));
console.log(sortedList.size);