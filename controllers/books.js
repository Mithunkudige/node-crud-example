let books = [];

export const createBook = (req, res) => {
    const { title } = req.body;
    if (title === "") {
        res.status(400).send('Title is required.');
        return;
    }
    const checkBook = books.find(b => b.title === title);
    if (checkBook) {
        res.status(400).send('Book already exists');
        return;
    }
    const book = {
        id: books.length + 1,
        title: title
    }
    books.push(book);
    res.send(book);
};

export const getBooks = (req, res) => {
    res.send(books);
};

export const getBook = (req, res) => {
    const { id } = req.params;
    const book = books.find(b => b.id === parseInt(id));
    if (!book) res.status(400).send(`No book found for id:${bookId}`);
    res.send(book);
};

export const updateBook = (req, res) => {
    const { id } = req.params;
    const book = books.find(b => b.id === parseInt(id));

    book.title = req.body.title
    
    res.send(book);
};

export const deleteBook = (req, res) => {
    const { id } = req.params;
    const book = books.find(b => b.id === parseInt(id));
    if (!book) res.status(400).send('The ID given not exist.');

    const index = books.indexOf(book);
    books.splice(index, 1);

    res.send(book);
};

export const patchBook = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
   
    const book = books.find(b => b.id === parseInt(id));
    if (title) book.title = title;

    res.send(book);
};