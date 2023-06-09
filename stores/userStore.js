export const useUserStore = defineStore('user', {
    state: () => {
        return {
            token: '',
            userDetails: {
                id: 0,
                firstName: 'Guest',
                lastName: '',
                email: '',
                resetToken: null,
                resetTokenExpiry: null,
                role: '',
            },
            library: [],
        }
    },
    actions: () => {},
})
if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
