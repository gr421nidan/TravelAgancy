<template>
  <div id="app" v-if="isAuthRelatedPage">
    <router-view></router-view>
  </div>
  <div class="container" v-if="!isAuthRelatedPage">
    <nav class="navigation content">
      <span class="nav" v-if="!isAuthenticated">
        <img
          class="logo_nav"
          alt="logo"
          src="../src/assets/image/logo_nav.png"
        />
        <div class="nav_link">
          <router-link to="/">Главная</router-link>
          <router-link to="/tours">Туры</router-link>
          <a href="#" @click.prevent="scrollToSection('about')">О нас</a>
          <a href="#" @click.prevent="scrollToSection('contacts')">Контакты</a>
          <router-link to="/register">Регистрация</router-link>
          <router-link to="/login">Вход</router-link>
        </div>
      </span>
      <span class="nav" v-if="isAuthenticated">
        <img
          class="logo_nav"
          alt="logo"
          src="../src/assets/image/logo_nav.png"
        />
        <router-link to="/">Главная</router-link>
        <router-link to="/cabinet">Личный кабинет</router-link>
        <router-link to="/tours">Туры</router-link>
        <a href="#" @click.prevent="scrollToSection('about')">О нас</a>
        <a href="#" @click.prevent="scrollToSection('contacts')">Контакты</a>
        <router-link to="/" @click="logout">Выход</router-link>
      </span>
    </nav>
    <div id="app">
      <router-view></router-view>
    </div>
    <span v-if="isAuthenticated">
      <nav class="nav_admin">
        <span v-if="isAdmin">
          <div>
            <img
              class="logo_nav_admin"
              alt="logo"
              src="../src/assets/image/logo_nav.png"
            />
            <span class="logo_text">Снежный мир</span>
          </div>
          <router-link to="/cabinet">Личный кабинет</router-link>
          <router-link to="/guids">Экскурсоводы</router-link>
          <router-link to="/regions">Регионы</router-link>
          <router-link to="/applications">Заявки</router-link>
          <router-link to="/hotels">Отели</router-link>
          <router-link to="/tours">Туры</router-link>
        </span>
      </nav>
    </span>
  </div>
  <footer class="footer_container" v-if="!isAuthRelatedPage">
    <img
      class="footer_background"
      alt="footer_background"
      src="../src/assets/image/footer.png"
    />
    <div class="footer_overlay">
      <div class="footer">
        <img
          class="logo_footer"
          alt="logo_footer"
          src="../src/assets/image/logo_footer.png"
        />
        <span class="footer_nav" v-if="!isAuthenticated">
          <router-link to="/">Главная</router-link>
          <router-link to="/tours">Туры</router-link>
          <a href="#" @click.prevent="scrollToSection('about')">О нас</a>
          <a href="#" @click.prevent="scrollToSection('contacts')">Контакты</a>
        </span>
        <span class="footer_nav" v-if="isAuthenticated">
          <router-link to="/">Главная</router-link>
          <router-link to="/cabinet">Личный кабинет</router-link>
          <router-link to="/tours">Туры</router-link>
          <a href="#" @click.prevent="scrollToSection('about')">О нас</a>
          <a href="#" @click.prevent="scrollToSection('contacts')">Контакты</a>
        </span>
        <div class="social_media_icons">
          <a href="#"><img src="../src/assets/image/telegram_icon.png" /></a>
          <a href="#"><img src="../src/assets/image/inst_icon.png" /></a>
          <a href="#"><img src="../src/assets/image/vk_icon.png" /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style></style>
<script>
export default {
  data() {
    return {
      isAuthenticated: false,
      isAdmin: false,
      isAuthRelatedPage: false,
    };
  },
  watch: {
    $route(to) {
      this.checkAuthRelatedPage(to.path);
    },
  },
  methods: {
    checkAuthRelatedPage(path) {
      this.isAuthRelatedPage =
        path === "/login" ||
        path === "/register" ||
        path === "/password-recovery" ||
        path === "/reset-password" ||
        path === "/password-reset";
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>
