<template>
    <div>
        <Header />
        <div>
            <div class="bar">
                <div class="barItem">
                    <div class="logo">
                        hh
                    </div>
                    <span @click="$router.push({ name: 'PersonalArea', query: { usertype: userType } })" class="help">
                        Мои резюме
                    </span>
                    <span @click="$router.push({ name: 'Responses', query: { usertype: userType } })" class="help">
                        Отклики
                    </span>
                    <span class="help">
                        Помощь
                    </span>
                </div>
                <div class="barItem">
                    <span class="areaShortcuts material-icons-outlined">
                        search
                    </span>
                    <span class="areaShortcutsLabel">
                        Поиск
                    </span>
                    <button class="withoutBackgroundBtn createResumeBtn">
                        Создать резюме
                    </button>
                    <span class="areaShortcuts material-icons-outlined">
                        star_outline
                    </span>
                    <span class="areaShortcuts material-icons-outlined">
                        mode_comment
                    </span>
                    <span class="areaShortcuts material-icons-outlined">
                        notifications
                    </span>
                    <span class="areaShortcuts material-icons-outlined">
                        person_outline
                    </span>
                </div>
            </div>
            <h3>
                Отказ
            </h3>
            <span class="vacancyName">
                Backend-Разработчик на проект (умные дома), удаленка, Kotlin в компанию
                <span class="vacancyDesc">
                    Вайс Сити
                </span>
            </span>
            <div>
                <span>
                    Резюме 
                </span>
                <span class="vacancyDesc">
                    Программист, 10000 руб.
                </span>
            </div>
            <div class="messages">
                <div class="messageRow">
                    <div class="message myMessage">
                        <span>
                            Мои сайты
                            https://markettown.herokuapp.com/users/login
                            https://gamespool.herokuapp.com/users/login
                            https://showbellow.herokuapp.com/users/login
                        </span>
                    </div>
                </div>
                <div class="messageRow">
                    <div class="message otherMessage">
                        <span>
                            Привет!

                            Спасибо за отклик на вакансию!

                            Вижу что, к сожалению, твоего опыта не достаточно на эту позицию.
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'Response',
    data(){
        return {
            userType: 'aspirant'
        }
    },
    mounted(){
        this.userType = this.$route.query.usertype
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
    cursor: pointer;
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

    .areaShortcuts {
        color: rgb(255, 255, 255);
        font-size: 28px;
        cursor: pointer;
    }

    .areaShortcutsLabel {
        color: rgb(255, 255, 255);
        text-decoration: underline;
        text-decoration-style: dashed;
        cursor: pointer;
    }

    .vacancyName {
        color: rgb(175, 175, 175);
    }

    .vacancyDesc {
        color: rgb(0, 0, 255);
    }

    .messageRow {
        display: flex;
        width: 100%;
        flex-direction: column;
    }

    .message {
        background-color: rgb(245, 245, 245);
        width: 475px;
        border-radius: 7px;
        min-height: 75px;
        box-sizing: border-box;
        padding: 15px;
        margin: 15px;
    }

    .myMessage {
        align-self: flex-start;
    }

    .otherMessage {
        align-self: flex-end;
    }
    
</style>