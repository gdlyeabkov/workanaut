<template>
    <div class="main">
        <Header :currentPage="'Прикрепление'" :auth="true" />
        <div>
            <BarAuth />
            <h2>
                {{
                     userType.includes('aspirant') ?
                        "Ваше резюме"
                    :
                        "Ваша вакансия"
                }}
            </h2>
            <div class="actions">
                <div class="action">
                    <button @click="uploadFromFile()" class="btn btn-primary">
                        Загрузить из файла
                    </button>
                    <button v-if="userType.includes('aspirant')" @click="createResume()" class="withoutBackgroundBtn createResumeBtn btn btn-primary">
                        Заказать резюме
                    </button>
                </div>
                <button @click="switchLanguage()" class="withoutBackgroundBtn createResumeBtn btn btn-primary">
                    По-русски
                </button>
            </div>
            <div v-if="userType.includes('aspirant')">
                <h2>
                    Контактные данные
                </h2>
                <div class="inputData">
                    <div class="aboutMe">
                        <label for="">
                            Имя
                        </label>
                        <input type="text" class="w-50 form-control" required v-model="name">
                    </div>
                    <div class="aboutMe">
                        <label for="">
                            Фамилия
                        </label>
                        <input type="text" class="w-50 form-control" required v-model="secondName">
                    </div>
                    <div class="aboutMe">
                        <label for="">
                            Город проживания
                        </label>
                        <input type="text" class="w-50 form-control" required v-model="city">
                    </div>
                </div>
                <h2>
                    Основная информация
                </h2>
                <div class="inputData">
                    <div class="aboutMe">
                        <label for="">
                            Дата публикации
                        </label>
                        <input type="text" disabled class="w-50 form-control" required v-model="born">
                    </div>
                    <div class="aboutMe">
                        <label for="">
                            Пол
                        </label>
                        <div class="case">
                            <div class="aboutMe">
                                <input value="Мужской" name="gender" type="radio" v-model="gender" />
                                <label for="">
                                    Мужской
                                </label>
                            </div>
                            <div class="aboutMe">
                                <input value="Женский" name="gender" type="radio" v-model="gender" />
                                <label for="">
                                    Женский
                                </label>
                            </div>        
                        </div>
                    </div>
                    <div class="aboutMe">
                        <label for="">
                            Гражданство
                        </label>
                        <input type="text" class="w-50 form-control" required v-model="citizenship">
                    </div>
                    <div class="aboutMe">
                        <label for="">
                            Опыт работы
                        </label>
                        <div class="case">
                            <div class="aboutMe">
                                <input value="Есть опыт работы" @change="auxBlock = true" name="experience" type="radio" v-model="experience" />
                                <label for="">
                                    Есть опыт работы
                                </label>
                            </div>
                            <div class="aboutMe">
                                <input @change="auxBlock = false" value="Нет опыта работы" name="experience" type="radio" v-model="experience" />
                                <label for="">
                                    Нет опыта работы
                                </label>
                            </div>        
                        </div>
                    </div>
                </div>
                <div v-if="auxBlock">
                    <h3>
                        Специальность
                    </h3>
                    <div class="inputData">
                        <div class="aboutMe">
                            <label for="">
                                Желаемая должность
                            </label>
                            <input type="text" class="w-50 form-control" required v-model="profession">
                        </div>
                        <div class="aboutMe">
                            <label for="">
                                Зарплата
                            </label>
                            <input type="text" class="w-50 form-control" required v-model="salary">
                        </div>
                        <div class="aboutMe">
                            <label for="">
                                Профессиональная область
                            </label>
                            <input type="text" class="w-50 form-control" required v-model="specializations">
                        </div>
                    </div>
                    <h3>
                        Опыт работы
                    </h3>
                    <div class="inputData">
                        <div class="aboutMe">
                            <label for="">
                                Места работы
                            </label>
                            <input type="text" class="w-50 form-control" required v-model="workPlaces">
                        </div>
                        <div class="aboutMe">
                            <label for="">
                                О себе
                            </label>
                            <input type="text" class="w-50 form-control" required v-model="about">
                        </div>
                        <div class="aboutMe">
                            <label for="">
                                Ключевые навыки
                            </label>
                            <input type="text" class="w-50 form-control" required v-model="skills">
                        </div>
                    </div>
                    <h3>
                        Образование
                    </h3>
                    <div class="inputData">
                        <div class="aboutMe">
                            <label for="">
                                Уровень
                            </label>
                            <input type="text" class="w-50 form-control" required v-model="level">
                        </div>
                    </div>
                    <h3>
                        Владение языками
                    </h3>
                    <div class="inputData">
                        <div class="aboutMe">
                            <label for="">
                                Родной язык
                            </label>
                            <input type="text" class="w-50 form-control" required v-model="lanuage">
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="userType.includes('employer')">
                <h2>
                    Контактные данные
                </h2>
                <div class="inputData">
                    <div class="aboutMe">
                        <label for="">
                            Профессия
                        </label>
                        <input type="text" class="w-50 form-control" required v-model="profession">
                    </div>
                    <div class="aboutMe">
                        <label for="">
                            Город проживания
                        </label>
                        <input type="text" class="w-50 form-control" required v-model="city">
                    </div>
                    <div class="aboutMe">
                        <label for="">
                            Компания
                        </label>
                        <input type="text" class="w-50 form-control" required v-model="company">
                    </div>
                    <div class="aboutMe">
                        <label for="">
                            Опыт работы
                        </label>
                        <input min="0" max="6" :disabled="!haveExperience" type="number" class="w-50 form-control" required v-model="experience">
                    </div>
                    <div class="aboutMe">
                        <label for="">
                            У меня есть опыт работы
                        </label>
                        <input type="checkbox" v-model="haveExperience">
                    </div>    
                    <div class="aboutMe">
                        <label for="">
                            Зарплата
                        </label>
                        <input type="text" class="w-50 form-control" required v-model="salary">
                    </div>
                    <div class="aboutMe">
                        <label for="">
                            График работы
                        </label>
                        <select class="w-50 form-control" v-model="shedule">
                            <option value="Полный день">Полный день</option>
                            <option value="Сменный график">Сменный график</option>
                            <option value="Вахтовый метод">Вахтовый метод</option>
                            <option value="Гибкий график">Гибкий график</option>
                            <option value="Удаленная работа">Удаленная работа</option>
                        </select>
                    </div>
                    <div class="aboutMe">
                        <label for="">
                            Тип занятости
                        </label>
                        <select class="w-50 form-control" v-model="worktype">
                            <option value="Полная занятость">Полная занятость</option>
                            <option value="Частичная занятость">Частичная занятость</option>
                            <option value="Проектная работа">Проектная работа</option>
                            <option value="Стажировка">Стажировка</option>
                            <option value="Волонтерство">Волонтерство</option>
                        </select>
                    </div>
                    <div class="aboutMe">
                        <label for="">
                            Отрасль компании
                        </label>
                        <select class="w-50 form-control" v-model="companyIndustry">
                            <option value="Услуги для бизнеса">Услуги для бизнеса</option>
                            <option value="Розничная торговля">Розничная торговля</option>
                            <option value="Перевозки, логистика, склад, ВЭД">Перевозки, логистика, склад, ВЭД</option>
                            <option value="Товары народного потребления (непищевые)">Товары народного потребления (непищевые)</option>
                            <option value="Продукты питания">Продукты питания</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <button v-if="userType.includes('aspirant')" type="submit" @click="createResume()" class="btn btn-primary">
                Сохранить и опубликовать
            </button>
            <button v-else-if="userType.includes('employer')" type="submit" @click="createVacancy()" class="btn btn-primary">
                Сохранить и опубликовать
            </button>

        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import BarAuth from "@/components/BarAuth.vue"
import Footer from "@/components/Footer.vue"

import * as jwt from 'jsonwebtoken'

export default {
    name: 'MyResume',
    data(){
        return {
            userType: 'aspirant',
            company: '',
            name: '',
            secondName: '',
            city: '',
            born: new Date().toLocaleDateString(),
            gender: '',
            citizenship: '',
            haveExperience: false,
            experience: 0,
            profession: '',
            salary: '',
            specializations: '',
            level: '',
            lanuage: '',
            skills: '',
            about: '',
            workPlaces: '',
            auxBlock: false,
            shedule: 'Полный день',
            worktype: 'Полная занятость',
            companyIndustry: 'Услуги для бизнеса',
            token: window.localStorage.getItem('workanauttoken')
        }
    },
    mounted(){
        jwt.verify(this.token, 'workanautsecret', (err, decoded) => {
            if (err) {
                this.$router.push({ name: "Login", query: { logintype: 'employee' } })
            } else {
                this.feedback = decoded.phone
                this.userType = this.$route.query.usertype
            }
        })
    },
    methods: {
        createVacancy(){
            fetch(`http://localhost:4000/api/vacancies/add/?employeremail=${this.feedback}&vacancycity=${this.city}&vacancycompany=${this.company}&vacancysalary=${this.salary}&vacancyprofession=${this.profession}&vacancyexperience=${this.experience}&vacancyshedule=${this.shedule}&vacancyworktype=${this.worktype}&vacancycompanyindustry=${this.companyIndustry}&vacancyborn=${this.born}`, {
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
                    this.$router.push({ name: 'PersonalArea', query: { usertype: this.userType }  })
                } else if(JSON.parse(result).status.includes('Error')){
                    alert('Неправильные данные для входа. Пожалуйста, попробуйте снова.')
                }
            })
        },
        createResume(){
            fetch(`http://localhost:4000/api/resumes/create/?aspirantemail=${this.feedback}&resumename=${this.name}&resumesecondname=${this.secondName}&resumecity=${this.city}&resumeborn=${this.born}&resumegender=${this.gender}&resumecitizenship=${this.citizenship}&resumeexperience=${this.experience}&resumeprofession=${this.profession}&resumesalary=${this.salary}&resumespecializations=${this.specializations}&resumelevel=${this.level}&resumelanuage=${this.lanuage}&resumeskills=${this.skills}&resumeabout=${this.about}&resumeworkplaces=${this.workPlaces}`, {
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
                    this.$router.push({ name: 'PersonalArea', query: { usertype: this.userType }  })
                } else if(JSON.parse(result).status.includes('Error')){
                    alert('Неправильные данные для входа. Пожалуйста, попробуйте снова.')
                }
            })
        },
        uploadFromFile(){

        },
        switchLanguage(){

        },
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

    .actions {
        display: flex;
        justify-content: space-around;
    }

    .action {
        display: flex;
    }

    .inputData {
        display: flex;
        flex-direction: column;
        width: 35%;
        justify-content: space-around;
    }
    
    .aboutMe {
        margin: 10px;
        display: flex;
        justify-content: space-around;
    }

    .case {
        display: flex;
        flex-direction: column;
    }

    .case > div > label, .case > div > input {
        align-self: center;
        margin: 0px 15px;  
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
        height: 1750px;
    }


</style>