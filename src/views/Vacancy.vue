<template>
    <div>
        <Header :currentPage="'Прикрелплённая'" :auth="false"/>
        <div>
            <div class="bar">
                <div class="barItem">
                <div class="logo">
                    hh
                </div>
                <span class="help">
                    Помощь
                </span>
                </div>
                <div class="barItem">
                <span>
                    Поиск
                </span>
                <button class="withoutBackgroundBtn createResumeBtn">
                    Создать резюме
                </button>
                <button class="withoutBackgroundBtn loginBtn">
                    Войти
                </button>
                </div>
            </div>
            <div class="sidebar">
                <span class="profession">
                    HR-менеджер/Ведущий менеджер по подбору и адаптации персонала/Рекрутер
                </span>
                <span class="salary">
                    от 50 000 до 80 000 руб. на руки
                </span>
                <span class="companyName">
                    ООО Хэндимен
                </span>
                <span class="companyPlace">
                    Москва, улица Большая Якиманка, 35с1
                </span>
                <span>
                    Сейчас эту вакансию смотрят <span class="watchOthers">{{ "3" }} человека</span>
                </span>
                <div class="actions">
                    <button @click="click()" class="btn btn-primary">
                        Откликнуться
                    </button>
                    <button @click="showContacts()" class="btn btn-primary">
                        Показать контакты
                    </button>
                    <button @click="favorite()" class="btn btn-primary">
                        *
                    </button>
                    <button @click="block()" class="btn btn-primary">
                        0
                    </button>
                </div>
                <span>
                    Требуемый опыт работы: не требуется
                </span>
                <span>
                    Полная занятость, полный день
                </span>
                <span>
                    В компанию ООО «Хэндимен» - требуются грузчики. Мы являемся прямым работодателем в сфере организации переездов, погрузо-разгрузочных работ, сборки мебели и стеллажей.
                </span>
                <span>
                    Что мы предлагаем Вам:
                </span>
                <ul>
                    <li>
                        Постоянную работу или подработки - гибкий график;
                    </li>
                    <li>
                        Почасовая оплата (минимальная выплата 900р);
                    </li>
                    <li>
                        Стабильная зарплата - деньги выплачиваются стабильно один раз в календарную неделю, но для новых сотрудников возможна оплата ежедневно в течение первых 7 дней работы;
                    </li>
                    <li>
                        Принимаем и обучаем без опыта работы;
                    </li>
                    <li>
                        Ставка от 225 до 300 р. в час, также возможны премии по отработке 20 часов/40 часов в календарную неделю (500 и 1000 руб, соответственно);
                    </li>
                </ul>
                <span>
                    Можем предложить различные объекты:
                </span>
                <ul>
                    <li>
                        Работа на складах со стандартным графиком 5/2 (смена 8 часов - выплаты от 1800 до 2000 руб. за смену);
                    </li>
                    <li>
                        Ночные работы на складах и съемочных площадках ТВ Шоу (смена от 10 до 24 часов, выплаты от 2300 до 6000 руб. за смену);
                    </li>
                    <li>
                        Выполнение функций разнорабочих при отделке помещений в офисных зданиях (смена от 8 часов до 12 часов, выплата от 1800 руб. до 3000 руб.);
                    </li>
                </ul>
                <span>
                    Ваши обязанности:
                </span>
                <ul>
                    <li>
                        Погрузо-разгрузочные работы на складах; • Разгрузка/погрузка фур, контейнеров, автомобилей;
                    </li>
                    <li>
                        Квартирные и офисные переезды;
                    </li>
                    <li>
                        Сборка/разборка мебели и стеллажей
                    </li>
                </ul>
                <span>
                    Наши требования к кандидатам:
                </span>
                <ul>
                    <li>
                        Ответственность;
                    </li>
                    <li>
                        Пунктуальность;
                    </li>
                    <li>
                        Готовность к физическому труду;
                    </li>
                    <li>
                        Грамотная речь;
                    </li>
                </ul>
                <span class="aboutSkills">
                    Ключевые навыки
                </span>
                <div class="skills">
                    <span>
                        Пользователь ПК
                    </span>
                    <span>
                        Грамотная речь
                    </span>
                    <span>
                        Первичные документы
                    </span>
                    <span>
                        Умение работать в команде
                    </span>
                </div>
                <span>
                    Контактная информация
                </span>
                <span>
                    Адрес
                </span>
                <span>
                    Москва, улица Большая Якиманка, 35с1
                </span>
                <span>
                    Вакансия опубликована 5 октября 2021 в Москве
                </span>
                <span>
                    Вам подойдут эти вакансии
                </span>
                <div class="sameVacancies">
                    s
                </div>
                
                
            </div>
            <div class="notification">
                <div class="message">
                    <span class="messageHeader">
                        Похожие вакансии
                    </span>
                    <span>
                        HR Менеджер по подбору персонала и адаптации
                    </span>
                    <span>
                        з/п не указана
                    </span>
                    <span>
                        Инттерра, Москва
                    </span>
                    <span>
                        Менеджер по подбору и адаптации/HR менеджер
                    </span>
                    <span>
                        з/п не указана
                    </span>
                    <span>
                        Roistat, Москва
                    </span>
                    <span>
                        2 197 похожих вакансий
                    </span>
                </div>   
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Vacancies',
    data(){
        return {
            
        }
    },
    components: {
        Header,
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
    
    .sidebar, .notification {
        float: left;
        height: 375px;
    }

    .sidebar {
        width: 65%;
        display: flex;
        box-sizing: border-box;
        padding: 25px;
        flex-direction: column;
    }

    .notification {
        width: 25%;
    }

    .message {
        display: flex;
        flex-direction: column;
        position: relative;
        top: calc(100% - 175px);
        left: 0px;
        z-index: 2;
        height: 175px;
        width: 350px;
    }

    .messageHeader {
        font-weight: bolder;
        font-size: 28px;
    }

    .profession {
        font-weight: bolder;
        font-size: 24px;
    }
    
    .companyName {
        color: rgb(0, 0, 255);
        font-size: 24px;
    }

    .companyPlace {
        color: rgb(0, 0, 255);
    }

    .salary {
        font-size: 24px;
    }

    .watchOthers {
        color: rgb(255, 0, 0);
    }

    .actions {
        display: flex;
        justify-content: space-between;
        width: 375px;
    }

    .aboutSkills {
        font-weight: bolder;
    }

</style>