<script setup>
import ky from 'ky'
const userStore = useUserStore()
const api = ky.create({
    prefixUrl: 'https://rotten-milk-production.up.railway.app/api/v1/user',
})
const login = () => {
    const email = document.getElementById('emailField').value
    const password = document.getElementById('passwordField').value
    loginRequest(email, password)
}
async function loginRequest(email, password) {
    const response = await api.post('login', { json: { email, password } }).json()
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
            Welcome Back!
        </div>
        <form>
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
            <NuxtLink to="/auth/reset" class="forgotPass">
                Forgot password?
            </NuxtLink>
            <div class="inputBox">
                <button id="signInButton" type="submit" name="submit" @click.prevent="login()">
                    Sign in with Email
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
                    Sign in with Google
                </button>
            </div>
        </form>
        <div class="signup">
            Don't have an account? <NuxtLink to="/auth/signup" class="signup-link">
                Sign up!
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
.signup {
    margin-top: 50px;
    font-family: 'Inter';
    font-weight: 400;
    color: #000;
}
.signup-link {
    font-family: 'Inter';
    font-weight: 700;
    cursor: pointer;
    color: #000;
    text-decoration: none;
}
.forgotPass {
    all: unset;
    float: right;
    font-family: 'Inter';
    font-size: 11pt;
    font-weight: 400;
    margin-top: 0;
    color: #bbb;
    margin-bottom: 30px;
    cursor: pointer;
}
</style>
