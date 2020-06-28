export class BookModel {
    bookId: number
    libraryId: number
    bookTitle: string
    bookDesc: string
    content: string
    isbn: string

    constructor (bId: number, lId: number, bTitle: string, bDesc: string, content: string, isbn: string) {
        this.bookId = bId;
        this.bookTitle = bTitle;
        this.content = content;
        this.bookDesc = bDesc;
        this.isbn = isbn;
        this.libraryId = lId;
    }
}