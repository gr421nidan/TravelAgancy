<template>
  <img src="../assets/image/auth_related_background_up.png" />
  <img src="../assets/image/auth_related_background_down.png" />
  <div class="login_block">
    <div class="form_login">
      <h1>Вход</h1>
      <form @submit.prevent="login">
        <div class="inputs_login">
          <input
            class="input_form"
            type="email"
            v-model="email"
            placeholder="Введите вашу эл.почту"
          />
          <input
            class="input_form"
            type="password"
            v-model="password"
            placeholder="Введите пароль"
          />
        </div>

        <div class="buttons">
          <button class="btn_auth_related" type="submit">Войти</button>
          <p>Впервые у нас?</p>
          <router-link to="/register">Зарегистрироваться</router-link>
          <router-link to="/reset-password">Сброс пароля</router-link>
          <router-link to="/">Вернуться назад</router-link>
        </div>
      </form>
    </div>
    <div class="show-error" v-if="showBlock">
      {{ error }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      showBlock: false,
    };
  },
  methods: {
    async login() {
      const url = "http://127.0.0.1:8000/api/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      });
      if (response.ok) {
        this.$router.push("/"); // Перенаправляем пользователя на главную страницу
      } else {
        this.error = "Неверные учетные данные";
        this.email = "";
        this.password = "";
        this.showBlock = true;
        setTimeout(() => {
          this.showBlock = false;
        }, 3000);
        console.error("Ошибка:", this.error);
      }
    },
  },
};
</script>
