<template>
    <div>
        <Header :currentPage="'Личный кабинет'" :auth="true" />
        <div>
            <BarAuth />
            <div class="totalContainer">
                <div class="authMenu">
                    <div class="authMenuHeader">
                        <h3>
                            Мои события
                        </h3>
                        <div class="authMenuHeaderColumn">
                            <div class="authMenuHeaderRow">
                                <div>
                                    <span class="material-icons-outlined">
                                        person_outline
                                    </span>
                                    <span class="authLink">  
                                        Отклики и приглашения
                                    </span>
                                </div>
                                <span>  
                                    {{ totalResponsesAndInvites }}
                                </span>
                            </div>
                            <div v-if="userType.includes('aspirant')" class="authMenuHeaderRow">
                                <div>
                                    <span class="material-icons">
                                        visibility
                                    </span>
                                    <span class="authLink">  
                                        Просмотры резюме
                                    </span>
                                </div>
                                <span>  
                                    {{ totalViews() }}
                                </span>
                            </div>
                            <div v-if="userType.includes('aspirant')" class="authMenuHeaderRow">
                                <div>
                                    <span class="material-icons-outlined">
                                        star
                                    </span>
                                    <span class="authLink" @click="$router.push({ name: 'FavoriteVacancies', query: { usertype: userType } })">  
                                        Избранные вакансии
                                    </span>
                                </div>
                                <span>  
                                    {{ totalFavorites }}
                                </span>
                            </div>
                            <div class="authMenuHeaderRow">
                                <div>
                                    <span class="material-icons">
                                        search
                                    </span>
                                    <span class="authLink">  
                                        Автопоиски
                                    </span>
                                </div>
                                <span>  
                                    +1
                                </span>
                            </div>
                        </div>
                    </div>
                    <hr  v-if="userType.includes('aspirant')" />
                    <div v-if="userType.includes('aspirant')" class="authMenuFooter">
                        <h5>
                            Подработка
                        </h5>
                        <span>
                            Разовые задания, неполный рабочий день, временная работа и другая подработка
                        </span>
                        <button class="btn btn-light withoutBackgroundBtn createResumeBtn">
                            Найти
                        </button>
                    </div>
                </div>
                <div class="relevantedBlock">
                    <h5>
                        Рекомендуем лично вам
                    </h5>
                    <!-- <div class="vacancyBlock">
                        <div class="vacancyColumn">
                            <div class="vacancyItem">
                                <span>
                                    Верстальщик
                                </span>
                                <span class="vacancyDesc">
                                    з/п не указана
                                </span>
                                <span class="vacancyDesc">
                                    Компания «СПОРТМАСТЕР», Розничные продажи, Москва
                                </span>
                            </div>
                            <div class="vacancyItem">
                                <span>
                                    Верстальщик
                                </span>
                                <span class="vacancyDesc">
                                    з/п не указана
                                </span>
                                <span class="vacancyDesc">
                                    Компания «СПОРТМАСТЕР», Розничные продажи, Москва
                                </span>
                            </div>
                            <div class="vacancyItem">
                                <span>
                                    Верстальщик
                                </span>
                                <span class="vacancyDesc">
                                    з/п не указана
                                </span>
                                <span class="vacancyDesc">
                                    Компания «СПОРТМАСТЕР», Розничные продажи, Москва
                                </span>
                            </div>
                            <div class="vacancyItem">
                                <span>
                                    Верстальщик
                                </span>
                                <span class="vacancyDesc">
                                    з/п не указана
                                </span>
                                <span class="vacancyDesc">
                                    Компания «СПОРТМАСТЕР», Розничные продажи, Москва
                                </span>
                            </div>
                        </div>
                        <div class="vacancyColumn">
                            <div class="vacancyItem">
                                <span>
                                    Верстальщик
                                </span>
                                <span class="vacancyDesc">
                                    з/п не указана
                                </span>
                                <span class="vacancyDesc">
                                    Компания «СПОРТМАСТЕР», Розничные продажи, Москва
                                </span>
                            </div>
                            <div class="vacancyItem">
                                <span>
                                    Верстальщик
                                </span>
                                <span class="vacancyDesc">
                                    з/п не указана
                                </span>
                                <span class="vacancyDesc">
                                    Компания «СПОРТМАСТЕР», Розничные продажи, Москва
                                </span>
                            </div>
                            <div class="vacancyItem">
                                <span>
                                    Верстальщик
                                </span>
                                <span class="vacancyDesc">
                                    з/п не указана
                                </span>
                                <span class="vacancyDesc">
                                    Компания «СПОРТМАСТЕР», Розничные продажи, Москва
                                </span>
                            </div>
                            <div class="vacancyItem">
                                <span>
                                    Верстальщик
                                </span>
                                <span class="vacancyDesc">
                                    з/п не указана
                                </span>
                                <span class="vacancyDesc">
                                    Компания «СПОРТМАСТЕР», Розничные продажи, Москва
                                </span>
                            </div>
                        </div>
                    </div> -->
                    <div v-for="vacancy in vacancies.filter((vacancy, vacancyIdx) => {
                            return vacancyIdx <= 2
                        })" :key="vacancy._id" class="vacancyBlock">
                        <div class="vacancyColumn">
                            <div class="vacancyItem">
                                <span>
                                    {{ vacancy.profession }}
                                </span>
                                <span class="vacancyDesc">
                                    {{ vacancy.salary }} руб. в месяц
                                </span>
                                <span class="vacancyDesc">
                                    Компания {{ vacancy.company }}
                                </span>
                            </div>
                        </div>
                        <div class="vacancyColumn">
                            <div v-for="vacancy in vacancies.filter((vacancy, vacancyIdx) => {
                                return vacancyIdx <= 5 && vacancyIdx >= 3
                            })" :key="vacancy._id" class="vacancyItem">
                                <span>
                                    {{ vacancy.profession }}
                                </span>
                                <span class="vacancyDesc">
                                    {{ vacancy.salary }} руб. в месяц
                                </span>
                                <span class="vacancyDesc">
                                    Компания {{ vacancy.company }}
                                </span>
                            </div>
                            
                        </div>
                    </div>
                    <div class="btnsContainer">
                        <button @click="$router.push({ name: 'Vacancies', query: { usertype: userType, keywords: resumes[Math.floor(Math.random() * resumes.length)].profession, worktype: 'Постоянная работа' } })" class="btn btn-primary createResumeBtn withoutBackgroundBtn">
                            Показать все
                        </button>
                        <button @click="$router.push({ name: 'Map', query: { usertype: userType } })" class="btn btn-primary createResumeBtn withoutBackgroundBtn">
                            На карте
                        </button>
                    </div>
                </div>
            </div>
            <hr />
            
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import BarAuth from '@/components/BarAuth.vue'
import Footer from '@/components/Footer.vue'

import * as jwt from 'jsonwebtoken'

export default {
    name: 'AuthPage',
    data(){
        return {
            userType: 'aspirant',
            resumes: [],
            vacancies: [],
            aspirant: {},
            token: window.localStorage.getItem('workanauttoken'),
            totalResponsesAndInvites: 0,
            totalFavorites: 0
        }
    },
    mounted(){
        
        this.userType = this.$route.query.usertype

        jwt.verify(this.token, 'workanautsecret', (err, decoded) => {
            if (err) {
                this.$router.push({ name: "Login", query: { logintype: 'employee' } })
            } else {
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
                        this.vacancies = JSON.parse(result).vacancies
                        this.aspirant = JSON.parse(result).aspirant
                        this.totalResponsesAndInvites = this.aspirant.responses.length + this.aspirant.invites.length
                        this.totalFavorites = this.aspirant.favorites.length
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
                        console.log(`JSON.parse(result): ${JSON.parse(result)}`)
                        this.resumes = JSON.parse(result).vacancies
                        this.aspirant = JSON.parse(result).employer
                        this.totalResponsesAndInvites = this.aspirant.responses.length + this.aspirant.invites.length
                    })
                }
            }
        })
    },
    methods: {
        totalViews(){
            let views = 0
            this.resumes.map(resume => {
                views += resume.views
            })
            return views
        }
    },
    components: {
        Header,
        BarAuth,
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
        width: 100%;
        display: flex;
        justify-content: space-between;
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

     .authLink:hover {
        color: rgb(255, 0, 0);
        cursor: pointer;
     }

</style>