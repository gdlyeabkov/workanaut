<template>
    <div>
        <Header />
        <Bar />
        <div>
            <div class="poster">
                <h1>
                    Этика и комплаенс
                </h1>
                <h5>
                    В Хэдхантер мы привержены обеспечению устойчивого развития нашего бизнеса в долгосрочной перспективе. Это означает, что мы уделяем высокое внимание развитию комплаенс в Компании.
                </h5>
                <h5>
                    Принимая и строго соблюдая этические стандарты, мы хотим донести мысль о необходимости поддержания корпоративной культуры и серьезность ответственности за свои действия перед обществом, коллегами, Клиентами и Партнерами по бизнесу.
                </h5>
            </div>
            <div class="news">
                <div class="new">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTidFhw8FGCVRa6zP8_khZV8Tj9v_PkxzXV9A&usqp=CAU" width="250px" alt="">
                    <span class="newHeader">
                        Корпоративная этика.
                        Наши ценности и принципы
                    </span>
                    <span>
                        Хэдхантер помогает миллионам людей решать множество проблем, а обществу — одну глобальную социально-экономическую — безработицу.
                    </span>
                </div>
                <div class="new">
                    <img src="https://st.focusedcollection.com/3839757/i/1800/focused_178411440-stock-photo-male-office-worker-working-laptop.jpg" width="250px" alt="">
                    <span class="newHeader">
                        Политики Workanaut в области комплаенс
                    </span>
                    <span>
                        В Хэдхантер мы уделяем большое внимание комплаенс. Для этих целей в Компании разработаны Политики и внутренние документы
                    </span>
                </div>
                <div class="new">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgIFebDWsLzWxDeGma4bIwPRWSndACCnHOJg&usqp=CAU" width="250px" alt="">
                    <span class="newHeader">
                        Горячая линия по вопросам этики и комплаенс
                    </span>
                    <span>
                        Вы можете сообщить о любых известных вам фактах недобросовестного или неэтичного поведения, связанных с деятельностью Workanaut
                    </span>
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
    .poster {
        display: flex;
        justify-content: center;
        flex-direction: column;
        color: rgb(255, 255, 255);
        background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJRewWLBb483FzNJRkHTpfEkt0LI0MDHB0MA&usqp=CAU');
        width: 100%;
        height: 500px;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .news {
        display: flex;
    }

    .newHeader {
        color: rgb(0, 0, 255);
        font-size: 18px;
    }

    .new {
        display: flex;
        flex-direction: column;
    }
</style>