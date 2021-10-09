<template>
  <div>
    <Header :currentPage="'Все сервисы'" />
    <div>
        <div class="servicesHeader">
            <h3>
                Сервисы для соискателей
            </h3>
            <span class="material-icons">
                close
            </span>
        </div>
        <div class="servicesBlock">
            <div class="servicesBlockItem">
                <span class="servicesBlockItemHeader">
                    Готовое резюме
                </span>
                <span class="servicesBlockItemContent">
                    Доверьте составление резюме профессионалам!
                </span>
            </div>
            <div class="servicesBlockItem">
                <span class="servicesBlockItemHeader">
                    Карьерная консультация
                </span>
                <span class="servicesBlockItemContent">
                    Обсудите с экспертом, как эффективно искать работу
                </span>
            </div>
            <div class="servicesBlockItem">
                <div class="servicesBlock">
                    <span class="servicesBlockItemHeader">
                        Репетиция собеседования
                    </span>
                    <span class="newService material-icons">
                        fiber_new
                    </span>
                </div>
                <span class="servicesBlockItemContent">
                    Подготовьтесь к интервью вместе с карьерным экспертом
                </span>
            </div>
            <div class="servicesBlockItem">
                <span class="servicesBlockItemHeader">
                    Статистика по вакансии
                </span>
                <span class="servicesBlockItemContent">
                    Сравните себя с другими кандидатами, откликнувшимися на вакансию
                </span>
            </div>
        </div>
        <div class="servicesBlock">
            <div class="servicesBlockItem">
                <span class="servicesBlockItemHeader">
                    Профориентация
                </span>
                <span class="servicesBlockItemContent">
                    Узнайте какой вы специалист и добейтесь большего
                </span>
            </div>
            <div class="servicesBlockItem">
                <span class="servicesBlockItemHeader">
                    Продвижение резюме
                </span>
                <span class="servicesBlockItemContent">
                    Автоматическое поднятие резюме в результатах поиска
                </span>
            </div>
            <div class="servicesBlockItem">
                <span class="servicesBlockItemHeader">
                    Хочу у вас работать
                </span>
                <span class="servicesBlockItemContent">
                    Отправьте свое резюме в компанию мечты
                </span>
            </div>
        </div>
        <h5>
            Образование и консультации
        </h5>    
        <div class="servicesBlock">
            <div class="servicesBlockItem">
                <span class="servicesBlockItemHeader">
                    Бесплатные вебинары
                </span>
            </div>
            <div class="servicesBlockItem">
                <span class="servicesBlockItemHeader">
                    Статьи
                </span>
            </div>
            <div class="servicesBlockItem">
                <span class="servicesBlockItemHeader">
                    Форум карьеристов
                </span>
            </div>
            <div class="servicesBlockItem">
                <span class="servicesBlockItemHeader">
                    Школа программистов
                </span>
            </div>
        </div>
        <div class="servicesBlock">
            <div class="servicesBlockItem">
                <span class="servicesBlockItemHeader">
                    ИТ-проекты
                </span>
            </div>
            <div class="servicesBlockItem">
                <span class="servicesBlockItemHeader">
                    Жизнь в компании
                </span>
            </div>
            <div class="servicesBlockItem">
                <span class="servicesBlockItemHeader">
                    Рейтинг работодателей России
                </span>
            </div>
        </div>
        <h5>
            Студентам и начинающим специалистам
        </h5>    
        <div class="servicesBlock">
            <div class="servicesBlockItem">
                <span class="servicesBlockItemHeader">
                    Карьера для молодых специалистов
                </span>
            </div>
            <div class="servicesBlockItem">
                <span class="servicesBlockItemHeader">
                    Рейтинг факультетов и вузов
                </span>
            </div>
        </div>
        <h3>
            Сервисы в разработке
        </h3>
        <div class="servicesBlock">
            <div class="servicesBlockItem">
                <span class="servicesBlockItemHeader">
                    Песочница
                </span>
                <span class="servicesBlockItemContent">
                    Попробуйте новые сервисы, которые, возможно, появятся на hh.ru в будущем
                </span>
            </div>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: 'CreateResume',
  components: {
    Header,
    Footer
  }
}
</script>
<style scoped>
    
    .servicesHeader {
        display: flex;
        justify-content: space-between;
    }

    .servicesBlock {
        display: flex;
    }

    .servicesBlockItem {
        display: flex;
        flex-direction: column;
        width: 25%;
        margin: 35px;
    }

    .servicesBlockItemHeader {
        color: rgb(0, 0, 255);
    }
    
    .servicesBlockItemContent {
        
    }

    .newService {
        color: rgb(0, 200, 0);
        font-size: 24px; 
        margin: 5px;
    }

</style>