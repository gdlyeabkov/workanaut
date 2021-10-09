<template>
  <div class="header">
    <div class="headerBlock headerBlockStart">
        <span class="headerLink headerLinkMain">
            Россия
        </span>
        <span @click="$router.push({ name: 'Home' })" :class="{ headerLink: true, headerLinkActive: currentPage.includes('Соискателям') }">
            Соискателям
        </span>
        <span @click="$router.push({ name: 'Employers' })" :class="{ headerLink: true, headerLinkActive: currentPage.includes('Работадателям') }">
            Работадателям
        </span>
    </div>
    <div class="headerBlock headerBlockEnd">
        <span @click="$router.push({ name: 'NeedResume' })" :class="{ headerLink: true, headerLinkActive: currentPage.includes('Готовое резюме') }">
            Готовое резюме
        </span>
        <span class="headerLink"  @click="$router.push({ name: 'Consultation' })" :class="{ headerLink: true, headerLinkActive: currentPage.includes('Репетиция собеседования') }">
            Репетиция собеседования
        </span>
        <span  @click="$router.push({ name: 'Services' })" :class="{ headerLink: true, headerLinkMain: true, headerLinkActive: currentPage.includes('Все сервисы') }">
            Все сервисы
        </span>
        <span class="headerLink material-icons">
            apps
        </span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        currentPage: {
            default: 'Home',
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
    .header {
        background-color: rgb(255, 255, 255);
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .headerBlock {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    .headerBlockStart {
        width: 20%;
    }

    .headerBlockEnd {
        width: 35%;
    }

    .headerLink {
        color: rgb(0, 0, 255);
        cursor: pointer;
    }

    .headerLinkActive {
        color: rgb(0, 0, 0);
    }

    .headerLinkMain {
        text-decoration: underline;
        text-decoration-style: dotted;
    }

</style>