<template>
    <div>
        <Header/>
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
            <div class="searchWorkArea">
                <input v-model="keywords" placeholder="Профессия, должность или компания" type="text" class="form-control">
                <button @click="$router.push({ name: 'Vacancies', query: { keywords: keywords } })" class="btn btn-primary">
                    Найти
                </button>
            </div>
            <div class="togglerContainer">
                <div class="toggler">
                    <span @click="toggler = 'vacancies'" class="togglerItem" :style="` text-decoration: ${toggler.includes('vacancies') ? 'underline;' : 'none;'}`">
                        Вакансии
                    </span>
                    <span @click="toggler = 'resumes'" class="togglerItem" :style="` text-decoration: ${toggler.includes('resumes') ? 'underline;' : 'none;'}`">
                        Резюме
                    </span>
                    <span @click="toggler = 'companies'" class="togglerItem" :style="` text-decoration: ${toggler.includes('companies') ? 'underline;' : 'none;'}`">
                        Компании
                    </span>
                </div>
            </div>
            <hr />
            <div v-if="toggler.includes('vacancies')">
                <span class="countOfResults">
                    {{ offers.length }} вакансия «{{ keywords }}»
                </span>
                <div class="workHeader">
                    <div class="workHeaderItem">
                        <span>
                            Пордработка
                        </span>
                    </div>
                    <div class="workHeaderItem">
                        <span>
                            Свежие
                        </span>
                    </div>
                    <div class="workHeaderItem">
                        <span>
                            Сменный график
                        </span>
                    </div>
                    <div class="workHeaderItem">
                        <span>
                            Удалённая работа
                        </span>
                    </div>
                    <div class="workHeaderItem">
                        <span>
                            Нет Опыта
                        </span>
                    </div>
                </div>
                <hr />
                <div class="filter">
                    <div class="filterItem">
                        <span>
                            По соответствию
                        </span>
                        <span class="material-icons">
                            expand_more
                        </span>
                    </div>
                    <div class="filterItem">
                        <span>
                            За всё время
                        </span>
                        <span class="material-icons">
                            expand_more
                        </span>
                    </div>
                </div>
                
                <div class="tree">
                    <hr />
                    <div class="workTypeBlock">
                        <span :style="`color: ${workType.includes('Постоянная работа') ? 'rgb(0, 0, 0);' : 'rgb(0, 0, 255);'}`" class="workTypeItem">
                            Постоянная работа
                        </span>
                        <span :style="`color: ${workType.includes('Подработка') ? 'rgb(0, 0, 0);' : 'rgb(0, 0, 255);'}`" class="workTypeItem">
                            Подработка
                        </span>
                    </div>
                    <hr />
                    <div class="">
                        <span class="regionBlockHeader">
                            Регион
                        </span>
                        <div class="regionBlock">
                            <div class="regionBlockItem">
                                <input type="checkbox">
                                <span>
                                    Россия
                                </span>
                                <span class="countOfResultsRegion">
                                    18535
                                </span>
                            </div>
                        </div>
                        <div class="regionBlock">
                            <div class="regionBlockItem">
                                <input type="checkbox">
                                <span>
                                    Москва
                                </span>
                                <span class="countOfResultsRegion">
                                    18535
                                </span>
                            </div>
                        </div>
                        <div class="regionBlock">
                            <div class="regionBlockItem">
                                <input type="checkbox">
                                <span>
                                    Московская область
                                </span>
                                <span class="countOfResultsRegion">
                                    18535
                                </span>
                            </div>
                        </div>
                        <div class="regionBlock">
                            <div class="regionBlockItem">
                                <input type="checkbox">
                                <span>
                                    Санкт-Петербург
                                </span>
                                <span class="countOfResultsRegion">
                                    18535
                                </span>
                            </div>
                        </div>
                        <div class="regionBlock">
                            <div class="regionBlockItem">
                                <input type="checkbox">
                                <span>
                                    Беларусь
                                </span>
                                <span class="countOfResultsRegion">
                                    18535
                                </span>
                            </div>
                        </div>
                    </div>
                    <span class="showAllRegions">
                        Показать все
                    </span>
                    <div>
                        <span class="keywordsHeader">
                            Уровень дохода
                        </span>
                        <div class="keywordsBlock">
                            <div class="keywordsBlockItem">
                                <input type="radio" />
                                <span>
                                    Не имеет значения
                                    <span class="countResultsException">
                                        
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="radio" />
                                <span>
                                    от 25 000 руб.
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="radio" />
                                <span>
                                    от 55 000 руб.
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="radio" />
                                <span>
                                    от 85 000 руб.
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="radio" />
                                <span>
                                    от 110 000 руб. 
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="radio" />
                                <span>
                                    от 140 000 руб.
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="radio" />
                                <span>
                                    Своя зарплата
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="radio" />
                                <span>
                                    Указан доход
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span class="keywordsHeader">
                            Профобласть
                        </span>
                        <div class="keywordsBlock">
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Рабочий персонал 
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Транспорт, логистика
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Продажи
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Начало карьеры, студенты
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Производство, сельское хозяйство
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                        </div>
                        <span class="showAllRegions">
                            Выбрать ещё
                        </span>
                    </div>
                    <div>
                        <span class="keywordsHeader">
                            Отрасль компании
                        </span>
                        <div class="keywordsBlock">
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Розничная торговля
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Продукты питания 
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Перевозки, логистика, склад, ВЭД
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Товары народного потребления (непищевые) 
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Услуги для бизнеса
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                        </div>
                        <span class="showAllRegions">
                            Выбрать ещё
                        </span>
                    </div>
                    <div>
                        <span class="keywordsHeader">
                            Опыт работы
                        </span>
                        <div class="keywordsBlock">
                            <div class="keywordsBlockItem">
                                <input type="radio" />
                                <span>
                                    Не имеет значения
                                    <span class="countResultsException">
                                        
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="radio" />
                                <span>
                                    Нет опыта
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="radio" />
                                <span>
                                    От 1 года до 3 лет 
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="radio" />
                                <span>
                                    От 3 до 6 лет 
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="radio" />
                                <span>
                                    Более 6 лет 
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span class="keywordsHeader">
                            Тип занятости
                        </span>
                        <div class="keywordsBlock">
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Полная занятость
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Частичная занятость
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Проектная работа
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Стажировка
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Волонтерство
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span class="keywordsHeader">
                            График работы
                        </span>
                        <div class="keywordsBlock">
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Полный день
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Сменный график
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Вахтовый метод
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Гибкий график 
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Удаленная работа
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span class="keywordsHeader">
                            Исключение
                        </span>
                        <div class="keywordsBlock">
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Без вакансий агентств 
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Только с адресом 
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Только доступные для людей с инвалидностью
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Только доступные для соискателей от 14 лет
                                    <span class="countResultsException">
                                        0
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span class="keywordsHeader">
                            Ключевые слова
                        </span>
                        <div class="keywordsBlock">
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    В описании вакансии
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    В названии вакансии
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    В названии компании
                                </span>
                            </div>
                        </div>
                    </div>
                    <span class="resetAll">
                        Сбросить всё
                    </span>
                    <hr />
                    <span class="searchQueryLanguage">
                        Язык поисковых запросов
                    </span>
                </div>
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
                                Показать контакты
                            </button>
                        </div>
                    </div>
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
                                Показать контакты
                            </button>
                        </div>
                    </div>
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
                                Показать контакты
                            </button>
                        </div>
                    </div>
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
                                Показать контакты
                            </button>
                        </div>
                    </div>
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
                                Показать контакты
                            </button>
                        </div>
                    </div>
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
            keywords: '',
            toggler: 'vacancies',
            offers: [],
            workType: 'Постоянная работа'
        }
    },
    mounted(){
        this.keywords = this.$route.query.keywords
        this.workType = this.$route.query.worktype
    },
    methods: {
        search(){
            this.offers = [
                {
                    name: "asd"
                }
            ]
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

    .togglerContainer {
        
    }

    .toggler {
        display: flex;
        width: 25%;
        justify-content: space-around;
    }

    .togglerItem {
        cursor: pointer;
    }

    .searchWorkArea {
        width: 65%;
        display: flex;
        margin: 25px auto;
    }
    .searchWorkArea > * {
        height: 45px;
    }
    .searchWorkArea > button {
        width: 175px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .countOfResults {
        font-weight: bolder;
        font-size: 24px;
    }

    .workHeader {
        display: flex;
    }

    .workHeaderItem {
        border-radius: 25px;
        background-color: rgb(175, 175, 175);
        width: 200px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 15px;
    }
    
    .filter {
        display: flex;
    }

    .filterItem {
        display: flex;
        align-items: center;
        margin: 15px;
    }

    .workTypeBlock {
        display: flex;
        flex-direction: column;
    }

    .workTypeItem {
        font-weight: bolder;
    }

    .regionBlock {
        display: flex;
    }

    .regionBlockItem {
        
    }

    .regionBlockHeader {
        font-weight: bolder;
    }

    .countOfResultsRegion {
        color: rgb(200, 200, 200);
    }

    .showAllRegions {
        color: rgb(0, 0, 255);
        text-decoration: underline;
        text-decoration-style: dashed;
    }

    .salaryHeader {
        font-weight: bolder;
    }
    
    .professionHeader {
        font-weight: bolder;
    }

    .copmanyHeader {
        font-weight: bolder;
    }

    .experienceHeader {
        font-weight: bolder;
    }
    
    .workTypeHeader {
        font-weight: bolder;
    }
        
    .workSheduleHeader {
        font-weight: bolder;
    }
        
    .exceptionHeader {
        font-weight: bolder;
    }

            
    .keywordsHeader {
        font-weight: bolder;
    }

    .resetAll {
        color: rgb(175, 175, 175);
        cursor: pointer;
    }

    .searchQueryLanguage {
        color: rgb(0, 0, 255);
        cursor: pointer;
    }

    .tree {
        margin-left: 25px;
        float: left;
        width: 25%;
    }

    .vacancies {
        margin-left: 75px;
        float: left;
        width: 65%;
    }

    .vacancyItem {
        border: 1px solid rgb(255, 150, 0);
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
    
</style>