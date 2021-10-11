<template>
    <div>
        <Header :currentPage="'Лучшие вакансии'" :auth="true" />
        <div>
            <BarAuth />
            <div>
                <h3>
                    Избранные вакансии
                </h3>    
                <div class="vacancies">
                    <div class="vacancyItem">
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
                                В избранном
                            </button>
                        </div>
                    </div>
                    <div class="vacancyItem">
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
                                В избранном
                            </button>
                        </div>
                    </div>
                    <div class="vacancyItem">
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
                                В избранном
                            </button>
                        </div>
                    </div>
                    <div class="vacancyItem">
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
                                В избранном
                            </button>
                        </div>
                    </div>
                    <div class="vacancyItem">
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
                                В избранном
                            </button>
                        </div>
                    </div>
                </div>
                <div class="pagination">
                    <div class="pages">
                        <div :class="{ activePage: currentPage.includes('1'), page: true }">
                            1
                        </div>
                        <div :class="{ activePage: currentPage.includes('2'), page: true }">
                            2
                        </div>
                        <div :class="{ activePage: currentPage.includes('3'), page: true }">
                            3
                        </div>
                        <div :class="{ activePage: currentPage.includes('4'), page: true }">
                            4
                        </div>
                        <div :class="{ activePage: currentPage.includes('5'), page: true }">
                            5
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
import BarAuth from '@/components/BarAuth.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'FavoriteVacancies',
    data(){
        return {
            userType: 'aspirant',
            currentPage: '1'
        }
    },
    mounted(){
        this.userType = this.$route.query.usertype
    },
    components: {
        Header,
        BarAuth,
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

    .vacancies {
        margin-left: 75px;
        /* float: left; */
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

    .pages {
        margin: 25px;
        display: flex;
    }

    .page {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45px; 
        height: 45px; 
        border: 1px solid rgb(215, 215, 215);
        background-color: rgb(235, 235, 235);
    }
    
    .activePage {
        border: 1px solid rgb(175, 175, 175);
        background-color: rgb(200, 200, 200);
    }

    .pagination {
        clear: both;
        display: block;
        width: 100%;
    }

</style>