const books = [
    { title: "Eloquent JavaScript", pages: 472 },
    { title: "You Don’t Know JS", pages: 278 },
    { title: "Atomic Habits", pages: 320 },
    { title: "Deep Work", pages: 304 },
    { title: "Short Book", pages: 90 },
];

function analyzBooks(books) {
    const filtered = books.filter(book => book.pages > 300);
    console.log(filtered);
    
    const bookTitle = filtered.map(book => book.title);
    console.log(bookTitle);
    
    const javaBook = bookTitle.some(title => title.toLowerCase().includes('javascript'));
    console.log(javaBook);
    
    const work = bookTitle.find(word => word.toLowerCase().includes('work'));
    console.log(work);
}

analyzBooks(books);