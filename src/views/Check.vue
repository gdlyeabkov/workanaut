<template>
    <div>
        <Header :currentPage="'Проверка пользователя по смс'" :auth="false" />
        <div>
            <Bar />
            <div class="checkBlock">
                <h3>
                    Введите код
                </h3>
                <span>
                    Мы отправили сообщение с кодом на телефон <span class="feedback">{{ feedback }}</span>, введите код из SMS
                </span>
                <input v-model="smsCode" class="form-control" placeholder="Введите код" type="number">
                <span v-if="!canResend" class="resendCode">
                    Отправить код повторно можно через {{ timeLeft }}
                </span>
                <span v-else @click="resendCode()" class="resendCode">
                    Отправить код повторно
                </span>
                <button :disabled="!canResend || smsCode.length <= 3" @click="agree()" class="btn btn-primary">
                    Подтвердить
                </button>
            </div>
        </div>    
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Bar from "@/components/Bar.vue"
import Footer from "@/components/Footer.vue"

export default {
    name: 'Check',
    data(){
        return {
            feedback: '',
            smsCode: '',
            timeLeft: 59,
            timeLeftHandler: null,
            canResend: false
        }
    },
    methods: {
        agree(){

        },
        resendCode(){
            this.canResend = false
            this.timeLeftHandler = setInterval(() => {
                console.log(`Уменьшаю на секунду`)
                if(this.timeLeft >= 1) {
                    this.timeLeft -= 1
                    if(this.timeLeft === 0) {
                        this.canResend = true
                        this.timeLeft = 59
                        clearInterval(this.timeLeftHandler)
                        this.timeLeftHandler = null
                    }
                }
            }, 200)
        }
    },
    mounted(){
        this.feedback = this.$route.query.feedback

        this.resendCode()

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


    .resendCode {
        color: rgb(0, 0, 255);
        cursor: pointer;
        text-decoration: underline;
    }

    .checkBlock {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        box-shadow: 0px 0px 5px rgb(75, 75, 75);
        margin: 25px auto;
        height: 325px;
        width: 475px;
        box-sizing: border-box;
        padding: 25px;
    }

    .checkBlock > button {
        margin-top: 35px;
        align-self: flex-start;
    }

    .feedback {
        font-weight: bolder;
    }

</style>