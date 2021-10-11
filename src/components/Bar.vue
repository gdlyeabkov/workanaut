<template>
    <div class="bar">
        <div class="barItem">
          <div @click="$router.push({ name: 'Home' })" class="logo">
            hh
          </div>
          <span @click="drawContextMenu(true)"  id="help" class="help">
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
        <div class="barItem">
            <span>
                Поиск
            </span>
            <button @click="$router.push({ name: 'CreateResume' })" class="btn btn-primary withoutBackgroundBtn createResumeBtn">
                Создать резюме
            </button>
            <button @click="$router.push({ name: 'Login', query: { logintype: 'employee' } })" class="btn btn-primary withoutBackgroundBtn loginBtn">
              Войти
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Bar',
    data(){
      return {
        contextMenuToggler: false
      }
    },
    mounted(){
      document.body.addEventListener("click", (event) => {
        if(!event.target.id.includes('help'))
          this.contextMenuToggler = false
      })
    },
    methods:{
      drawContextMenu(toggler){
        if(toggler) {
            this.contextMenuToggler = true
        } else if(!toggler) {
            
        }
      }
    }
}
</script>

<style>
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
    height: 45px;
    cursor: pointer;
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

    .contextMenu > span {
    font-size: 18px;
  }

  .contextMenu {
    box-shadow: 0 0 15px rgb(150, 150, 150);
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