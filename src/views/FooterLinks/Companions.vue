<template>
    <div>
        <Header />
        <Bar />
        <div>
            <div>
                <div class="mobileAppsPromotion">
                    <h1>
                        Привлечение пользователей мобильных приложений
                    </h1>
                </div>
                <div class="totalProgressbar">
                    <div class="progressbar">
                        <div class="progressbarItem">
                            Привлечение пользователей мобильных приложений
                        </div>
                        <div class="progressbarItem">
                            Привлечение пользователей мобильных приложений
                        </div>
                        <div class="progressbarItem">
                            Привлечение пользователей мобильных приложений
                        </div>
                        <div class="progressbarItem">
                            Привлечение пользователей мобильных приложений
                        </div>
                    </div>
                    <hr />
                    <div class="progressbar">
                        <div class="progressbarItem">
                            Привлечение пользователей мобильных приложений
                        </div>
                        <div class="progressbarItem">
                            Привлечение пользователей мобильных приложений
                        </div>
                        <div class="progressbarItem">
                            Привлечение пользователей мобильных приложений
                        </div>
                        <div class="progressbarItem">
                            Привлечение пользователей мобильных приложений
                        </div>
                    </div>
                </div>

                <p>
                    Мобильное направление — одно из приоритетных направлений нашей компании. В данный момент мы развиваем работодательские и соискательские приложения на операционных системах Android и iOS.
                </p>
                <p>
                    Важным фактором является привлечение реальной и заинтересованной аудитории, поэтому мы закупаем только немотивированный трафик.
                </p>
                <p>
                    Мы работаем по фиксированным по стоимости целям, в зависимости от поставленных в данный момент задач: либо CPA-, либо CPI-модели.
                </p>
                <p>
                    Основная система аналитики — AppMetrica, поэтому интеграция с этой системой будет несомненным плюсом.
                </p>
                <p class="header">
                    Мы заинтересованы работать по данному направлению в следующих странах:
                </p>
                <img src="https://hhcdn.ru/icms/10111962.svgz" alt="">
                <span>
                    — РФ;
                </span>
                <p class="header">
                    Условия
                </p>
                <p>
                    Возможность привлекать не менее 8 000 немотивированных установок в месяц.
                </p>
                <p>
                    Возможность заключения договора с российским юридическим лицом.
                </p>
                <button class="btn btn-primary">
                    Оставить заявку
                </button>
            </div>
            <div class="benefits">
                <div class="benefitsList">
                    <div class="benefit">
                        <div class="benefitLogo traffic"></div>
                        <span class="header">
                            30%
                        </span>
                        <span>
                            трафика<br/>
                            приводят на hh.ru наши партнеры
                        </span>
                    </div>
                    <div class="benefit">
                        <div class="benefitLogo app"></div>
                        <span class="header">
                            Workanaut —<br/>
                        </span>
                        <span>
                            лучшее мобильное приложение<br/>
                            по итогам конкурса «Золотое приложение» 2015
                        </span>
                    </div>
                </div>
            </div>
            <div class="companios">
                <h3>
                    Наши основные партнеры
                </h3>
                <div class="companiosList">
                    <img src="https://hhcdn.ru/icms/10113318.jpeg" width="175px" alt="">
                    <img src="https://hhcdn.ru/icms/10113319.jpeg" width="175px" alt="">
                </div>
            </div>
            <hr/>
            <div @click="$router.push({ name: 'Home' })" class="logo">
                hh
            </div>
            <p>
                © Группа компаний Workanaut, 2008 — 2021
            </p>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Bar from '@/components/Bar.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'About',
    components: {
        Header,
        Bar,
        Footer,
    }
}
</script>
<style scoped>
    .companios {
        text-align: center;   
    }
    
    .companiosList {
        display: flex;   
        justify-content: space-around;
    }

    .benefits {
        background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRivlzZLqraW10NqJohBwgiuCF4Cf93_QnALQ&usqp=CAU');
        background-size: cover;
        height: 350px;
    }

    .benefitsList {
        display: flex;
        justify-content: space-around;
    }

    .benefit {
        color: rgb(255, 255, 255);
    }

    .header {
        font-weight: bolder;
        font-size: 20px;
    }

    .benefitLogo {
        width: 125px;
        height: 125px;
        background-color: rgb(255, 255, 255);
        border-radius: 100%;
        background-size: 75% 75%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        border: 1px solid rgb(150, 0, 150);
    }

    .traffic {
        background-image: url('https://hhcdn.ru/icms/10114623.svgz');
    }

    .app {
        background-image: url('https://hhcdn.ru/icms/10114624.svgz');
    }

    .totalProgressbar {
        display: flex;
        flex-direction: column;
    }

    .progressbar {
        display: flex;
        text-align: center;
    }

    .progressbar:hover {
        color: rgb(0, 0, 255);
    }

    .mobileAppsPromotion {
        display: flex;
        align-items: center;
        justify-content: center;
        -webkit-filter: brightness(50px);
        color: rgb(200, 200, 200);
        background-image: url('https://c.stocksy.com/a/gre500/z9/1348728.jpg');
        height: 500px;
        background-size: cover;
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
        height: 45px;
        cursor: pointer;
    }

</style>