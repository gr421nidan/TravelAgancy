<template>
  <div>
    <div class="registrations_block">
      <div class="form_registrations">
        <h1>Регистрация</h1>
        <form @submit.prevent="register" class="register">
          <div class="inputs_register">
            <input
              class="input_form"
              type="text"
              v-model="formData.surname"
              placeholder="Введите вашу фамилию"
            />
            <input
              class="input_form"
              type="text"
              v-model="formData.name"
              placeholder="Введите ваше имя"
            />
            <input
              class="input_form"
              type="text"
              v-model="formData.patronymic"
              placeholder="Введите вашe отчество"
            />
            <input
              class="input_form"
              type="email"
              v-model="formData.email"
              placeholder="Введите вашу почту"
            />
            <input
              class="input_form"
              type="password"
              v-model="formData.password"
              placeholder="Введите пароль"
            />
          </div>

          <div class="confirmed_btn">
            <input type="checkbox" />
            <span>
              Я соглашаюсь на передачу персональных данных согласно политике
              конфиденциальности и пользовательскому соглашению</span
            >
          </div>
          <div class="buttons_registrations">
            <button class="btn_register" type="submit">
              Зарегистрироваться
            </button>
            <p>Уже зарегистрированы?</p>
            <router-link to="/login">Вход</router-link>
            <router-link to="/">Вернуться назад</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      formData: {
        surname: "",
        name: "",
        patronymic: "",
        email: "",
        password: "",
      },
      error: "",
      showBlock: "",
    };
  },
  methods: {
    async register() {
      axios
        .post(`http://127.0.0.1:8000/api/register`)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

      const user = {
        surname: this.formData.surname,
        name: this.formData.name,
        patronymic: this.formData.patronymic,
        email: this.formData.email,
        password: this.formData.password,
      };

      localStorage.setItem("user", JSON.stringify(user));

      console.log("Зарегистрирован");
    },
  },
};
</script>
<style></style>
