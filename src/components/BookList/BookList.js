import './BookList.css';
import { BookItem } from '../BookItem/BookItem';

export function BookList(props) {
    return (
        <div className='booklist' id='booklist'>
            { (props.result && 
                (props.result).map((book, index) =>  (
                    <BookItem id={index}
                        onClick={props.onClick}
                        img={book.volumeInfo.imageLinks.thumbnail}
                        type={book.volumeInfo.categories}
                        name={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        key={index} />
                )))

            }
        </div>
    )
    
    
}