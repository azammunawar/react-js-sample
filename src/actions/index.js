export function selectBook(book) {
    console.log('book selected', book);
  return {
      type: 'BOOK_SELECTED',
      payload: book
  }
}