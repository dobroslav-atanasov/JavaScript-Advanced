function solve(array) {
    let rectangles = [];

    for (let item of array) {
        let rectangle = {
            width: Number(item[0]),
            height: Number(item[1]),
            area: function () {
                return this.width * this.height;
            },
            compareTo: function (other) {
                if (this.area() === other.area()) {
                    return other.width - this.width;
                }

                return other.area() - this.area();
            }
        }

        rectangles.push(rectangle);
    }

    let sortedRectangles = rectangles.sort((a, b) => a.compareTo(b));
    return sortedRectangles;
}

console.log([[10, 5], [5, 12]]);
console.log([[10, 5], [3, 20], [5, 12]]);