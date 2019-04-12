<template>
  <header class="header">
    <div class="header-line">
      <div class="header-logo">
        <span class="header-logo__title">{{ title }}</span>
        <button class="header-logo__btn icon_more"></button>
      </div>
      <div class="header-info">
        <div class="header-info__avatar avatar_circle" v-for="(user, index) in users" :key="index">
          <img :src="user.image" :alt="user.alt">
        </div>
        <button class="header-info__btn btn_grey">Share</button>
        <button class="header-info__btn btn_chat">
          <i class="icon_chat"></i>Chat
        </button>
      </div>
    </div>
    <appMenu></appMenu>
  </header>
</template>

<script>
import appMenu from "../components/appMenu.vue";
export default {
  data() {
    return {
      title: "Website Redesign",
      users: [					 
        { id: 1, image: "https://image.flaticon.com/icons/svg/145/145859.svg", alt: "man" },
        { id: 2, image: "https://image.flaticon.com/icons/svg/145/145866.svg", alt: "girl" },
        { id: 3, image: "https://image.flaticon.com/icons/svg/145/145867.svg", alt: "boy" }
      ]
    };
	},
  components: {
    appMenu
  }
};
</script>

<style scoped>
.header-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 30px 7px;
}
.header-logo {
  display: flex;
  align-items: center;
}
.header-logo__title {
  position: relative;
  display: inline-block;
  padding: 0 10px 0 55px;
  font-size: 2rem;
  line-height: 2.375rem;
}
.header-logo__title:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  background-image: url(../assets/img/header-logo.png);
  background-size: cover;
}
.header-logo__btn {
  width: 30px;
  height: 30px;
  background-color: #eaeaea;
  border-radius: 50%;
  border: none;
}
.header-info {
  display: flex;
  align-items: center;
}
.header-info__avatar {
  width: 30px;
  height: 30px;
  margin-left: 5px;
}
.avatar_circle {
  display: inline-block;
  overflow: hidden;
  border-radius: 50%;
}
.header-info__btn {
  padding: 6px 15px;
  margin-left: 15px;
  border-radius: 15px;
  font-size: 0.875rem;
  line-height: 1.0625rem;
}
</style>
