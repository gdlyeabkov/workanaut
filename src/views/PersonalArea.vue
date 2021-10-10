<template>
    <div>
        <Header />
        <div>
            <div class="bar">
                <div class="barItem">
                <div @click="$router.push({ name: 'AuthPage', query: { usertype: userType } })" class="logo">
                    hh
                </div>
                <span @click="$router.push({ name: 'PersonalArea', query: { usertype: userType }  })" class="help">
                    {{
                        userType.includes('employer') ?
                            "Мои вакансии"
                        :
                            "Мои резюме"
                    }}
                </span>
                <span @click="$router.push({ name: 'Responses', query: { usertype: userType, responsetype: 'Активные' } })" class="help">
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
                        {{
                            userType.includes('employer') ?
                                "Создать вакансию"
                            :
                                "Создать резюме"
                        }}
                    </button>
                    <span @click="$router.push({ name: 'FavoriteVacancies' })" class="areaShortcuts material-icons-outlined">
                        star_outline
                    </span>
                    <span @click="messageWindow = true" class="areaShortcuts material-icons-outlined">
                        mode_comment
                    </span>
                    <span id="bell" @click="bellContextMenu = true" class="areaShortcuts material-icons-outlined">
                        notifications
                    </span>
                    <span id="context" @click="contextMenu = true"  class="areaShortcuts material-icons-outlined">
                        person_outline
                    </span>
                </div>
                <div v-if="messageWindow" class="backdrop">
                    <div class="messagesBlock">
                        <div class="asideMessages">
                            <div class="asideMessagesHeader">
                                <span @click="messageWindow = false" class="material-icons">
                                    close
                                </span>
                                <h5>
                                    Сообщения
                                </h5>
                            </div>
                            <div class="asideMessagesHeader">
                                <input v-model="showOnlyUnreaded" type="checkbox" />
                                <span>
                                    Показывать только непрочитанные
                                </span>
                            </div>
                            <div class="asideMessagesBody">
                                <div class="asideMessagesBodyItem" @click="chatSelected = true">
                                    <div class="avatar">
                                    </div>
                                    <div class="asideMessagesBodyItemContent">
                                        <div class="asideMessagesBodyItemContentHeader">
                                            <span>
                                                Frontend разработчи...
                                            </span>
                                            <span>
                                                12.09
                                            </span>
                                        </div>
                                        <div class="asideMessagesBodyItemContentMain">
                                            <span class="material-icons">
                                                work
                                            </span>
                                            <span>
                                                Лига цифровой экономики
                                            </span>
                                        </div>
                                        <div class="asideMessagesBodyItemContentFooter">
                                            <span :class="{ status: true, refusal: responseStatus.includes('Отказ'), offer: responseStatus.includes('Приглашение'), }">
                                                {{ responseStatus }}
                                            </span>
                                            <span>
                                                Здраствуйте, ...
                                            </span>
                                            <div class="countOfUnreadedMessages">
                                                1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="asideMessagesBodyItem">
                                    <div class="avatar">
                                    </div>
                                    <div class="asideMessagesBodyItemContent">
                                        <div class="asideMessagesBodyItemContentHeader">
                                            <span>
                                                Frontend разработчи...
                                            </span>
                                            <span>
                                                12.09
                                            </span>
                                        </div>
                                        <div class="asideMessagesBodyItemContentMain">
                                            <span class="material-icons">
                                                work
                                            </span>
                                            <span>
                                                Лига цифровой экономики
                                            </span>
                                        </div>
                                        <div class="asideMessagesBodyItemContentFooter">
                                            <span :class="{ status: true, refusal: responseStatus.includes('Отказ'), offer: responseStatus.includes('Приглашение'), }">
                                                {{ responseStatus }}
                                            </span>
                                            <span>
                                                Здраствуйте, ...
                                            </span>
                                            <div class="countOfUnreadedMessages">
                                                1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="asideMessagesBodyItem">
                                    <div class="avatar">
                                    </div>
                                    <div class="asideMessagesBodyItemContent">
                                        <div class="asideMessagesBodyItemContentHeader">
                                            <span>
                                                Frontend разработчи...
                                            </span>
                                            <span>
                                                12.09
                                            </span>
                                        </div>
                                        <div class="asideMessagesBodyItemContentMain">
                                            <span class="material-icons">
                                                work
                                            </span>
                                            <span>
                                                Лига цифровой экономики
                                            </span>
                                        </div>
                                        <div class="asideMessagesBodyItemContentFooter">
                                            <span :class="{ status: true, refusal: responseStatus.includes('Отказ'), offer: responseStatus.includes('Приглашение'), }">
                                                {{ responseStatus }}
                                            </span>
                                            <span>
                                                Здраствуйте, ...
                                            </span>
                                            <div class="countOfUnreadedMessages">
                                                1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="asideMessagesBodyItem">
                                    <div class="avatar">
                                    </div>
                                    <div class="asideMessagesBodyItemContent">
                                        <div class="asideMessagesBodyItemContentHeader">
                                            <span>
                                                Frontend разработчи...
                                            </span>
                                            <span>
                                                12.09
                                            </span>
                                        </div>
                                        <div class="asideMessagesBodyItemContentMain">
                                            <span class="material-icons">
                                                work
                                            </span>
                                            <span>
                                                Лига цифровой экономики
                                            </span>
                                        </div>
                                        <div class="asideMessagesBodyItemContentFooter">
                                            <span :class="{ status: true, refusal: responseStatus.includes('Отказ'), offer: responseStatus.includes('Приглашение'), }">
                                                {{ responseStatus }}
                                            </span>
                                            <span>
                                                Здраствуйте, ...
                                            </span>
                                            <div class="countOfUnreadedMessages">
                                                1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="asideMessagesBodyItem">
                                    <div class="avatar">
                                    </div>
                                    <div class="asideMessagesBodyItemContent">
                                        <div class="asideMessagesBodyItemContentHeader">
                                            <span>
                                                Frontend разработчи...
                                            </span>
                                            <span>
                                                12.09
                                            </span>
                                        </div>
                                        <div class="asideMessagesBodyItemContentMain">
                                            <span class="material-icons">
                                                work
                                            </span>
                                            <span>
                                                Лига цифровой экономики
                                            </span>
                                        </div>
                                        <div class="asideMessagesBodyItemContentFooter">
                                            <span :class="{ status: true, refusal: responseStatus.includes('Отказ'), offer: responseStatus.includes('Приглашение'), }">
                                                {{ responseStatus }}
                                            </span>
                                            <span>
                                                Здраствуйте, ...
                                            </span>
                                            <div class="countOfUnreadedMessages">
                                                1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mainMessages">
                            <div v-if="!chatSelected" class="chatPreview">
                                <span class="material-icons">
                                    chat
                                </span>
                                <span>
                                    Выберите чат, чтобы начать общение
                                </span>
                            </div>
                            <div v-else-if="chatSelected" class="chat">
                                <div class="chatHeader">
                                    <div class="chatHeaderBody">
                                        <div class="chatHeaderBodyContent">
                                            <div class="avatar">
                                            </div>
                                            <div class="asideMessagesBodyItemContent">
                                                <div class="asideMessagesBodyItemContentHeader">
                                                    <span>
                                                        Frontend разработчи...
                                                    </span>
                                                </div>
                                                <div class="asideMessagesBodyItemContentFooter">
                                                    <span>
                                                        Программист
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <span id="more" @click="treeDotContextMenu = true" class="btn btn-primary material-icons">
                                            more_horiz
                                        </span>
                                        <div v-if="treeDotContextMenu" class="treeDotContextMenu">
                                            <span>
                                                О компании
                                            </span>
                                            <span>
                                                Участники чата
                                            </span>
                                            <span>
                                                Отключить уведомления в чате
                                            </span>
                                            <span>
                                                Это спам
                                            </span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class='charHeaderFooter'>
                                        <span>
                                            Приглашение на вакансию
                                            <span>
                                                Junoour Frontend
                                            </span>
                                        </span>
                                    </div>
                                    <hr />
                                </div>
                                <div class="chatBody">
                                    
                                    <div class="chatBodyDate">
                                        29 августа
                                    </div>
                                    <div class="chatBodyMessage">
                                        <span>
                                            Отклик на вакансию
                                            Добрый день!
                                            Меня зовут Глеб, я занимаюсь фронтенд и бекенд разработкой. Стек технологий: vue.js, react.js, angular, node.js, symfony, laravel, android, flutter, nest.js, next.js, nuxt.js, bootstrap, materialize, asp.net mvc, asp.net core, django, flask, java spring, ruby on rails
                                            Пишу С# код на unity. Могу работать с логикой игры, частицами, анимациями, физикой, UI/UX, префабами и т.д.

                                            Игры,2d и 3d анимации
                                            https://drive.google.com/drive/folders/1u-WjrqvAjhSY8ueGh7ZtK7eX4B-GcRFl?usp=sharing
                                            мой гитхаб https://github.com/gdlyeabkov
                                        </span>
                                        <div class="chatBodyMessageDate">
                                            <span>
                                                18:14
                                            </span>
                                            <span class="material-icons">
                                                done_all
                                            </span>

                                        </div>
                                    </div>

                                    <div class="chatBodyOtherMessage">
                                        <span>
                                            Приглашение
                                            "Здравствуйте, Глеб Сергеевич!

                                            Благодарим Вас за отклик на вакансию Junior разработчик. Мы СТАРТАП, который активно растет огромными темпами.

                                            Прочтите до конца, а затем заполните, пожалуйста анкету. После чего мы с Вами обязательно свяжемся!

                                            У нас есть условие- у Вас должна быть основная работа, чтоб вы имели возможность уделять время на проект ABIVEE. Занятость частичная

                                            Просьба, заполнять анкету только тем, кто действительно мотивирован на развитие и согласен начать взаимодействие именно в таком формате.

                                            Ваше резюме показалось нам очень интересным. Мы хотели бы пригласить Вас на интервью, если согласны с условия выше. Приглашаем Вас пройти регистрацию на собеседование в компании ABIVEE Inc.

                                            Пожалуйста пройдите по ссылке и заполните электронную анкету: hr.abivee.com

                                            С уважением, HR Abivee"
                                        </span>
                                        <div class="chatBodyMessageDate">
                                            <span>
                                                18:14
                                            </span>
                                            <span class="material-icons">
                                                done_all
                                            </span>

                                        </div>
                                    </div>

                                </div>
                                <div class="chatFooter">
                                    <input class="form-control" placeholder="Сообщение 2d Анимат..."  v-model="currentMessage" />
                                    <span @click="sendMessage()" class="btn btn-primary material-icons">
                                        send
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="bellContextMenu" class="bellContextMenu">
                    <div class="bellContextMenuRow">
                        <span class="material-icons">
                            info
                        </span>
                        <div class="bellContextMenuColumn">
                            <span>
                                Где вы ищите работу
                            </span>
                            <span>
                                Указать место
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div class="bellContextMenuRow">
                        <span class="material-icons">
                            drafts
                        </span>
                        <div class="bellContextMenuColumn">
                            <span>
                                Нет новых вакансий в автопоиске
                            </span>
                            <span>
                                Настроить автопоиск
                            </span>
                        </div>
                    </div>
                </div>
                <div v-if="contextMenu" class="contextMenu">
                    <div class="contextMenuContent">
                        <span class="contextMenuHeader contextMenuLink">
                            {{ aspirant.feedback }}
                        </span>
                        <hr />
                        <span @click="$router.push({ name: 'Settings' })" class="contextMenuLink">
                            Настройки
                        </span>
                        <span @click="$router.push({ name: 'Mailings' })" class="contextMenuLink">
                            Рассылки
                        </span>
                        <span @click="$router.push({ name: 'HiddenMyselfVacanciesAndCompanies' })" class="contextMenuLink">
                            Скрытые мной вакансии и компании
                        </span>
                        <span @click="$router.push({ name: 'Settings' })" class="contextMenuLink">
                            Изображения
                        </span>
                        <span @click="$router.push({ name: 'ConnectedServices' })" class="contextMenuLink">
                            Подключённые услуги
                        </span>
                        <span @click="$router.push({ name: 'MyApps' })" class="contextMenuLink">
                            Мои приложения
                        </span>
                        <hr />
                        <span @click="logout()" class="contextMenuLink">
                            Выход
                        </span>
                    </div>
                </div>
            </div>   
            <div class="main">
                <div class="actions">
                    <button  @click="$router.push({ name: 'MyResume', query: { usertype: userType } })" class="btn btn-primary">
                        {{
                            userType.includes('employer') ?
                                "Создать вакансию"
                            :
                                "Создать резюме"
                        }}
                    </button>
                    <button v-if="userType.includes('aspirant')" @click="findWork()" class="btn btn-primary">
                        Найти работу
                    </button>
                    <button v-if="userType.includes('aspirant')" @click="orderResume()" class="btn btn-primary">
                        Заказать резюме
                    </button>
                </div>
                <h3>
                    {{
                        userType.includes('aspirant') ?
                            "Мои резюме"
                        :
                            "Мои вакансии"
                    }}
                </h3>
                <div v-if="userType.includes('aspirant')" class="achievement">
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
                <!-- <hr /> -->
                <!-- <div class="resume">
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
                </div> -->
                <div v-for="resume in resumes" :key="resume.proffesion" class="resume">
                    <span class="resumeHeader">
                        {{ resume.profession }}
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
                    <hr />
                </div>
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
            userType: 'aspirant',
            resumes: [],
            aspirant: {},
            token: window.localStorage.getItem('workanauttoken'),
            contextMenu: false,
            messageWindow: false,
            showOnlyUnreaded: true,
            responseStatus: 'Отказ',
            chatSelected: false,
            currentMessage: '',
            bellContextMenu: false,
            treeDotContextMenu: false,
        }
    },
    mounted(){
        
        this.userType = this.$route.query.usertype

        document.body.addEventListener("click", (event) => {
            if(!event.target.id.includes('context'))
                this.contextMenu = false

            if(!event.target.id.includes('bell'))
                this.bellContextMenu = false

            if(!event.target.id.includes('more'))
                this.treeDotContextMenu = false
            
        })
    
        jwt.verify(this.token, 'workanautsecret', (err, decoded) => {
            if (err) {
                this.$router.push({ name: "Login", query: { logintype: 'employee' } })
            } else {
                // fetch(`http://localhost:4000/api/employers/get/?employeremail=${decoded.phone}`, {
                //     mode: 'cors',
                //     method: 'GET'
                // }).then(response => response.body).then(rb  => {
                //     const reader = rb.getReader()
                //     return new ReadableStream({
                //     start(controller) {
                //         function push() {
                //         reader.read().then( ({done, value}) => {
                //             if (done) {
                //             console.log('done', done);
                //             controller.close();
                //             return;
                //             }
                //             controller.enqueue(value);
                //             console.log(done, value);
                //             push();
                //         })
                //         }
                //         push();
                //     }
                //     });
                // }).then(stream => {
                //     return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
                // })
                // .then(result => {
                //     console.log(`JSON.parse(result): ${JSON.parse(result)}`)
                // })
                console.log(`decoded: ${decoded.phone}`)
                
                if(this.userType.includes('aspirant')){
                    fetch(`http://localhost:4000/api/aspirants/get/?aspirantfeedback=${decoded.phone}`, {
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
                        console.log(`JSON.parse(result): ${JSON.parse(result).aspirant.resumes}`)
                        this.resumes = JSON.parse(result).resumes
                        this.aspirant = JSON.parse(result).aspirant
                    })
                } else if(this.userType.includes('employer')){
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
                        // console.log(`JSON.parse(result): ${JSON.parse(result).aspirant.resumes}`)
                        this.resumes = JSON.parse(result).vacancies
                        this.aspirant = JSON.parse(result).employer
                    })
                }

            }
        })
    },
    methods: {
        logout() {
            this.token = jwt.sign({
                phone: "this.feedback"
            }, 'workanautsecret', { expiresIn: 1 })
            localStorage.setItem('workanauttoken', "this.token")
            setTimeout(() => {
                this.$router.push({ name: 'Home' })
            }, 1000)
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
    cursor: pointer;
    color: rgb(255, 255, 255);
    text-decoration: underline;
    text-decoration-style: dotted;
  }

  .logo {
    cursor: pointer;
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

    .contextMenu {
        width: 325px;
        height: 375px;
        background-color: rgb(255, 255, 255);
        box-sizing: border-box;
        padding: 35px;
        position: absolute;
        top: 125px;
        left: 900px;
        z-index: 5;
        border: 1px solid rgb(225, 225, 225);
        box-shadow: 0 0 50px rgb(215, 205, 175);
    }

    .contextMenuContent {
        display: flex;
        flex-direction: column;
    }

    .contextMenuHeader {
        font-weight: bolder;
    }

    .contextMenuLink:hover {
        background-color: rgb(245, 245, 245);
        cursor: pointer;
    }

    .backdrop {
        position: fixed;
        top: 0px;
        left: 0px;
        background-color: rgba(0, 0, 0, 0.8);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
    }

    .messagesBlock {
        background-color: rgb(245, 245, 245);
        height: 100%;
        width: 65%;
        display: flex;
    }

    .asideMessagesHeader {
        display: flex;
        align-items: center;
    }

    .asideMessagesHeader > span {
        cursor: pointer;
    }

    .asideMessagesHeader > * {
        margin: 15px;
    }

    .mainMessages {
        width: 65%;
    }

    .asideMessages {
        width: 35%;
    }

    .asideMessagesBody {
        overflow-y: scroll;
        
    }

    .avatar {
        border-radius: 100%;
        width: 65px;
        height: 65px;
        background-color: rgb(255, 0, 0);
    }

    .countOfUnreadedMessages {
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        width: 20px;
        height: 20px;
        background-color: rgb(255, 0, 0);
    }

    .asideMessagesBodyItem {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 50px 0px;
    }

    .asideMessagesBodyItem:hover {
        background-color: rgb(235, 235, 235);
    }

    .asideMessagesBodyItemContentHeader {
        
    }

    .asideMessagesBodyItemContentMain {
        display: flex;
        justify-content: space-between;
        
    }

    .asideMessagesBodyItemContentFooter {
        display: flex;
        justify-content: space-between;
    }

    .refusal {
        color: rgb(200, 0, 0);
    }

    .offer {
        color: rgb(0, 150, 0);
    }

    .status {
        font-size: 18px;
        font-weight: bolder;
    }

    .chatPreview > span.material-icons {
        font-size: 48px;
    }

    .chatPreview {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .chatHeader {
        display: flex;
        flex-direction: column;
    }
    
    .charHeaderFooter {
        display: flex;
        justify-content: center;
    }

    .chatHeaderBody {
        display: flex;
        justify-content: space-between;
    }

    .chatHeaderBodyContent {
        display: flex;
    }

    .chatBody {
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }

    .chatFooter {
        width: 40%;
        height: 45px;
        position: absolute;
        top: calc(100% - 45px);
        display: flex;
        align-items: center;
    }

    .chatBodyDate {
        color: rgb(175, 175, 175);
        text-align: center;
    }

    .chatBodyMessageDate {
        color: rgb(175, 175, 175);
        text-align: right;
    }

    .chatBodyMessage {
        margin: 25px 0px;
        background-color: rgb(200, 235, 255);
        border-radius: 15px;
        width: 75%;
        box-sizing: border-box;
        padding: 25px;
        align-self: flex-end;
    }

    .chatBodyOtherMessage {
        margin: 25px 0px;
        background-color: rgb(230, 230, 230);
        border-radius: 15px;
        width: 75%;
        box-sizing: border-box;
        padding: 25px;
        align-self: flex-start;
    }

    .treeDotContextMenu {
        line-height: 35px;
        width: 325px;
        height: 175px;
        background-color: rgb(255, 255, 255);
        box-sizing: border-box;
        padding: 15px 25px;
        position: absolute;
        top: 50px; 
        left: 1350px;
        z-index: 15;
        display: flex;
        flex-direction: column; 
        box-shadow: 0 0 15px rgb(200, 200, 200);
    }

    .bellContextMenu {
        width: 500px;
        height: 275px;
        background-color: rgb(255, 255, 255);
        box-sizing: border-box;
        padding: 35px;
        position: absolute;
        top: 125px;
        left: 750px;
        z-index: 5;
        border: 1px solid rgb(225, 225, 225);
        box-shadow: 0 0 50px rgb(215, 205, 175);
    }

    .bellContextMenuRow {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .bellContextMenuColumn {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

</style>