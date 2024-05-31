<template>
  <div class="password_reset_block">
    <div class="password_reset">
      <h1>Сброс пароля</h1>
      <form @submit.prevent="passwordReset">
        <input
          class="input_form"
          type="email"
          v-model="email"
          placeholder="Введите вашу эл.почту"
        />
        <div class="buttons">
          <button class="btn_auth_related" type="submit">Отправить</button>
          <router-link to="/login">Назад</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      error: "",
      showBlock: false,
    };
  },
  methods: {
    async passwordReset() {
      const url = "http://127.0.0.1:8000/api/reset-password";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: this.email,
        }),
      });
      if (response.ok) {
        this.$router.push("/password-recovery");
      } else {
        this.error = "Неверные учетные данные";
        this.email = "";
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
