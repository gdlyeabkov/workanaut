<template>
    <div>
        <Header />
        <Bar />
        <div>
            <p class="breadcrumbs">
                Статьи › Новости рынка
            </p>            
            <h4>
                HR-новости
            </h4>
            <div class="projects">
                <div class="projectColumn">
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10231222.jpg" alt="">
                        <span class="link">
                            CRM Talantix пополнила список интеграций: «Хабр Карьера» стал седьмым job-сайтом в интерфейсе системы
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10211098.jpeg" alt="">
                        <span class="link">
                            Объявлены победители Премии HR-бренд 2019: поздравляем!
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10193647.jpeg" alt="">
                        <span class="link">
                            HeadHunter переносит награждение победителей Премии HR-бренд 2019
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10172553.jpeg" alt="">
                        <span class="link">
                            Школа программистов hh.ru выпустила готовых к работе ИТ-специалистов
                        </span>
                    </div>
                </div>
                <div class="projectColumn">
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10228560.jpg" alt="">
                        <span class="link">
                            Почему про компанию не знают кандидаты? 11 способов повысить узнаваемость бренда работодателя
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10206725.jpeg" alt="">
                        <span class="link">
                            Приглашаем на торжественную церемонию вручения Премии HR-бренд 2019!
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10191886.jpeg" alt="">
                        <span class="link">
                            «HR-перезагрузка» 2.0: переход на новый уровень
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="Итоги Рейтинга работодателей России" alt="">
                        <span class="link">
                            https://hhcdn.ru/icms/10166595.jpeg
                        </span>
                    </div>
                </div>
                <div class="projectColumn">
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10228234.jpg" alt="">
                        <span class="link">
                            Объявлены победители Премии HR-бренд — 2020
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10196395.jpeg" alt="">
                        <span class="link">
                            Работа HR в переходный период: эксперты делятся опытом
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10181729.jpeg" alt="">
                        <span class="link">
                            О чем говорили на саммите HR Digital 2019: несколько ярких цитат
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10166643.jpeg" alt="">
                        <span class="link">
                            Компания HeadHunter успешно интегрировала API СПАРК в корпоративную информационную систему
                        </span>
                    </div>
                </div>
                <div class="projectColumn">
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10223587.jpg" alt="">
                        <span class="link">
                            Облачная CRM Talantix первой в России внедрила технологии ИИ для рекрутинга
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10194359.jpeg" alt="">
                        <span class="link">
                            Профилактика COVID-19 в компаниях и другие полезные ссылки
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10181102.jpeg" alt="">
                        <span class="link">
                            7 директоров HeadHunter признаны лучшими в отрасли «Онлайн-платформы»
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10163196.jpeg" alt="">
                        <span class="link">
                            «HR-перезагрузка» неизбежна
                        </span>
                    </div>
                </div>
                <div class="projectColumn">
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10218996.jpg" alt="">
                        <span class="link">
                            О чем говорили на саммите HR Digital 2020: важные тренды, яркие цитаты
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10193941.jpeg" alt="">
                        <span class="link">
                            Петербургская «HR-перезагрузка 2.0» переносится
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10180166.jpeg" alt="">
                        <span class="link">
                            Зачем бежать со всех ног: программа саммита «HR Digital 2019»
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10163854.jpeg" alt="">
                        <span class="link">
                            Объявлены победители «Премии HR-бренд — 2018»
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
    .breadcrumbs {
        color: rgb(175, 175, 175);
        font-size: 12px;
    }

    .link {
        color: rgb(0, 0, 255);
        cursor: pointer;
    }

    .projectColumn {
        display: flex;
        flex-direction: column;
    }

    .project {
        display: flex;
        height: 250px;
        flex-direction: column;
        width: 250px;
    }

    .projects {
        display: flex;
        justify-content: space-around;
    }
</style>