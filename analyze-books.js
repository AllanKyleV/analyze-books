const books = [
    { title: "Eloquent JavaScript", pages: 472 },
    { title: "You Don’t Know JS", pages: 278 },
    { title: "Atomic Habits", pages: 320 },
    { title: "Deep Work", pages: 304 },
    { title: "Short Book", pages: 90 },
];

function analyzBooks(books) {
    const filtered = books.filter(function(book) {
        if (book.pages < 300) {
            return book;
        }
    })
    console.log(filtered);
    
    const bookTitle = filtered.map(book => book.title);
    console.log(bookTitle);
    
    // To fix
    const javaBook = books.some(title => title == 'JavaScript');
    console.log(javaBook);
    
    // To fix
    const work = books.find(word => word === 'work');
    console.log(work);
}

console.log(analyzBooks(books))
// console.log(books[0].pages)