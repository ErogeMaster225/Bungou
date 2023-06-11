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
                phone: null,
                birth: null,
                address: null,
                avatar: null,
                isBlock: false,
            },
            library: [],
        }
    },
    actions: () => {},
})
if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
