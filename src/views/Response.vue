<template>
    <div>
        <Header :currentPage="'Отклик'" :auth="true" />
        <div>
            <BarAuth />
            <h3>
                Отказ
            </h3>
            <span class="vacancyName">
                {{ resume.profession }}
                <span class="vacancyDesc">
                    {{ resume.city }}
                </span>
            </span>
            <div>
                <span>
                    Резюме 
                </span>
                <span class="vacancyDesc">
                    Программист, {{ resume.salary }} руб.
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
import BarAuth from '@/components/BarAuth.vue'
import Footer from '@/components/Footer.vue'

import * as jwt from 'jsonwebtoken'

const baseUrl = process.env.VUE_APP_BASE_URL

export default {
    name: 'Response',
    data(){
        return {
            userType: 'aspirant',
            resume: {},
            token: localStorage.getItem('workanauttoken'),
        }
    },
    mounted(){
        
        this.userType = this.$route.query.usertype

        jwt.verify(this.token, 'workanautsecret', (err, decoded) => {
            if (err) {
                this.$router.push({ name: "Login", query: { logintype: 'employee' } })
            } else {
                this.userType = this.$route.query.usertype
                this.aspirantFeedback = decoded.phone
                if(this.userType.includes('aspirant')) {
                    fetch(`${baseUrl}/api/vacancy/get/?vacancyid=${this.$route.query.responseid}`, {
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
                        console.log(`JSON.parse(result).vacancies: ${JSON.parse(result)}`)
                        if(JSON.parse(result).status.includes('OK')){
                            this.resume = JSON.parse(result).resume
                        } else if(JSON.parse(result).status.includes('Error')){
                            alert('Ошибка получения вакансии')
                        }
                    })
                } else if(this.userType.includes('employer')) {
                    fetch(`${baseUrl}/api/resume/get/?resumeid=${this.$route.query.responseid}`, {
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
                        console.log(`JSON.parse(result).vacancies: ${JSON.parse(result)}`)
                        if(JSON.parse(result).status.includes('OK')){
                            this.resume = JSON.parse(result).resume
                        } else if(JSON.parse(result).status.includes('Error')){
                            alert('Ошибка получения резюме')
                        }
                    })
                }
            }
        })

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