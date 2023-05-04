<template>
    <div>
        <div class="bar">
            <div class="barItem">
                <div @click="$router.push({ name: 'AuthPage', query: { usertype: userType } })" class="logo">
                    wa
                </div>
                <span @click="$router.push({ name: 'PersonalArea', query: { usertype: userType } })" class="help">
                    {{
                        userType.includes('aspirant') ?
                            "Мои резюме"
                        :
                            "Мои вакансии"
                    }}
                </span>
                <span @click="$router.push({ name: 'Responses', query: { usertype: userType, responsetype: 'Активные' } })" class="help">
                    Отклики
                </span>
                <span @click="drawContextMenu(true)"  id="help" class="help">
                    Помощь
                </span>
                <div v-if="contextMenuToggler" class="contextMenuHelp">
                    <span>
                    Виртуальный консультант
                    </span>
                    <span>
                    Вопросы и ответы
                    </span>
                    <span>
                    Сообщество поддержки
                    </span>
                    <span>
                    Пишите нам
                    </span>
                    <hr />
                    <span class="contextMenuSubContent">
                    Техподдержка онлайн
                    </span>
                    <span class="contextMenuSubContent allOperatorClosed">
                        Все операторы заняты
                    </span>
                    <span class="contextMenuSubContent">
                        Пожалуйста, свяжитесь с нами позднее или воспользуйтесь другими сервисами выше.
                    </span>
                </div>
            </div>
            <div class="barItem">
                <span @click="searchToggler = !searchToggler" class="areaShortcuts material-icons-outlined">
                    search
                </span>
                <span @click="searchToggler = !searchToggler" class="areaShortcutsLabel">
                    Поиск
                </span>
                <button @click="$router.push({ name: 'MyResume', query: { usertype: userType } })" class="withoutBackgroundBtn createResumeBtn">
                    {{
                        userType.includes('employer') ?
                            "Создать вакансию"
                        :
                            "Создать резюме"
                    }}
                </button>
                <span v-if="userType.includes('aspirant')" @click="$router.push({ name: 'FavoriteVacancies', query: { usertype: userType } })" class="areaShortcuts material-icons-outlined">
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
                        {{ nickname }}
                    </span>
                    <hr />
                    <span @click="$router.push({ name: 'Settings', query: { usertype: userType, currentsetting: 'Личные данные' } })" class="contextMenuLink">
                        Настройки
                    </span>
                    <span @click="$router.push({ name: 'Settings', query: { usertype: userType, currentsetting: 'Рассылки' } })" class="contextMenuLink">
                        Рассылки
                    </span>
                    <span @click="$router.push({ name: 'Settings', query: { usertype: userType, currentsetting: 'Нежелательное' }  })" class="contextMenuLink">
                        Скрытые мной вакансии и компании
                    </span>
                    <span @click="$router.push({ name: 'Settings', query: { usertype: userType, currentsetting: 'Изображения' } })" class="contextMenuLink">
                        Изображения
                    </span>
                    <span @click="$router.push({ name: 'ConnectedServices' })" class="contextMenuLink">
                        Подключённые услуги
                    </span>
                    <span @click="$router.push({ name: 'Settings', query: { usertype: userType, currentsetting: 'Мои приложения' } })" class="contextMenuLink">
                        Мои приложения
                    </span>
                    <hr />
                    <span @click="logout()" class="contextMenuLink">
                        Выход
                    </span>
                </div>
            </div>
        </div>
        <div v-if="searchToggler" class="searchWorkArea">
            <input v-model="keywords" placeholder="Профессия, должность или компания" type="text" class="form-control">
            <button @click="$router.push({ name: 'Vacancies', query: { usertype: userType, keywords: keywords, worktype: 'Постоянная работа' } })" class="btn btn-primary">
                Найти
            </button>
        </div>
        <hr />
    </div>
</template>

<script>
import * as jwt from 'jsonwebtoken'

const baseUrl = process.env.VUE_APP_BASE_URL

export default {
    name: 'Bar',
    data(){
        return {
            searchToggler: false,
            keywords: '',
            resumes: [],
            userType: 'aspirant',
            aspirant: {},
            token: window.localStorage.getItem('workanauttoken'),
            contextMenuToggler: false,
            contextMenu: false,
            messageWindow: false,
            showOnlyUnreaded: true,
            responseStatus: 'Отказ',
            chatSelected: false,
            currentMessage: '',
            bellContextMenu: false,
            treeDotContextMenu: false,
            nickname: ''
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
           
            if(!event.target.id.includes('help'))
                this.contextMenuToggler = false

        })
    
        jwt.verify(this.token, 'workanautsecret', (err, decoded) => {
            if (err) {
                this.$router.push({ name: "Login", query: { logintype: 'employee' } })
            } else {
                if(this.userType.includes('aspirant')){
                    fetch(`${baseUrl}/api/aspirants/get/?aspirantfeedback=${decoded.phone}`, {
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
                        this.resumes = JSON.parse(result).resumes
                        this.aspirant = JSON.parse(result).aspirant
                        this.nickname = this.aspirant.feedback
                    })
                } else if(this.userType.includes('employer')){
                    fetch(`${baseUrl}/api/employers/get/?employeremail=${decoded.phone}`, {
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
                        this.resumes = JSON.parse(result).vacancies
                        this.aspirant = JSON.parse(result).employer
                        this.nickname = this.aspirant.phone
                    })
                }
            }
        })
    },
    methods: {
        drawContextMenu(toggler){
            if(toggler) {
                this.contextMenuToggler = true
            } else if(!toggler) {
                
            }
        },
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
    props: {
        
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
    background-color: rgb(0, 0, 200);
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

    .searchWorkArea {
    width: 65%;
    display: flex;
    margin: auto;
  }
  .searchWorkArea > * {
    height: 45px;
  }
  .searchWorkArea > button {
    width: 175px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .authMenu {
    width: 35%;
    display: flex;
    flex-direction: column;    
    background-color: rgb(245, 245, 245);
  }

  .authMenuHeader {
      display: flex;
      flex-direction: column;    
      height: 100%;
      width: 100%;
  }

  .authMenuHeaderColumn {
      display: flex;
      flex-direction: column;    
      height: 100%;
      width: 100%;
  }
  
  .authMenuHeaderRow {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      width: 100%;
  }

  .authMenuHeaderRow > * {
      align-self: center;
  }

  .authMenuFooter {
    display: flex;
    flex-direction: column;
  }

  .authMenuFooter > * {
      align-self: flex-start;
  }

  .totalContainer {
      display: flex;
      background-color: rgb(245, 245, 245);
  }

    .vacancyColumn {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .vacancyBlock {
        display: flex;
        margin-left: 35px;
        justify-content: center;
    }

    .vacancyItem {
        display: flex;
        margin: 35px;
        flex-direction: column;
    }

    .vacancyDesc {
        color: rgb(175, 175, 175);
        font-size: 12px;
    }

    .btnsContainer {
        margin-left: 75px;
        width: 50%;
        display: flex;
        justify-content: space-around;
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

.contextMenuHelp > span {
    font-size: 18px;
  }

  .contextMenuHelp {
    text-align: left;
    box-sizing: border-box;
    padding: 15px 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 350px;
    height: 325px;
    position: absolute;
    z-index: 5;
    box-shadow: 0 0 15px rgb(150, 150, 150);
    top: 60px;
    left: 300px;
    background-color:rgb(250, 250, 250);
    border: 1ps solid rgb(200, 200, 200);
  }

  .contextMenuSubContent {
    color: rgb(150, 150, 150);
  }

  .allOperatorClosed {
    color: rgb(255, 255, 255);
    background-color: rgb(150, 150, 150);
    border-radius: 10px;
    padding: 2px 15px;
  }


</style>