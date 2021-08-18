import axios from 'axios'


const key = 'AIzaSyBbIZB2CefSddJmzsn5F_srC8Zb-MaJF50'
const instance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/',

})


export const booksAPI = {
    getBooks: (currentPage: number = 1,term: string = 'o', categories: string = 'all', sort: string = 'newest') => {
        return instance.get(`volumes?id=buc0AAAAMAAJ&q=${term} + ${categories}&maxResults=30&startIndex=${currentPage}&orderBy=${sort}&key=${key}`).then(response => response.data)
    },
    getSpecificBook: (bookId: number) => {
        return instance.get(`volumes/${bookId}`)
    }
}