<template>
    <div>
        <Header :currentPage="'Прикреплённые'" :auth="true" />
        <div>
            <BarAuth />
            <div class="searchWorkArea">
                <input v-model="keywords" placeholder="Профессия, должность или компания" type="text" class="form-control">
                <button @click="refreshSearch()" class="btn btn-primary">
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
                    {{ resumes.length }} вакансия «{{ keywords }}»
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
                                    {{ 
                                        tempResumes.filter(resume => {
                                            return resume.city.toLowerCase().includes('россия')
                                        }).length
                                    }}
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
                                    {{ 
                                        tempResumes.filter(resume => {
                                            return resume.city.toLowerCase().includes('москва')
                                        }).length
                                    }}
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
                                    {{ 
                                        tempResumes.filter(resume => {
                                            return resume.city.toLowerCase().includes('московская область')
                                        }).length
                                    }}
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
                                    {{ 
                                        tempResumes.filter(resume => {
                                            return resume.city.toLowerCase().includes('санкт-петербург')
                                        }).length
                                    }}
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
                                    {{ 
                                        tempResumes.filter(resume => {
                                            return resume.city.toLowerCase().includes('беларусь')
                                        }).length
                                    }}
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
                                <input @change="refreshSearch()" v-model="salary" :value="0" name="salary" type="radio" />
                                <span>
                                    Не имеет значения
                                    <span class="countResultsException">
                                        {{ 
                                            tempResumes.filter(resume => {
                                                return resume.salary >= 0
                                            }).length
                                        }}
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input @change="refreshSearch()" v-model="salary" :value="25000" name="salary" type="radio" />
                                <span>
                                    от 25 000 руб.
                                    <span class="countResultsException">
                                        {{ 
                                            tempResumes.filter(resume => {
                                                return resume.salary >= 25000
                                            }).length
                                        }}
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input @change="refreshSearch()" v-model="salary" :value="55000" name="salary" type="radio" />
                                <span>
                                    от 55 000 руб.
                                    <span class="countResultsException">
                                        {{ 
                                            tempResumes.filter(resume => {
                                                return resume.salary >= 55000
                                            }).length
                                        }}
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input @change="refreshSearch()" v-model="salary" :value="85000" name="salary" type="radio" />
                                <span>
                                    от 85 000 руб.
                                    <span class="countResultsException">
                                        {{ 
                                            tempResumes.filter(resume => {
                                                return resume.salary >= 85000
                                            }).length
                                        }}
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input @change="refreshSearch()" v-model="salary" :value="110000" name="salary" type="radio" />
                                <span>
                                    от 110 000 руб. 
                                    <span class="countResultsException">
                                        {{ 
                                            tempResumes.filter(resume => {
                                                return resume.salary >= 110000
                                            }).length
                                        }}
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input @change="refreshSearch()" v-model="salary" :value="140000" name="salary" type="radio" />
                                <span>
                                    от 140 000 руб.
                                    <span class="countResultsException">
                                        {{ 
                                            tempResumes.filter(resume => {
                                                return resume.salary >= 140000
                                            }).length
                                        }}
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input @change="refreshSearch()" v-model="salary" :value="1" name="salary" type="radio" />
                                <span>
                                    Своя зарплата
                                    <span class="countResultsException">
                                        {{ 
                                            tempResumes.filter(resume => {
                                                return resume.salary >= 0
                                            }).length
                                        }}
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input name="salary" type="radio" />
                                <span>
                                    Указан доход
                                    <span class="countResultsException">
                                        {{ 
                                            tempResumes.filter(resume => {
                                                return resume.salary >= 0
                                            }).length
                                        }}
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
                                <input name="profession" :value="'Рабо'" v-model="profession" @change="refreshSearch()" type="checkbox" />
                                <span>
                                    Рабочий персонал 
                                    <span class="countResultsException">
                                        {{ 
                                            tempResumes.filter(resume => {
                                                return resume.profession.toLowerCase().includes('рабочий персонал')
                                            }).length
                                        }}
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input name="profession" :value="'транспорт'" v-model="profession" @change="refreshSearch()" type="checkbox" />
                                <span>
                                    Транспорт, логистика
                                    <span class="countResultsException">
                                        {{ 
                                            tempResumes.filter(resume => {
                                                return resume.profession.toLowerCase().includes('транспорт') || resume.profession.toLowerCase().includes('логистика')
                                            }).length
                                        }}
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input name="profession" :value="'Прод'" v-model="profession" @change="refreshSearch()" type="checkbox" />
                                <span>
                                    Продажи
                                    <span class="countResultsException">
                                        {{ 
                                            tempResumes.filter(resume => {
                                                return resume.profession.toLowerCase().includes('продажи')
                                            }).length
                                        }}
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input name="profession" :value="'Начало'" v-model="profession" @change="refreshSearch()" type="checkbox" />
                                <span>
                                    Начало карьеры, студенты
                                    <span class="countResultsException">
                                        {{ 
                                            tempResumes.filter(resume => {
                                                return resume.profession.toLowerCase().includes('начало') || resume.profession.toLowerCase().includes('карьер') || resume.profession.toLowerCase().includes('студенты')
                                            }).length
                                        }}
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input name="profession" :value="'сельск'" v-model="profession" @change="refreshSearch()" type="checkbox" />
                                <span>
                                    Производство, сельское хозяйство
                                    <span class="countResultsException">
                                        {{ 
                                            tempResumes.filter(resume => {
                                                return resume.profession.toLowerCase().includes('производство') || resume.profession.toLowerCase().includes('сельск') || resume.profession.toLowerCase().includes('хозяйств')
                                            }).length
                                        }}
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
                                        {{ 
                                            computeCompanyIndustry('розничная торговля')
                                        }}
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Продукты питания 
                                    <span class="countResultsException">
                                        {{ 
                                            computeCompanyIndustry('продукты питания')
                                        }}
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Перевозки, логистика, склад, ВЭД
                                    <span class="countResultsException">
                                        {{ 
                                            computeCompanyIndustry('Перевозки, логистика, склад, вэд')
                                        }}
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Товары народного потребления (непищевые) 
                                    <span class="countResultsException">
                                        {{ 
                                            computeCompanyIndustry('товары народного потребления (непищевые)')
                                        }}
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Услуги для бизнеса
                                    <span class="countResultsException">
                                        {{ 
                                            computeCompanyIndustry('услуги для бизнеса')
                                        }}
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
                                <input name="experience" :value="-1" @change="refreshSearch()" v-model="experience" type="radio" />
                                <span>
                                    Не имеет значения
                                    <span class="countResultsException">
                                        
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input :value="0" @change="refreshSearch()" v-model="experience" name="experience" type="radio" />
                                <span>
                                    Нет опыта
                                    <span class="countResultsException">
                                        {{
                                            computeExperience(0, 0)
                                        }}
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input :value="1" @change="refreshSearch()" v-model="experience" name="experience" type="radio" />
                                <span>
                                    От 1 года до 3 лет 
                                    <span class="countResultsException">
                                        {{
                                            computeExperience(1, 3)
                                        }}
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input :value="3" @change="refreshSearch()" v-model="experience" name="experience" type="radio" />
                                <span>
                                    От 3 до 6 лет 
                                    <span class="countResultsException">
                                        {{
                                            computeExperience(3, 6)
                                        }}
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input :value="6" @change="refreshSearch()" v-model="experience" name="experience" type="radio" />
                                <span>
                                    Более 6 лет 
                                    <span class="countResultsException">
                                        {{
                                            computeExperience(6)
                                        }}
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
                                        {{ 
                                            computeWorktype('полная занятость')
                                        }}
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Частичная занятость
                                    <span class="countResultsException">
                                        {{ 
                                            computeWorktype('частичная занятость')
                                        }}
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Проектная работа
                                    <span class="countResultsException">
                                        {{ 
                                            computeWorktype('проектная работа')
                                        }}
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Стажировка
                                    <span class="countResultsException">
                                        {{ 
                                            computeWorktype('стажировка')
                                        }}
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Волонтерство
                                    <span class="countResultsException">
                                        {{ 
                                            computeWorktype('волонтерство')
                                        }}
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
                                        {{ 
                                            computeShedule('полный день')
                                        }}
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Сменный график
                                    <span class="countResultsException">
                                        {{ 
                                            computeShedule('сменный график')
                                        }}
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Вахтовый метод
                                    <span class="countResultsException">
                                        {{ 
                                            computeShedule('вахтовый метод')
                                        }}
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Гибкий график 
                                    <span class="countResultsException">
                                        {{ 
                                            computeShedule('гибкий график')
                                        }}
                                    </span>
                                </span>
                            </div>
                            <div class="keywordsBlockItem">
                                <input type="checkbox" />
                                <span>
                                    Удаленная работа
                                    <span class="countResultsException">
                                        {{ 
                                            computeShedule('удаленная работа')
                                        }}
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
                    <div v-if="userType.includes('employer')">
                        <div v-for="resume in resumes" :key="resume._id" class="vacancyItem">
                            <div class="vacancyItemBenefits">
                                <div class="vacancyItemBenefit vacancyItemBenefitFirst">
                                    Отклик без резюме
                                </div>
                                <div class="vacancyItemBenefit vacancyItemBenefitSecond">
                                    Будьте первыми
                                </div>
                            </div>
                            <div class="vacancyItemHeader">
                                <span  @click="$router.push({ name: 'Vacancy', query: { usertype: userType, vacancyid: resume._id } })" class="vacancyItemName">
                                    {{ resume.profession }}
                                </span>
                                <span class="vacancyItemSalary">
                                    до {{ resume.salary }} руб.
                                </span>
                            </div>
                            <div class="vacancyItemAux vacancyItemAuxRow">
                                <span>
                                    {{ `${resume.name} ${resume.secondName}`}}
                                </span>
                                <span class="material-icons">
                                    done
                                </span>
                            </div>
                            <span class="vacancyItemAux">
                                {{ resume.city }}
                            </span>
                            <div class="vacancyItemDesc">
                                <span >
                                    Погрузка-разгрузка входных металлических дверей. Перемещение дверей по территории склада.
                                </span>
                                <img width="125px" :src="`https://hhcdn.ru/employer-logo/3796715.jpeg`" alt="">
                            </div>
                            <div>
                                <button @click="click(resume._id)" class="btn btn-primary">
                                    Откликнуться
                                </button>
                                <button class="btn btn-light">
                                    Показать контакты
                                </button>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="userType.includes('aspirant')">
                        <div v-for="resume in resumes" :key="resume._id" class="vacancyItem">
                            <div class="vacancyItemBenefits">
                                <div class="vacancyItemBenefit vacancyItemBenefitFirst">
                                    Отклик без резюме
                                </div>
                                <div class="vacancyItemBenefit vacancyItemBenefitSecond">
                                    Будьте первыми
                                </div>
                            </div>
                            <div class="vacancyItemHeader">
                                <span @click="$router.push({ name: 'Vacancy', query: { usertype: userType, vacancyid: resume._id } })" class="vacancyItemName">
                                    {{ resume.profession }}
                                </span>
                                <span class="vacancyItemSalary">
                                    до {{ resume.salary }} руб.
                                </span>
                            </div>
                            <div class="vacancyItemAux vacancyItemAuxRow">
                                <span>
                                    {{ resume.company }}
                                </span>
                                <span class="material-icons">
                                    done
                                </span>
                            </div>
                            <span class="vacancyItemAux">
                                {{ resume.city }}
                            </span>
                            <div class="vacancyItemDesc">
                                <span >
                                    Погрузка-разгрузка входных металлических дверей. Перемещение дверей по территории склада.
                                </span>
                                <img width="125px" :src="`https://hhcdn.ru/employer-logo/3796715.jpeg`" alt="">
                            </div>
                            <div>
                                <button @click="click(resume._id)" class="btn btn-primary">
                                    Откликнуться
                                </button>
                                <button class="btn btn-light">
                                    Показать контакты
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="vacancyItem">
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
                    </div> -->
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import BarAuth from '@/components/BarAuth.vue'
import Footer from '@/components/Footer.vue'

import * as jwt from 'jsonwebtoken'

export default {
    name: 'Vacancies',
    data(){
        return {
            aspirant: {},
            tempResumes: [],
            resumes: [],
            userType: 'aspirant',
            keywords: this.$route.query.keywords,
            toggler: 'vacancies',
            offers: [],
            workType: 'Постоянная работа',
            token: localStorage.getItem('workanauttoken'),
            
            russiaRegion: false,
            moscowRegion: false,
            moscowArearegionRegion: false,
            stPetersburgRegion: false,
            belarusRegion: false,

            salary: 0,

            experience: -1,

            profession: []
        }
    },
    mounted(){
        
        jwt.verify(this.token, 'workanautsecret', (err, decoded) => {
            if (err) {
                this.$router.push({ name: "Login", query: { logintype: 'employee' } })
            } else {
                this.userType = this.$route.query.usertype
                this.keywords = this.$route.query.keywords
                this.workType = this.$route.query.worktype
                
                if(this.userType.includes('aspirant')){
                    fetch(`https://workanaut.herokuapp.com/api/aspirants/get/?aspirantfeedback=${decoded.phone}`, {
                    // fetch(`http://localhost:4000/api/aspirants/get/?aspirantfeedback=${decoded.phone}`, {
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
                        console.log(`JSON.parse(result).vacancies: ${JSON.parse(result).vacancies.length}`)
                        this.aspirant = JSON.parse(result).aspirant
                        
                    })
                } else if(this.userType.includes('employer')){
                    fetch(`https://workanaut.herokuapp.com/api/employers/get/?employeremail=${decoded.phone}`, {
                    // fetch(`http://localhost:4000/api/employers/get/?employeremail=${decoded.phone}`, {
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
                        console.log(`result: ${result}`)
                        this.aspirant = JSON.parse(result).employer
                    })
                }

                this.refreshSearch()

            }
        })

    },
    methods: {
        click(resumeId){
            if(this.userType.includes('aspirant')) {
                fetch(`https://workanaut.herokuapp.com/api/vacancy/response/?aspirantfeedback=${this.aspirant.feedback}&vacancyid=${resumeId}`, {
                // fetch(`http://localhost:4000/api/vacancy/response/?aspirantfeedback=${this.aspirant.feedback}&vacancyid=${resumeId}`, {
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
                    console.log(`JSON.parse(result).vacancies: ${JSON.parse(result)}`)
                    if(JSON.parse(result).status.includes('OK')){
                        this.$router.push({ name: 'Vacancy', query: { usertype: this.userType, vacancyid: resumeId } })
                    } else if(JSON.parse(result).status.includes('Error')){
                        alert('Ошибка отклика')
                    }
                })
            } else if(this.userType.includes('employer')) {
                fetch(`https://workanaut.herokuapp.com/api/resume/response/?employeremail=${this.aspirant.email}&resumeid=${resumeId}`, {
                // fetch(`http://localhost:4000/api/resume/response/?employeremail=${this.aspirant.email}&resumeid=${resumeId}`, {
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
                    console.log(`JSON.parse(result).vacancies: ${JSON.parse(result)}`)
                    if(JSON.parse(result).status.includes('OK')){
                        this.$router.push({ name: 'Vacancy', query: { usertype: this.userType, vacancyid: resumeId } })
                    } else if(JSON.parse(result).status.includes('Error')){
                        alert('Ошибка отклика')
                    }
                })
            }
        },
        computeCompanyIndustry(subject) {
            if(this.userType.includes('aspirant')) {
                return this.tempResumes.filter(resume => {
                    return resume.companyIndustry.toLowerCase().includes(subject)
                }).length
            } else {
                return ''
            }
        },
        computeExperience(min = 0, max = 6){
            if(this.userType.includes('aspirant')) {
                // return this.tempResumes.filter(resume => resume.experience >= min).length
                return this.tempResumes.filter(resume => resume.experience >= min && max >= resume.experience).length
            } else {
                return ''
            }
        },
        computeWorktype(subject){
            if(this.userType.includes('aspirant')) {
                return this.tempResumes.filter(resume => {
                    return resume.worktype.toLowerCase().includes(subject)
                }).length
            } else {
                return ''
            }
        },
        computeShedule(subject){
            if(this.userType.includes('aspirant')) {
                return this.tempResumes.filter(resume => {
                    return resume.shedule.toLowerCase().includes(subject)
                }).length
            } else {
                return ''
            }
        },
        refreshSearch(){
            if(this.userType.includes('aspirant')){
                fetch(`https://workanaut.herokuapp.com/api/vacancies/get/`, {
                // fetch(`http://localhost:4000/api/vacancies/get/`, {
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
                    console.log(`JSON.parse(result).vacancies: ${JSON.parse(result).vacancies.length}`)
                    
                    this.resumes = JSON.parse(result).vacancies
                    
                    this.tempResumes = this.resumes

                    this.resumes = this.resumes.filter(vacancy => {
                        console.log(`this.keywords: ${this.keywords}, vacancy.profession: ${vacancy.profession}, vacancy.company: ${vacancy.company}`)
                        return this.profession.every((prof) => {
                            return vacancy.profession.toLowerCase().includes(prof)
                        }) &&
                        vacancy.experience >= this.experience && vacancy.salary >= this.salary && this.keywords.length >= 1 && (vacancy.company.toLowerCase().includes(this.keywords) || vacancy.profession.toLowerCase().includes(this.keywords.toLowerCase()))
                    })
                })
            } else if(this.userType.includes('employer')){
                fetch(`https://workanaut.herokuapp.com/api/resumes/get/`, {
                // fetch(`http://localhost:4000/api/resumes/get/`, {
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
                    console.log(`JSON.parse(result): ${JSON.parse(result).resumes.length}`)
                    console.log(`result: ${result}`)
                    this.resumes = JSON.parse(result).resumes
                    this.tempResumes = this.resumes
                    this.resumes = JSON.parse(result).resumes.filter(resume => {
                        return this.keywords.length >= 1 && (resume.specializations.toLowerCase().includes(this.keywords) || resume.profession.toLowerCase().includes(this.keywords))
                    })
                })
            }
        },
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
        BarAuth,
        Footer
    }
}
</script>

<style scoped>
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
        /* float: left; */
        /* height: 1000px; */
        width: 65%;
    }

    .vacancyItem {
        border: 1px solid rgb(255, 150, 0);
        box-sizing: border-box;
        padding: 25px;
        display: flex;
        flex-direction: column;
        /* height: 350px; */
    }

    .vacancyItemName {
        color: rgb(0, 0, 255);
        font-size: 20px;
        font-weight: bolder;
        cursor: pointer;
    }

    .vacancyItemName:hover {
        color: rgb(255, 0, 0);
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