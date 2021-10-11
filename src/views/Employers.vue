<template>
    <div>
        <Header :currentPage="'Работадателям'" :auth="false" />
        <div>
            <Bar />
            <div class="supportBlock">
                <span class="supportHeader">
                    Размещайте вакансию на hh.ru
                </span>
                <span  class="supportBody">
                    И находите сотрудников среди тех, кто хочет у вас работать. hh.ru — сервис №1 по поиску сотрудников в России*
                </span>
                <button @click="$router.push({ name: 'EmployerRegister' })" class="btn btn-primary">
                    Разместить вакансию
                </button>
                <span  class="supportBody">
                    — По посещаемости за 31 день среди сайтов по поиску работы и персонала по данным Similarweb по РФ на 24.06.2021г.
                </span>
            </div>
            <div class="supportBlock">
                <span class="supportHeader">
                    Найдите сотрудника на вашу вакансию
                </span>
                <span  class="supportBody">
                    Не ждите откликов — найдите идеального сотрудника сами среди 54 084 478 резюме у 32 503 300 соискателей
                </span>
                <div class="searchEmployee">
                    <input type="text" class="form-control" placeholder="Поиск по резюме">
                    <button class="btn btn-primary">
                        Найти сотрудника
                    </button>
                </div>
                <span>
                    Часто ищут резюме: бухгалтер, механик, экономист
                </span>
            </div>
            <div class="supportBlock">
                <span class="supportHeader">
                    Помощь и поддержка
                </span>
                <span  class="supportBody">
                    Техническая поддержка, помощь в выборе и расчёте пакета услуг по телефону
                </span>
                <div class="contacts">
                    <div class="contact">
                        <span class="contactPhone">
                            +7 495 974-64-27
                        </span>
                        <span>                        
                            Москва и МО
                        </span>
                    </div>
                    <div class="contact">
                        <span class="contactPhone">
                            +7 495 974-64-27
                        </span>
                        <span>                        
                            Москва и МО
                        </span>
                    </div>
                    <div class="contact">
                        <span class="contactPhone">
                            +7 495 974-64-27
                        </span>
                        <span>                        
                            Москва и МО
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
    name: 'Employers',
    components: {
        Header,
        Bar,
        Footer
    }
}
</script>
<style scoped>
    
    .supportBlock {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .supportHeader {
        font-size: 34px;
    }

    .supportBody {
        font-weight: bolder;
    }

    .contacts {
        display: flex;
        justify-content: space-around;
        width: 100%;
    }

    .contact {
        display: flex;
        flex-direction: column;
    }

    .contactPhone {
        font-size: 24px;
    }

    .searchEmployee {
        width: 75%;
        margin: 25px 0px;
        display: flex;
    }
</style>