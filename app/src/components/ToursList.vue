<template>
  <div class="container">
    <div class="tours content">
      <div class="tours_content">
        <h1>Туры</h1>
        <div class="btns">
          <button class="filters">Фильтрация</button>
          <form action="" method="get" class="search_form">
            <input type="text" placeholder="Название" />
            <button type="submit">
              <img src="../assets/image/icon_search.png" />
            </button>
          </form>
        </div>
      </div>
      <div class="grid_tours" v-for="tour in tours" :key="tour.id">
        <div class="card_tour">
          <img alt="photo_tour" :src="tour.image" />
          <div class="title_card">
            <h4>tour.name</h4>
          </div>
          <div class="overlay_tours_card">
            <div class="card_about_tour">
              <h4>tour.name</h4>
              <div class="line"></div>
              <p class="region">tour.region</p>
            </div>
            <div class="about_tour">
              <p class="status">tour.status</p>
              <p class="date">tour.date</p>
              <p class="price">tour.price<span>руб.</span></p>
            </div>
            <div class="btn_tour">
              <router-link class="link_btn" to="/tour/id"
                >Узнать больше</router-link
              >
            </div>
          </div>
        </div>
        <div class="card_tour">
          <img alt="photo_tour" src="../assets/image/1guid.webp" />
          <div class="title_card">
            <h4>Просторы Шерегеша</h4>
          </div>
          <div class="overlay_tours_card">
            <div class="card_about_tour">
              <h4>Просторы Шерегеша</h4>
              <div class="line"></div>
              <p class="region">Кемеровская область</p>
            </div>
            <div class="about_tour">
              <p class="status">Завершённый</p>
              <p class="date">18-28 декабря</p>
              <p class="price">42 000 руб.</p>
            </div>
            <div class="btn_tour">
              <router-link class="link_btn" to="/tour/id"
                >Узнать больше</router-link
              >
            </div>
          </div>
        </div>
        <div class="card_tour">
          <img alt="photo_tour" src="../assets/image/1guid.webp" />
          <div class="title_card">
            <h4>Просторы Шерегеша</h4>
          </div>
          <div class="overlay_tours_card">
            <div class="card_about_tour">
              <h4>Просторы Шерегеша</h4>
              <div class="line"></div>
              <p class="region">Кемеровская область</p>
            </div>
            <div class="about_tour">
              <p class="status">Завершённый</p>
              <p class="date">18-28 декабря</p>
              <p class="price">42 000 руб.</p>
            </div>
            <div class="btn_tour">
              <router-link class="link_btn" to="/tour/id"
                >Узнать больше</router-link
              >
            </div>
          </div>
        </div>
        <div class="card_tour">
          <img alt="photo_tour" src="../assets/image/1guid.webp" />
          <div class="title_card">
            <h4>Просторы Шерегеша</h4>
          </div>
          <div class="overlay_tours_card">
            <div class="card_about_tour">
              <h4>Просторы Шерегеша</h4>
              <div class="line"></div>
              <p class="region">Кемеровская область</p>
            </div>
            <div class="about_tour">
              <p class="status">Завершённый</p>
              <p class="date">18-28 декабря</p>
              <p class="price">42 000 руб.</p>
            </div>
            <div class="btn_tour">
              <router-link class="link_btn" to="/tour/id"
                >Узнать больше</router-link
              >
            </div>
          </div>
        </div>
        <div class="card_tour">
          <img alt="photo_tour" src="../assets/image/1tour.jpg" />
          <div class="title_card">
            <h4>Просторы Шерегеша</h4>
          </div>
          <div class="overlay_tours_card">
            <div class="card_about_tour">
              <h4>Просторы Шерегеша</h4>
              <div class="line"></div>
              <p class="region">Кемеровская область</p>
            </div>
            <div class="about_tour">
              <p class="status">Завершённый</p>
              <p class="date">18-28 декабря</p>
              <p class="price">42 000 руб.</p>
            </div>
            <div class="btn_tour">
              <router-link class="link_btn" to="/tour/id"
                >Узнать больше</router-link
              >
            </div>
          </div>
        </div>
        <div class="card_tour">
          <img alt="photo_tour" src="../assets/image/1guid.webp" />
          <div class="title_card">
            <h4>Просторы Шерегеша</h4>
          </div>
          <div class="overlay_tours_card">
            <div class="card_about_tour">
              <h4>Просторы Шерегеша</h4>
              <div class="line"></div>
              <p class="region">Кемеровская область</p>
            </div>
            <div class="about_tour">
              <p class="status">Завершённый</p>
              <p class="date">18-28 декабря</p>
              <p class="price">42 000 руб.</p>
            </div>
            <div class="btn_tour">
              <router-link class="link_btn" to="/tour/id"
                >Узнать больше</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ToursList",
  data() {
    return {
      tours: [],
      showBlock: false,
    };
  },
  created() {
    this.getTours();
  },
  methods: {
    async getTours() {
      const url = "http://127.0.0.1:8000/api/tours";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (response.ok) {
        const result = await response.json();
        this.tours = result.data;
        console.log("Result: ", result);
      } else {
        this.error = "Ошибка";
        console.error(this.error);
      }
    },
  },
};
</script>
<style scoped></style>
