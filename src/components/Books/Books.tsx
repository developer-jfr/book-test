import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { actions, searchBook } from "../../redux/actions/book-actions";
import { FilterType } from "../../redux/reducers/books-reducer";
import {
  selectPageSize,
  selectCurrentPage,
  selectFilter,
  setBooks,
  setTotalUsersCount,
  toggleIsFetching,
} from "../../redux/selectors/books-selector";
import Paginator from "../common/Paginator/Paginator";
import {Link} from 'react-router-dom'
import './../../App.css'
import SearchBooks from "./SearchBooks";
function Books() {
  const isFetching = useSelector(toggleIsFetching);
  const filter = useSelector(selectFilter);
  const books = useSelector(setBooks);
  const totalItemsCount = useSelector(setTotalUsersCount);
  const currentPage = useSelector(selectCurrentPage);
  const pageSize = useSelector(selectPageSize);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchBook(currentPage, filter));
  }, [currentPage]);

  const onPageChanged = (pageNumber: number) => {
    dispatch(searchBook(pageNumber, filter));
  };
  const onFilterChanged = (filter: FilterType) => {
    dispatch(searchBook(1, filter));
  };

  const loadMore = () => {};

  return (
    <div>
      {isFetching ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        ""
      )}
      <SearchBooks onFilterChanged={onFilterChanged} />
      <h5 style={{textAlign: 'center', fontSize: '15px', paddingTop: '30px'}}>Founded:   {totalItemsCount} results</h5>
      <div  className="books_container" >
      <div className="books_wrapp" >
        {books.map((book, index) => (
        <div key={index}  >
           <div className="book__container" >
           <div className="book_image" >
             <img src={book.volumeInfo?.imageLinks?.smallThumbnail} />
           </div>
           <div className="book_info" >
           {book.volumeInfo?.categories?.map((cat) => (
             <span className="book_categories" >{cat}</span>
           ))}
           <Link to={`/:${book.id}`}><span className="book_title" >{book.volumeInfo?.title.slice()}</span></Link>
           {book.volumeInfo?.authors?.map((auth) => (
             <span className="book_auth" >{auth}</span>
           ))}
           </div>
         </div>
        </div>
        ))}
      </div>
      </div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalItemsCount}
        pageSize={pageSize}
      />
    </div>
  );
}

export default Books;

{/*

  <div key={index} className="card" style={{ width: "15rem" , height: '700px', fontSize: '10px', padding: '10px'}}>
           <img src={book.volumeInfo?.imageLinks?.smallThumbnail} className="card-img-top" alt="..." />
           <div className="card-body">
             <h5 style={{fontSize: '15px'}} className="card-title">{book.volumeInfo?.title}</h5>
             
             <Link to={`/:${book.id}`} className="btn btn-primary">
               See More
             </Link>
           </div>
         </div>
*/}
