<template>
  <div>
    <Header />
    <div>
      <div class="bar">
        <div class="barItem">
          <div class="logo">
            hh
          </div>
          <span class="help">
            Помощь
          </span>
        </div>
        <div class="barItem">
          <span>
            Поиск
          </span>
          <button v-if="loginType.includes('employee')" class="withoutBackgroundBtn createResumeBtn">
            Создать резюме
          </button>
          <button v-else-if="loginType.includes('employer')" class="withoutBackgroundBtn createResumeBtn">
            Разместить вакансию
          </button>
          <button class="withoutBackgroundBtn loginBtn">
            Войти
          </button>
        </div>
      </div>
    </div>
    <div>
      <div v-if="loginType.includes('employee')" class="searchWorkBlock">
        <h3>
          Поиск работы
        </h3>
        <div class="searchWorkBlockInput">
          <input v-if="loginFormToggler" v-model="feedback" type="phone" placeholder="Email или телефон" class="form-control">
          <div v-else class="inputContainer">
            <input v-model="feedback" type="text" placeholder="Email или телефон" class="form-control">
            <input v-model="password" type="password" placeholder="Пароль" class="form-control">
          </div>
          <img width="75px" src="https://hhcdn.ru/icms/10239278.jpg" alt="">
        </div>
        <div class="searchWorkBlockContinue">
          <button v-if="loginFormToggler" @click="$router.push({ name: 'Check', query: { feedback: feedback } })" class="btn btn-primary">
            Продолжить
          </button>
          <button v-else @click="login()" class="btn btn-primary">
            Войти
          </button>
          <span v-if="loginFormToggler" class="loginFormToggler" @click="loginFormToggler = !loginFormToggler">
            Войти с паролём
          </span>
          <span v-else class="loginFormToggler" @click="loginFormToggler = !loginFormToggler">
            Войти по коду
          </span>
        </div>
        <div class="socialMediaContainer">
          <div class="socialMediaItem">
              <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/vk-blue.svg" width="35px" alt="">
              <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/ok-orange.svg" width="35px" alt="">
              <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/facebook-blue.svg" width="35px" alt="">
              <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/telegram_hover.svg" width="35px" alt="">
          </div>
        </div>
      </div>
      <div v-else-if="loginType.includes('employer')" class="searchWorkBlock">
        <h3>
          Поиск сотрудников
        </h3>
        <div class="searchWorkBlockInput">
          <div class="inputContainer">
            <input v-model="feedback" type="phone" placeholder="Email или телефон" class="form-control">
            <input v-model="feedback" type="phone" placeholder="Пароль" class="form-control">
          </div>
          <img width="75px" src="https://hhcdn.ru/icms/10239239.jpg" alt="">
        </div>
        <div class="searchWorkBlockContinue">
          <button v-if="loginFormToggler" @click="$router.push({ name: 'Check', query: { feedback: feedback } })" class="btn btn-primary">
            Продолжить
          </button>
          <button v-else @click="login()" class="btn btn-primary">
            Войти
          </button>
          <span class="loginFormToggler" @click="$router.push({ name: 'EmployerSetPassword' })">
            Получить пароль
          </span>
        </div>
        <div class="socialMediaContainer">
          <div class="socialMediaItem">
              <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/vk-blue.svg" width="35px" alt="">
              <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/ok-orange.svg" width="35px" alt="">
              <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/facebook-blue.svg" width="35px" alt="">
              <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/telegram_hover.svg" width="35px" alt="">
          </div>
        </div>
      </div>
      <div v-if="loginType.includes('employee')" class="searchWorkBlock">
        <h3>
          Поиск сотрудников
        </h3>
        <div class="searchWorkBlockInput">
          <span>
            Размещение вакансий и доступ к базе резюме
          </span>
          <img width="75px" src="https://hhcdn.ru/icms/10239239.jpg" alt="">
        </div>
        <div class="searchWorkBlockContinue" v-if="loginType.includes('employee')">
          <button @click="loginType = 'employer'" class="btn btn-primary createResumeBtn withoutBackgroundBtn">
            Я ищу сотрудников
          </button>
        </div>
        <div class="socialMediaContainer">
          <div class="socialMediaItem">
              <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/vk-blue.svg" width="35px" alt="">
              <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/ok-orange.svg" width="35px" alt="">
              <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/facebook-blue.svg" width="35px" alt="">
              <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/telegram_hover.svg" width="35px" alt="">
          </div>
        </div>
      </div>
      <div v-else-if="loginType.includes('employer')" class="searchWorkBlock">
        <h3>
          Поиск работы
        </h3>
        <div class="searchWorkBlockInput">
          <span>
            Публикация резюме и поиск по вакансиям
          </span>
          <img width="75px" src="https://hhcdn.ru/icms/10239278.jpg" alt="">
        </div>
        <div class="searchWorkBlockContinue" v-if="loginType.includes('employer')">
          <button  @click="loginType = 'employee'" class="btn btn-primary createResumeBtn withoutBackgroundBtn">
            Я ищу работу
          </button>
        </div>
        <div class="socialMediaContainer">
          <div class="socialMediaItem">
              <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/vk-blue.svg" width="35px" alt="">
              <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/ok-orange.svg" width="35px" alt="">
              <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/facebook-blue.svg" width="35px" alt="">
              <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/telegram_hover.svg" width="35px" alt="">
          </div>
        </div>
      </div>
      <div class="subData">
        <p>
          Нажимая «продолжить», вы подтверждаете, что ознакомлены, полностью согласны и принимаете условия <span class="agreement" @click="$router.push({ name: 'Home' })">«Соглашения об оказании услуг по содействию в трудоустройстве (оферта)»</span>
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: 'Login',
  data(){
    return {
      feedback: '',
      password: '',
      loginFormToggler: true,
      loginType: 'employee'
    }
  },
  mounted(){
    this.loginType = this.$route.query.logintype
  },
  methods: {
    login(){
      this.$router.push({ name: 'PersonalArea' })
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>

  .bar {
    height: 75px;
    background-color: rgb(0, 0, 0);
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .barItem {
    height: 75px;
    background-color: rgb(0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .barItem > * {
    margin: 10px;
  }

  .help {
    color: rgb(255, 255, 255);
    text-decoration: underline;
    text-decoration-style: dotted;
  }

  .logo {
    color: rgb(255, 255, 255);
    font-weight: bolder;
    font-size: 24px;
    display: flex; 
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background-color: rgb(200, 0, 0);
    width: 45px;
    height: 45px
  }

  .withoutBackgroundBtn {
    background-color: transparent;
    border-radius: 25px;
    width: 175px;
  }

  .createResumeBtn {
    color: rgb(0, 125, 0);
    border: 1px solid rgb(0, 125, 0);
  }

  .loginBtn {
    color: rgb(235, 235, 235);
    border: 1px solid rgb(235, 235, 235);
  }

  .searchWorkBlock {
    margin: 175px 0px;
    width: 35%;
    height: 225px;
    margin: 15px auto;
    background-color: rgb(245, 245, 245);
    box-shadow: 5px 5px 10px rgb(25, 25, 25);
  }

  .searchWorkBlockInput {
    display: flex;
    align-items: center;
  }

  .searchWorkBlockInput > * {
    margin: 5px;
  }

  .searchWorkBlockInput > input {
    height: 35px;
  }

  .searchWorkBlockContinue {
    display: flex;
    justify-content: space-around;
  }

  .searchWorkBlockContinue > span {
    text-decoration: underline;
    text-decoration-style: dotted;
    color: rgb(0, 0, 255);
  }

  .socialMediaContainer {
    margin: 25px 0px;
    width: 50%;
    display: flex;
    justify-content: space-around;
  }

  .socialMediaItem {
    display: flex;
    justify-content: space-around;
  }

  .subData {
    margin: auto;
    width: 50%;
  }

  .loginFormToggler {
    cursor: pointer;
  }

  .inputContainer {
    display: flex;
    flex-direction: column;
  }

  .agreement {
    color: rgb(0, 0, 255);
    cursor: pointer;
  }

</style>
