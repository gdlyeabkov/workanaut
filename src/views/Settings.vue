<template>
    <div>
        <Header :currentPage="'Настройки'" :auth="true" />
        <BarAuth />
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
                                    {{
                                        aspirant.resumes.length >= 1 ?
                                            aspirant.name
                                        :
                                            'Не указано'
                                    }}
                                </span>
                                <span class="unwantedTab"  v-if="!nameDialog" @click="nameDialog = !nameDialog">
                                    Изменить
                                </span>
                            </div>
                            <div v-else-if="nameDialog" class="dialog">
                                <div class="dialogColumn">
                                    <div class="dialogRow">
                                        <span>
                                            Фамилия
                                        </span>
                                        <input type="text" v-model="name" class="w-25 socialBtn form-control"/>
                                    </div>
                                    <div class="dialogRow">
                                        <span>
                                            Имя
                                        </span>
                                        <input type="text" v-model="secondName" class="w-25 socialBtn form-control"/>
                                    </div>
                                    <div class="dialogRow">
                                        <span>
                                            Отчество
                                        </span>
                                        <input type="text" v-model="thirdName" class="w-25 socialBtn form-control"/>
                                    </div>
                                </div>
                                
                                    <div class="rowOfButtons">
                                        <button @click="save('name')" class="socialBtn btn btn-primary">
                                            Сохранить
                                        </button>
                                        <button @click="nameDialog = false" class="socialBtn btn btn-primary">
                                            Отменить
                                        </button>
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
                                    Обновлен 
                                    {{
                                        aspirant.passwordTimestamp
                                    }}
                                    {{
                                        true ?
                                            "года"
                                        :
                                            "месяцев"
                                    }}
                                     назад
                                </span>
                                <span  class="unwantedTab" v-if="!passwordDialog" @click="passwordDialog = !passwordDialog">
                                    Изменить
                                </span>
                            </div>
                            <div v-else-if="passwordDialog" class="dialog">
                                <div class="dialogColumn">
                                    <div class="dialogRow">
                                        <span>
                                            Старый пароль
                                        </span>
                                        <input type="password" v-model="oldPassword" class="w-25 socialBtn form-control"/>
                                    </div>
                                    <div class="dialogRow">
                                        <span>
                                            Новый пароль
                                        </span>
                                        <input type="password" v-model="newPassword" class="w-25 socialBtn form-control"/>
                                    </div>
                                    <div class="dialogRow">
                                        <span>
                                            Повторите новый пароль
                                        </span>
                                        <input type="password" v-model="repeatNewPassword" class="w-25 socialBtn form-control"/>
                                    </div>
                                </div>
                                <div class="rowOfButtons">
                                    <button @click="save('password')" class="socialBtn btn btn-primary">
                                        Сохранить
                                    </button>
                                    <button @click="passwordDialog = false" class="socialBtn btn btn-primary">
                                        Отменить
                                    </button>
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
                                    {{
                                        aspirant.resumes.length >= 1 ?
                                            aspirant.email
                                        :
                                            'Не указано'
                                    }}
                                </span>
                                <span  v-if="!emailDialog" @click="emailDialog = !emailDialog" class="unwantedTab">
                                    Изменить
                                </span>
                            </div>
                            <div v-else-if="emailDialog" class="dialog">
                                <div class="dialogColumn">
                                    <div class="dialogRow">
                                        <span>
                                            Email
                                        </span>
                                        <span>
                                            {{ aspirant.email }}
                                        </span>
                                    </div>
                                    <div class="dialogRow">
                                        <span>
                                            Новый Email
                                        </span>
                                        <input type="email" v-model="newEmail" class="w-25 socialBtn form-control"/>
                                    </div>
                                    <div class="dialogRow">
                                        <span>
                                            Ваш текущий пароль
                                        </span>
                                        <input type="password" v-model="oldPassword" class="w-25 socialBtn form-control"/>
                                        <span>
                                            Забыли пароль?
                                        </span>
                                    </div>
                                </div>
                                <div class="rowOfButtons">
                                    <button @click="save('email')" class="socialBtn btn btn-primary">
                                        Сохранить
                                    </button>
                                    <button @click="emailDialog = false" class="socialBtn btn btn-primary">
                                        Отменить
                                    </button>
                                </div> 
                            </div>
                            <hr />
                            <div v-if="!phoneDialog" class="privateDataRow">
                                <span>
                                    Мобильный телефон
                                </span>
                                <span>
                                    {{
                                        aspirant.resumes.length >= 1 ?
                                            aspirant.phone
                                        :
                                            'Не указано'
                                    }}
                                </span>
                                <span  v-if="!phoneDialog" @click="phoneDialog = !phoneDialog" class="unwantedTab">
                                    Изменить
                                </span>
                            </div>
                            <div v-else-if="phoneDialog" class="dialog">
                                <div class="dialogColumn">
                                    <div class="dialogRow">
                                        <span>
                                            Мобильный телефон
                                        </span>
                                        <span>
                                            {{
                                                aspirant.resumes.length >= 1 ?
                                                    aspirant.phone
                                                :
                                                    'Не указано'
                                            }}
                                        </span>
                                    </div>
                                    <div class="dialogRow">
                                        <span>
                                            Новый мобильный телефон
                                        </span>
                                        <input type="phone" v-model="newPhone" class="w-25 socialBtn form-control"/>
                                    </div>
                                    <div class="dialogRow">
                                        <span>
                                            Ваш текущий пароль
                                        </span>
                                        <input type="password" v-model="oldPassword" class="w-25 socialBtn form-control"/>
                                        <span>
                                            Забыли пароль?
                                        </span>
                                    </div>
                                </div>
                                <div class="rowOfButtons">
                                    <button @click="save('phone')" class="socialBtn btn btn-primary">
                                        Сохранить
                                    </button>
                                    <button @click="phoneDialog = false" class="socialBtn btn btn-primary">
                                        Отменить
                                    </button>
                                </div> 
                            </div>
                            <hr />
                            <div v-if="!regionDialog" class="privateDataRow">
                                <span>
                                    Район поиска рабо ты
                                </span>
                                <span>
                                    {{
                                        aspirant.resumes.length >= 1 ?
                                            aspirant.region
                                        :
                                            'Не указано'
                                    }}
                                </span>
                                <span  v-if="!regionDialog" @click="regionDialog = !regionDialog" class="unwantedTab">
                                    Указать
                                </span>
                            </div>
                            <div v-else-if="regionDialog" class="dialog">
                                <div class="dialogColumn regionLabel">
                                    <div class="dialogRow">
                                        <span>
                                            Район поиска работы
                                        </span>
                                        <input placeholder="Выберите адресс" type="text" v-model="address" class="w-100 socialBtn form-control"/>
                                    </div>
                                </div>
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
                                <div class="dialogRow">
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
                        </div>
                        
                        <div class="status">
                            <h5>
                                Мой статус на сайте
                            </h5>
                            <div class="inputContent">
                                <input v-model="status" :value="'Я ищу работу'" type="radio" name="status">
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
                                <input v-model="status" :value="'Я не ищу работу'" type="radio" name="status">
                                <div class="labelContent">
                                    <span>
                                        Я не ищу работу
                                    </span>
                                    <span class="repairUnwanted">
                                        Мои резюме будут скрыты и убраны из поиска, их не увидит никто, даже те работодатели, которым я отправлял отклики. Мои автопоиски будут отключены
                                    </span>
                                </div>
                            </div>
                            <button @click="save('status')" class="btn btn-light appBtn">
                                Сохранить
                            </button>
                        </div>
                    </div>
                    <br class="endOfFloat" />
                    <span @click="deleteAccount()" class="deleteAccount">
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
                        <div v-if="blocked.length >= 1">
                            <div v-for="blockedVacancy in blocked" :key="blockedVacancy._id" class="unwantedRow">
                                <div class="unwantedRowColumnHeader">
                                    <span class="unwantedRowHeader">
                                        {{ blockedVacancy.profession }}
                                    </span>
                                    <span>
                                        {{ blockedVacancy.city }}
                                    </span>
                                </div>
                                <div class="unwantedRowColumnHeader">
                                    <span>
                                        {{ blockedVacancy.salary }} руб.
                                    </span>
                                    <span>
                                        Щелково
                                    </span>
                                </div>
                                <span @click="repairUnwanted(blockedVacancy._id)" class="repairUnwanted">
                                    Восстановить
                                </span>
                            </div>
                            <hr />
                        </div>
                        <div v-else>
                            <p>
                                Нежелательных вакансий нет
                            </p>
                        </div>
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
                            <input type="checkbox" v-model="smsAdvices"/>
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
                        <input type="checkbox" v-model="smsAds"/>
                        <label>
                            Новости сайта и рекламная информация
                        </label>
                    </div>
                </div>
                <hr />
                <div class="pushNotificationsContainer">
                    <div class="">
                        <span>
                            Почтовые рассылки
                        </span>
                        <div class="pushNotification">
                            <input type="checkbox" v-model="mailAdvices"/>
                            <label>
                                Оповещения и советы
                            </label>
                        </div>
                    </div>
                    <div class="pushNotification">
                        <input type="checkbox" v-model="mailNewVacancies"/>
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
                        <input  type="checkbox" v-model="mailBirthday"/>
                        <label>
                            Поздравления в день рождения
                        </label>
                    </div>
                    <div class="pushNotification">
                        <input type="checkbox" v-model="mailViews"/>
                        <label>
                            Просмотры вашего резюме
                        </label>
                    </div>
                    <div class="pushNotification">
                        <input type="checkbox" v-model="mailTrade"/>
                        <label>
                            Новости рынка труда, сайта и реклама, кроме еженедельного дайджеста
                        </label>
                    </div>
                    <div class="pushNotification">
                        <input type="checkbox" v-model="mailWeekDijest"/>
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
                        <input type="checkbox" v-model="mailInternship"/>
                        <label>
                            Стажировки и практики
                        </label>
                    </div>
                    <div class="pushNotification">
                        <input type="checkbox" v-model="mailAutosearch"/>
                        <label>
                            Автопоиски вакансий
                        </label>
                    </div>
                </div>
                <hr />
                <div class="pushNotificationsContainer">
                    <div class="">
                        <span>
                            PUSH-уведомления
                        </span>
                        <div class="pushNotification">
                            <input type="checkbox" v-model="pushViews"/>
                            <label>
                                Просмотры вашего резюме
                            </label>
                        </div>
                    </div>
                    <div class="pushNotification">
                        <input type="checkbox" v-model="pushInvites"/>
                        <label>
                            Приглашения на вакансию
                        </label>
                    </div>
                    <div class="pushNotification">
                        <input type="checkbox" v-model="pushEmployer"/>
                        <label>
                            Переписка с работодателем
                        </label>
                    </div>
                    <div class="pushNotification">
                        <input type="checkbox" v-model="pushAutosearch"/>
                        <label>
                            Автопоиски вакансий
                        </label>
                    </div>
                    <div class="pushNotification">
                        <input type="checkbox" v-model="pushNewVacancies"/>
                        <label>
                            Новые вакансии, соответствующие вашему резюме
                        </label>
                    </div>
                    <div class="pushNotification">
                        <input type="checkbox" v-model="pushAdvices"/>
                        <label>
                            Оповещения и советы
                        </label>
                    </div>
                    <div class="pushNotification">
                        <input type="checkbox" v-model="pushAds"/>
                        <label>
                            Новости сайта и рекламная информация
                        </label>
                    </div>
                    <button @click="saveSettings()" class="saveSettingsBtn btn btn-primary">
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
                        {{
                            dataExchange ?
                                "Закрыть"
                            :
                                "Восстановить"
                        }}
                         доступ
                    </button>
                    <span class="myAppHeader">
                        Официальное приложение Workanaut для поиска работы (Android)
                    </span>
                    <button class="btn btn-light appBtn">
                        {{
                            mobileApp ?
                                "Закрыть"
                            :
                                "Восстановить"
                        }}
                         доступ
                    </button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import BarAuth from '@/components/BarAuth.vue'
import Footer from '@/components/Footer.vue'

import * as jwt from 'jsonwebtoken'

const baseUrl = process.env.VUE_APP_BASE_URL

export default {
    name: 'Settings',
    data(){
        return {
            userType: "aspirant", 
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
            blocked: [],
            smsAdvices: true,
            smsAds: true,
            mailAdvices: true,
            mailNewVacancies: true,
            mailBirthday: true,
            mailViews: true,
            mailTrade: true,
            mailWeekDijest: true,
            mailInternship: true,
            mailAutosearch: true,
            pushViews: false,
            pushInvites: false,
            pushEmployer: false,
            pushAutosearch: false,
            pushNewVacancies: false,
            pushAdvices: false,
            pushAds: false,
            dataExchange: true,
            mobileApp: true,
            status: 'Я ищу работу'
        }
    },
    mounted(){
        jwt.verify(this.token, 'workanautsecret', (err, decoded) => {
            if (err) {
                this.$router.push({ name: "Login", query: { logintype: 'employee' } })
            } else {
                if(this.$route.query.currentsetting !== null && this.$route.query.currentsetting !== undefined){
                    this.currentSetting = this.$route.query.currentsetting
                }
                this.usertype = this.$route.query.usertype
                if(this.userType.includes('aspirant')){
                    fetch(`${baseUrl}/api/aspirants/get/?aspirantfeedback=${decoded.phone}`, {
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
                        console.log(`aspirant: ${JSON.parse(result).aspirant.feedback}`)
                        this.aspirant = JSON.parse(result).aspirant
                        this.smsAdvices = this.aspirant.smsAdvices
                        this.smsAds = this.aspirant.smsAds
                        this.mailAdvices = this.aspirant.mailAdvices
                        this.mailNewVacancies = this.aspirant.mailNewVacancies
                        this.mailBirthday = this.aspirant.mailBirthday
                        this.mailViews = this.aspirant.mailViews
                        this.mailTrade = this.aspirant.mailTrade
                        this.mailWeekDijest = this.aspirant.mailWeekDijest
                        this.mailInternship = this.aspirant.mailInternship
                        this.mailAutosearch = this.aspirant.mailAutosearch
                        this.pushViews = this.aspirant.pushViews
                        this.pushInvites = this.aspirant.pushInvites
                        this.pushEmployer = this.aspirant.pushEmployer
                        this.pushAutosearch = this.aspirant.pushAutosearch
                        this.pushNewVacancies = this.aspirant.pushNewVacancies
                        this.pushAdvices = this.aspirant.pushAdvices
                        this.pushAds = this.aspirant.pushAds
                        
                        this.status = this.aspirant.status
                        this.name = this.aspirant.name.split(' ')[0]
                        this.secondName = this.aspirant.name.split(' ')[1]
                        this.thirdName = this.aspirant.name.split(' ')[2]

                        fetch(`${baseUrl}/api/aspirants/blocked/?aspirantfeedback=${decoded.phone}`, {
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
                            console.log(`JSON.parse(result): ${JSON.parse(result).blocked.length}`)
                            this.blocked = JSON.parse(result).blocked
                        })
                    })
                } else if(this.userType.includes('employer')){
                    fetch(`${baseUrl}/api/employers/get/?employeremail=${decoded.phone}`, {
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
                        this.aspirant = JSON.parse(result).employer
                    })
                }
            }
        })
    },
    methods: {
        deleteAccount(){
            if(this.userType.includes('aspirant')){
                fetch(`${baseUrl}/api/account/delete/?usertype=${this.userType}&aspirantfeedback=${this.aspirant.feedback}`, {
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
                        this.$router.push({ name: 'Home' })
                    } else if(JSON.parse(result).status.includes('Error')){
                        alert('Ошибка удаления аккаунта')  
                    }
                })
            } else if(this.userType.includes('employer')){
                fetch(`${baseUrl}/api/account/delete/?usertype=${this.userType}&employeremail=${this.aspirant.email}`, {
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
                        this.$router.push({ name: 'Home' })
                    } else if(JSON.parse(result).status.includes('Error')){
                        alert('Ошибка удаления аккаунта')  
                    }
                })
            }
        },
        saveSettings(){
            fetch(`${baseUrl}/api/aspirants/mailings/save/?aspirantfeedback=${this.aspirant.feedback}&options=${this.smsAdvices}|${this.smsAds}|${this.mailAdvices}|${this.mailNewVacancies}|${this.mailBirthday}|${this.mailViews}|${this.mailTrade}|${this.mailWeekDijest}|${this.mailInternship}|${this.mailAutosearch}|${this.pushViews}|${this.pushInvites}|${this.pushEmployer}|${this.pushAutosearch}|${this.pushNewVacancies}|${this.pushAdvices}|${this.pushAds}`, {
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
                    this.$router.push({ name: 'AuthPage', query: { usertype: 'aspirant' } })
                } else if(JSON.parse(result).status.includes('Error')){
                    alert('Ошибка сохранения опции')  
                }
            })
        },
        repairUnwanted(vacancyId){
            fetch(`${baseUrl}/api/aspirants/blocked/repair/?aspirantfeedback=${this.aspirant.feedback}&vacancyid=${vacancyId}`, {
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
                    this.$router.push({ name: 'Vacancy', query: { usertype: this.userType, vacancyid: vacancyId }  })
                } else if(JSON.parse(result).status.includes('Error')){
                    alert('Ошибка восставновления')  
                }
            })        
        },
        save(field){
            if(field.includes('password')){
                if(this.aspirant.password.length <= 0){
                    fetch(`${baseUrl}/api/aspirants/password/set/?aspirantfeedback=${this.aspirant.feedback}&oldpassword=${this.newPassword}&newpassword=${this.newPassword}&setmethod=create`, {
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
                            this.$router.push({ name: 'PersonalArea', query: { usertype: this.userType }  })
                        } else if(JSON.parse(result).status.includes('Error')){
                            alert('Ошибка сохранения поля')  
                        }
                    })
                } else if(this.aspirant.password.length >= 1 && this.newPassword === this.repeatNewPassword) {
                    fetch(`${baseUrl}/api/aspirants/password/set/?aspirantfeedback=${this.aspirant.feedback}&oldpassword=${this.oldPassword}&newpassword=${this.newPassword}&setmethod=update`, {
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
                            this.$router.push({ name: 'PersonalArea', query: { usertype: this.userType }  })
                        } else if(JSON.parse(result).status.includes('Error')){
                            alert('Ошибка сохранения поля')  
                        }
                    })
                }        
            } else if(field.includes('name')){
                fetch(`${baseUrl}/api/aspirants/name/set/?aspirantfeedback=${this.aspirant.feedback}&newname=${this.name} ${this.secondName} ${this.thirdName}`, {
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
                        this.$router.push({ name: 'PersonalArea', query: { usertype: this.userType }  })
                    } else if(JSON.parse(result).status.includes('Error')){
                       alert('Ошибка сохранения статуса')  
                    }
                })        
            } else if(field.includes('email')){
                fetch(`${baseUrl}/api/aspirants/email/set/?aspirantfeedback=${this.aspirant.feedback}&newemail=${this.newEmail}&oldpassword=${this.oldPassword}`, {
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
                        this.$router.push({ name: 'PersonalArea', query: { usertype: this.userType }  })
                    } else if(JSON.parse(result).status.includes('Error')){
                       alert('Ошибка сохранения E-mail')  
                    }
                })        
            } else if(field.includes('phone')){
                fetch(`${baseUrl}/api/aspirants/phone/set/?aspirantfeedback=${this.aspirant.feedback}&newphone=${this.newPhone}&oldpassword=${this.oldPassword}`, {
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
                        this.$router.push({ name: 'PersonalArea', query: { usertype: this.userType }  })
                    } else if(JSON.parse(result).status.includes('Error')){
                       alert('Ошибка сохранения телефона')  
                    }
                })        
            } else if(field.includes('region')){
                fetch(`${baseUrl}/api/aspirants/region/set/?aspirantfeedback=${this.aspirant.feedback}&newregion=${this.address}`, {
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
                        this.$router.push({ name: 'PersonalArea', query: { usertype: this.userType }  })
                    } else if(JSON.parse(result).status.includes('Error')){
                       alert('Ошибка сохранения статуса')  
                    }
                })        
            } else if(field.includes('socials')){
                fetch(`${baseUrl}/api/aspirants/socials/set/?aspirantfeedback=${this.aspirant.feedback}&newsocials=${this.status}`, {
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
                        this.$router.push({ name: 'PersonalArea', query: { usertype: this.userType }  })
                    } else if(JSON.parse(result).status.includes('Error')){
                       alert('Ошибка сохранения статуса')  
                    }
                })        
            } else if(field.includes('status')){
                fetch(`${baseUrl}/api/aspirants/status/set/?aspirantfeedback=${this.aspirant.feedback}&newstatus=${this.status}`, {
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
                        this.$router.push({ name: 'PersonalArea', query: { usertype: this.userType }  })
                    } else if(JSON.parse(result).status.includes('Error')){
                       alert('Ошибка сохранения статуса')  
                    }
                })        
            }
        }
        
    },
    components: {
        Header,
        BarAuth,
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
    }

    .dialogColumn {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .dialogRow {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .rowOfButtons {
        display: flex;
        justify-content: center;
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

    .saveSettingsBtn {
        margin-top: 35px;
    }

</style>