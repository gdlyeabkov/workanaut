<template>
  <div>
    <Header :currentPage="'Вход'" :auth="false" />
    <div>
      <Bar />
    </div>
    <div>
      <div v-if="loginType.includes('employee')" class="searchWorkBlock">
        <h3>
          Поиск работы
        </h3>
        <div class="searchWorkBlockInput">
          <input v-if="loginFormToggler" v-model="feedback" type="phone" placeholder="Email или телефон" class="inputPad form-control">
          <div v-else class="inputContainer">
            <input v-model="feedback" type="text" placeholder="Email или телефон" class="inputPad form-control">
            <input v-model="password" type="password" placeholder="Пароль" class="inputPad form-control">
          </div>
          <img width="100px" src="https://hhcdn.ru/icms/10239278.jpg" alt="">
        </div>
        <div class="searchWorkBlockContinue">
          <span class="authErrors">
            {{ errors }}
          </span>
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
            <input v-model="feedback" type="phone" placeholder="Email или телефон" class="inputPad form-control">
            <input v-model="password" type="password" placeholder="Пароль" class="inputPad form-control">
          </div>
          <img width="75px" src="https://hhcdn.ru/icms/10239239.jpg" alt="">
        </div>
        <div class="searchWorkBlockContinue">
          <button v-if="loginFormToggler" @click="login('employer')" class="btn btn-primary">
            Войти в личный кабинет
          </button>
          <button v-else @click="login('employee')" class="btn btn-primary">
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
import Bar from "@/components/Bar.vue"
import Footer from "@/components/Footer.vue"

import * as jwt from 'jsonwebtoken'

const baseUrl = process.env.VUE_APP_BASE_URL

export default {
  name: 'Login',
  data(){
    return {
      feedback: '',
      password: '',
      loginFormToggler: true,
      loginType: 'employee',
      token: '',
      errors: ''
    }
  },
  mounted(){
    this.loginType = this.$route.query.logintype
  },
  methods: {
    login(){
      if(this.loginType.includes('employer')){
        fetch(`${baseUrl}/api/employers/check/?employeremail=${this.feedback}&employerpassword=${this.password}`, {
          mode: 'cors',
          method: 'GET'
        }).then(response => response.body).then(rb  => {
            const reader = rb.getReader()
            return new ReadableStream({
            start(controller) {
                function push() {
                reader.read().then( ({done, value}) => {
                    if (done) {
                    console.log('done', done);
                    controller.close();
                    return;
                    }
                    controller.enqueue(value);
                    console.log(done, value);
                    push();
                })
                }
                push();
            }
            });
        }).then(stream => {
            return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
        })
        .then(result => {
            console.log(`JSON.parse(result): ${JSON.parse(result)}`)
            if(JSON.parse(result).status.includes('OK')){
              this.token = jwt.sign({
                phone: this.feedback
              }, 'workanautsecret', { expiresIn: '30m' })
              localStorage.setItem('workanauttoken', this.token)
              this.$router.push({ name: 'AuthPage', query: { usertype: 'employer' } })
            } else if(JSON.parse(result).status.includes('Error')){
              alert('Ошикбка входа')  
            }
        })
      } else if(this.loginType.includes('employee')){
        fetch(`${baseUrl}/api/aspirants/check/?aspirantfeedback=${this.feedback}&aspirantpassword=${this.password}`, {
          mode: 'cors',
          method: 'GET'
        }).then(response => response.body).then(rb  => {
            const reader = rb.getReader()
            return new ReadableStream({
            start(controller) {
                function push() {
                reader.read().then( ({done, value}) => {
                    if (done) {
                    console.log('done', done);
                    controller.close();
                    return;
                    }
                    controller.enqueue(value);
                    console.log(done, value);
                    push();
                })
                }
                push();
            }
            });
        }).then(stream => {
            return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
        })
        .then(result => {
            console.log(`JSON.parse(result): ${JSON.parse(result)}`)
            if(JSON.parse(result).status.includes('OK')){
              this.token = jwt.sign({
                phone: this.feedback
              }, 'workanautsecret', { expiresIn: '30m' })
              localStorage.setItem('workanauttoken', this.token)
              this.$router.push({ name: 'AuthPage', query: { usertype: 'aspirant' } })
            } else if(JSON.parse(result).status.includes('Error')){
              this.errors = 'Неправильные данные для входа. Пожалуйста, попробуйте снова.'
            }
        })
      }
    }
  },
  components: {
    Header,
    Bar,
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
    height: 325px;
    margin: 15px auto;
    background-color: rgb(245, 245, 245);
    box-shadow: 5px 5px 15px rgb(200, 200, 200);
    box-sizing: border-box;
    border-radius: 15px;
    padding: 15px;
  }

  .searchWorkBlockInput {
    display: flex;
    align-items: center;
    justify-content: space-around;
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

  .authErrors {
    color: rgb(175, 0, 0) !important;
    text-decoration: none !important;
    font-weight: bolder;
    text-align: center;
  }

  .inputPad {
    margin: 5px 0px;
    width: 175px;
  }

</style>
