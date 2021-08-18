import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSpecificBookThunk } from "../../redux/actions/book-actions";
import {
  selectedBookSelector,
  setBooks,
} from "../../redux/selectors/books-selector";
import SearchBooks from "./SearchBooks";
import './../../App.css'
const SpecificBook = ({ match }) => {
  const books = useSelector(setBooks);
  const dispatch = useDispatch();

//I can't send request to server for specific book and i fond another way 
//Server send 503() error  

  useEffect(() => {
    dispatch(setSpecificBookThunk(match.params.id));
  }, []);

  console.log(match);
  return (
    <div>
      {books.map((book, index) => (
        <div key={index} className="specificBook__container">
          {match.params.id.substr(1) === book.id ? (
            <div className="specificBook__wrapp" >
              <img
              className="specificBook__image"
               
                src={book.volumeInfo?.imageLinks?.thumbnail}
              />
              <div
              className="specificBook_info"
               
              >
                {book.volumeInfo?.categories?.map((cat, index) => (
                  <div>{cat}</div>
                ))}
                <div className="specificBook_title" >
                  {book.volumeInfo.title}
                </div>
                {book.volumeInfo.authors.map((auth) => (
                  <h6 className="specificBook__author" >{auth}</h6>
                ))}
                <span className="specificBook_desk">{book.volumeInfo?.description}</span>
              </div>
            </div>
          ) : (
            ""
          )}
          {console.log(match.params.id)}
          {console.log(book.volumeInfo.title)}
        </div>
      ))}
    </div>
  );
};

export default SpecificBook;
