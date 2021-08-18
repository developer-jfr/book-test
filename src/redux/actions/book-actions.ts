import { booksAPI } from "../../api/api"
import { FilterType } from "../reducers/books-reducer"
import { BaseThunkType, InferActionsTypes } from "../redux-store"


export const actions = {
    setBooks: (books: any) => ({type : 'GBA/BK/SET_BOOKS', payload: {books}} as const ) ,
    setTotalUsersAc: (total: number) => ({type: 'GBA/BK/SET_TOTAL_USERS_COUNT', payload: {total} } as const ),
    setCurrentPage: (currentPage: number) => ({type: 'GBA/BK/SET_CURRENT_PAGE', payload: {currentPage}} as const ),
    setSpecificBook: (book: any) => ({type: 'GBA/BK/SET_SPECIFIC_BOOK', payload: {book} } as const ),
    setFilterAC: (filter: FilterType) => ({type: 'GBA/BK/SET_FILTER', payload: {filter}} as const ),
    setToggleIsFetching: (isFetching: boolean) => ({type: 'GBA/BK/SET_TOGGLE_IS_FETCHING', payload: {isFetching}} as const)
}

export const searchBook = (currentPage: number,filter: FilterType) => {
    return async (dispatch) => {
        dispatch(actions.setToggleIsFetching(true))
        dispatch(actions.setCurrentPage(currentPage))
        dispatch(actions.setFilterAC(filter))
        let response = await booksAPI.getBooks(currentPage , filter.term, filter.categories, filter.sort)
        dispatch(actions.setToggleIsFetching(false))

        dispatch(actions.setBooks(response.items))
        dispatch(actions.setTotalUsersAc(response.totalItems))
    }
}

export const setSpecificBookThunk = (bookId: number) => {
    return async (dispacth) => {
        let response = await booksAPI.getSpecificBook(bookId)
        dispacth(actions.setSpecificBook(response.data))
    }
}

export type ActionsType = InferActionsTypes<typeof actions>
export type ThunkType = BaseThunkType<ActionsType>
