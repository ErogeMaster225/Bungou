<script setup>
const userStore = useUserStore()
</script>

<template>
    <div class="profile_container">
        <div class="header">
            <div class="banner">
                <div class="user_info">
                    <div class="avatar">
                        <img
                            src="https://a.ppy.sh/8471225?1671713737.gif"
                            alt="Guest"
                        >
                    </div>
                    <div class="username">
                        {{ `${userStore.userDetails.firstName} ${userStore.userDetails.lastName}` }}
                    </div>
                    <div class="email">
                        {{ `@${userStore.userDetails.email.slice(0, userStore.userDetails.email.indexOf('@'))}` }}
                    </div>
                    <div class="location">
                        <i class="fa-solid fa-location-dot" />
                        Danang, Vietnam
                    </div>
                </div>
            </div>
        </div>
        <div class="profile_tabs">
            <div class="tab">
                wishlist
            </div>
            <div class="tab">
                library
            </div>
            <div class="tab">
                about
            </div>
        </div>
        <slot />
    </div>
</template>

<style scoped>
.profile_container {
    width: 100%;
}
.header {
    height: 80vh;
    position: relative;
    background-image: url("https://cdna.artstation.com/p/assets/images/images/019/579/048/large/taehoon-kang-16.jpg");
    background-position: bottom;
    background-size: cover;
    backdrop-filter: blur(20px);
}
.header::before,
.header::after {
    content: "";
    position: absolute;
    top: 0;
    width: 10%;
    height: 100%;
    backdrop-filter: blur(10px);
}
.header::before {
    left: 0;
}
.header::after {
    right: 0;
}
.banner {
    height: 80vh;
    width: 80vw;
    position: relative;
    background-image: linear-gradient(180deg, rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url("https://cdna.artstation.com/p/assets/images/images/019/579/048/large/taehoon-kang-16.jpg");
    background-position: bottom;
    background-size: cover;
    left: 10vw;
    border-radius: 12px;
    display: flex;
    justify-content: center;
}
.profile {
    display: flex;
    flex-direction: row;
}
.profile_card {
    display: flex;
    background-color: #fff;
    height: 60vh;
    width: 40vw;
    justify-content: center;
    align-items: center;
}
.user_info {
    position: absolute;
    font-family: 'Fredoka';
    bottom: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #e1e1e1;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.4);
}
.user_info > div {
    padding: 3px 0
}
.username {
    font-weight: 700;
    font-size: 26pt;
    color: #eeeef1;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.4);
}
.avatar {
    height: 128px;
    width: 128px;
    margin-bottom: 10px;
}
.avatar img {
    border-radius: 12px;
    height: 100%;
    width: 100%;
}
.profile_tabs {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.tab {
    font-size: 16pt;
    font-family: 'Fredoka';
    font-weight: 600;
    margin: 20px 0;
    padding: 0px 24px;
    height: 50px;
    cursor: pointer;
}
</style>
