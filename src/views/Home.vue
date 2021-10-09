<template>
  <div>
    <Header :currentPage="'Соискателям'" />
    <div class="homePoster">
      <div class="homePosterHeader">
        <div class="homePosterHeaderItem">
          <div class="logo">
            hh
          </div>
          <span @click="drawContextMenu(true)" id="help" class="helpBtn">
            Помощь
          </span>
          <div v-if="contextMenuToggler" class="contextMenu">
            <span>
              Виртуальный консультант
            </span>
            <span>
              Вопросы и ответы
            </span>
            <span>
              Сообщество поддержки
            </span>
            <span>
              Пишите нам
            </span>
            <hr />
            <span class="contextMenuSubContent">
              Техподдержка онлайн
            </span>
            <span class="contextMenuSubContent allOperatorClosed">
              Все операторы заняты
            </span>
            <span class="contextMenuSubContent">
              Пожалуйста, свяжитесь с нами позднее или воспользуйтесь другими сервисами выше.
            </span>
          </div>
        </div>
        <div class="homePosterHeaderItem">
          <button @click="$router.push({ name: 'CreateResume' })" class="btn btn-primary withoutBackgroundBtn createResumeBtn">
            Создать резюме
          </button>
          <button @click="$router.push({ name: 'Login', query: { logintype: 'employee' } })" class="btn btn-primary withoutBackgroundBtn loginBtn">
            Войти
          </button>
        </div>
      </div>
      <p class="tagline">
        Работа найдется для каждого
      </p>
      <div class="searchWorkArea">
        <input v-model="keywords" placeholder="Профессия, должность или компания" type="text" class="form-control">
        <button @click="$router.push({ name: 'Vacancies', query: { keywords: keywords, worktype: 'Постоянная работа' } })" class="btn btn-primary">
          Найти работу
        </button>
      </div>
      <p class="wantEmployee">
        Я ищу работника
      </p>
      <div class="russianRoadsLabel">
        <p>
          Сыграйте в игру – соберите уникальный состав льгот!
        </p>
        <p>
          Сделайте свой выбор с РЖД
        </p>
      </div>
    </div>
    <div class="mainContainer">
      <div class="workInCompaniesContainer">
        <div class="workInCompaniesRow">
          <div class="workInCompaniesItem">
            <div class="workInCompaniesItemLine">
            </div>
            <div class="workInCompaniesItemContent">
              <p class="workInCompaniesItemHeader">
                Вакансии дня
              </p>
              <p class="workInCompaniesItemSalary">
                35 000 – 80 000 руб.
              </p>
              <p class="workInCompaniesItemCount">
                14 вакансий
              </p>
            </div>
          </div>
          <div class="workInCompaniesItem">
            <div class="workInCompaniesItemLine">
            </div>
            <div class="workInCompaniesItemContent">
              <p class="workInCompaniesItemHeader">
                Компании дня
              </p>
              <p class="workInCompaniesItemSalary">
                35 000 – 80 000 руб.
              </p>
              <p class="workInCompaniesItemCount">
                4124 вакансии
              </p>
            </div>
          </div>
          <div class="workInCompaniesItem">
            <div class="workInCompaniesItemLine">
            </div>
            <div class="workInCompaniesItemContent">
              <p class="workInCompaniesItemHeader">
                Работа из дома
              </p>
              <p class="workInCompaniesItemSalary">
                
              </p>
              <p class="workInCompaniesItemCount">
                80009 вакансий
              </p>
            </div>
          </div>
          <div class="workInCompaniesItem">
            <div class="workInCompaniesItemLine">
            </div>
            <div class="workInCompaniesItemContent">
              <p class="workInCompaniesItemHeader">
                Подработка
              </p>
              <p class="workInCompaniesItemSalary">
                до 250 000 руб.
              </p>
              <p class="workInCompaniesItemCount">
                154838 вакансий
              </p>
            </div>
          </div>
        </div>
        <div class="workInCompaniesRow">
          <div class="workInCompaniesItem">
            <div class="workInCompaniesItemLine">
            </div>
            <div class="workInCompaniesItemContent">
              <p class="workInCompaniesItemHeader">
                Курьер
              </p>
              <p class="workInCompaniesItemSalary">
                35 000 – 80 000 руб.
              </p>
              <p class="workInCompaniesItemCount">
                14 вакансий
              </p>
            </div>
          </div>
          <div class="workInCompaniesItem">
            <div class="workInCompaniesItemLine">
            </div>
            <div class="workInCompaniesItemContent">
              <p class="workInCompaniesItemHeader">
                Водитель
              </p>
              <p class="workInCompaniesItemSalary">
                35 000 – 80 000 руб.
              </p>
              <p class="workInCompaniesItemCount">
                4124 вакансии
              </p>
            </div>
          </div>
          <div class="workInCompaniesItem">
            <div class="workInCompaniesItemLine">
            </div>
            <div class="workInCompaniesItemContent">
              <p class="workInCompaniesItemHeader">
                Продавец
              </p>
              <p class="workInCompaniesItemSalary">
                
              </p>
              <p class="workInCompaniesItemCount">
                80009 вакансий
              </p>
            </div>
          </div>
          <div class="workInCompaniesItem">
            <div class="workInCompaniesItemLine">
            </div>
            <div class="workInCompaniesItemContent">
              <p class="workInCompaniesItemHeader">
                Кассир
              </p>
              <p class="workInCompaniesItemSalary">
                до 250 000 руб.
              </p>
              <p class="workInCompaniesItemCount">
                154838 вакансий
              </p>
            </div>
          </div>
        </div>
        <div class="workInCompaniesRow">
          <div class="workInCompaniesItem">
            <div class="workInCompaniesItemLine">
            </div>
            <div class="workInCompaniesItemContent">
              <p class="workInCompaniesItemHeader">
                Администратор
              </p>
              <p class="workInCompaniesItemSalary">
                35 000 – 80 000 руб.
              </p>
              <p class="workInCompaniesItemCount">
                14 вакансий
              </p>
            </div>
          </div>
          <div class="workInCompaniesItem">
            <div class="workInCompaniesItemLine">
            </div>
            <div class="workInCompaniesItemContent">
              <p class="workInCompaniesItemHeader">
                Оператор
              </p>
              <p class="workInCompaniesItemSalary">
                35 000 – 80 000 руб.
              </p>
              <p class="workInCompaniesItemCount">
                4124 вакансии
              </p>
            </div>
          </div>
          <div class="workInCompaniesItem">
            <div class="workInCompaniesItemLine">
            </div>
            <div class="workInCompaniesItemContent">
              <p class="workInCompaniesItemHeader">
                Программист
              </p>
              <p class="workInCompaniesItemSalary">
                
              </p>
              <p class="workInCompaniesItemCount">
                80009 вакансий
              </p>
            </div>
          </div>
          <div class="workInCompaniesItem">
            <div class="workInCompaniesItemLine">
            </div>
            <div class="workInCompaniesItemContent">
              <p class="workInCompaniesItemHeader">
                Менеджер
              </p>
              <p class="workInCompaniesItemSalary">
                до 250 000 руб.
              </p>
              <p class="workInCompaniesItemCount">
                154838 вакансий
              </p>
            </div>
          </div>
        </div>
        <p class="othersProfessions">
          Ещё 23 професии
        </p>
      </div>
      <div class="workInCompaniesMainBlock">
        <h5>
          Работа в компаниях
        </h5>
        <div class="barContainer">
          <div class="barColumn">
            <p class="barColumnItemParagraph">
              Автомобильный бизнес
            </p>
            <p class="barColumnItemParagraph">
              Административный персонал
            </p>
            <p class="barColumnItemParagraph">
              Банки, инвестиции, лизинг
            </p>
            <p class="barColumnItemParagraph">
              Безопасность
            </p>
            <p class="barColumnItemParagraph">
              Бухгалтерия, управленческий учет, финансы предприятия
            </p>
            <p class="barColumnItemParagraph">
              Высший менеджмент
            </p>
            <p class="barColumnItemParagraph">
              Государственная служба, некоммерческие организации
            </p>
            <p class="barColumnItemParagraph">
              Добыча сырья
            </p>
            <p class="barColumnItemParagraph">
              Домашний персонал
            </p>
          </div>
          <div class="barColumn">
            <p class="barColumnItemParagraph">
              Закупки
            </p>
            <p class="barColumnItemParagraph">
              Инсталляция и сервис
            </p>
            <p class="barColumnItemParagraph">
              Информационные технологии, интернет, телеком
            </p>
            <p class="barColumnItemParagraph">
              Искусство, развлечения, масс-медиа
            </p>
            <p class="barColumnItemParagraph">
              Консультирование
            </p>
            <p class="barColumnItemParagraph">
              Маркетинг, реклама, PR
            </p>
            <p class="barColumnItemParagraph">
              Медицина, фармацевтика
            </p>
            <p class="barColumnItemParagraph">
              Наука, образование
            </p>
            <p class="barColumnItemParagraph">
              Начало карьеры, студенты
            </p>
            <p class="barColumnItemParagraph">
              Продажи
            </p>
          </div>
          <div class="barColumn">
            <p class="barColumnItemParagraph">
              Производство, сельское хозяйство
            </p>
            <p class="barColumnItemParagraph">
              Рабочий персонал
            </p>
            <p class="barColumnItemParagraph">
              Спортивные клубы, фитнес, салоны красоты
            </p>
            <p class="barColumnItemParagraph">
              Страхование
            </p>
            <p class="barColumnItemParagraph">
              Строительство, недвижимость
            </p>
            <p class="barColumnItemParagraph">
              Транспорт, логистика
            </p>
            <p class="barColumnItemParagraph">
              Туризм, гостиницы, рестораны
            </p>
            <p class="barColumnItemParagraph">
              Управление персоналом, тренинги
            </p>
            <p class="barColumnItemParagraph">
              Юристы
            </p>
          </div>
          <div class="barColumn">
            <div class="barColumnItem">
              <p class="barColumnItemHeader">
                Голосуйте в Рейтинге
              </p>
              <p class="barColumnItemParagraph">
                Выбирайте работодателей, у которых хотите работать
              </p>
              <img src="https://hhcdn.ru/icms/10240004.png" width="150px" alt="">
              <button class="w-75 btn btn-light lightColorBtn">
                Выбрать лучших
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="subMainPoster">
        <img width="100%" src="data:image/jpeg;base64,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" alt="">
      </div>

      <div>
        <h5>
          Работа по профессиям
        </h5>
        <div class="barContainer">
          <div class="barColumn">
            <p class="barColumnItemParagraph">
              Автомобильный бизнес
            </p>
            <p class="barColumnItemParagraph">
              Административный персонал
            </p>
            <p class="barColumnItemParagraph">
              Банки, инвестиции, лизинг
            </p>
            <p class="barColumnItemParagraph">
              Безопасность
            </p>
            <p class="barColumnItemParagraph">
              Бухгалтерия, управленческий учет, финансы предприятия
            </p>
            <p class="barColumnItemParagraph">
              Высший менеджмент
            </p>
            <p class="barColumnItemParagraph">
              Государственная служба, некоммерческие организации
            </p>
            <p class="barColumnItemParagraph">
              Добыча сырья
            </p>
            <p class="barColumnItemParagraph">
              Домашний персонал
            </p>
          </div>
          <div class="barColumn">
            <p class="barColumnItemParagraph">
              Закупки
            </p>
            <p class="barColumnItemParagraph">
              Инсталляция и сервис
            </p>
            <p class="barColumnItemParagraph">
              Информационные технологии, интернет, телеком
            </p>
            <p class="barColumnItemParagraph">
              Искусство, развлечения, масс-медиа
            </p>
            <p class="barColumnItemParagraph">
              Консультирование
            </p>
            <p class="barColumnItemParagraph">
              Маркетинг, реклама, PR
            </p>
            <p class="barColumnItemParagraph">
              Медицина, фармацевтика
            </p>
            <p class="barColumnItemParagraph">
              Наука, образование
            </p>
            <p class="barColumnItemParagraph">
              Начало карьеры, студенты
            </p>
            <p class="barColumnItemParagraph">
              Продажи
            </p>
          </div>
          <div class="barColumn">
            <p class="barColumnItemParagraph">
              Производство, сельское хозяйство
            </p>
            <p class="barColumnItemParagraph">
              Рабочий персонал
            </p>
            <p class="barColumnItemParagraph">
              Спортивные клубы, фитнес, салоны красоты
            </p>
            <p class="barColumnItemParagraph">
              Страхование
            </p>
            <p class="barColumnItemParagraph">
              Строительство, недвижимость
            </p>
            <p class="barColumnItemParagraph">
              Транспорт, логистика
            </p>
            <p class="barColumnItemParagraph">
              Туризм, гостиницы, рестораны
            </p>
            <p class="barColumnItemParagraph">
              Управление персоналом, тренинги
            </p>
            <p class="barColumnItemParagraph">
              Юристы
            </p>
          </div>
          <div class="barColumn">
            <div class="barColumnItem">
              <p class="barColumnItemHeader">
                Голосуйте в Рейтинге
              </p>
              <p class="barColumnItemParagraph">
                Выбирайте работодателей, у которых хотите работать
              </p>
              <img src="https://hhcdn.ru/icms/10240004.png" width="150px" alt="">
              <button class="w-75 btn btn-light lightColorBtn">
                Выбрать лучших
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="barContainer">
        <div class="barColumn">
          <div class="barColumnItem">
            <span class="barColumnItemHeader">
              Новости
            </span>
            <div class="barRowItem">
              <img src="https://hhcdn.ru/icms/10239239.jpg" width="50px" alt="">
              <span class="barColumnItemContent">
                Самые высокие зарплаты октября для удалёнки
              </span>
            </div>
            <hr />
          </div>
          <div class="barColumnItem">
            <div class="barRowItem">
              <img src="https://hhcdn.ru/icms/10239278.jpg" width="50px" alt="">
              <span class="barColumnItemContent">
                Подработка в октябре с высокой зарплатой
              </span>
            </div>
            <hr />
          </div>
          <div class="barColumnItem">
            <div class="barRowItem">
              <img src="https://hhcdn.ru/icms/10239258.jpg" width="50px" alt="">
              <span class="barColumnItemContent">
                Вакансии октября для топ-менеджеров
              </span>
            </div>
            <hr />
          </div>
          <div class="barColumnItem">
            <div class="barRowItem">
              <img src="https://hhcdn.ru/icms/10239269.jpg" width="50px" alt="">
              <span class="barColumnItemContent">
                Высокие зарплаты октября для рабочих специальностей
              </span>
            </div>
            <hr />
          </div>
          
        </div>
        <div class="barColumn">
          <div class="barColumnItem">
            <span class="barColumnItemHeader">
              Статьи
            </span>
            <div class="barRowItem">
              <img src="https://hhcdn.ru/icms/10240004.png" width="50px" alt="">
              <span class="barColumnItemContent">
                Самые высокие зарплаты октября для удалёнки
              </span>
            </div>
            <hr />
          </div>
          <div class="barColumnItem">
            <div class="barRowItem">
              <img src="https://hhcdn.ru/icms/10239888.jpg" width="50px" alt="">
              <span class="barColumnItemContent">
                Смена профессии: как в 42 года начать всё с нуля
              </span>
            </div>
            <hr />
          </div>
          <div class="barColumnItem">
            <div class="barRowItem">
              <img src="https://hhcdn.ru/file/17137494.jpg" width="50px" alt="">
              <span class="barColumnItemContent">
                Торговые представители Coca-Cola HBC Россия: идеальная карьера
              </span>
            </div>
            <hr />
          </div>
          <div class="barColumnItem">
            <div class="barRowItem">
              <img src="https://hhcdn.ru/file/17142935.jpg" width="50px" alt="">
              <span class="barColumnItemContent">
                «Тренд на благополучие: опыт Tele2
              </span>
            </div>
            <hr />
          </div>
          
        </div>
        <div class="barColumn">
          <div class="barColumnItem">
            <span class="barColumnItemHeader">
              Полезное
            </span>
          </div>
          <div class="barColumnItem">
            <p class="barColumnItemParagraph">
              Работа для программиста
            </p>
            <p class="barColumnItemParagraph">
              Работа для бухгалтера
            </p>
            <p class="barColumnItemParagraph">
              Работа для инженера
            </p>
            <p class="barColumnItemParagraph">
              Работа для менеджера по продажам
            </p>
            <p class="barColumnItemParagraph">
              Работа для директора
            </p>
            <p class="barColumnItemParagraph">
              Работа для администратора
            </p>
            <p class="barColumnItemParagraph">
              Работа для маркетолога
            </p>
            <p class="barColumnItemParagraph">
              Работа для дизайнера
            </p>
            <p class="barColumnItemParagraph">
              Работа для юриста
            </p>
          </div>
        </div>
        <div class="barColumn">
          <div class="barColumnItem">
            <span class="barColumnItemHeader">
              Работа в других городах
            </span>
          </div>
          <div class="barColumnItem">
            <p class="barColumnItemParagraph">
              Работа в Загорянском
            </p>
            <p class="barColumnItemParagraph">
              Работа в Москве
            </p>
            <p class="barColumnItemParagraph">
              Работа в Видном
            </p>
            <p class="barColumnItemParagraph">
              Работа в Дзержинском
            </p>
            <p class="barColumnItemParagraph">
              Работа в Долгопрудном
            </p>
            <p class="barColumnItemParagraph">
              Работа в Развилке (Московская область)
            </p>
            <p class="barColumnItemParagraph">
              Работа в Мытищах
            </p>
            <p class="barColumnItemParagraph">
              Работа в Путилкове
            </p>
            <p class="barColumnItemParagraph">
              Работа в Химках
            </p>
            <p class="barColumnItemParagraph">
              Работа в Реутове
            </p>
          </div>
        </div>
      </div>
      
      <div class="workInRussiaContainer">
        <span class="workInRussiaHeader">
          Работа в России
        </span>
        <span>
          Работа составляет большую часть жизни почти каждого из нас. Но ничто не вечно: случается, что однажды приходится менять место работы и с головой погружаться в поиски вакансий — хочется ведь найти хорошую альтернативу текущей должности.
          Однако зачастую при смене работы мы задумываемся не только о смене компании, но и об изменении профессиональной деятельности. И именно в эти моменты возникает вопрос: «Как теперь найти хорошую работу в Москве? А главное, какой должна быть эта работа?»
        </span>
        <span class="workInRussiaToggle">
          Показать полностью
        </span>
      </div>
      <div class="downloadApp">
        <img width="1350px" src="https://d8a6a33f-3369-444b-9b5f-793c13ff0708.selcdn.net/uploads/projects/toiota_tsentr_bittsa/uploads/news-parser/4-1348_bc_toyota_RK_1140x420_1.jpg" alt="">
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
export default {
  name: 'Home',
  data(){
    return {
      keywords: '',
      contextMenuToggler: false
    }
  },
  mounted(){
    document.body.addEventListener("click", (event) => {
      if(!event.target.id.includes('help'))
        this.contextMenuToggler = false
    })
  },
  methods: {
    drawContextMenu(toggler){
      if(toggler) {
        this.contextMenuToggler = true
      } else if(!toggler) {
        
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
  
  .homePoster {
    height: 375px;
    background-image: url('https://lh3.googleusercontent.com/proxy/_uhM0EZJnX396cay5CbIJJIEqQSQkHYsZwcnIHO1AN48EcXT3GzOEj82nvIy8h82Lqeaw5uKbc6EnV8ztwc4LzrszBqzvgnOakbGi6tMjEaA3egprwjvbiU');
    background-size: 100% 100%;
    box-shadow: inset 0 0 200px rgb(0, 0, 0);
  }
  .homePosterHeader {
    display: flex;
    justify-content: space-around;
  }
  .homePosterHeaderItem {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .homePosterHeaderItem > * {
    margin: 15px;
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
  .helpBtn {
    color: rgb(255, 255, 255);
    text-decoration: underline;
    text-decoration-style: dotted;
    cursor: pointer;
  }

  .helpBtn:hover {
    color:rgb(0, 0, 255);  
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
  .tagline {
    color: rgb(255, 255, 255);
    font-weight: bolder;
    font-size: 36px;
    text-align: center;
  }
  .searchWorkArea {
    width: 65%;
    display: flex;
    margin: auto;
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
  .wantEmployee {
    text-align: center;
    color: rgb(255, 255, 255);
    text-decoration: underline;
  }
  .russianRoadsLabel {
    margin-top: 85px;
    color: rgb(255, 255, 255);
  }
  .russianRoadsLabel > p:last-child {
    text-decoration: underline;
  }
  .workInCompaniesContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 425px;
    margin-top: 125px;
  }
  .workInCompaniesItem {
    border-radius: 10px;
    border: 1px solid rgb(150, 150, 150);
    width: 20%;
    height: 125px;
    background-color: rgb(245, 245, 245);
    display: flex;
  }
  .workInCompaniesItem:hover {
    box-shadow: 2px 2px 10px rgb(50, 50, 50);
  }
  .workInCompaniesRow {
    display: flex;
    justify-content: space-around;
    margin: 15px 0px;
  }
  .workInCompaniesItemHeader {
    font-weight: bolder;
  }
  
  .workInCompaniesItemLine {
    height: 100%;
    width: 10px;
    background-color: rgb(215, 0, 0);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .workInCompaniesItemContent {
    box-sizing: border-box;
    padding: 10px 25px;
  }
  .othersProfessions {
    color: rgb(0, 0, 255);
    text-decoration: underline;
    text-decoration-style: dashed;
    margin-top:  35px;
  }
  .barContainer {
    display: flex;
    justify-content: space-around;
  }
  .barColumn {
    
  }
  .barColumnItem {
    width: 275px;
  }
  .barColumnItemHeader {
    font-size: 20px;
    font-weight: bolder;
  }
  .barColumnItemContent {
    margin-left: 25px;
  }
  .barColumnItemContent:hover {
    color: rgb(0, 0, 255);
  }
  .barRowItem {
    display: flex;
  }
  .lightColorBtn {
    margin-top: 25px;
    color: rgb(0, 0, 255);
    border: 1px solid rgb(0, 0, 255);
  }
  .lightColorBtn:hover {
    background-color: rgb(0, 0, 255);
    color: rgb(255, 255, 255);
  }
  .downloadApp {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .workInRussiaContainer {
    box-sizing: border-box;
    padding: 35px;
    display: flex;
    flex-direction: column;
  }
  
  .workInRussiaHeader {
    font-size: 24px;
  }
  .workInRussiaToggle {
    color: rgb(0, 0, 255);
  }
  .mainContainer {
    width: 85%;
    margin: auto;
  }
  .subMainPoster {
    margin: 50px 0px;
  }
  .workInCompaniesMainBlock {
    margin-top: 35px;
  }

  .contextMenu > span {
    font-size: 18px;
  }

  .contextMenu {
    text-align: left;
    box-sizing: border-box;
    padding: 15px 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 350px;
    height: 325px;
    position: absolute;
    top: 60px;
    left: 300px;
    background-color:rgb(250, 250, 250);
    border: 1ps solid rgb(200, 200, 200);
  }

  .contextMenuSubContent {
    color: rgb(150, 150, 150);
  }

  .allOperatorClosed {
    color: rgb(255, 255, 255);
    background-color: rgb(150, 150, 150);
    border-radius: 10px;
    padding: 2px 15px;
  }

</style>