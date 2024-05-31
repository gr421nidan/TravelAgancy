<template>
  <div class="container">
    <section id="main" class="regions">
      <img
        class="regions_background"
        alt="regions_background"
        src="../assets/image/main_background_regions.png"
      />
      <div class="content">
        <div class="main_content">
          <div class="main_content_desc">
            <p>Туристическое агентство</p>
            <h1>
              Зимние курорты России:<br />ваш путь к<br />
              сказочным <br />приключениям!
            </h1>
            <p>
              Отправляйтесь в захватывающее путешествие по зимним курортам
              России с нашим туристическим агентством! Наполните свой отдых
              незабываемыми впечатлениями - бронируйте свой тур сейчас!
            </p>
          </div>
          <div class="main_content_regions"></div>
        </div>
        <div class="main_elements">
          <div class="arrows_row">
            <img alt="arrow_left" src="../assets/image/arrow_main.png" />
            <img
              class="arrow_main_right"
              alt="arrow_right"
              src="../assets/image/arrow_main.png"
            />
          </div>
          <div class="line_element"></div>
        </div>
      </div>
    </section>
    <section class="guids content">
      <h1>Наши экскурсоводы</h1>
      <div class="grid_guids" v-for="guid in guids" :key="guid.id">
        <div class="card">
          <img alt="photo_guid" src="../assets/image/1guid.webp" />
          <div class="overlay">
            <div class="card_about">
              <h3>guid.name</h3>
              <div class="line"></div>
              <p>guid.description</p>
              <p>guid.region</p>
            </div>
          </div>
        </div>
        <div class="card">
          <img alt="photo_guid" src="../assets/image/1guid.webp" />
          <div class="overlay">
            <div class="card_about">
              <h3>Денис Азаревич</h3>
              <div class="line"></div>
              <p>
                Лучший в своём деле! Расскажет о самых красивых местах курорта.
              </p>
              <p>Кемеровская область</p>
            </div>
          </div>
        </div>
        <div class="card">
          <img alt="photo_guid" src="../assets/image/1guid.webp" />
          <div class="overlay">
            <div class="card_about">
              <h3>Денис Азаревич</h3>
              <div class="line"></div>
              <p>
                Лучший в своём деле! Расскажет о самых красивых местах курорта.
              </p>
              <p>Кемеровская область</p>
            </div>
          </div>
        </div>
        <div class="card">
          <img alt="photo_guid" src="../assets/image/1guid.webp" />
          <div class="overlay">
            <div class="card_about">
              <h3>Денис Азаревич</h3>
              <div class="line"></div>
              <p>
                Лучший в своём деле! Расскажет о самых красивых местах курорта.
              </p>
              <p>Кемеровская область</p>
            </div>
          </div>
        </div>
        <div class="card">
          <img alt="photo_guid" src="../assets/image/1guid.webp" />
          <div class="overlay">
            <div class="card_about">
              <h3>Денис Азаревич</h3>
              <div class="line"></div>
              <p>
                Лучший в своём деле! Расскажет о самых красивых местах курорта.
              </p>
              <p>Кемеровская область</p>
            </div>
          </div>
        </div>
        <div class="card">
          <img alt="photo_guid" src="../assets/image/1guid.webp" />
          <div class="overlay">
            <div class="card_about">
              <h3>Денис Азаревич</h3>
              <div class="line"></div>
              <p>
                Лучший в своём деле! Расскажет о самых красивых местах курорта.
              </p>
              <p>Кемеровская область</p>
            </div>
          </div>
        </div>
        <div class="card">
          <img alt="photo_guid" src="../assets/image/1guid.webp" />
          <div class="overlay">
            <div class="card_about">
              <h3>Денис Азаревич</h3>
              <div class="line"></div>
              <p>
                Лучший в своём деле! Расскажет о самых красивых местах курорта.
              </p>
              <p>Кемеровская область</p>
            </div>
          </div>
        </div>
        <div class="card">
          <img alt="photo_guid" src="../assets/image/1guid.webp" />
          <div class="overlay">
            <div class="card_about">
              <h3>Денис Азаревич</h3>
              <div class="line"></div>
              <p>
                Лучший в своём деле! Расскажет о самых красивых местах курорта.
              </p>
              <p>Кемеровская область</p>
            </div>
          </div>
        </div>
      </div>
      <div class="line_element"></div>
    </section>
    <section id="about" class="about content">
      <div class="about_block">
        <h1>О нас</h1>
        <p>
          “Снежный мир” - команда профессионалов, с горячим сердцем и неугасимым
          энтузиазмом, которые стремятся создать для вас незабываемые зимние
          впечатления. В нашем агентстве мы специализируемся на организации
          туров по зимним курортам России, где каждый сможет найти что-то по
          своему вкусу и насладиться атмосферой сказочной зимы.
        </p>
      </div>
      <div class="why_us_block">
        <img
          class="background_about"
          src="../assets/image/background_about.png"
        />
        <div class="why_us_block_content">
          <h3>Почему выбирают нас:</h3>
          <div class="row_blocks_why_us">
            <div class="block_why_us">
              <p>Сотрудничество</p>
              <div class="line_why_us_block"></div>
              <p>
                Мы сотрудничаем только с проверенными партнерами и гарантируем
                качество услуг наших партнеров.
              </p>
            </div>
            <div class="block_why_us">
              <p>Профессионализм</p>
              <div class="line_why_us_block"></div>
              <p>
                Мы - команда профессионалов, которые знают и любят свою работу.
              </p>
            </div>
            <div class="block_why_us">
              <p>Цель</p>
              <div class="line_why_us_block"></div>
              <p>
                Cделать ваш отдых максимально комфортным, безопасным и запомина-
                ющимся.
              </p>
            </div>
            <div class="block_why_us">
              <p>Поддержка</p>
              <div class="line_why_us_block"></div>
              <p>
                Мы всегда готовы ответить на ваши вопросы и помочь в решении
                любых вопросов.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="line_element"></div>
    </section>
    <section id="contacts" class="contacts content">
      <h1>Контакты</h1>
      <div class="columns_contacts">
        <div class="column_contacts">
          <p>Связаться с нами:</p>
          <p>
            Бесплатный звонок:<br />
            Томск: +7 924 701-08-10<br />
            email: tour.montoj@tsk.ru
          </p>
        </div>
        <div class="column_contacts">
          <p>Наш адрес:</p>
          <p>
            ул. Гагарина 7,<br />
            Томск<br />
            2 этаж, 5 отдел
          </p>
        </div>
        <div class="column_contacts">
          <p>Режим работы:</p>
          <p>
            пн-сб: с 9:00<br />
            до 20:00<br />
            вс выходной
          </p>
        </div>
      </div>
      <InteractiveMap />
    </section>
  </div>
</template>

<script>
import InteractiveMap from "@/components/InteractiveMap.vue";
export default {
  name: "HomeView",
  components: {
    InteractiveMap,
  },
  data() {
    return {
      guids: [],
      showBlock: false,
    };
  },
  created() {
    this.getGuids();
  },
  methods: {
    async getGuids() {
      const url = "http://127.0.0.1:8000/api/guide";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (response.ok) {
        const result = await response.json();
        this.guids = result.data;
        console.log("Result: ", result);
      } else {
        this.error = "Ошибка";
        console.error(this.error);
      }
    },
  },
};
</script>
