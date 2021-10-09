<template>
    <div>
        <Header />
        <div class="main">
            <div class="bar">
                <div class="barItem">
                    <div class="logo">
                        hh
                    </div>
                    <span @click="$router.push({ name: 'PersonalArea' })" class="help">
                        Мои резюме
                    </span>
                    <span @click="$router.push({ name: 'Responses' })" class="help">
                        Отклики
                    </span>
                    <span class="help">
                        Помощь
                    </span>
                </div>
                <div class="barItem">
                    <span class="areaShortcuts material-icons-outlined">
                        search
                    </span>
                    <span class="areaShortcutsLabel">
                        Поиск
                    </span>
                    <button class="withoutBackgroundBtn createResumeBtn">
                        Создать резюме
                    </button>
                    <span class="areaShortcuts material-icons-outlined">
                        star_outline
                    </span>
                    <span class="areaShortcuts material-icons-outlined">
                        mode_comment
                    </span>
                    <span class="areaShortcuts material-icons-outlined">
                        notifications
                    </span>
                    <span class="areaShortcuts material-icons-outlined">
                        person_outline
                    </span>
                </div>
            </div>
            <h3>
                Отклики и приглашения
            </h3>
            <span @click="responseType = 'Активные'" :class="{ activeResponseType: responseType.includes('Активные'), responseType: true }">
                Активные
            </span>
            <span @click="responseType = 'Все отклики'" :class="{ activeResponseType: responseType.includes('Все отклики'), responseType: true }">
                Все отклики
            </span>
            <hr/>
            <div v-if="responseType.includes('Активные')">
                <select name="responseOptions" id="">
                    <option value="Любые отклики">Только новые</option>
                    <option value="Любые отклики">Любые отклики</option>
                    <option value="Любые отклики">На рассмотрении</option>
                    <option value="Любые отклики">Приглашение</option>
                    <option value="Любые отклики">Отказ</option>
                </select>
                <div class="responsesTable">
                    <div class="responsesTableHeader">
                        <div>
                            <input type="checkbox">
                            <span>
                                Статус
                            </span>
                        </div>
                        <span>
                            Вакансия
                        </span>
                        <div>
                            <span>
                                Дата
                            </span>
                            <span>
                                Дата
                            </span>
                        </div>
                    </div>
                    <div class="responsesTableRow">
                        <div>
                            <div>
                                <input type="checkbox">
                                <span :class="{ status: true, refusal: responseStatus.includes('Отказ'), offer: responseStatus.includes('Приглашение'), }">
                                    {{ responseStatus }}
                                </span>
                            </div>
                            <div class="chart">
                                <span>
                                    О
                                </span>
                                <span>
                                    87%
                                </span>
                                <span>
                                    |||
                                </span>
                            </div>
                        </div>
                        <div class="vacancyColumn">
                            <span class="vacancyName">
                                2d Аниматор (Художник-аниматор)
                            </span>
                            <span class="vacancyPlace">
                                в Nexters
                            </span>
                            <div class="actions">
                                <span class="vacancyAction">
                                    Удалить
                                </span>
                                <span class="vacancyAction">
                                    Оставить отзыв
                                </span>
                                <span class="vacancyAction">
                                    Статистика по вакансии
                                </span>
                            </div>
                        </div>
                        <div>
                            <span class="vacancyDate">
                                26 апреля 2021
                            </span>
                        </div>
                    </div>
                    <div class="responsesTableRow">
                        <div>
                            <div>
                                <input type="checkbox">
                                <span :class="{ status: true, refusal: responseStatus.includes('Отказ'), offer: responseStatus.includes('Приглашение'), }">
                                    {{ responseStatus }}
                                </span>
                            </div>
                            <div class="chart">
                                <span>
                                    О
                                </span>
                                <span>
                                    87%
                                </span>
                                <span>
                                    |||
                                </span>
                            </div>
                        </div>
                        <div class="vacancyColumn">
                            <span class="vacancyName">
                                2d Аниматор (Художник-аниматор)
                            </span>
                            <span class="vacancyPlace">
                                в Nexters
                            </span>
                            <div class="actions">
                                <span class="vacancyAction">
                                    Удалить
                                </span>
                                <span class="vacancyAction">
                                    Оставить отзыв
                                </span>
                                <span class="vacancyAction">
                                    Статистика по вакансии
                                </span>
                            </div>
                        </div>
                        <div>
                            <span class="vacancyDate">
                                26 апреля 2021
                            </span>
                        </div>
                    </div>
                    <div class="responsesTableRow">
                        <div>
                            <div>
                                <input type="checkbox">
                                <span :class="{ status: true, refusal: responseStatus.includes('Отказ'), offer: responseStatus.includes('Приглашение'), }">
                                    {{ responseStatus }}
                                </span>
                            </div>
                            <div class="chart">
                                <span>
                                    О
                                </span>
                                <span>
                                    87%
                                </span>
                                <span>
                                    |||
                                </span>
                            </div>
                        </div>
                        <div class="vacancyColumn">
                            <span class="vacancyName">
                                2d Аниматор (Художник-аниматор)
                            </span>
                            <span class="vacancyPlace">
                                в Nexters
                            </span>
                            <div class="actions">
                                <span class="vacancyAction">
                                    Удалить
                                </span>
                                <span class="vacancyAction">
                                    Оставить отзыв
                                </span>
                                <span class="vacancyAction">
                                    Статистика по вакансии
                                </span>
                            </div>
                        </div>
                        <div>
                            <span class="vacancyDate">
                                26 апреля 2021
                            </span>
                        </div>
                    </div>
                    <div class="responsesTableRow">
                        <div>
                            <div>
                                <input type="checkbox">
                                <span :class="{ status: true, refusal: responseStatus.includes('Отказ'), offer: responseStatus.includes('Приглашение'), }">
                                    {{ responseStatus }}
                                </span>
                            </div>
                            <div class="chart">
                                <span>
                                    О
                                </span>
                                <span>
                                    87%
                                </span>
                                <span>
                                    |||
                                </span>
                            </div>
                        </div>
                        <div class="vacancyColumn">
                            <span class="vacancyName">
                                2d Аниматор (Художник-аниматор)
                            </span>
                            <span class="vacancyPlace">
                                в Nexters
                            </span>
                            <div class="actions">
                                <span class="vacancyAction">
                                    Удалить
                                </span>
                                <span class="vacancyAction">
                                    Оставить отзыв
                                </span>
                                <span class="vacancyAction">
                                    Статистика по вакансии
                                </span>
                            </div>
                        </div>
                        <div>
                            <span class="vacancyDate">
                                26 апреля 2021
                            </span>
                        </div>
                    </div>
                    <div class="responsesTableRow">
                        <div>
                            <div>
                                <input type="checkbox">
                                <span :class="{ status: true, refusal: responseStatus.includes('Отказ'), offer: responseStatus.includes('Приглашение'), }">
                                    {{ responseStatus }}
                                </span>
                            </div>
                            <div class="chart">
                                <span>
                                    О
                                </span>
                                <span>
                                    87%
                                </span>
                                <span>
                                    |||
                                </span>
                            </div>
                        </div>
                        <div class="vacancyColumn">
                            <span class="vacancyName">
                                2d Аниматор (Художник-аниматор)
                            </span>
                            <span class="vacancyPlace">
                                в Nexters
                            </span>
                            <div class="actions">
                                <span class="vacancyAction">
                                    Удалить
                                </span>
                                <span class="vacancyAction">
                                    Оставить отзыв
                                </span>
                                <span class="vacancyAction">
                                    Статистика по вакансии
                                </span>
                            </div>
                        </div>
                        <div>
                            <span class="vacancyDate">
                                26 апреля 2021
                            </span>
                        </div>
                    </div>
                </div>
                <span class="advice">
                    Совет: получайте уведомления о статусе ваших откликов в телеграме, вконтакте или вайбереНастроить мессенджер
                </span>
                <span class="etc">
                    Вам также подойдут эти вакансии
                </span>
                <div class="vacancies">
                    <div class="vacancyItem">
                        <div class="vacancyItemBenefits">
                            <div class="vacancyItemBenefit vacancyItemBenefitFirst">
                                Отклик без резюме
                            </div>
                            <div class="vacancyItemBenefit vacancyItemBenefitSecond">
                                Будьте первыми
                            </div>
                        </div>
                        <div class="vacancyItemHeader">
                            <span class="vacancyItemName">
                                Грузчик на склад
                            </span>
                            <span class="vacancyItemSalary">
                                до {{ "46 000" }} руб.
                            </span>
                        </div>
                        <div class="vacancyItemAux vacancyItemAuxRow">
                            <span>
                                Входные двери Ferroni
                            </span>
                            <span class="material-icons">
                                done
                            </span>
                        </div>
                        <span class="vacancyItemAux">
                            Калининград
                        </span>
                        <div class="vacancyItemDesc">
                            <span >
                                Погрузка-разгрузка входных металлических дверей. Перемещение дверей по территории склада.
                            </span>
                            <img width="125px" :src="`https://hhcdn.ru/employer-logo/3796715.jpeg`" alt="">
                        </div>
                        <div>
                            <button class="btn btn-primary">
                                Откликнуться
                            </button>
                            <button class="btn btn-light">
                                Не показывать
                            </button>
                            <button class="btn btn-light">
                                Показать контакты
                            </button>
                            <button class="btn btn-light">
                                В избранное
                            </button>
                        </div>
                    </div>
                </div>                
            </div>
            <div v-else-if="responseType.includes('Все отклики')">
                <select name="responseOptions" id="">
                    <option value="Только новые">Только новые</option>
                    <option value="Любые отклики">Любые отклики</option>
                    <option value="На рассмотрении">На рассмотрении</option>
                    <option value="Доставлен">Доставлен</option>
                    <option value="Приглашение">Приглашение</option>
                    <option value="Отказ">Отказ</option>
                </select>
                <div class="responsesTable">
                    <div class="responsesTableHeader">
                        <div>
                            <span>
                                Статус
                            </span>
                        </div>
                        <span>
                            Вакансия
                        </span>
                        <span>
                            
                        </span>
                        <div>
                            <span>
                                Дата
                            </span>
                            <span>
                                Дата
                            </span>
                        </div>
                    </div>
                    <div class="responsesTableRow">
                        <div>
                            <div>
                                <span :class="{ status: true, refusal: responseStatus.includes('Отказ'), offer: responseStatus.includes('Приглашение'), }">
                                    {{ responseStatus }}
                                </span>
                            </div>
                            <div class="chart">
                                <span>
                                    О
                                </span>
                                <span>
                                    87%
                                </span>
                                <span>
                                    |||
                                </span>
                            </div>
                        </div>
                        <div class="vacancyColumn">
                            <span class="vacancyName">
                                2d Аниматор (Художник-аниматор)
                            </span>
                            <span class="vacancyPlace">
                                в Nexters
                            </span>
                            <div class="actions">
                                <span class="vacancyAction">
                                    Удалить
                                </span>
                                <span class="vacancyAction">
                                    Оставить отзыв
                                </span>
                                <span class="vacancyAction">
                                    Статистика по вакансии
                                </span>
                            </div>
                        </div>
                        <div>
                            <span class="vacancyDate">
                                В архиве
                            </span>
                        </div>
                        <div>
                            <span class="vacancyDate">
                                26 апреля 2021
                            </span>
                        </div>
                    </div>
                    <div class="responsesTableRow">
                        <div>
                            <div>
                                <span :class="{ status: true, refusal: responseStatus.includes('Отказ'), offer: responseStatus.includes('Приглашение'), }">
                                    {{ responseStatus }}
                                </span>
                            </div>
                            <div class="chart">
                                <span>
                                    О
                                </span>
                                <span>
                                    87%
                                </span>
                                <span>
                                    |||
                                </span>
                            </div>
                        </div>
                        <div class="vacancyColumn">
                            <span class="vacancyName">
                                2d Аниматор (Художник-аниматор)
                            </span>
                            <span class="vacancyPlace">
                                в Nexters
                            </span>
                            <div class="actions">
                                <span class="vacancyAction">
                                    Удалить
                                </span>
                                <span class="vacancyAction">
                                    Оставить отзыв
                                </span>
                                <span class="vacancyAction">
                                    Статистика по вакансии
                                </span>
                            </div>
                        </div>
                        <div>
                            <span class="vacancyDate">
                                В архиве
                            </span>
                        </div>
                        <div>
                            <span class="vacancyDate">
                                26 апреля 2021
                            </span>
                        </div>
                    </div>
                    <div class="responsesTableRow">
                        <div>
                            <div>
                                <span :class="{ status: true, refusal: responseStatus.includes('Отказ'), offer: responseStatus.includes('Приглашение'), }">
                                    {{ responseStatus }}
                                </span>
                            </div>
                            <div class="chart">
                                <span>
                                    О
                                </span>
                                <span>
                                    87%
                                </span>
                                <span>
                                    |||
                                </span>
                            </div>
                        </div>
                        <div class="vacancyColumn">
                            <span class="vacancyName">
                                2d Аниматор (Художник-аниматор)
                            </span>
                            <span class="vacancyPlace">
                                в Nexters
                            </span>
                            <div class="actions">
                                <span class="vacancyAction">
                                    Удалить
                                </span>
                                <span class="vacancyAction">
                                    Оставить отзыв
                                </span>
                                <span class="vacancyAction">
                                    Статистика по вакансии
                                </span>
                            </div>
                        </div>
                        <div>
                            <span class="vacancyDate">
                                В архиве
                            </span>
                        </div>
                        <div>
                            <span class="vacancyDate">
                                26 апреля 2021
                            </span>
                        </div>
                    </div>
                    <div class="responsesTableRow">
                        <div>
                            <div>
                                <span :class="{ status: true, refusal: responseStatus.includes('Отказ'), offer: responseStatus.includes('Приглашение'), }">
                                    {{ responseStatus }}
                                </span>
                            </div>
                            <div class="chart">
                                <span>
                                    О
                                </span>
                                <span>
                                    87%
                                </span>
                                <span>
                                    |||
                                </span>
                            </div>
                        </div>
                        <div class="vacancyColumn">
                            <span class="vacancyName">
                                2d Аниматор (Художник-аниматор)
                            </span>
                            <span class="vacancyPlace">
                                в Nexters
                            </span>
                            <div class="actions">
                                <span class="vacancyAction">
                                    Удалить
                                </span>
                                <span class="vacancyAction">
                                    Оставить отзыв
                                </span>
                                <span class="vacancyAction">
                                    Статистика по вакансии
                                </span>
                            </div>
                        </div>
                        <div>
                            <span class="vacancyDate">
                                В архиве
                            </span>
                        </div>
                        <div>
                            <span class="vacancyDate">
                                26 апреля 2021
                            </span>
                        </div>
                    </div>
                    <div class="responsesTableRow">
                        <div>
                            <div>
                                <span :class="{ status: true, refusal: responseStatus.includes('Отказ'), offer: responseStatus.includes('Приглашение'), }">
                                    {{ responseStatus }}
                                </span>
                            </div>
                            <div class="chart">
                                <span>
                                    О
                                </span>
                                <span>
                                    87%
                                </span>
                                <span>
                                    |||
                                </span>
                            </div>
                        </div>
                        <div class="vacancyColumn">
                            <span class="vacancyName">
                                2d Аниматор (Художник-аниматор)
                            </span>
                            <span class="vacancyPlace">
                                в Nexters
                            </span>
                            <div class="actions">
                                <span class="vacancyAction">
                                    Удалить
                                </span>
                                <span class="vacancyAction">
                                    Оставить отзыв
                                </span>
                                <span class="vacancyAction">
                                    Статистика по вакансии
                                </span>
                            </div>
                        </div>
                        <div>
                            <span class="vacancyDate">
                                В архиве
                            </span>
                        </div>
                        <div>
                            <span class="vacancyDate">
                                26 апреля 2021
                            </span>
                        </div>
                    </div>
                </div>
                <span class="advice">
                    Совет: получайте уведомления о статусе ваших откликов в телеграме, вконтакте или вайбереНастроить мессенджер
                </span>
                <span class="etc">
                    Вам также подойдут эти вакансии
                </span>
                <div class="vacancies">
                    <div class="vacancyItem">
                        <div class="vacancyItemBenefits">
                            <div class="vacancyItemBenefit vacancyItemBenefitFirst">
                                Отклик без резюме
                            </div>
                            <div class="vacancyItemBenefit vacancyItemBenefitSecond">
                                Будьте первыми
                            </div>
                        </div>
                        <div class="vacancyItemHeader">
                            <span class="vacancyItemName">
                                Грузчик на склад
                            </span>
                            <span class="vacancyItemSalary">
                                до {{ "46 000" }} руб.
                            </span>
                        </div>
                        <div class="vacancyItemAux vacancyItemAuxRow">
                            <span>
                                Входные двери Ferroni
                            </span>
                            <span class="material-icons">
                                done
                            </span>
                        </div>
                        <span class="vacancyItemAux">
                            Калининград
                        </span>
                        <div class="vacancyItemDesc">
                            <span >
                                Погрузка-разгрузка входных металлических дверей. Перемещение дверей по территории склада.
                            </span>
                            <img width="125px" :src="`https://hhcdn.ru/employer-logo/3796715.jpeg`" alt="">
                        </div>
                        <div>
                            <button class="btn btn-primary">
                                Откликнуться
                            </button>
                            <button class="btn btn-light">
                                Не показывать
                            </button>
                            <button class="btn btn-light">
                                Показать контакты
                            </button>
                            <button class="btn btn-light">
                                В избранное
                            </button>
                        </div>
                    </div>
                </div>                
            </div>

        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Responses',
    data(){
        return {
            responseType: 'Все отклики',
            responseStatus: 'Отказ'
        }
    },
    mounted(){
        this.responseType = this.$route.query.responsetype
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
    cursor: pointer;
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

    .areaShortcuts {
        color: rgb(255, 255, 255);
        font-size: 28px;
        cursor: pointer;
    }

    .areaShortcutsLabel {
        color: rgb(255, 255, 255);
        text-decoration: underline;
        text-decoration-style: dashed;
        cursor: pointer;
    }
    
    .activeResponseType {
        text-decoration: underline;
        color: rgb(0, 0, 200);
        cursor: pointer;
    }

    .responseType {
        cursor: pointer;
    }

    .responsesTable {
        display: flex;
        flex-direction: column;
        width: 75%;
        margin: auto;
    }

    .responsesTableHeader {
        display: flex;
        justify-content: space-between;
    }

    .responsesTableRow {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 25px 0px;
        margin: 15px 0px;
        background-color: rgb(255, 255, 255);
    }

    .responsesTableRow:hover {
        background-color: rgb(250, 250, 250);
    }
    
    .refusal {
        color: rgb(200, 0, 0);
    }

    .offer {
        color: rgb(0, 150, 0);
    }

    .status {
        font-size: 18px;
        font-weight: bolder;
    }


    .vacancyColumn {
        display: flex;
        flex-direction: column;
    }

    .vacancyName {
        font-weight: bolder;
        font-size: 18px;
        color: rgb(0, 100, 150);
    }

    .vacancyPlace {
        color: rgb(150, 150, 150);
        cursor: pointer;
    }

    .vacancyAction {
        color: rgb(0, 0, 150);
        cursor: pointer;
    }

    .vacancyDate {
        font-weight: bolder;
        font-size: 18px;
    }

    .advice {
        background-color: rgb(245, 245, 245);
        box-sizing: border-box;
        padding: 5px;
    }

    .vacancies {
        margin-left: 75px;
        float: left;
        width: 65%;
    }

    .vacancyItem {
        border: 1px solid rgb(230, 230, 230);
        box-sizing: border-box;
        padding: 25px;
        display: flex;
        flex-direction: column;

    }

    .vacancyItemName {
        color: rgb(0, 0, 255);
        font-size: 20px;
        font-weight: bolder;

    }

    .vacancyItemHeader {
        display: flex;
        justify-content: space-between;
    }

    .vacancyItemSalary {
        font-size: 18px;
        font-weight: bolder;
    }

    .vacancyItemDesc {
        display: flex;
        justify-content: space-between;
    }

    .vacancyItemAuxRow {
        display: flex;
        
    }

    .vacancyItemAux {
        color: rgb(175, 175, 175);
    }

    .vacancyItemBenefits {
        display: flex;
    }

    .vacancyItemBenefit {
        margin: 15px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 175px; 
        height: 35px;
    }

    .vacancyItemBenefitFirst {
        background-color: rgb(235, 200, 200);
    }

    .vacancyItemBenefitSecond {
        background-color: rgb(175, 255, 255); 
    }

    .etc {
        display: block;
        font-weight: bolder;
        font-size: 24px;
        margin: 25px 0px;
    }
    
</style>