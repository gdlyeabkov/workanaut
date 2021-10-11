<template>
    <div>
        <Header :currentPage="'Репетиция собеседования'" :auth="false" />
        <div>
            <Bar />
            <div class="consultation">
                <div class="consultationHeader">
                    <h1>
                        Карьерная консультация
                    </h1>
                    <p>
                        Онлайн-консультация с карьерным экспертом по вопросам, связанным с развитием карьеры и поиском работы
                    </p>
                    <button class="btn btn-primary">
                        Заказать консультацию
                    </button>
                </div>
            </div>
            <div class="carrierPoster">
                <img width="725px" src="https://hhcdn.ru/icms/10194759.svg" alt="" />
            </div>
            <div class="consultation">
                <div class="consultationHeader">
                    <h1>
                        Что можно обсудить с экспертом?
                    </h1>
                    <p class="consultationThemes">
                        Выберите одну из самых актуальных тем для консультации
                    </p>
                </div>
            </div>
            <div class="consultationsWithExpert">
                <h4 class="consultationsWithExpertHeader">
                    Выход на рынок труда
                </h4>
                <span class="consultationsWithExpertContent">
                    С чего начать поиск работы, как действовать в период турбулентности? Как искать работу впервые или после длительного перерыва? Эксперт проанализирует с вами ситуацию и поможет составить план действий
                </span>
            </div>
            <hr />
            <div class="consultationsWithExpert">
                <h4 class="consultationsWithExpertHeader">
                    Стратегия поиска работы
                </h4>
                <span class="consultationsWithExpertContent">
                    Вы начали поиск работы, но сталкиваетесь со сложностями в процессе? Обсудите с экспертом конкретные шаги для получения быстрого результата: план поиска, конкурентоспособность резюме и каналы его продвижения, рекомендации по коммуникации с работодателями на всех этапах
                </span>
            </div>
            <hr />
            <div class="consultationsWithExpert">
                <h4 class="consultationsWithExpertHeader">
                    Смена карьерного вектора
                </h4>
                <span class="consultationsWithExpertContent">
                    Планируете попробовать себя в новой профессии или перейти на новый формат работы? Наши эксперты порекомендуют шаги и технологии для успешной смены профессиональной деятельности
                </span>
            </div>
            <hr />
            <div class="consultationsWithExpert">
                <h4 class="consultationsWithExpertHeader">
                    Интервью и самопрезентация
                </h4>
                <span class="consultationsWithExpertContent">
                    Обсудите с экспертом стратегию подготовки к интервью, чтобы пройти его с блеском. Узнайте, на что обратить внимание, как правильно собрать информацию о компании и вакансии и отшлифовать свою самопрезентацию
                </span>
            </div>
            <hr />
            <div class="createConsultation">
                <img width="425px" src="https://hhcdn.ru/icms/10195020.svg" alt="" />
                <div class="createConsultationBlock">
                    <span class="createConsultationBlockHeader">
                        Стоимость услуги
                    </span>
                    <span>
                        ПРОДОЛЖИТЕЛЬНОСТЬ КОНСУЛЬТАЦИИ — ДО 1 ЧАСА
                    </span>
                    <span class="createConsultationBlockHeader">
                        3500 руб.
                    </span>
                    <button class="btn btn-primary">
                        Заказать консультацию
                    </button>
                </div>
            </div>
            <div class="consultation">
                <div class="consultationHeader">
                    <h1>
                        Как это работает?
                    </h1>
                    <p>
                        Процесс очень простой
                    </p>
                </div>
            </div>
            <div class="stepsBlock">
                <div class="steps">
                    <div class="stepBlock">
                        <span class="stepHeader">
                            1
                        </span>
                        <span class="stepContent">
                            Вы оплачиваете услугу, выбираете дату и время звонка
                        </span>
                    </div>
                    <span class="stepSeparator material-icons">
                        horizontal_rule
                    </span>
                    <div class="stepBlock">
                        <span class="stepHeader">
                            2
                        </span>
                        <span class="stepContent">
                            Эксперт заранее связывается с вами и выясняет, какая именно тема интересна в рамках консультации
                        </span>
                    </div>
                    <span class="stepSeparator material-icons">
                        horizontal_rule
                    </span>
                    <div class="stepBlock">
                        <span class="stepHeader">
                            3
                        </span>
                        <span class="stepContent">
                            Консультант в назначенное время звонит вам и общается в течение 1 часа. Ваш поиск работы выходит на новый уровень
                        </span>
                    </div>
                </div>
                <button class="btn btn-primary">
                    Заказать консультацию
                </button>
            </div>
            
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue' 
import Bar from '@/components/Bar.vue' 
import Footer from '@/components/Footer.vue' 

export default {
    name: 'Consultation',
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

    .consultation {
        display: flex;
        justify-content: center;
        margin: 75px 0px;

    }

    .consultationHeader {
        text-align: center;
        width: 40%;
    }

    .stepsBlock {
        display: flex;
        flex-direction: column;
    }

    .steps {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .stepBlock {
        display: flex;
        flex-direction: column;
        width: 20%;
        justify-content: center;
    }

    .stepHeader {
        color: rgb(215, 215, 215);
        font-size: 125px;
        font-weight: bolder;
        align-self: center;
    }

    .stepContent {
        text-align: center;
    }

    .stepsBlock > button {
        margin: 75px
    }

    .stepSeparator {
        align-self: center;
        color: rgb(0, 0, 255);
    }

    .createConsultation {
        box-sizing: border-box;
        padding: 25px;
        background-color: rgb(0, 175, 175);
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 85%;
        margin: 75px auto;
        border-radius: 25px;
    }

    .createConsultationBlock {
        color: rgb(255, 255, 255);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .createConsultationBlockHeader {
        font-size: 34px;
        font-weight: bolder;
        
    }

    .consultationsWithExpert {
        display: flex;
    }

    .consultationsWithExpertHeader {
        width: 40%;
        text-align: center;
    }

    .consultationsWithExpertContent {
        width: 60%;
    }

    .carrierPoster {
        display: flex;
        justify-content: center;
    }

    .consultationThemes {
        font-weight: bolder;
    }

</style>