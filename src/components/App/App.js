import { useEffect, useState } from 'react';
import axios from 'axios';

import { SearchBar } from '../SearchBar/SearchBar';
import { BookList } from '../BookList/BookList';
import { Button, LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';
import { LoadingIndicator } from '../LoadingIndicator/LoadingIndicator';
import { BigBookItem } from '../BigBookItem/BigBookItem';
import ResultsAmount from '../ResultsAmount/ResultsAmount'

import './App.css';

const apiKey = 'AIzaSyBLNWUM3ajMQcZv68tQOAGoCnKUObVylfE';
const OFFSET_SIZE = 30;

function App() {

  const [book, setBook] = useState('');
  const [result, setResult] = useState([]);
  const [amount, setAmount] = useState(0);
  const [offset, setOffset] = useState(0);
  const [sort, setSort] = useState('relevance');
  const [category, setCategory] = useState('all');
  const [display, setDisplay] = useState('none');
  const [isLoaded, setIsLoaded] = useState(false);
  const [pickedItem, setPickedItem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setBook(e.target[0].value);
    setOffset(0);
    setResult([]);
  }

  useEffect(() => {
    function googleApiSearch() {
      if (book === "") {
        return;
      }
      setIsLoaded(true);
      setResult([...result]);
      if (offset < 30) {
        setResult([])
      }
      setDisplay('none');
      setAmount('...')
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}${category === "all" ? "" : "+subject:"+category}&maxResults=${OFFSET_SIZE}&startIndex=${offset}&orderBy=${sort}&key=${apiKey}`)
        .then(data => {

          if (data.data.totalItems === 0) {
            setAmount(0);
            setIsLoaded(false);
            return;
          }
          const booksResult = data.data.items.map((item) => {
            if (!item.volumeInfo.imageLinks) {
              item.volumeInfo = {...item.volumeInfo, imageLinks: { thumbnail: "/notavailable.jpg"}}
            }
            return item;
          })
          setPickedItem('');
          setIsLoaded(false);
          setAmount(data.data.totalItems);
          setResult([...result, ...booksResult]);
          setDisplay('block');
        });
    }
    googleApiSearch();
  }, [sort, category, book, offset])
  function handleSort(e) {
    setSort(e.target.value);
    setOffset(0);
    setResult([])
  }

  function handleCategories(e) {
    setCategory(e.target.value);
    setOffset(0);
    setResult([])
  }

  function handleMore(e) {
    e.preventDefault();
    setOffset(offset + OFFSET_SIZE)
  }

  function handleBigBlock(e) {
    e.preventDefault(e);
    const bookElement = document.getElementsByClassName('bookitem');
    let bookElements = Array.from(bookElement);
    let item = e.currentTarget;
    setPickedItem(bookElements.indexOf(item));
  }

  function handlePreviousPage(e) {
    e.preventDefault();
    setPickedItem('');
  }

  return (
    <div className='app'>
      <div className='header'>
        <h1 className='title'>Search for books</h1>
        <SearchBar 
          onSubmit={handleSubmit}
          handleSort={handleSort} 
          handleCategories={handleCategories}
        />
      </div>
      <div className='main' id='main'>
        {(pickedItem || pickedItem === 0) 
        ? <BigBookItem result={result[pickedItem]} btnClick={handlePreviousPage}/> 
        : <div>
              <ResultsAmount amount={amount}/>
              <BookList result={result} onClick={handleBigBlock}/>
              {isLoaded && <LoadingIndicator/>}
              <LoadMoreBtn display={display} onClick={handleMore}/>
              <BigBookItem result={result[pickedItem]}/>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
