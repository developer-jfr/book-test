import { AppStateType } from "../redux-store";

export const setBooks = (state: AppStateType) => {
    return state.books.books
}

export const setTotalUsersCount = (state: AppStateType) => {
    return state.books.totalUsers
}

export const selectCurrentPage = (state: AppStateType) => {
    return state.books.currenPage
}

export const selectedBookSelector = (state: AppStateType) => {
    return state.books.book
}

export const selectFilter = (state: AppStateType) => {
    return state.books.filter
}

export const selectPageSize = (state:AppStateType) => {
    return state.books.pageSize
}

export const toggleIsFetching = (state :AppStateType) => {
    return state.books.isFetching
}