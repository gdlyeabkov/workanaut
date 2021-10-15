<template>
  <div class="footer">
    <div class="footerColumns">
        <div class="footerColumn">
            <span class="footerColumnHeader">
                Workanaut
            </span>
            <span @click="$router.push({ name: 'About' })" class="footerColumnItem">
                О компании
            </span>
            <span class="footerColumnItem">
                Наши вакансии
            </span>
            <span @click="$router.push({ name: 'AdsSite' })" class="footerColumnItem">
                Реклама на сайте
            </span>
            <span @click="$router.push({ name: 'RequirementsSoftware' })" class="footerColumnItem">
                Требования к ПО
            </span>
            <span @click="$router.push({ name: 'DRM' })" class="footerColumnItem">
                Защита персональных данных
            </span>
            <span @click="$router.push({ name: 'Security' })" class="footerColumnItem">
                Безопасный Workanaut
            </span>
            <span @click="$router.push({ name: 'Etic' })" class="footerColumnItem">
                Этика и комплаенс
            </span>
            <span @click="$router.push({ name: 'WorkanautAPI' })" class="footerColumnItem">
                Workanaut API
            </span>
            <span @click="$router.push({ name: 'Companions' })" class="footerColumnItem">
                Партнерам
            </span>
            <span @click="$router.push({ name: 'Investors' })" class="footerColumnItem">
                Инвесторам
            </span>
            <span @click="$router.push({ name: 'ConditionsOfServices' })" class="footerColumnItem">
                Условия оказания услуг
            </span>
            <span @click="$router.push({ name: 'ConditionUsabilitySite' })" class="footerColumnItem">
                Условия использования сайтов
            </span>
        </div>
        <div class="footerColumn">
            <span class="footerColumnHeader">
                Сервисы для соискателей
            </span>
            <span @click="$router.push({ name: 'NeedResume' })" class="footerColumnItem">
                Готовое резюме
            </span>
            <span @click="$router.push({ name: 'Services' })" class="footerColumnItem">
                Все сервисы
            </span>
            <span class="footerColumnItem">
                Профориентация
            </span>
            <span @click="$router.push({ name: 'Carrier' })" class="footerColumnItem">
                Форум карьеристов
            </span>
            <span @click="$router.push({ name: 'CreateResume' })" class="footerColumnItem">
                Продвижение резюме
            </span>
            <span class="footerColumnItem">
                Хочу у вас работать
            </span>
            <span class="footerColumnItem">
                Производственный календарь
            </span>
            <span class="footerColumnHeader">
                Молодым специалистам
            </span>
            <span @click="$router.push({ name: 'Carrier' })" class="footerColumnItem">
                Карьера для молодых специалистов
            </span>
            <span class="footerColumnItem">
                Школа программистов
            </span>
        </div>
        <div class="footerColumn">
            <span class="footerColumnItem">
                Поиск сотрудников
            </span>
            <span class="footerColumnItem">
                Помощь
            </span>
            <span class="footerColumnItem">
                Пользовательское соглашение
            </span>
            <span class="footerColumnItem">
                Каталог компаний
            </span>
            <span class="footerColumnItem">
                Работа по профессиям
            </span>
            <span class="footerColumnItem">
                Работа рядом с метро
            </span>
            <span class="footerColumnItem">
                Switch to English
            </span>
            <span class="footerColumnHeader footerVote">
                Голосуйте за лучшие компании в Рейтинге работодателей
            </span>
        </div>
        <div class="footerColumn">
            <div class="figure">
                hh
            </div>
        </div>
    </div>
    <div class="socialMediaContainer">
        <div class="socialMediaItem">
            <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/vk-blue.svg" width="35px" alt="">
            <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/ok-orange.svg" width="35px" alt="">
            <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/facebook-blue.svg" width="35px" alt="">
            <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/telegram_hover.svg" width="35px" alt="">
        </div>
        <div class="socialMediaItem">
            <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/vk-blue.svg" width="35px" alt="">
            <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/ok-orange.svg" width="35px" alt="">
            <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/facebook-blue.svg" width="35px" alt="">
            <img style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/telegram_hover.svg" width="35px" alt="">
        </div>
    </div>
    <div>
        <p class="footerColumnItem">
            © 2021 Группа компаний Workanaut
        </p>
        <p class="footerColumnItem">
            Сегодня на сайте 1 136 313 вакансий, 54 022 143 резюме, 1 615 759 компании и за неделю 2 411 252 приглашения
        </p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
    .footer {
        clear: both;
        background-color: rgb(45, 45, 45);
        height: 750px;
    }
    
    .footerColumns {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .footerColumn {
        display: flex;
        flex-direction: column;   
        width: 275px;
    }

    .footerColumnHeader {
        font-weight: bolder;
        color: rgb(255, 255, 255);
        margin: 15px 0px;
    }

    .footerColumnItem {
        cursor: pointer;
        color: rgb(200, 200, 200);
    }

    .footerColumnItem:hover {
        color: rgb(255, 255, 255);
    }

    .footerVote:hover {
        color: rgb(215, 255, 255);
    }

    .socialMediaContainer {
        margin: 25px 0px;
        width: 50%;
        display: flex;
        justify-content: space-around;
    }

    .socialMediaItem {
        display: flex;
        justify-content: space-around;
    }

    .figure {
        font-size: 24px;
        font-weight: bolder;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 35px;
        width: 45px;
        height: 45px;
        border-radius: 100%;
        background-color: rgb(225, 225, 225);
    }

</style>