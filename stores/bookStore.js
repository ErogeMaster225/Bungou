export const useBookStore = defineStore('book', {
    state: () => {
        return {
            bookDetails: {
                title: '',
                price: 0,
                rating: 0,
                description: '',
                categories: [],
                publisher: '',
                releaseDate: '',
            },
            bookList: [],
            library: [],
        }
    },
    actions: () => {},
})
if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useBookStore, import.meta.hot))
