<template>
    <div>
        <Header />
        <Bar />
        <div>
            <h1>
                УСЛОВИЯ ОКАЗАНИЯ УСЛУГ
            </h1>
            <p class="attention">
                Внимание! С 07 сентября 2021 года вступает в силу 
                <span class="link">
                    новая редакция 
                </span>
                Условий оказания Услуг.
            </p>
            <p>     
                Настоящий текст Условий оказания Услуг действителен на момент подписания Договора и согласно Договору может быть изменен Исполнителем в одностороннем порядке путем размещения новой редакции настоящих Условий оказания Услуг на Сайте Исполнителя.
            </p>
            <p class="link">
                Развернуть весь текст условий
            </p>
            <p> 
                ОГЛАВЛЕНИЕ
            </p>
            <div class="attention">
                <p> 
                    1. ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ
                </p>
                <p>
                    2. ТИПЫ РЕГИСТРАЦИИ
                </p>
                <p>
                    3. ИНФОРМАЦИОННЫЕ УСЛУГИ
                </p>
                <p>
                    4. РЕКЛАМНЫЕ УСЛУГИ
                </p>
                <p>
                    5. КОНСУЛЬТАЦИОННЫЕ УСЛУГИ
                </p>
                <p>
                    6. КОНСУЛЬТАЦИОННЫЕ УСЛУГИ И ОРГАНИЗАЦИЯ УЧАСТИЯ В КОНКУРСАХ, ЯРМАРКАХ И ПРОЧИХ МЕРОПРИЯТИЯХ
                </p>
                <p>
                    7. ПАКЕТ УСЛУГ
                </p>
                <p>
                    8. ОБЪЕМ УСЛУГ
                </p>
                <p>
                    9. ГАРАНТИИ И ЗАВЕРЕНИЯ ЗАКАЗЧИКА
                </p>            
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
    .attention {
        font-weight: bolder;
        line-height: 10px;
    }

    .link {
        color: rgb(0, 0, 255);
        cursor: pointer;
    }
</style>