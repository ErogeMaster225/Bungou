<script setup>
import ky from 'ky'
const userStore = useUserStore()
const api = ky.create({
    prefixUrl: 'https://bungou-backend-production.up.railway.app/api/v1/user',
})
const register = () => {
    const firstName = document.getElementById('firstNameField').value
    const lastName = document.getElementById('lastNameField').value
    const email = document.getElementById('emailField').value
    const password = document.getElementById('passwordField').value
    registerRequest(firstName, lastName, email, password)
}
async function registerRequest(firstName, lastName, email, password) {
    const response = await api.post('register', { json: { firstName, lastName, email, password } }).json()
    if (!response.err) {
        userStore.token = response.access_token
        userInfoRequest(userStore.token)
    }
}
async function userInfoRequest(token) {
    const response = await api.get('info', { headers: { Authorization: token } }).json()
    userStore.userDetails = response
    navigateTo('/')
}
</script>

<template>
    <div class="loginPanel">
        <div class="loginTitle">
            Hi! Welcome to Bungou!
        </div>
        <form>
            <div class="name">
                <div class="inputBox">
                    <input
                        id="firstNameField"
                        type="text"
                        name="firstName"
                        required
                        placeholder="First Name"
                    >
                </div>
                <div class="inputBox">
                    <input
                        id="lastNameField"
                        type="text"
                        name="lastName"
                        required
                        placeholder="Last Name"
                    >
                </div>
            </div>
            <div class="inputBox">
                <input
                    id="emailField"
                    type="text"
                    name="email"
                    required
                    placeholder="Email"
                >
            </div>
            <div class="inputBox">
                <input
                    id="passwordField"
                    type="password"
                    name="password"
                    required
                    placeholder="Password"
                >
            </div>
            <div class="inputBox">
                <button id="signInButton" type="submit" name="submit" @click.prevent="register()">
                    Sign up with Email
                </button>
            </div>
            <h2><span>or</span></h2>
            <div class="inputBox">
                <button id="signInGoogleButton" type="submit" name="submit">
                    <img
                        src="/googleIcon.svg"
                        alt="Breaking Borders Logo"
                        height="36"
                        width="36"
                    >
                    Sign up with Google
                </button>
            </div>
        </form>
        <div class="signin">
            Already have an account? <NuxtLink to="/auth/signin" class="signin-link">
                Sign in!
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
@import url(assets/authForm.css);
#signInButton {
    color: #fff;
    font-family: 'Inter';
    font-weight: 700;
    background-color: #3d45ee;
    border: none;
    min-width: 20px;
    width: 100%;
    height: 64px;
    flex: 1 1 auto;
    box-sizing: border-box;
    padding: 15px;
    border-radius: 10px;
    margin: 10px 0px;
    font-size: 11pt;
    margin-top: 35px;
}
#signInGoogleButton {
    color: #000;
    font-family: 'Inter';
    font-weight: 700;
    background-color: transparent;
    border: none;
    min-width: 20px;
    width: 100%;
    height: 64px;
    flex: 1 1 auto;
    box-sizing: border-box;
    padding: 15px;
    box-shadow: 3.6px 7.2px 21.6px rgba(149, 157, 165, 0.4);
    border-radius: 10px;
    margin: 10px 0px;
    font-size: 11pt;
}
form {
    width: 55%;
}
h2 {
    font-family: 'Inter';
    font-weight: 700;
    width: 100%;
    text-align: center;
    border-bottom: 2px solid #000;
    line-height: 0.1em;
    margin: 30px 0;
}

h2 span {
    background: #fff;
    padding: 0 10px;
}
.signin {
    margin-top: 30px;
    font-family: 'Inter';
    font-weight: 400;
    color: #000;
}
.signin-link {
    font-family: 'Inter';
    font-weight: 700;
    cursor: pointer;
    color: #000;
    text-decoration: none;

}
.forgotPass {
    font-family: 'Inter';
    font-size: 11pt;
    font-weight: 400;
    float: right;
    margin-top: 0;
    color: #bbb;
}
.name {
    display: flex;
    flex-direction: row;
    gap: 30px;
}
</style>
