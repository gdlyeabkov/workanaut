<template>
    <div>
        <Header />
        <Bar />
        <div>
            <div>
                <h2>
                    Безопасный Workanaut
                </h2>
                <p>
                    Узнайте, как обезопасить себя при поиске работы, сохранив личную информацию и деньги.
                </p>
                <div class="news">
                    <div class="new">
                        <img src="https://hhcdn.ru/icms/10128837.jpeg" width="250px" alt="">
                        <span class="newHeader">
                            Сайты-клоны hh.ru
                        </span>
                        <span>
                            Сайты, маскирующиеся под сайт hh.ru.
                        </span>
                        <span class="details">
                            Подробнее
                        </span>
                    </div>
                    <div class="new">
                        <img src="https://hhcdn.ru/icms/10128838.jpeg" width="250px" alt="">
                        <span class="newHeader">
                            Фальшивые электронные письма
                        </span>
                        <span>
                            Злоумышленники рассылают электронные письма, подписываясь именем компании Workanaut.
                        </span>
                        <span class="details">
                            Подробнее
                        </span>
                    </div>
                    <div class="new">
                        <img src="https://hhcdn.ru/icms/10128839.jpeg" width="250px" alt="">
                        <span class="newHeader">
                            Недобросовестные работодатели
                        </span>
                        <span>
                            Как вычислить мошенников и недобросовестных работодателей.
                        </span>
                        <span class="details">
                            Подробнее
                        </span>
                    </div>
                    <div>
                        <span>
                            Столкнувшись с другими действиями злоумышленников, связанными с hh.ru, пожалуйста, напишите нам об этом по адресу: anti-phishing@hh.ru
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
    .news {
        display: flex;
        justify-content: space-between;
    }

    .newHeader {
        font-size: 18px;
        font-weight: bolder;
    }

    .details {
        cursor: pointer;
        color: rgb(0, 0, 255);
    }

    .new {
        display: flex;
        flex-direction: column;
        width: 35%;
    }
</style>