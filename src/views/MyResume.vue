<template>
    <div>
        <Header />
        <div>
        <div class="bar">
                <div class="barItem">
                <div class="logo">
                    hh
                </div>
                <span class="help">
                    Помощь
                </span>
                </div>
                <div class="barItem">
                <span>
                    Поиск
                </span>
                <button class="withoutBackgroundBtn createResumeBtn">
                    Создать резюме
                </button>
                <button class="withoutBackgroundBtn loginBtn">
                    Войти
                </button>
                </div>
            </div>
            <h2>
                Ваше резюме
            </h2>
            <div class="actions">
                <div class="action">
                    <button @click="uploadFromFile()" class="btn btn-primary">
                        Загрузить из файла
                    </button>
                    <button @click="createResume()" class="withoutBackgroundBtn createResumeBtn btn btn-primary">
                        Заказать резюме
                    </button>
                </div>
                <button @click="switchLanguage()" class="withoutBackgroundBtn createResumeBtn btn btn-primary">
                    По-русски
                </button>
            </div>
            <h2>
                Контактные данные
            </h2>
            <div class="inputData">
                <div class="aboutMe">
                    <label for="">
                        Имя
                    </label>
                    <input type="text" class="w-50 form-control" v-model="name">
                </div>
                <div class="aboutMe">
                    <label for="">
                        Фамилия
                    </label>
                    <input type="text" class="w-50 form-control" v-model="secondName">
                </div>
                <div class="aboutMe">
                    <label for="">
                        Город проживания
                    </label>
                    <input type="text" class="w-50 form-control" v-model="city">
                </div>
            </div>
            <h2>
                Контактные данные
            </h2>
            <div class="inputData">
                <div class="aboutMe">
                    <label for="">
                        Дата рождения
                    </label>
                    <input type="date" class="w-50 form-control" v-model="born">
                </div>
                <div class="aboutMe">
                    <label for="">
                        Пол
                    </label>
                    <div class="case">
                        <div class="aboutMe">
                            <input type="radio" v-model="gender" />
                            <label for="">
                                Мужской
                            </label>
                        </div>
                        <div class="aboutMe">
                            <input type="radio" v-model="gender" />
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
                    <input type="text" class="w-50 form-control" v-model="citizenship">
                </div>
                <div class="aboutMe">
                    <label for="">
                        Опыт работы
                    </label>
                    <div class="case">
                        <div class="aboutMe">
                            <input type="radio" v-model="experience" />
                            <label for="">
                                Есть опыт работы
                            </label>
                        </div>
                        <div class="aboutMe">
                            <input type="radio" v-model="experience" />
                            <label for="">
                                Нет опыта работы
                            </label>
                        </div>        
                    </div>
                </div>
            </div>
            <button class="btn btn-primary">
                Сохранить и опубликовать
            </button>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
    name: 'MyResume',
    data(){
        return {
            name: '',
            secondName: '',
            city: '',
            born: '',
            gender: '',
            citizenship: '',
            experience: '',
        }
    },
    methods: {
        createResume(){

        },
        uploadFromFile(){

        },
        switchLanguage(){

        },
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
        height: 200px;
    }
    
    .aboutMe {
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

</style>