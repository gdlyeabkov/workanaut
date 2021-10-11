<template>
    <div>
        <Header :currentPage="'Готовое резюме'" :auth="false" />
        <div>
            <Bar />
            <div class="interview">
                <div class="interviewHeader">
                    <div class="interviewHeaderItem interviewHeaderItemContent">
                        <h2>
                            Получите больше приглашений на интервью
                        </h2>
                        <p>
                            Наши эксперты создают резюме, которые открывают двери
                        </p>
                        <button class="btn btn-primary">
                            Заказать резюме
                        </button>
                    </div>
                    <div class="interviewHeaderItem interviewPoster">
                        <img width="375px" src="https://hhcdn.ru/icms/10194759.svg" alt="" />
                    </div>
                </div>
            </div>
            <div class="aboutInterview">
                <h1>
                    В каких случаях сервис особенно полезен?
                </h1>
                <p class="">
                    Рассмотрим ситуации, когда к созданию резюме стоит привлечь профессионала
                </p>
            </div>
            <div class="aboutInterviewContainer">
                <div class="aboutInterviewRow">
                    <div class="aboutInterviewRowItem">
                        <span class="material-icons aboutInterviewRowItemPoster">
                            receipt_long
                        </span>
                        <div class="aboutInterviewRowItemContent">
                            <h3>
                                Лучший результат за короткое время
                            </h3>
                            <span>
                                Создание качественного резюме требует максимальной включенности и порой отнимает много времени. Если вы хотите в кратчайшие сроки получить резюме, в котором будете уверены, доверьте его составление нашим карьерным экспертам.
                            </span>
                        </div>
                    </div>
                    <div class="aboutInterviewRowItem">
                        <span class="material-icons aboutInterviewRowItemPoster">
                            palette
                        </span>
                        <div class="aboutInterviewRowItemContent">
                            <h3>
                                Изменение профессиональной деятельности
                            </h3>
                            <span>
                                Если вы планируете пересмотреть вектор карьерного развития, особенно важно правильно составить резюме, чтобы привлечь внимание нужных вам работодателей. А консультация эксперта поможет выстроить самопрезентацию и подготовить ответы на сложные вопросы.
                            </span>
                        </div>
                    </div>
                </div>
                <div class="aboutInterviewRow">
                    <div class="aboutInterviewRowItem">
                        <span class="material-icons aboutInterviewRowItemPoster">
                            leaderboard
                        </span>
                        <div class="aboutInterviewRowItemContent">
                            <h3>
                                Карьерный рост
                            </h3>
                            <span>
                                Если вы стремитесь к качественному изменению карьеры — в вашей специализации, или с ростом по карьерной лестнице — важно иметь отличное резюме, в полной мере презентующее вас как профессионала.
                            </span>
                        </div>
                    </div>
                    <div class="aboutInterviewRowItem">
                        <span class="material-icons aboutInterviewRowItemPoster">
                            circle
                        </span>
                        <div class="aboutInterviewRowItemContent">
                            <h3>
                                Выход на рынок труда
                            </h3>
                            <span>
                                Наши эксперты — отличные наставники в поиске первой работы или поиске работы после длительного перерыва. Они подготовят эффективное резюме и помогут составить грамотный план действий.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="howItWork">
                <h1>
                    Как это работает?
                </h1>
                <div class="howItWorkItem">
                    <div class="howItWorkSteps">
                        <div class="howItWorkStep">
                            <div class="step">
                                1
                            </div>
                            <span class="stepContent">
                                Обсуждаем ваши профессиональные навыки, компетенции и желаемую должность
                            </span>
                        </div>
                        <div class="howItWorkStep">
                            <div class="step">
                                2
                            </div>
                            <span class="stepContent">
                                Составляем резюме и сопроводительное письмо. Также готовы провести дополнительную карьерную консультацию
                            </span>
                        </div>
                        <div class="howItWorkStep">
                            <div class="step">
                                3
                            </div>
                            <span class="stepContent">
                                В течение 4 рабочих дней вы получаете готовый документ. Резюме и сопроводительное письмо будут направлены на ваш email и появятся в личном кабинете hh.ru в разделе «Мои резюме»
                            </span>
                        </div>
                        <div class="howItWorkStep">
                            <div class="step">
                                4
                            </div>
                            <span class="stepContent">
                                Ваше резюме работает на вас и привлекает внимание HR-специалистов. Удачи в поиске!
                            </span>
                        </div>
                    </div>
                    <img width="375px" src="https://hhcdn.ru/icms/10194759.svg" alt="" />
                </div>
            </div>
            <div>
                <div class="ratesContainer">
                    <h3>
                        Тарифы «Готовое резюме»
                    </h3>
                    <div class="rates">
                        <div class="rateContainer rateBase">
                            <div class="rateHeaderBlock">
                                <span class="rateHeader">
                                    Базовый
                                </span>
                                <span>
                                    Минимум для быстрого и успешного старта
                                </span>
                                <span class="rateCost">
                                    3 500 руб.
                                </span>
                                <button class="withoutBackgroundBtn createResumeBtn btn btn-primary">
                                    Заказать
                                </button>
                            </div>
                            <div class="rateBody">
                                <div class="rateBenefit">
                                    <span class="material-icons rateBenefitPoster">
                                        done
                                    </span>
                                    <div class="rateBenefitContent">
                                        <span class="rateBenefitContentHeader">
                                            Составление резюме
                                        </span>
                                        <span class="rateBenefitContentBody">
                                            В резюме отражены ключевые характеристики вашего опыта, чтобы привлечь внимание работодателей
                                        </span>
                                        <hr />
                                        <span class="rateBenefitContentBody">
                                            Резюме составляет эксперт, который знает, как отбирают кандидатов работодатели
                                        </span>
                                        <hr />
                                        <span class="rateBenefitContentBody">
                                            Резюме оптимизировано под поисковые запросы работодателей
                                        </span>
                                        <hr />
                                        <div class="rateBenefitContentClosableBlock">
                                            <span class="material-icons">
                                                close
                                            </span>
                                            <span class="rateBenefitContentClosable">
                                                Сопроводительное письмо
                                            </span>
                                        </div>
                                        <hr />
                                        <div class="rateBenefitContentClosableBlock">
                                            <span class="material-icons">
                                                close
                                            </span>
                                            <span class="rateBenefitContentClosable">
                                                Консультация по поиску работы
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rateContainer rateOptimal">
                            <div class="rateHeaderBlock">
                                <span class="rateHeader">
                                    Оптимальный
                                </span>
                                <span>
                                    Необходимый набор инструментов для эффективного поиска
                                </span>
                                <span class="rateCost">
                                    4 100 руб.
                                </span>
                                <button class="withoutBackgroundBtn createResumeBtn btn btn-primary">
                                    Заказать
                                </button>
                            </div>
                            <div class="rateBody">
                                <div class="rateBenefit">
                                    <span class="material-icons rateBenefitPoster">
                                        done
                                    </span>
                                    <div class="rateBenefitContent">
                                        <span class="rateBenefitContentHeader">
                                            Составление резюме
                                        </span>
                                        <span class="rateBenefitContentBody">
                                            В резюме отражены ключевые характеристики вашего опыта, чтобы привлечь внимание работодателей
                                        </span>
                                        <hr />
                                        <span class="rateBenefitContentBody">
                                            Резюме составляет эксперт, который знает, как отбирают кандидатов работодатели
                                        </span>
                                        <hr />
                                        <span class="rateBenefitContentBody">
                                            Резюме оптимизировано под поисковые запросы работодателей
                                        </span>
                                        <hr />
                                    </div>
                                </div>
                                <div class="rateBenefit">
                                    <span class="material-icons rateBenefitPoster">
                                        done
                                    </span>
                                    <div class="rateBenefitContent">
                                        <span class="rateBenefitContentHeader">
                                            Составление резюме
                                        </span>
                                        <hr />
                                        <span class="rateBenefitContentBody">
                                            Составляется для отклика в конкретную компанию
                                        </span>
                                        <hr />
                                        <span class="rateBenefitContentBody">
                                            Отражает ваши уникальные преимущества
                                        </span>
                                        <hr />
                                        <div class="rateBenefitContentClosableBlock">
                                            <span class="material-icons">
                                                close
                                            </span>
                                            <span class="rateBenefitContentClosable">
                                                Консультация по поиску работы
                                            </span>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rateContainer rateMax">
                            <div class="rateHeaderBlock">
                                <span class="rateHeader">
                                    Максимальный
                                </span>
                                <span>
                                    Экспертная поддержка для достижения наилучшего результата
                                </span>
                                <span class="rateCost">
                                    6 900 руб.
                                </span>
                                <button class="withoutBackgroundBtn createResumeBtn btn btn-primary">
                                    Заказать
                                </button>
                            </div>
                            <div class="rateBody">
                                <div class="rateBenefit">
                                    <span class="material-icons rateBenefitPoster">
                                        done
                                    </span>
                                    <div class="rateBenefitContent">
                                        <span class="rateBenefitContentHeader">
                                            Составление резюме
                                        </span>
                                        <span class="rateBenefitContentBody">
                                            В резюме отражены ключевые характеристики вашего опыта, чтобы привлечь внимание работодателей
                                        </span>
                                        <hr />
                                        <span class="rateBenefitContentBody">
                                            Резюме составляет эксперт, который знает, как отбирают кандидатов работодатели
                                        </span>
                                        <hr />
                                        <span class="rateBenefitContentBody">
                                            Резюме оптимизировано под поисковые запросы работодателей
                                        </span>
                                        <hr />
                                        
                                    </div>
                                </div>
                                <div class="rateBenefit">
                                    <span class="material-icons rateBenefitPoster">
                                        done
                                    </span>
                                    <div class="rateBenefitContent">
                                        <span class="rateBenefitContentHeader">
                                            Составление резюме
                                        </span>
                                        <hr />
                                        <span class="rateBenefitContentBody">
                                            Составляется для отклика в конкретную компанию
                                        </span>
                                        <hr />
                                        <span class="rateBenefitContentBody">
                                            Отражает ваши уникальные преимущества
                                        </span>
                                        <hr />  
                                    </div>
                                </div>
                                <div class="rateBenefit">
                                    <span class="material-icons rateBenefitPoster">
                                        done
                                    </span>
                                    <div class="rateBenefitContent">
                                        <span class="rateBenefitContentHeader">
                                            Консультация по поиску работы
                                        </span>
                                        <span class="rateBenefitContentBody">
                                            Экспертное мнение о правильном позиционировании себя на рынке труда
                                        </span>
                                        <hr />
                                        <span class="rateBenefitContentBody">
                                            Проработка стратегии поиска
                                        </span>
                                        <hr />
                                        <span class="rateBenefitContentBody">
                                            Работающие формулы для успешного прохождения собеседования
                                        </span>
                                        <hr />  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="commentsHeaderBlock">
                <span class="commentsHeader">
                    Нужна карьерная консультация?
                </span>
                <span>
                    Вы можете дополнительно воспользоваться услугой Карьерная консультация
                </span>
            </div>
            <div class="carrierContainer">
                <div class="carrierBlock">
                    <img width="350px" src="https://hhcdn.ru/icms/10194759.svg" alt="" />
                    <div class="carrierBlockItem">
                        <span class="carrierBlockItemHeader">
                            Карьерная консультация
                        </span>
                        <span>
                            ПРОДОЛЖИТЕЛЬНОСТЬ ДО 1 ЧАСА
                        </span>
                        <span>
                            Поможем разобраться в том, как искать работу
                        </span>
                    </div>
                    <div class="carrierBlockItem">
                        <span class="carrierBlockItemHeader">
                            3 500 руб.
                        </span>
                        <button class="btn btn-primary">
                            Заказать консультацию
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div class="commentsHeaderBlock">
                    <span class="commentsHeader">
                        Отзывы наших клиентов
                    </span>
                    <span>
                        Рассказываем с чем пришли, что сделали и какие результаты получили
                    </span>
                </div>
                <div class="comments">
                    <div class="comment">
                        <span class="commentHeader">
                            Мария
                        </span>
                        <div>
                            <span class="commentAuthor">
                                Эксперт
                            </span>
                            <span>
                                Мария Оборина
                            </span>
                        </div>
                        <div class="ratioContainer">
                            <span class="ratio material-icons">
                                star
                            </span>
                            <span class="ratio material-icons">
                                star
                            </span>
                            <span class="ratio material-icons">
                                star
                            </span>
                            <span class="ratio material-icons">
                                star
                            </span>
                            <span class="ratio material-icons">
                                star
                            </span>
                        </div>
                        <div class="commentContent">
                            <span>
                                Впервые за 2,5 года начала искать работу, было много неуверенности в том, как это делать. Долго искала, не получала приглашения, не понимала. Что именно искать.
                            </span>
                        </div>
                    </div>
                    <div class="comment">
                        <span class="commentHeader">
                            Ольга
                        </span>
                        <div>
                            <span class="commentAuthor">
                                Эксперт
                            </span>
                            <span>
                                Юлия Еремеева
                            </span>
                        </div>
                        <div class="ratioContainer">
                            <span class="ratio material-icons">
                                star
                            </span>
                            <span class="ratio material-icons">
                                star
                            </span>
                            <span class="ratio material-icons">
                                star
                            </span>
                            <span class="ratio material-icons">
                                star
                            </span>
                            <span class="ratio material-icons">
                                star
                            </span>
                        </div>
                        <div class="commentContent">
                            <span>
                                Впервые за 2,5 года начала искать работу, было много неуверенности в том, как это делать. Долго искала, не получала приглашения, не понимала. Что именно искать.
                            </span>
                            <span class="commentDetail">
                                Подробнее
                            </span>
                        </div>
                    </div>
                    <div class="comment">
                        <span class="commentHeader">
                            Юлия
                        </span>
                        <div>
                            <span class="commentAuthor">
                                Эксперт
                            </span>
                            <span>
                                Олеся Помазкина
                            </span>
                        </div>
                        <div class="ratioContainer">
                            <span class="ratio material-icons">
                                star
                            </span>
                            <span class="ratio material-icons">
                                star
                            </span>
                            <span class="ratio material-icons">
                                star
                            </span>
                            <span class="ratio material-icons">
                                star
                            </span>
                            <span class="ratio material-icons">
                                star
                            </span>
                        </div>
                        <div class="commentContent">
                            <span>
                                Впервые за 2,5 года начала искать работу, было много неуверенности в том, как это делать. Долго искала, не получала приглашения, не понимала. Что именно искать.
                            </span>
                        </div>
                    </div>
                </div>
                <div class="commentsPaginator">
                    <div class="paginator">
                        <span class="material-icons">
                            chevron_left
                        </span>
                        <span class="material-icons">
                            chevron_right
                        </span>
                    </div>
                    <button class="btn btn-primary">
                        Оставить свой отзыв
                    </button>
                </div>
            </div>
            <div>
                
                <div class="paginator">
                    <span class="material-icons">
                        chevron_left
                    </span>
                    <span class="material-icons">
                        chevron_right
                    </span>
                </div>
            </div>
            <div class="expertsContainer">
                <span class="commentsHeader">
                    Наши эксперты
                </span>
                <span class="commentsHeaderBlock">
                    Карьерные эксперты hh.ru — люди с многолетним опытом работы в карьерном консультировании и подборе персонала. Составили уже более 100 000 резюме
                </span>
            </div>
            <div class="expertsBlock">
                <div class="expertsBlockItem">
                    <div class="expert">
                        <span class="commentHeader">
                            Анастасия Воропаева
                        </span>
                        <div class="expertLogo recrutment">

                        </div>
                    </div>
                    <div class="commentContent">
                        <span>
                            Впервые за 2,5 года начала искать работу, было много неуверенности в том, как это делать. Долго искала, не получала приглашения, не понимала. Что именно искать.
                        </span>
                    </div>
                </div>
                <div class="expertsBlockItem">
                    <div class="expert">
                        <span class="commentHeader">
                            Светлана Кондратьева
                        </span>
                        <div class="expertLogo hr">

                        </div>
                    </div>
                    <div class="commentContent">
                        <span>
                            Впервые за 2,5 года начала искать работу, было много неуверенности в том, как это делать. Долго искала, не получала приглашения, не понимала. Что именно искать.
                        </span>
                    </div>
                </div>
                <div class="expertsBlockItem">
                    <div class="expert">
                        <span class="commentHeader">
                            Алексей Гаряев
                        </span>
                        <div class="expertLogo proffesional">

                        </div>
                    </div>
                    <div class="commentContent">
                        <span>
                            Впервые за 2,5 года начала искать работу, было много неуверенности в том, как это делать. Долго искала, не получала приглашения, не понимала. Что именно искать.
                        </span>
                    </div>
                </div>
            </div>
            <div class="qAndAContainer">
                <h1>
                    Вопросы и ответы
                </h1>
                <div class="questions">
                    <div class="questionColumn">
                        <div class="questionRow">
                            <span class="question">
                                Как выглядит процесс составления резюме и что я получу в итоге?
                            </span>
                            <span class="material-icons">
                                expand_more
                            </span>
                        </div>
                        <hr/>
                    </div>
                    <div class="questionColumn">
                        <div class="questionRow">
                            <span class="question">
                                Какие темы можно обсуждать на консультации по поиску работы?
                            </span>
                            <span class="material-icons">
                                expand_more
                            </span>
                        </div>
                        <hr/>
                    </div>
                    <div class="questionColumn">
                        <div class="questionRow">
                            <span class="question">
                                Когда будет интервью с экспертом?
                            </span>
                            <span class="material-icons">
                                expand_more
                            </span>
                        </div>
                        <hr/>
                    </div>
                    <div class="questionColumn">
                        <div class="questionRow">
                            <span class="question">
                                Когда я получу готовое резюме и сопроводительное письмо?
                            </span>
                            <span class="material-icons">
                                expand_more
                            </span>
                        </div>
                        <hr/>
                    </div>
                    <div class="questionColumn">
                        <div class="questionRow">
                            <span class="question">
                                Кто эксперты и как выбрать конкретного?
                            </span>
                            <span class="material-icons">
                                expand_more
                            </span>
                        </div>
                        <hr/>
                    </div>
                    <div class="questionColumn">
                        <div class="questionRow">
                            <span class="question">
                                Я оплатил услугу и передумал
                            </span>
                            <span class="material-icons">
                                expand_more
                            </span>
                        </div>
                        <hr/>
                    </div>
                    <div class="questionColumn">
                        <div class="questionRow">
                            <span class="question">
                                Что делать, если меня не устроило качество услуги?
                            </span>
                            <span class="material-icons">
                                expand_more
                            </span>
                        </div>
                        <hr/>
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
    name: 'NeedResume',
    components: {
        Header,
        Bar,
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

    .interview {
        display: flex;
        justify-content: center;
    }

    .interviewHeader {
        display: flex;
        justify-content: space-around;
        
    }

    .interviewHeaderItem {
        width: 35%;
    }

    .interviewHeaderItemContent {
        width: 48%;
        
    }

    .interviewPoster {

    }

    .aboutInterview {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .aboutInterviewContainer {
        
    }

    .aboutInterviewRow {
        display: flex;
    }
    
    .aboutInterviewRowItem {
        display: flex;
        width: 45%;
    }

    .aboutInterviewRowItemContent {
        display: flex;
        flex-direction: column;
    }

    .aboutInterviewRowItemPoster {
        align-self: center;
        color: rgb(0, 0, 255);
        font-size: 48px;
        margin: 15px;
    }

    .howItWork {
        background-color: rgb(200, 200, 200);
        height: 625px;
    }

    .howItWork > h1 {
        text-align: center;
    }

    .howItWorkItem {
        display: flex;
        justify-content: space-around;
    }

    .howItWorkSteps {
        display: flex;
        flex-direction: column;
        align-items: space-around;
        width: 50%;
    }

    .howItWorkStep {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin: 15px 0px;
    }

    .step {
        border: 2px solid rgb(0, 200, 200);
        width: 50px;
        height: 50px;
        border-radius: 100%;
        margin: 0px 15px;
        align-self: center;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgb(0, 200, 200);
        font-weight: bolder;
        font-size: 20px;
    }

    .stepContent {
        align-self: center;
        width: 75%;
    }

    .ratesContainer {
        background-color: rgb(0, 0, 100);
    }

    .ratesContainer > h3 {
        color: rgb(255, 255, 255);
        text-align: center;
    }

    .rateBase {
        height: 550px;
    }

    .rateOptimal {
        height: 700px;
    }

    .rateMax {
        
    }

    .rateContainer {
        border-radius: 15px;
        background-color: rgb(245, 245, 245);
        width: 30%;
        box-sizing: border-box;
        padding: 20px;
    }

    .rateHeaderBlock {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .rateHeader {
        font-weight: bolder;
    }

    .rateCost {
        font-weight: bolder;
        font-size: 24px;
    }

    .rateBody {
        
    }

    .rateBenefit {
        display: flex;
        justify-content: space-around;
    }

    .rateBenefitPoster {
        color: rgb(0, 175, 0);
    }

    .rateBenefitContent {
        display: flex;
        flex-direction: column;
    }

    .rateBenefitContentHeader {
        font-weight: bolder;
    }

    .rateBenefitContentBody {

    }

    .rateBenefitContentClosableBlock {
        color: rgb(200, 200, 200);
        display: flex;
    }

    .rateBenefitContentClosable {

    }

    .rates {
        display: flex;
        justify-content: space-around;
    }

    .qAndAContainer {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .questions {
        width: 90%;
    }
    
    .questionColumn {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .questionRow {
        display: flex;
        justify-content: space-between;
    }
    
    .question {
        font-weight: bolder;
    }

    .commentsPaginator {
        display: flex;
        flex-direction: column;
    }

    .paginator {
        display: flex;
        justify-content: center;
        margin: 125px 0px;
    }

    .paginator > span {
        font-size: 50px;
        color: rgb(0, 0, 255);
    }

    .commentsHeaderBlock {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .commentsHeader{
        font-size: 36px;
        font-weight: bolder;
    }

    .comments {
        display: flex;
        justify-content: space-around;
    }

    .comment {
        border-radius: 15px;
        background-color: rgb(245, 245, 245); 
        width: 30%;
        height: 575px;
        box-sizing: border-box;
        padding: 25px;
    }

    .commentHeader {
        font-weight: bolder;
        font-size: 24px;
    }

    .commentAuthor {
        font-weight: bolder;
    }

    .commentDetail {
        color: rgb(0, 0, 255);
    }

    .ratioContainer {
        display: flex;
        width: 35%;
    }

    .ratio {
        color: rgb(200, 200, 0);
    }

    .commentContent {
        margin-top: 15px;
    }

    .carrierContainer {
        
    }

    .carrierBlock {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 25px 0px;
    }
    
    .carrierBlockItem {
        display: flex;
        flex-direction: column;
    }

    .carrierBlockItemHeader {
        font-weight: bolder;
        font-size: 24px;
    }

    .expertsContainer {
        text-align: center;
    }

    .expert {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .expertLogo {
        margin-top: -75px;
        border-radius: 100%;
        width: 75px;
        height: 75px;
        background-color: rgb(255, 0, 0);
        background-size: 100% 100%;
    }

    .recrutment {
        background-image: url('https://hhcdn.ru/icms/10228729.jpg');
    }

    .hr {
        background-image: url('https://hhcdn.ru/icms/10210003.jpg');
    }

    .proffesional {
        background-image: url('https://hhcdn.ru/icms/10205534.jpg');
    }

    .expertsBlock {
        margin: 75px 0px;
        display: flex;
        justify-content: space-around;
    }
    
    .expertsBlockItem {
        border-radius: 15px;
        background-color: rgb(245, 245, 245); 
        width: 30%;
        height: 375px;
        box-sizing: border-box;
        padding: 25px;
    }

</style>