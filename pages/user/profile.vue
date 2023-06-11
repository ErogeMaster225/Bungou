<template>
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
        <div class="inputBox">
            <input
                id="emailField"
                type="text"
                name="email"
                required
                placeholder="First Name"
                value=""
            >
        </div>
        <div class="inputBox">
            <input
                id="passwordField"
                type="text"
                name="password"
                required
                placeholder="Last Name"
            >
        </div>
        <div class="inputBox">
            <input
                id="passwordField"
                type="text"
                name="password"
                required
                placeholder="Location"
            >
        </div>
        <div class="inputBox">
            <input
                id="passwordField"
                type="text"
                name="password"
                required
                placeholder="Description"
            >
        </div>
    </form>
</template>

<style scoped>
form {
    height: 100%;
    width: 60vw;
    margin-left: 20vw;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
}
input {
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
    margin: 15px 0;
    font-size: 11pt;
}
input::placeholder {
    color: #000;
}
button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
img {
    margin-right: 10px;
}
</style>
