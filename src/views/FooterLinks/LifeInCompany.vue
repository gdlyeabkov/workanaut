<template>
    <div>
        <Header />
        <Bar />
        <div>
            <p class="breadcrumbs">
                Статьи
            </p>            
            <h4>
                Жизнь в компании
            </h4>
            <div class="projects">
                <div class="projectColumn">
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10240821.jpg" alt="">
                        <span class="link">
                            IVI: жизнь за кадром
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10233091.jpg" alt="">
                        <span class="link">
                            Coca-Cola HBC Россия: как работают торговые представители
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10232467.jpg" alt="">
                        <span class="link">
                            Bilfinger Tebodin: растем и развиваемся вместе с сотрудниками
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10231244.jpg" alt="">
                        <span class="link">
                            ЕВРАЗ: вдохновляем делом
                        </span>
                    </div>
                </div>
                <div class="projectColumn">
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10240765.jpg" alt="">
                        <span class="link">
                            От первого лица: как работают в AB InBev Efes?
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10233079.jpg" alt="">
                        <span class="link">
                            Coca-Сola HBC Россия: женщины на производстве
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10230455.jpg" alt="">
                        <span class="link">
                            BELUGA GROUP: 5 шагов к карьере мечты
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10227510.jpg" alt="">
                        <span class="link">
                            ЦФТ глазами сотрудников
                        </span>
                    </div>
                </div>
                <div class="projectColumn">
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10238684.jpg" alt="">
                        <span class="link">
                            «Р-Фарм»: биотехнологии — это огромные перспективы
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10235596.jpg" alt="">
                        <span class="link">
                            ЕВРАЗ: плюсы инвестиций и бонусы релокаций
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10220836.jpg" alt="">
                        <span class="link">
                            5 принципов движения к цели в СИБУРе
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10229774.jpg" alt="">
                        <span class="link">
                            Orion Innovation: 5 принципов эффективной работы в ИТ-проектах
                        </span>
                    </div>
                </div>
                <div class="projectColumn">
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10236360.jpg" alt="">
                        <span class="link">
                            Как построить успешную карьеру: советы и лайфхаки от экспертов Mediascope
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10235865.jpg" alt="">
                        <span class="link">
                            Приглашаем в гости Mango Office
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10220015.jpg" alt="">
                        <span class="link">
                            Карьерный скалодром в СИБУРе
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10216361.jpeg" alt="">
                        <span class="link">
                            «Азбука вкуса»: кавист — особая профессия для харизматичных людей
                        </span>
                    </div>
                </div>
                <div class="projectColumn">
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10237209.jpg" alt="">
                        <span class="link">
                            «Зарубежнефть»: люди дороже нефти
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10163438.jpeg" alt="">
                        <span class="link">
                            Bilfinger Tebodin: открытость, вовлеченность и профессионализм
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10221440.jpg" alt="">
                        <span class="link">
                            СИБУР: правильный вопрос — ключ к карьере
                        </span>
                    </div>
                    <div class="project">
                        <img width="225px" src="https://hhcdn.ru/icms/10216945.jpg" alt="">
                        <span class="link">
                            «Азбука вкуса»: стабильно, перспективно, интересно
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
    name: 'LifeInCompany',
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