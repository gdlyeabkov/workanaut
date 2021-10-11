<template>
  <div class="header">
    <div class="headerBlock headerBlockStart">
        <span class="headerLink headerLinkMain">
            Россия
        </span>
        <span v-if="!auth" @click="$router.push({ name: 'Home' })" :class="{ headerLink: true, headerLinkActive: currentPage.includes('Соискателям') }">
            Соискателям
        </span>
        <span v-if="!auth" @click="$router.push({ name: 'Employers' })" :class="{ headerLink: true, headerLinkActive: currentPage.includes('Работадателям') }">
            Работадателям
        </span>
    </div>
    <div :class="{ headerBlock: true, headerBlockAuthEnd: auth, headerBlockEnd: !auth }">
        <span v-if="auth" @click="$router.push({ name: 'NeedResume' })" :class="{ headerLink: true, headerLinkActive: currentPage.includes('Готовое резюме') }">
            Поиск работы
        </span>
        <span v-if="auth" class="headerLink"  @click="$router.push({ name: 'Consultation' })" :class="{ headerLink: true, headerLinkActive: currentPage.includes('Репетиция собеседования') }">
            Продвижение резюме
        </span>
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
        },
        auth: {
            default: false,
            type: Boolean,
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

    .headerBlockAuthEnd {
        width: 55%;
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