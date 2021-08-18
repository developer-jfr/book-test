import { BookType } from "../../types/books-type";
import { actions, ActionsType } from "../actions/book-actions";


const initialState = {
    books: [] as Array<BookType>,
    totalUsers: 0,
    pageSize: 30,
    currenPage: 0,
    book: [] as Array<BookType>,
    filter: {
        term: 'o',
        categories: 'all',
        sort: 'newest'
    },
    isFetching: true
}


export const booksReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch(action.type) {
        case 'GBA/BK/SET_BOOKS': {
            return {
                ...state,
                books: action.payload.books
            }
        }
        case 'GBA/BK/SET_TOTAL_USERS_COUNT': {
            return {
                ...state,
                totalUsers: action.payload.total
            }
        }
        case 'GBA/BK/SET_CURRENT_PAGE': {
            return {
                ...state,
                currenPage: action.payload.currentPage
            }
        }
        case 'GBA/BK/SET_SPECIFIC_BOOK' : {
            return {
                ...state,
                book: action.payload.book
            }
        }
        case 'GBA/BK/SET_FILTER': {
            return {
                ...state,
                filter: action.payload.filter
            }
        }
        case 'GBA/BK/SET_TOGGLE_IS_FETCHING' : {
            return {
                ...state,
                isFetching: action.payload.isFetching
            }
        }
        default: return state
    }
}

export type InitialStateType = typeof initialState;
export type FilterType = typeof initialState.filter
