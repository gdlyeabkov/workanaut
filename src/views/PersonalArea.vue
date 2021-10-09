<template>
    <div>
        <Header />
        <div>
            <div class="bar">
                <div class="barItem">
                <div class="logo">
                    hh
                </div>
                <span @click="$router.push({ name: 'PersonalArea' })" class="help">
                    Мои резюме
                </span>
                <span @click="$router.push({ name: 'Responses', query: { responsetype: 'Активные' } })" class="help">
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
            <div class="main">
                <div class="actions">
                    <button @click="createResume()" class="btn btn-primary">
                        Создать резюме
                    </button>
                    <button @click="findWork()" class="btn btn-primary">
                        Найти работу
                    </button>
                    <button @click="orderResume()" class="btn btn-primary">
                        Заказать резюме
                    </button>
                </div>
                <h3>
                    Мои резюме
                </h3>
                <div class="achievement">
                    <div class="achievementPicture">
                        0/10
                    </div>
                    <div class="achievementDesc">
                        <span  class="achievementDescHeader">
                            Откликнитесь ещё 10 раз
                        </span>
                        <span>
                            По статистике для одного приглашения требуется около десяти откликов
                        </span>
                        <span>
                            Подходящие для отклика вакансии
                        </span>
                    </div>
                </div>
                <hr />
                <div class="resume">
                    <span class="resumeHeader">
                        Программист
                    </span>
                    <span>
                        Обновлено 30 августа 2021 в 13:17
                    </span>
                    <span>
                        Видно всему интернету прямая ссылка
                    </span>
                    <div class="resumeBenefits">
                        <div class="resumeBenefit">
                            <span>
                                16 показов в поиске за неделю
                            </span>
                        </div>
                        <div class="resumeBenefit">
                            <span>
                                нет просмотров за неделю
                            </span>
                        </div>
                        <div class="resumeBenefit">
                            <span>
                                нет приглашений за неделю
                            </span>
                        </div>
                    </div>
                    <span>
                        Резюме редко попадает в поиск. Поднимите его самостоятельно или подключите «Продвижение резюме», чтобы получить больше просмотров и приглашений
                    </span>
                    <div>
                        <button class="btn btn-primary btnAction">
                            Поднять в поиске
                        </button>
                        <button class="btn btn-primary btnAction">
                            3998 подходящих вакансий
                        </button>
                    </div>
                    <div class="actions">
                        <span class="action">
                            Поднять в поиске
                        </span>
                        <span class="action">
                            Изменить видимость
                        </span>
                        <span class="action">
                            Редактировать
                        </span>
                        <span class="action">
                            Дублировать
                        </span>
                    </div>
                </div>
                <hr />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import * as jwt from 'jsonwebtoken'

export default {
    name: 'PersonalArea',
    data(){
        return {
            token: window.localStorage.getItem('workanauttoken')
        }
    },
    monted(){
        jwt.verify(this.token, 'workanautsecret', (err, decoded) => {
            if (err) {
                this.$router.push({ name: "Login", query: { logintype: 'employee' } })
            } else {
                fetch(`http://localhost:4000/api/employers/get/?employeremail=${decoded.phone}`, {
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
                })
            }
        })
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

    .main {
        width: 75%;
    }

    .actions {
        margin: 15px 0px;
        width: 50%;
        display: flex;
        justify-content: space-around;
    }

    .achievement {
        width: 50%;
        box-shadow: 0 0 25px solid rgb(100, 100, 100);
        height: 200px;
        display: flex;
    }

    .achievementPicture {
        border-radius: 100%;
        border: 3px solid rgb(100, 0, 150);
        width: 45px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .achievementDesc {
        margin: 0px 25px;
        display: flex;
        flex-direction: column;
    }

     .achievementDescHeader {
        font-size: 24px;
        font-weight: bolder;
    }

    .action {
        cursor: pointer;
        color: rgb(0, 0, 255);
    }

    .resumeBenefits {
        display: flex;
        justify-content: space-around;
        width: 75%;
    }

    .resumeBenefit {
        width: 20%;
        height: 50px;
        box-sizing: border-box;
        padding: 15px;
        border-radius: 5px;
        border: 1px solid rgb(175, 175, 175);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .resumeHeader {
        color: rgb(0, 0, 255);
        font-size: 24px;
        display: block;
    }

    .btnAction {
        margin: 15px;
    }

</style>