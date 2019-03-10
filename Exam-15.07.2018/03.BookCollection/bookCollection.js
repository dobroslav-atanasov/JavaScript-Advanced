class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        if (room === 'livingRoom' || room === 'bedRoom' || room === 'closet') {
            this.room = room;
            this.shelfGenre = shelfGenre;
            this.shelf = [];
            this.shelfCapacity = shelfCapacity;
        } else {
            throw `Cannot have book shelf in ${room}`;
        }
    }

    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }

    addBook(bookName, bookAuthor, genre) {
        let book = { bookName, bookAuthor, genre };

        if (this.shelf.length === this.shelfCapacity) {
            this.shelf.shift();
        }

        this.shelf.push(book);
        this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor));
        return this;
    }

    throwAwayBook(bookName) {
        this.shelf = this.shelf.filter(x => x.bookName !== bookName);
    }

    showBooks(genre) {
        let books = this.shelf.filter(x => x.genre === genre);
        let result = `Results for search "${genre}":\n`;
        for (let book of books) {
            result += `\uD83D\uDCD6 ${book.bookAuthor} - "${book.bookName}"\n`;
        }

        return result.trim();
    }

    toString() {
        if (this.shelf.length === 0) {
            return "It's an empty shelf";
        } else {
            let result = '';
            result += `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;
            for (let book of this.shelf) {
                result += `\uD83D\uDCD6 "${book.bookName}" - ${book.bookAuthor}\n`;
            }

            return result.trim();
        }
    }
}