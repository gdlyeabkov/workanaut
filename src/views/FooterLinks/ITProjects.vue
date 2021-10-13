<template>
    <div>
        <Header />
        <Bar />
        <div>
            <p class="breadcrumbs">
                Статьи › Соискателям    
            </p>            
            <h4>
                ИТ-проекты
            </h4>
            <div class="projects">
                <div class="projectColumn">
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10236839.jpg" alt="">
                        <span class="link">
                            Специалист по нагрузочному тестированию в Veeam Software: мир больших чисел и дымящихся серверов
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10228947.jpg" alt="">
                        <span class="link">
                            Что за человек такой — инженер Technical Customer Support в Veeam Software?
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10209789.jpeg" alt="">
                        <span class="link">
                            HeadHunter ищет разработчиков
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10187693.jpeg" alt="">
                        <span class="link">
                            РАД: разработка, тестирование и DevOps для масштабных госзакупок
                        </span>
                    </div>
                </div>
                <div class="projectColumn">
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10231707.jpg" alt="">
                        <span class="link">
                            ЕВРАЗ: цифровые решения в промышленности
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10225372.jpg" alt="">
                        <span class="link">
                            Цифровая революция «Леруа Мерлен»
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10198127.jpeg" alt="">
                        <span class="link">
                            Hoff: как ИТ-команда двигает мебельный ретейл
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10187928.jpeg" alt="">
                        <span class="link">
                            Карьерный квиз от ИТ ВТБ
                        </span>
                    </div>
                </div>
                <div class="projectColumn">
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10232489.jpg" alt="">
                        <span class="link">
                            Команда IoT Intel: наши технологии меняют мир
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10223621.jpg" alt="">
                        <span class="link">
                            Страховой Дом ВСК: строим технологическую компанию
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10195577.jpeg" alt="">
                        <span class="link">
                            «М.Видео-Эльдорадо»: Data Science, High Load и продуктовая разработка
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10184655.jpeg" alt="">
                        <span class="link">
                            В финтех? В FinPay!
                        </span>
                    </div>
                </div>
                <div class="projectColumn">
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10231640.jpg" alt="">
                        <span class="link">
                            Boxberry: эффективность, инновационность и работа в команде
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10216351.jpeg" alt="">
                        <span class="link">
                            Intel: «Мы работаем с технологиями, которые опережают время»
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10191523.jpeg" alt="">
                        <span class="link">
                            «ВсеИнструменты.ру»: большие возможности, высокие требования и суперкоманда
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10183243.jpeg" alt="">
                        <span class="link">
                            goods.ru в тренде: свобода, технологии, решения
                        </span>
                    </div>
                </div>
                <div class="projectColumn">
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10229290.jpg" alt="">
                        <span class="link">
                            Банк «Санкт-Петербург»: гибкий, устойчивый, цифровой
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10209601.jpeg" alt="">
                        <span class="link">
                            РТ МИС: ИТ-системы для медицины
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10189132.jpeg" alt="">
                        <span class="link">
                            ИТ HEINEKEN: Новые технологии, лучшие мировые практики
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10172017.jpeg" alt="">
                        <span class="link">
                            «Петрович» ИТ: сильная команда, сложные задачи и поддержка от бизнеса
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