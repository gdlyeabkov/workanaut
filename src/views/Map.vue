<template>
    <div>
        <Header />
        <BarAuth />
        <div class="map">

        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import BarAuth from '@/components/BarAuth.vue'

export default {
    name: 'Map',
    components: {
        Header,
        BarAuth,
    }
}
</script>
<style scoped>
    .map {
        width: 100%;
        height: 350px;
        background-color: rgb(100, 255, 255);
    }
</style>