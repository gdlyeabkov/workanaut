<template>
    <div>
        <Header />
        <Bar />
        <div>
            <div class="apiPoster">
                <div class="apiPosterBlock">
                    <h1>
                        Workanaut API
                    </h1>
                    <h5>
                        С помощью Workanaut API вы можете получать информацию о соискателях и компаниях, а также использовать функциональность Workanaut для своего сайта или приложения.
                    </h5>
                    <button class="btn btn-primary">
                        Как работает Workanaut API
                    </button>
                </div>
            </div>
            <div class="apiBlocks">
                <div class="apiBlock">
                    <img src="https://aradha.in/images/logo.png" width="175px" alt="">
                    <h4>
                        Виджеты вакансий
                    </h4>
                    <span>
                        Поможет разместить на вашем сайте блок с вакансиями вашей компании
                    </span>
                </div>
                <div class="apiBlock">
                    <img width="175px" src="https://zametkinapolyah.ru/wp-content/uploads/2016/06/html_code-512.png" alt="">
                    <h4>
                        Документация
                    </h4>
                    <span>
                        Общая информация по API
                    </span>
                </div>
                <div class="apiBlock">
                    <img src="https://cdn.pngsumo.com/css-html-html-tag-javascript-jquery-php-tag-icon-html-element-png-512_512.png" width="175px" alt="">
                    <h4>
                        OAuth-авторизация
                    </h4>
                    <span>
                        Доступ к данным без получения и хранения логина и пароля пользователя
                    </span>
                </div>
            </div>
            <div class="apiYet">
                <h3>
                    Уже используют Workanaut API
                </h3>
                <div class="apiYetWho">
                    <span>              
                        Мобильные приложения hh.ru на базе iOS, Android и WinPhone
                    </span>
                    <span>
                        Онлайн проект мероприятий по подбору сотрудников       
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
    
    .apiBlocks {
        display: flex;
        justify-content: space-around;
    }

    .apiBlock {
        text-align: center;
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .apiYet {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }

    .apiYetWho {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

    .apiPoster {
        width: 100%;
        height: 500px;
        background-image: url('https://s7e3a.scene7.com/is/image/hitachiabbpowergrids/data-centers-2800x1280?wid=1440&hei=658&fmt=png-alpha&fit=crop%2C1');
        background-size: cover;
        color: rgb(235, 235, 235);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .apiPosterBlock {
        width: 50%;
        
    }

</style>