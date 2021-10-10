<template>
    <div>
        <Header />
        <div>
            <h3>
                Настройки
            </h3>
            <div class="settingsHeader">
                <span @click="currentSetting = 'Личные данные'" :class="{ unwantedTab: currentSetting.includes('Личные данные') }">
                    Личные данные
                </span>
                <span @click="currentSetting = 'Нежелательное'" :class="{ unwantedTab: currentSetting.includes('Нежелательное') }">
                    Нежелательное
                </span>
                <span @click="currentSetting = 'Изображения'" :class="{ unwantedTab: currentSetting.includes('Изображения') }">
                    Изображения
                </span>
                <span @click="currentSetting = 'Рассылки'" :class="{ unwantedTab: currentSetting.includes('Рассылки') }">
                    Рассылки
                </span>
                <span @click="currentSetting = 'Мои приложения'" :class="{ unwantedTab: currentSetting.includes('Мои приложения') }">
                    Мои приложения
                </span>
            </div>
            <hr />
            <div v-if="currentSetting.includes('Личные данные')">
                <div>
                    <div>
                        <div class="privateData">
                            <div v-if="!nameDialog" class="privateDataRow">
                                <span>
                                    Имя
                                </span>
                                <span>
                                    Дьяков Глеб Сергеевич
                                </span>
                                <span class="unwantedTab"  v-if="!nameDialog" @click="nameDialog = !nameDialog">
                                    Изменить
                                </span>
                            </div>
                            <div v-else-if="nameDialog" class="dialog">
                                <div class="dialogColumn">
                                    <span>
                                        Фамилия
                                    </span>
                                    <span>
                                        Новый пароль
                                    </span>
                                    <span>
                                        Повторите новый пароль
                                    </span>
                                </div>
                                <div class="dialogColumn">
                                    <input type="text" v-model="name" class="socialBtn form-control"/>
                                    <input type="text" v-model="secondName" class="socialBtn form-control"/>
                                    <input type="text" v-model="thirdName" class="socialBtn form-control"/>
                                    <div class="rowOfButtons">
                                        <button @click="save('name')" class="socialBtn btn btn-primary">
                                            Сохранить
                                        </button>
                                        <button @click="nameDialog = false" class="socialBtn btn btn-primary">
                                            Отменить
                                        </button>
                                    </div> 
                                </div>
                                <div class="dialogColumn">
                                    
                                </div>
                            </div>
                            <hr />
                            <div v-if="!passwordDialog" class="privateDataRow">
                                <span>
                                    Пароль
                                </span>
                                <span>
                                    Обновлен 2 года назад
                                </span>
                                <span  class="unwantedTab" v-if="!passwordDialog" @click="passwordDialog = !passwordDialog">
                                    Изменить
                                </span>
                            </div>
                            <div v-else-if="passwordDialog" class="dialog">
                                <div class="dialogColumn">
                                    <span>
                                        Старый пароль
                                    </span>
                                    <span>
                                        Новый пароль
                                    </span>
                                    <span>
                                        Повторите новый пароль
                                    </span>
                                </div>
                                <div class="dialogColumn">
                                    <input type="password" v-model="oldPassword" class="socialBtn form-control"/>
                                    <input type="password" v-model="newPassword" class="socialBtn form-control"/>
                                    <input type="password" v-model="repeatNewPassword" class="socialBtn form-control"/>
                                    <div class="rowOfButtons">
                                        <button @click="save('password')" class="socialBtn btn btn-primary">
                                            Сохранить
                                        </button>
                                        <button @click="passwordDialog = false" class="socialBtn btn btn-primary">
                                            Отменить
                                        </button>
                                    </div> 
                                </div>
                                <div class="dialogColumn">
                                    <span>
                                        Забыли пароль?
                                    </span>
                                </div>
                            </div>
                            <hr />
                            <div v-if="!emailDialog" class="privateDataRow">
                                <span>
                                    Email
                                </span>
                                <span>
                                    gdlyeabkov@gmail.com
                                </span>
                                <span  v-if="!emailDialog" @click="emailDialog = !emailDialog" class="unwantedTab">
                                    Изменить
                                </span>
                            </div>
                            <div v-else-if="emailDialog" class="dialog">
                                <div class="dialogColumn">
                                    <span>
                                        Email
                                    </span>
                                    <span>
                                        Новый Email
                                    </span>
                                    <span>
                                        Ваш текущий пароль
                                    </span>
                                </div>
                                <div class="dialogColumn">
                                    <span>
                                        gdlyeabkov@gmail.com
                                    </span>
                                    <input type="password" v-model="newPassword" class="socialBtn form-control"/>
                                    <input type="password" v-model="repeatNewPassword" class="socialBtn form-control"/>
                                    <div class="rowOfButtons">
                                        <button @click="save('email')" class="socialBtn btn btn-primary">
                                            Сохранить
                                        </button>
                                        <button @click="emailDialog = false" class="socialBtn btn btn-primary">
                                            Отменить
                                        </button>
                                    </div> 
                                </div>
                                <div class="dialogColumn">
                                    <span>
                                        Забыли пароль?
                                    </span>
                                </div>
                            </div>
                            <hr />
                            <div v-if="!phoneDialog" class="privateDataRow">
                                <span>
                                    Мобильный телефон
                                </span>
                                <span>
                                    +7 (925) 645-33-12
                                </span>
                                <span  v-if="!phoneDialog" @click="phoneDialog = !phoneDialog" class="unwantedTab">
                                    Изменить
                                </span>
                            </div>
                            <div v-else-if="phoneDialog" class="dialog">
                                <div class="dialogColumn">
                                    <span>
                                        Мобильный телефон
                                    </span>
                                    <span>
                                        Новый мобильный телефон
                                    </span>
                                    <span>
                                        Ваш текущий пароль
                                    </span>
                                </div>
                                <div class="dialogColumn">
                                    <span>
                                        +79254683410
                                    </span>
                                    <input type="password" v-model="newPassword" class="socialBtn form-control"/>
                                    <input type="password" v-model="repeatNewPassword" class="socialBtn form-control"/>
                                    <div class="rowOfButtons">
                                        <button @click="save('phone')" class="socialBtn btn btn-primary">
                                            Сохранить
                                        </button>
                                        <button @click="phoneDialog = false" class="socialBtn btn btn-primary">
                                            Отменить
                                        </button>
                                    </div> 
                                </div>
                                <div class="dialogColumn">
                                    <span>
                                        Забыли пароль?
                                    </span>
                                </div>
                            </div>
                            <hr />
                            <div v-if="!regionDialog" class="privateDataRow">
                                <span>
                                    Район поиска работы
                                </span>
                                <span>
                                    Не указан
                                </span>
                                <span  v-if="!regionDialog" @click="regionDialog = !regionDialog" class="unwantedTab">
                                    Указать
                                </span>
                            </div>
                            <div v-else-if="regionDialog" class="dialog">
                                <div class="dialogColumn regionLabel">
                                    <span>
                                        Район поиска работы
                                    </span>
                                </div>
                                <div class="dialogColumn">
                                    <input placeholder="Выберите адресс" type="text" v-model="address" class="socialBtn form-control"/>
                                    <span>
                                        Можно указать адрес дома, улицу или удобную станцию метро. Информация будет использована, чтобы показать работодателям примерное расстояние до места работы и помочь повысить ваши шансы получить приглашение
                                    </span>
                                    <div class="rowOfButtons">
                                        <button @click="save('region')" class="socialBtn btn btn-primary">
                                            Сохранить
                                        </button>
                                        <button @click="regionDialog = false" class="socialBtn btn btn-primary">
                                            Отменить
                                        </button>
                                    </div> 
                                </div>
                            </div>
                            <hr />
                            <div v-if="!socialNetworksDialog" class="privateDataRow">
                                <span>
                                    Социальные сети
                                </span>
                                <div class="socialColumn">
                                    <img class="socialBtn" style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/vk-blue.svg" width="35px" alt="">
                                    <img class="socialBtn" style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/ok-orange.svg" width="35px" alt="">
                                    <img class="socialBtn" style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/facebook-blue.svg" width="35px" alt="">
                                    <img class="socialBtn" style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/telegram_hover.svg" width="35px" alt="">
                                </div>
                                <span v-if="!socialNetworksDialog" @click="socialNetworksDialog = !socialNetworksDialog" class="unwantedTab">
                                    Изменить
                                </span>
                            </div>
                            <div v-else-if="socialNetworksDialog" class="dialog">
                                <div class="socialColumn">
                                    <img class="socialBtn" style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/vk-blue.svg" width="35px" alt="">
                                    <img class="socialBtn" style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/ok-orange.svg" width="35px" alt="">
                                    <img class="socialBtn" style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/facebook-blue.svg" width="35px" alt="">
                                    <img class="socialBtn" style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/telegram_hover.svg" width="35px" alt="">
                                    <img class="socialBtn" style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/facebook-blue.svg" width="35px" alt="">
                                    <img class="socialBtn" style="margin-left: 15px;" src="https://gu-st.ru/lk-st/lib-assets/svg/social-icons/telegram_hover.svg" width="35px" alt="">
                                </div>    
                                <div class="dialogColumn">
                                    <button :class="{ socialBtn: true, btn: true, 'btn-primary': socialNetMailru }" @click="socialNetMailru = !socialNetMailru">
                                        {{
                                            socialNetMailru ?
                                                "Привязано"
                                            :
                                                "Привязать"
                                        }}
                                    </button>
                                    <button :class="{ socialBtn: true, btn: true, 'btn-primary': socialNetOdnoklasniki }" @click="socialNetOdnoklasniki = !socialNetOdnoklasniki">
                                        {{
                                            socialNetOdnoklasniki ?
                                                "Привязано"
                                            :
                                                "Привязать"
                                        }}
                                    </button>
                                    <button :class="{ socialBtn: true, btn: true, 'btn-primary': socialNetFacebook }" @click="socialNetFacebook = !socialNetFacebook">
                                        {{
                                            socialNetFacebook ?
                                                "Привязано"
                                            :
                                                "Привязать"
                                        }}
                                    </button>
                                    <button :class="{ socialBtn: true, btn: true, 'btn-primary': socialNetVK }" @click="socialNetVK = !socialNetVK">
                                        {{
                                            socialNetVK ?
                                                "Привязано"
                                            :
                                                "Привязать"
                                        }}
                                    </button>
                                    <button :class="{ socialBtn: true, btn: true, 'btn-primary': socialNetGoogle }" @click="socialNetGoogle = !socialNetGoogle">
                                        {{
                                            socialNetGoogle ?
                                                "Привязано"
                                            :
                                                "Привязать"
                                        }}
                                    </button>
                                    <button :class="{ socialBtn: true, btn: true, 'btn-primary': socialNetDROnWork }" @click="socialNetDROnWork = !socialNetDROnWork">
                                        {{
                                            socialNetDROnWork ?
                                                "Привязано"
                                            :
                                                "Привязать"
                                        }}
                                    </button>
                                </div> 
                                <span class="toggleSocial" @click="socialNetworksDialog = false">
                                    Свернуть
                                </span>
                            </div>
                        </div>
                        
                        <div class="status">
                            <h5>
                                Мой статус на сайте
                            </h5>
                            <div class="inputContent">
                                <input type="radio" name="status">
                                <div class="labelContent">
                                    <span>
                                        Я ищу работу
                                    </span>
                                    <span>
                                        У меня опубликовано
                                        <span class="deleteAccount">
                                            2 резюме
                                        </span>
                                        , пойду найду
                                        <span class="deleteAccount">
                                            подходящую вакансию
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div class="inputContent">
                                <input type="radio" name="status">
                                <div class="labelContent">
                                    <span>
                                        Я не ищу работу
                                    </span>
                                    <span class="repairUnwanted">
                                        Мои резюме будут скрыты и убраны из поиска, их не увидит никто, даже те работодатели, которым я отправлял отклики. Мои автопоиски будут отключены
                                    </span>
                                </div>
                            </div>
                            <button class="btn btn-light appBtn">
                                Сохранить
                            </button>
                        </div>
                    </div>
                    <br class="endOfFloat" />
                    <span class="deleteAccount">
                        Удаление аккаунта
                    </span>
                </div>
            </div>
            <div v-else-if="currentSetting.includes('Нежелательное')">
                <div>
                    <span @click="unwantedTab = 'Вакансии'" :class="{ unwantedTab: true, activeUnwantedTab: unwatedTab.includes('Вакансии') }">
                        Вакансии
                    </span>
                    <span @click="unwantedTab = 'Компании'" :class="{ unwantedTab: true, activeUnwantedTab: unwatedTab.includes('Компании') }">
                        Компании
                    </span>
                    <div class="unwantedRows">
                        <div class="unwantedRow">
                            <div class="unwantedRowColumnHeader">
                                <span class="unwantedRowHeader">
                                    Продавец консультант магазина Магнит Косметик
                                </span>
                                <span>
                                    МАГНИТ, Розничная сеть, 1 октября 
                                </span>
                            </div>
                            <div class="unwantedRowColumnHeader">
                                <span>
                                    от 29 300 до 34 500 руб.
                                </span>
                                <span>
                                    Щелково
                                </span>
                            </div>
                            <span @click="repairUnwanted()" class="repairUnwanted">
                                Восстановить
                            </span>
                        </div>
                        <hr />
                        <div class="unwantedRow">
                            <div class="unwantedRowColumnHeader">
                                <span class="unwantedRowHeader">
                                    Продавец консультант магазина Магнит Косметик
                                </span>
                                <span>
                                    МАГНИТ, Розничная сеть, 1 октября 
                                </span>
                            </div>
                            <div class="unwantedRowColumnHeader">
                                <span>
                                    от 29 300 до 34 500 руб.
                                </span>
                                <span>
                                    Щелково
                                </span>
                            </div>
                            <span @click="repairUnwanted()" class="repairUnwanted">
                                Восстановить
                            </span>
                        </div>
                        <hr />
                        <div class="unwantedRow">
                            <div class="unwantedRowColumnHeader">
                                <span class="unwantedRowHeader">
                                    Продавец консультант магазина Магнит Косметик
                                </span>
                                <span>
                                    МАГНИТ, Розничная сеть, 1 октября 
                                </span>
                            </div>
                            <div class="unwantedRowColumnHeader">
                                <span>
                                    от 29 300 до 34 500 руб.
                                </span>
                                <span>
                                    Щелково
                                </span>
                            </div>
                            <span @click="repairUnwanted()" class="repairUnwanted">
                                Восстановить
                            </span>
                        </div>
                        <hr />
                        <div class="unwantedRow">
                            <div class="unwantedRowColumnHeader">
                                <span class="unwantedRowHeader">
                                    Продавец консультант магазина Магнит Косметик
                                </span>
                                <span>
                                    МАГНИТ, Розничная сеть, 1 октября 
                                </span>
                            </div>
                            <div class="unwantedRowColumnHeader">
                                <span>
                                    от 29 300 до 34 500 руб.
                                </span>
                                <span>
                                    Щелково
                                </span>
                            </div>
                            <span @click="repairUnwanted()" class="repairUnwanted">
                                Восстановить
                            </span>
                        </div>
                        <hr />
                        <div class="unwantedRow">
                            <div class="unwantedRowColumnHeader">
                                <span class="unwantedRowHeader">
                                    Продавец консультант магазина Магнит Косметик
                                </span>
                                <span>
                                    МАГНИТ, Розничная сеть, 1 октября 
                                </span>
                            </div>
                            <div class="unwantedRowColumnHeader">
                                <span>
                                    от 29 300 до 34 500 руб.
                                </span>
                                <span>
                                    Щелково
                                </span>
                            </div>
                            <span @click="repairUnwanted()" class="repairUnwanted">
                                Восстановить
                            </span>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
            <div v-else-if="currentSetting.includes('Изображения')">
                <div class="imagesHeader">
                    <span>
                        На этой странице отображаются все файлы, которые вы когда-либо прикрепляли к резюме. Здесь вы можете загружать новые изображения, удалять ненужные и добавлять комментарии. Изображения автоматически изменятся во всех резюме, к которым они прикреплены.
                    </span>
                    <span class="usability">
                        Правила пользования
                    </span>
                </div>
                <div class="imageContainer">
                    <span class="imageHeader">
                        Фотографии к резюме
                    </span>
                    <span class="note">
                        Не более 8 изображений
                    </span>
                    <button class="btn btn-primary">
                        Добавить фото
                    </button>
                    <span class="imageHeader">
                        Примеры работ (портфолио)
                    </span>
                    <span class="note">
                        Не более 20 изображений
                    </span>
                    <button class="btn btn-primary">
                        Добавить работу
                    </button>
                </div>
            </div>
            <div v-else-if="currentSetting.includes('Рассылки')">
                <div class="pushNotificationsContainer">
                    <div class="">
                        <span>
                            СМС-уведомления
                        </span>
                        <div class="pushNotification">
                            <input @change="setSMSNotificationSetting('viewsResume')" type="checkbox" v-model="viewsResume"/>
                            <div class="optionContent">
                                <label>
                                    Оповещения и советы
                                </label>
                                <span>
                                    Обновление системы произойдет в течение суток после отписки от СМС-уведомлений, в это время возможно поступление сообщений. По прошествии суток вы больше не будете получать сообщения.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="pushNotification">
                        <input @change="setSMSNotificationSetting('siteNewsAndAds')" type="checkbox" v-model="siteNewsAndAds"/>
                        <label>
                            Новости сайта и рекламная информация
                        </label>
                    </div>
                </div>
                <div class="pushNotificationsContainer">
                    <div class="">
                        <span>
                            Почтовые рассылки
                        </span>
                        <div class="pushNotification">
                            <input @change="setMailNotificationSetting('notificationsAndAdvices')" type="checkbox" v-model="notificationsAndAdvices"/>
                            <label>
                                Оповещения и советы
                            </label>
                        </div>
                    </div>
                    <div class="pushNotification">
                        <input @change="setMailNotificationSetting('newRelevantedVacancies')" type="checkbox" v-model="newRelevantedVacancies"/>
                        <div class="optionContent">
                            <label>
                                Новые вакансии, соответствующие вашему резюме
                            </label>
                            <span>
                                Если вы хотите получать нужные вакансии без привязки к резюме, воспользуйтесь автопоиском
                            </span>
                        </div>
                    </div>
                    <div class="pushNotification">
                        <input @change="setMailNotificationSetting('happyBirthday')" type="checkbox" v-model="happyBithday"/>
                        <label>
                            Поздравления в день рождения
                        </label>
                    </div>
                    <div class="pushNotification">
                        <input @change="setMailNotificationSetting('viewsResume')" type="checkbox" v-model="viewsResume"/>
                        <label>
                            Просмотры вашего резюме
                        </label>
                    </div>
                    <div class="pushNotification">
                        <input @change="setMailNotificationSetting('news')" type="checkbox" v-model="news"/>
                        <label>
                            Новости рынка труда, сайта и реклама, кроме еженедельного дайджеста
                        </label>
                    </div>
                    <div class="pushNotification">
                        <input @change="setMailNotificationSetting('weekDijest')" type="checkbox" v-model="weekDijest"/>
                        <div class="optionContent">
                            <label>
                                Еженедельный дайджест
                            </label>
                            <span>
                                Содержит статьи о поиске работы, опросы и результаты исследований. Может содержать рекламную информацию. Выходит один раз в неделю.
                            </span>
                        </div>
                    </div>
                    <div class="pushNotification">
                        <input @change="setMailNotificationSetting('practic')" type="checkbox" v-model="practic"/>
                        <label>
                            Стажировки и практики
                        </label>
                    </div>
                    <div class="pushNotification">
                        <input @change="setPushNotificationSetting('autoSearchOfVacancies')" type="checkbox" v-model="autoSearchOfVacancies"/>
                        <label>
                            Автопоиски вакансий
                        </label>
                    </div>
                </div>
                <div class="pushNotificationsContainer">
                    <div class="">
                        <span>
                            PUSH-уведомления
                        </span>
                        <div class="pushNotification">
                            <input @change="setPushNotificationSetting('viewsResume')" type="checkbox" v-model="viewsResume"/>
                            <label>
                                Просмотры вашего резюме
                            </label>
                        </div>
                    </div>
                    <div class="pushNotification">
                        <input @change="setPushNotificationSetting('inviteOnVacancion')" type="checkbox" v-model="inviteOnVacancion"/>
                        <label>
                            Приглашения на вакансию
                        </label>
                    </div>
                    <div class="pushNotification">
                        <input @change="setPushNotificationSetting('interchangeWithEmployer')" type="checkbox" v-model="interchangeWithEmployer"/>
                        <label>
                            Переписка с работодателем
                        </label>
                    </div>
                    <div class="pushNotification">
                        <input @change="setPushNotificationSetting('autoSearchOfVacancies')" type="checkbox" v-model="autoSearchOfVacancies"/>
                        <label>
                            Автопоиски вакансий
                        </label>
                    </div>
                    <div class="pushNotification">
                        <input @change="setPushNotificationSetting('newRelevantedVacancies')" type="checkbox" v-model="newRelevantedVacancies"/>
                        <label>
                            Новые вакансии, соответствующие вашему резюме
                        </label>
                    </div>
                    <div class="pushNotification">
                        <input @change="setPushNotificationSetting('notificationsAndAdvices')" type="checkbox" v-model="notificationsAndAdvices"/>
                        <label>
                            Оповещения и советы
                        </label>
                    </div>
                    <div class="pushNotification">
                        <input @change="setPushNotificationSetting('siteNewsAndAds')" type="checkbox" v-model="siteNewsAndAds"/>
                        <label>
                            Новости сайта и рекламная информация
                        </label>
                    </div>
                    <button class="btn btn-primary">
                        Сохранить
                    </button>
                </div>
            </div>
            <div v-else-if="currentSetting.includes('Мои приложения')">
                <div class="appContainer">
                    <span class="myAppHeader">
                        Data Exchange
                    </span>
                    <button class="btn btn-light appBtn">
                        Закрыть доступ
                    </button>
                    <span class="myAppHeader">
                        Официальное приложение HeadHunter для поиска работы (Android)
                    </span>
                    <button class="btn btn-light appBtn">
                        Закрыть доступ
                    </button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import * as jwt from 'jsonwebtoken'

export default {
    name: 'Settings',
    data(){
        return {
            usertype: "aspirant", 
            currentSetting: 'Личные данные',
            unwatedTab: 'Вакансии',
            nameDialog: false,
            passwordDialog: false,
            emailDialog: false,
            phoneDialog: false,
            regionDialog: false,
            socialNetworksDialog: false,
            aspirant: {},
            token: window.localStorage.getItem('workanauttoken'),
            name: '',
            secondName: '',
            thirdName: '',
            oldPassword: '',
            newPassword: '',
            repeatNewPassword: '',
            email: '',
            newEmail: '',
            phone: '',
            newPhone: '',
            address: '',
            socialNetMailru: false,
            socialNetOdnoklasniki: false,
            socialNetFacebook: false,
            socialNetVK: false,
            socialNetGoogle: false,
            socialNetDROnWork: false,

        }
    },
    mounted(){
        jwt.verify(this.token, 'workanautsecret', (err, decoded) => {
            if (err) {
                this.$router.push({ name: "Login", query: { logintype: 'employee' } })
            } else {
                this.usertype = this.$route.query.usertype
                // console.log(`decoded.phone: ${decoded.phone}`)
                fetch(`http://localhost:4000/api/aspirants/get/?aspirantfeedback=${decoded.phone}`, {
                    mode: 'cors',
                    method: 'GET'
                }).then(response => response.body).then(rb  => {
                    const reader = rb.getReader()
                    return new ReadableStream({
                    start(controller) {
                        function push() {
                        reader.read().then( ({done, value}) => {
                            if (done) {
                            console.log('done', done);
                            controller.close();
                            return;
                            }
                            controller.enqueue(value);
                            console.log(done, value);
                            push();
                        })
                        }
                        push();
                    }
                    });
                }).then(stream => {
                    return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
                })
                .then(result => {
                    this.aspirant = JSON.parse(result).aspirant
                })
            }
        })
    },
    methods: {
        save(field){
            if(field.includes('password')){
                fetch(`http://localhost:4000/api/aspirants/password/set/?aspirantfeedback=${this.aspirant.feedback}&newpassword=${this.newPassword}`, {
                    mode: 'cors',
                    method: 'GET'
                }).then(response => response.body).then(rb  => {
                    const reader = rb.getReader()
                    return new ReadableStream({
                    start(controller) {
                        function push() {
                        reader.read().then( ({done, value}) => {
                            if (done) {
                            console.log('done', done);
                            controller.close();
                            return;
                            }
                            controller.enqueue(value);
                            console.log(done, value);
                            push();
                        })
                        }
                        push();
                    }
                    });
                }).then(stream => {
                    return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
                })
                .then(result => {
                    console.log(`JSON.parse(result): ${JSON.parse(result)}`)
                    if(JSON.parse(result).status.includes('OK')){
                        this.$router.push({ name: 'PersonalArea', query: { usertype: userType }  })
                    } else if(JSON.parse(result).status.includes('Error')){
                       alert('Ошибка сохранения поля')  
                    }
                })        
            }
        }
        
    },
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
    .deleteAccount {
        cursor: pointer;
        color: rgb(0, 0, 255);
    }

    .appContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
    }

    .appContainer > * {
        margin: 15px;
    }

    .myAppHeader {
        font-weight: bolder;
    }

    .appBtn {
        border: 1px solid rgb(200, 200, 200);
    }

    .pushNotificationsContainer {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin-left: 75px;
        
    }

    .pushNotification {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .pushNotification > input {
        margin: 0px 15px;
    }

    .optionContent {
        width: 275px;
        display: flex;
        flex-direction: column;
    }
    
    .optionContent > span {
        color: rgb(175, 175, 175);
        font-size: 12px;
    }

    .optionContent > * {
        align-self: flex-end;
    }

    .imageContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
    }
    
    .imageHeader {
        font-weight: bolder;
        margin-top: 25px;
    }

    .imagesHeader {
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

    .note {
        color: rgb(175, 175, 175);
        font-size: 10px;
    }

    .usability {
        color: rgb(0, 0, 255);
        cursor: pointer;
    }

    .unwantedTab {
        color: rgb(0, 0, 255);
        cursor: pointer;
    }

    .activeUnwantedTab {
        color: rgb(0, 0, 0);
    }

    .repairUnwanted {
        cursor: pointer;
        color: rgb(175, 175, 175);
        text-decoration: underline;
        text-decoration-style: dashed;
    }

    .unwantedRows {
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: auto;
    }

    .unwantedRowColumnHeader {
        display: flex;
        flex-direction: column;
    }

    .unwantedRowHeader {
        color: rgb(0, 0, 255);
        font-weight: bolder;
        font-size: 18px;
    }

    .unwantedRow {
        display: flex;
        justify-content: space-between;
    }

    .status {
        margin-left: 35px;
        float: left;
        border: 1px solid rgb(200, 200, 200);
        width: 475px;
        height: 275px;
        background-color: rgb(255, 255, 255);
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 25px;
    }

    .inputContent {
        display: flex;
    }

    .labelContent {
        display: flex;
        flex-direction: column;
    }

    .privateData {
        float: left;
        background-color: rgb(235, 235, 235);
        width: 55%;
        border-bottom: 1px solid rgb(215, 215, 215);
        border-top: 1px solid rgb(215, 215, 215);
    }

    .privateDataRow {
        display: flex;
        justify-content: space-between;
    }

    .endOfFloat {
        clear: both;
    }

    .settingsHeader {
        display: flex;
        justify-content: space-around;
        width: 45%;
    }

    .settingsHeader > * {
        cursor: pointer;
    }

    .dialog {
        width: 100%;
        height: 350px;
        background-color: rgb(245, 245, 245);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .dialogColumn {
        display: flex;
        flex-direction: column;
    }

    .rowOfButtons {
        display: flex;
    }

    .socialColumn {
        display: flex;
        flex-direction: column;
    }

    .toggleSocial {
        color: rgb(0, 0, 255);
        cursor: pointer;
        align-self: flex-start;
    }

    .socialBtn {
        margin: 5px;
    }

    .regionLabel {
        width: 45%;
        margin: 5px;
    }

</style>