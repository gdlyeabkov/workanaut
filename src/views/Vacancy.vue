<template>
    <div>
        <Header :currentPage="'Прикрелплённая'" :auth="false"/>
        <div>
            <BarAuth />
            <div class="sidebar">
                <span class="profession">
                    {{ resume.profession }}
                </span>
                <span class="salary">
                    от {{ resume.salary }} руб. на руки
                </span>
                <span class="companyName">
                    {{ resume.company }}
                </span>
                <span class="companyPlace">
                    {{ resume.address }}
                </span>
                <span>
                    Сейчас эту вакансию смотрят <span class="watchOthers">{{ "3" }} человека</span>
                </span>
                <div class="actions">
                    <button @click="click()" class="btn btn-primary">
                        Откликнуться
                    </button>
                    <button @click="showContacts()" class="btn btn-primary">
                        Показать контакты
                    </button>
                    <span v-if="userType.includes('aspirant')" @click="favorite()" class="material-icons btn btn-primary">
                        star
                    </span>
                    <span v-if="userType.includes('aspirant')" @click="block()" class="btn btn-primary material-icons">
                        block
                    </span>
                </div>
                <span>
                    Требуемый опыт работы: {{ resume.experience }}
                </span>
                <span>
                    {{ resume.worktype }}, {{ resume.shedule }}
                </span>
                <span>
                    В компанию ООО «Хэндимен» - требуются грузчики. Мы являемся прямым работодателем в сфере организации переездов, погрузо-разгрузочных работ, сборки мебели и стеллажей.
                </span>
                <span>
                    Что мы предлагаем Вам:
                </span>
                <ul>
                    <li>
                        Постоянную работу или подработки - гибкий график;
                    </li>
                    <li>
                        Почасовая оплата (минимальная выплата 900р);
                    </li>
                    <li>
                        Стабильная зарплата - деньги выплачиваются стабильно один раз в календарную неделю, но для новых сотрудников возможна оплата ежедневно в течение первых 7 дней работы;
                    </li>
                    <li>
                        Принимаем и обучаем без опыта работы;
                    </li>
                    <li>
                        Ставка от 225 до 300 р. в час, также возможны премии по отработке 20 часов/40 часов в календарную неделю (500 и 1000 руб, соответственно);
                    </li>
                </ul>
                <span>
                    Можем предложить различные объекты:
                </span>
                <ul>
                    <li>
                        Работа на складах со стандартным графиком 5/2 (смена 8 часов - выплаты от 1800 до 2000 руб. за смену);
                    </li>
                    <li>
                        Ночные работы на складах и съемочных площадках ТВ Шоу (смена от 10 до 24 часов, выплаты от 2300 до 6000 руб. за смену);
                    </li>
                    <li>
                        Выполнение функций разнорабочих при отделке помещений в офисных зданиях (смена от 8 часов до 12 часов, выплата от 1800 руб. до 3000 руб.);
                    </li>
                </ul>
                <span>
                    Ваши обязанности:
                </span>
                <ul>
                    <li>
                        Погрузо-разгрузочные работы на складах; • Разгрузка/погрузка фур, контейнеров, автомобилей;
                    </li>
                    <li>
                        Квартирные и офисные переезды;
                    </li>
                    <li>
                        Сборка/разборка мебели и стеллажей
                    </li>
                </ul>
                <span>
                    Наши требования к кандидатам:
                </span>
                <ul>
                    <li>
                        Ответственность;
                    </li>
                    <li>
                        Пунктуальность;
                    </li>
                    <li>
                        Готовность к физическому труду;
                    </li>
                    <li>
                        Грамотная речь;
                    </li>
                </ul>
                <span class="aboutSkills">
                    Ключевые навыки
                </span>
                <div class="skills">
                    <span>
                        Пользователь ПК
                    </span>
                    <span>
                        Грамотная речь
                    </span>
                    <span>
                        Первичные документы
                    </span>
                    <span>
                        Умение работать в команде
                    </span>
                </div>
                <span>
                    Контактная информация
                </span>
                <span>
                    Адрес
                </span>
                <span>
                    Москва, улица Большая Якиманка, 35с1
                </span>
                <span>
                    Вакансия опубликована 5 октября 2021 в Москве
                </span>
                <span>
                    Вам подойдут эти вакансии
                </span>
                <div class="sameVacancies">
                    s
                </div>
                
                
            </div>
            <div class="notification">
                <div class="message">
                    <span class="messageHeader">
                        Похожие вакансии
                    </span>
                    <span>
                        HR Менеджер по подбору персонала и адаптации
                    </span>
                    <span>
                        з/п не указана
                    </span>
                    <span>
                        Инттерра, Москва
                    </span>
                    <span>
                        Менеджер по подбору и адаптации/HR менеджер
                    </span>
                    <span>
                        з/п не указана
                    </span>
                    <span>
                        Roistat, Москва
                    </span>
                    <span>
                        2 197 похожих вакансий
                    </span>
                </div>   
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import BarAuth from '@/components/BarAuth.vue'
import Footer from '@/components/Footer.vue'

import * as jwt from 'jsonwebtoken'

export default {
    name: 'Vacancies',
    data(){
        return {
            userType: 'aspirant',
            aspirantFeedback: '',
            token: localStorage.getItem('workanauttoken'),
            resume: {
                profession: 'HR-менеджер/Ведущий менеджер по подбору и адаптации персонала/Рекрутер',
                salary: 50000,
                company: 'ООО Хэндимен',
                address: 'Москва, улица Большая Якиманка, 35с1',
                experience: 0,
                worktype: 'Полная занятость',
                shedule: 'полный день'
            }
        }
    },
    methods: {
        click(){
            if(this.userType.includes('aspirant')) {
                fetch(`http://localhost:4000/api/vacancy/response/?aspirantfeedback=${this.aspirantFeedback}&vacancyid=${this.$route.query.vacancyid}`, {
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
                        this.$router.push({ name: 'Vacancies', query: { usertype: this.userType } })
                    } else if(JSON.parse(result).status.includes('Error')){
                        alert('Ошибка отклика')
                    }
                })
            } else if(this.userType.includes('employer')) {
                fetch(`http://localhost:4000/api/resume/response/?employeremail=${this.aspirantFeedback}&resumeid=${this.$route.query.vacancyid}`, {
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
                        this.$router.push({ name: 'Vacancies', query: { usertype: this.userType } })
                    } else if(JSON.parse(result).status.includes('Error')){
                        alert('Ошибка отклика')
                    }
                })
            }
        },
        block(){
            fetch(`http://localhost:4000/api/vacancy/block/?aspirantfeedback=${this.aspirantFeedback}&vacancyid=${this.$route.query.vacancyid}`, {
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
                    this.$router.push({ name: 'Vacancies', query: { usertype: this.userType } })
                } else if(JSON.parse(result).status.includes('Error')){
                    alert('Ошибка блокировки')
                }
            })
        },
        favorite(){
            fetch(`http://localhost:4000/api/vacancy/favorite/?aspirantfeedback=${this.aspirantFeedback}&vacancyid=${this.$route.query.vacancyid}`, {
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
                    this.$router.push({ name: 'Vacancies', query: { usertype: this.userType } })
                } else if(JSON.parse(result).status.includes('Error')){
                    alert('Ошибка добавления в избранное')
                }
            })
        }
    },
    mounted(){
        jwt.verify(this.token, 'workanautsecret', (err, decoded) => {
            if (err) {
                this.$router.push({ name: "Login", query: { logintype: 'employee' } })
            } else {
                this.userType = this.$route.query.usertype
                this.aspirantFeedback = decoded.phone
                if(this.userType.includes('aspirant')) {
                    fetch(`http://localhost:4000/api/vacancy/get/?vacancyid=${this.$route.query.vacancyid}`, {
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
                    fetch(`http://localhost:4000/api/resume/get/?resumeid=${this.$route.query.vacancyid}`, {
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
                        
                            fetch(`http://localhost:4000/api/resume/view/?resumeid=${this.$route.query.vacancyid}&employeremail=${this.aspirantFeedback}`, {
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
                                
                            })

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
    
    .sidebar, .notification {
        float: left;
        height: 1150px;
    }

    .sidebar {
        width: 65%;
        display: flex;
        box-sizing: border-box;
        padding: 25px;
        flex-direction: column;
    }

    .notification {
        width: 25%;
    }

    .message {
        display: flex;
        flex-direction: column;
        position: relative;
        top: calc(100% - 175px);
        left: 0px;
        z-index: 2;
        height: 175px;
        width: 350px;
    }

    .messageHeader {
        font-weight: bolder;
        font-size: 28px;
    }

    .profession {
        font-weight: bolder;
        font-size: 24px;
    }
    
    .companyName {
        color: rgb(0, 0, 255);
        font-size: 24px;
    }

    .companyPlace {
        color: rgb(0, 0, 255);
    }

    .salary {
        font-size: 24px;
    }

    .watchOthers {
        color: rgb(255, 0, 0);
    }

    .actions {
        display: flex;
        justify-content: space-between;
        width: 425px;
    }

    .aboutSkills {
        font-weight: bolder;
    }

</style>