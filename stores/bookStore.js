export const useBookStore = defineStore('book', {
    state: () => {
        return {
            bookDetails: {
                title: '',
                image: '',
                releaseDate: 0,
                price: 0,
                author: '',
                rating: 0,
                publisher: '',
                description: '',
                length: 0,
                categories: [],
            },
            bookList: [],
            library: [],
        }
    },
    actions: () => {},
})
if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useBookStore, import.meta.hot))
