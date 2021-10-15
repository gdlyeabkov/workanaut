<template>
    <div>
        <Header />
        <Bar />
        <div>
            <button class="btn btn-success">
                Хочу узнать больше о работадателе
            </button>
            <div class="poster">
                <h2>
                    Карьера в hh.ru
                </h2>
                <h5>
                    Работа в офисах по всей России
                </h5>
                <input type="text" class="form-control" />
                <button class="btn btn-primary">
                    Найти
                </button>
            </div>
            <div class="links">
                <div>
                    <span>
                        Все направления
                    </span>
                    <hr />
                </div>
                <span>
                    Разработка
                </span>
                <span>
                    Продажи
                </span>
                <span>
                    Корпоративное управление и поддержка
                </span>
            </div>
            <div class="btnsContainer">
                <button class="btn btn-light">
                    Департамент коммерческих операций
                </button>
                <button class="btn btn-light">
                    Департамент маркетинга
                </button>
                <button class="btn btn-light">
                    IOS
                </button>
                <button class="btn btn-light">
                    QA
                </button>
                <button class="btn btn-light">
                    Analytics / DS
                </button>
                <button class="btn btn-light">
                    ИТ-департамент
                </button>
                <button class="btn btn-light">
                    Project management
                </button>
                <button class="btn btn-light">
                    Поддержка продаж
                </button>
                <button class="btn btn-light">
                    Backend
                </button>
                <button class="btn btn-light">
                    Департамент клиентского сопровождения
                </button>
            </div>
            <div>
                <span class="commands">
                    Команды без открытых вакансий 
                </span>
            </div>
            <div class="subject">
                <div>
                    <h1>
                        Почему у нас круто?
                    </h1>
                    <p>
                        Workanaut — третий по величине сервис для поиска работы в мире.
                        Вот уже 19 лет мы используем передовые технологии и ищем новые решения в сфере HR-tech, чтобы упростить жизнь миллионам.
                    </p>
                </div>
                <img width="500px" src="https://st2.depositphotos.com/1076754/5676/v/600/depositphotos_56769699-stock-illustration-cinema-or-theater-scene-with.jpg" alt="">
            </div>
            <div class="subject">
                <img width="500px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcvsQw9s-uI1-Xf6e17TTtFW8ymRdPksLLw&usqp=CAU" alt="">
                <div>
                    <h1>
                        Рабочий день
                    </h1>
                    <p>
                        У нас гибкий график работы, удобные рабочие места и зоны для уединенного отдыха, кухни с безлимитной едой и дружеское общение с коллегами. Нам важны результаты и эффективность, а не дисциплина и контроль. Мы не признаем дресс-код — будь собой и приходи на работу в том, в чем тебе нравится.
                    </p>
                </div>
            </div>
            <div class="subject">
                <div>
                    <h1>
                        Отдых
                    </h1>
                    <p>
                        Отдыхать мы умеем: ходим в походы, смотрим и обсуждаем кино, проводим ивенты, занимаемся йогой, футболом, настольным теннисом и греблей.
                    </p>
                </div>
                <img width="500px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnGpP6VMxvm_DZrNHO6FUCwe6lvu-vtytNQ&usqp=CAU" alt="">
            </div>
            <div class="subject">
                <img width="500px" src="https://guardian.ng/wp-content/uploads/2020/09/education.jpg" alt="">
                <div>
                    <h1>
                        Образование
                    </h1>
                    <p>
                        Мы постоянно делимся знаниями, проводим образовательные мероприятия, выступаем на конференциях и постоянно развиваемся. Обучение чаще всего происходит в формате живого общения в неформальной обстановке, а иногда мы приглашаем сторонних спикеров для проведения тренингов.
                    </p>
                </div>
            </div>
            <div class="subject">
                <div>
                    <h1>
                        Здоровье
                    </h1>
                    <p>
                        Заботимся о вашем здоровье, для всех сотрудников действует программа ДМС. К программе можно добавить родственников по корпоративному тарифу, застраховать свою жизнь и оформить полис для выезда за рубеж.
                    </p>
                </div>
                <img width="500px" src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Elementary_classroom_in_Alaska.jpg" alt="">
            </div>
            <div class="subject">
                <img width="500px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJ5FihvJfNzVjOy8-YnRP2mYScRni29Xrdw&usqp=CAU" alt="">
                <div>
                    <h1>
                        Экология
                    </h1>
                    <p>
                        В hh.ru поддерживают и продвигают эффективные экологические инициативы: мы собираем макулатуру, электроприборы, батарейки и пластик для утилизации.
                    </p>
                </div>
            </div>
            <hr />
            <div class="findYourselfVacansion">
                <span>
                    Хочешь присоединиться к нам? Найди открытые вакансии в hh.ru, информацию о командах и откликнись на самое интересное.
                </span>
                <button class="btn btn-success">
                    Найди свою вакансию
                </button>
            </div>
            <hr />
            <button class="btn btn-primary">
                Подписаться на новые вакансии
            </button>
            <hr />
            <div class="likes">
                <div class="btn btn-primary">
                    <span class="material-icons">
                        favorite
                    </span>
                    <span>
                        нравится
                    </span>
                </div>
                <div class="btn btn-primary">
                    <span class="material-icons">
                        thumb_up
                    </span>
                    <span>
                        нравится
                    </span>
                    <span>
                        355
                    </span>
                </div>
                <div class="btn btn-primary">
                    <span>
                        поделиться
                    </span>
                </div>
                <div class="btn btn-primary">
                    <span class="material-icons">
                        favorite
                    </span>
                    <span>
                        твитнуть
                    </span>
                </div>
            </div>
            <h3>
                Отзывы о компани
            </h3>
            <div class="responses">
                <div class="response">
                    <div>
                        <span class="ratio">
                            4,8
                        </span>
                        <span class="value">
                            отлично
                        </span>
                    </div>
                    <span>
                        Рейтинг Dream Job
                    </span>
                </div>
                <div class="response">
                    <div>
                        <span class="ratio">
                            100%
                        </span>
                    </div>
                    <span>
                        Рекомендуют работадателя
                    </span>
                </div>
                <div class="response leftResponsesBlock">
                    <div class="leftResponsesLabel">
                        Ваши отзывы помогают людям принимать взвешенные карьерные решения
                    </div>
                    <button class="btn btn-primary">
                        Оставить отзывы о компании
                    </button>
                </div>
            </div>
            <div>
                <h3>
                    Что говорят сотрудники
                </h3>
                <div class="reponses">
                    <div class="reponse">
                        <h5>
                            Отзыв сотрудника
                        </h5>
                        <div>
                            <span class="material-icons">
                                star
                            </span>
                            <span class="material-icons">
                                star
                            </span>
                            <span class="material-icons">
                                star
                            </span>
                            <span class="material-icons">
                                star
                            </span>
                            <span class="material-icons">
                                star
                            </span>
                        </div>
                        <span>
                            Работаю в компании
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
    .subject {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 50px 0px;
    }

    .subject > * {
        width: 35%;
    }

    .responses {
        display: flex;
        justify-content: space-around;
    }

    .response {

    }

    .ratio {
        font-weight: bolder;
        font-size: 24px;
        color: rgb(0, 0, 255);
    }
    .value{
        color: rgb(0, 0, 255);
    }

    .leftResponsesBlock {
        width: 450px;
        height: 150px;
        box-sizing: border-box;
        padding: 15px;
        box-shadow: 0 0 15px rgb(185, 185, 185);
    }

    .leftResponsesLabel {
        
    }

    .poster {
        background-image: url('https://www.citrix.com/content/citrix/ru-ru/global-partners/microsoft/office-365/jcr:content/content-par/layout_tool/column-17389-par/image/image.img.480.medium.jpg/1604946531576.jpg');
        height: 250px;
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .commands {
        color: rgb(0, 0, 255);
        text-decoration: underline;
        text-decoration-style: dashed;
    }
    
    .btnsContainer > button {
        border: 1px solid rgb(175, 175, 175);
        margin: 15px;
    }

    .links {
        height: 50px;
        background-color: rgb(235, 235, 235);
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .findYourselfVacansion {
        margin: auto;
        background-color: rgb(235, 235, 235);
        display: flex;
        justify-content: space-around;
        height: 150px;
        width: 85%;
        align-items: center;
    }

    .findYourselfVacansion > span {
        width: 50%;
    }

    .likes {
        display: flex;
        justify-content: space-around;
        width: 35%;
    }

    .likes > * {
        height: 25px;
        display: flex;
        width: 100px;
        align-items: center;
    }

    .likes > * > * {
        font-size: 10px;
        margin: 0px 1px;
    }

</style>