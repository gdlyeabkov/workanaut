<template>
  <div>
    <Header :currentPage="'Репетиция собеседования'" :auth="false" />
    <div>
      <Bar />
      <div>
        <h3>
          Регистрация соискателя
        </h3>
        <div class="emailData">
          <p>
            Email или телефон
          </p>
          <div class="emailDataInput">
            <input v-model="feedback" type="text" class="w-100 form-control">
            <button @click="createAspirant()" class="btn btn-primary">
              Зарегестрироваться
            </button>
          </div>
        </div>
        <div class="loginData">
          <div class="loginDataAside">
            <p>
              Уже зарегестрированы
            </p>
            <p @click="$router.push({ name: 'Login' })" class="login">
              Войти
            </p>
          </div>
          <div class="loginDataInput">
            <span>
              Быстрое создание создание резюме через соцсеть
            </span>
            <div class="socialMediaContainer">
              <div class="socialMediaItem">
                  <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/vk-blue.svg" width="35px" alt="">
                  <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/ok-orange.svg" width="35px" alt="">
                  <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/facebook-blue.svg" width="35px" alt="">
                  <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/telegram_hover.svg" width="35px" alt="">
              </div>
            </div>
            <span>
              Нажимая «Зарегистрироваться», вы подтверждаете, что ознакомлены, полностью согласны и принимаете условия <span class="agreement">«Соглашения об оказании услуг по содействию в трудоустройстве (оферта)»</span>
            </span>
          </div>
        </div>
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
  name: 'CreateResume',
    data(){
    return {
      feedback: '',
      userType: 'aspirant',
      token: window.localStorage.getItem('workanauttoken')
    }
  },
  mounted(){
    this.userType = this.$route.query.usertype
  },
  methods: {
    createAspirant() {
      fetch(`${baseUrl}/api/aspirants/create/?aspirantfeedback=${this.feedback}`, {
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
            this.$router.push({ name: 'Settings', query: { usertype: 'aspirant' } })
          } else if(JSON.parse(result).status.includes('Error')){
            alert('Такой соискатель уже зарегестрирован')
          }
        })
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
    cursor: pointer;
    color: rgb(235, 235, 235);
    border: 1px solid rgb(235, 235, 235);
  }

  .emailData {
    display: flex;
    margin-top: 75px;
  }

  .emailDataInput {
    width: 575px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    margin-left: 25px;
  }

  .emailDataInput > button {
    margin-top: 25px;
    align-self: flex-start;
  }

  .loginData {
    display: flex;
    justify-content: space-between;
    width: 825px;
    margin: 75px 0px;
  }

  .loginDataAside {
    flex-direction: column;
  }

  .loginDataInput {
    width: 575px;
    display: flex;
    flex-direction: column;
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

  .agreement {
    color: rgb(0, 0, 255);
  }

  .login {
    color: rgb(0, 0, 255);
  }

</style>