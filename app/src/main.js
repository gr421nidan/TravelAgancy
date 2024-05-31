import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import YandexMap from "vue-yandex-maps";
import "/src/assets/style/authRelatedPage.css";
import "/src/assets/style/main.css";
import "/src/assets/style/home.css";
import "/src/assets/style/tourList.css";
import "/src/assets/style/aboutTour.css";
import "/src/assets/style/userFeedback.css";
import "/src/assets/style/userCabinet.css";

const yandexMapSettings = {
  apiKey: "daa7dc3a-f51b-4d40-80c2-172a52375db5",
};

createApp(App)
  .use(store)
  .use(router)
  .use(YandexMap, yandexMapSettings)
  .mount("#app");
