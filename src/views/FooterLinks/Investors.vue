<template>
    <div>
        <Header />
        <Bar />
        <div>
            <div>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img height="350px" src="data:image/jpeg;base64,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" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img height="350px" src="https://static.turbosquid.com/Preview/2014/07/08__06_25_19/Plane_dif_rot-001.jpg1d9f7df3-93e0-425e-8b17-649364171fdbLarge-1.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img height="350px" src="data:image/jpeg;base64,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" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="pricing">
                <div class="pricingItem">
                    <span class="pricingItemHeader">
                        8 282 mln Rub
                    </span>
                    <span>
                        Revenue in 2020
                    </span>
                    <span>
                        +6.3% y-o-y
                    </span>
                </div>
                <div class="pricingItem">
                    <span class="pricingItemHeader">
                        4 104 mln Rub
                    </span>
                    <span>
                        adj. EBITDA in 2020
                    </span>
                    <span>
                        49.5% margin
                    </span>
                </div>
                <div class="pricingItem">
                    <span class="pricingItemHeader">
                        48.2 mln CVs
                    </span>
                    <span>
                        as of December 31, 2020
                    </span>
                </div>
                <div class="pricingItem">
                    <span class="pricingItemHeader">
                        608 k vacancies
                    </span>
                    <span>
                        On average
                    </span>
                    <span>
                        in 2020
                    </span>
                </div>
                <div class="pricingItem">
                    <span class="pricingItemHeader">
                        22.5 mln UMVs
                    </span>
                    <span>
                        On average
                    </span>
                    <span>
                        in 2020
                    </span>
                </div>
            </div>
            <div class="statistics">
                <div class="statisticsBlock">
                    <h2>
                        Stock Performance
                    </h2>
                    <h4>
                        NASDAQ: HHR
                    </h4>
                    <div class="price">
                        <h1>
                            $53.43
                        </h1>
                        <span>
                            0 (0.00%)
                        </span>
                    </div>
                    <span>
                        Data as of Oct 14, 2021 4:00 PM EDT
                    </span>
                    <img width="325px" src="https://api.nasdaqomx.wallst.com/api/chart?display=mountain&symbol=HHR.O-HHR&scale=linear&duration=5dy&frequency=15min&gridLine=h&bgColor=ffffff&lineColor=808080&fillcolor=808080|dddddd&width=450&height=250&headerType=&volume=0&bdrColor=DDDDDD&fillOpacity=70&lineSizePrimary=2&bdr=0" alt="">
                    <span>
                        Data Provided by Refinitiv. Minimum 15 minutes delayed.
                    </span>
                </div>
                <div class="statisticsBlock">
                    <h3>
                        Latest News
                    </h3>
                    <span>
                        9/30/2021
                    </span>
                    <span class="statisticsContent">
                        Workanaut Group PLC Announces Share Buyback Program
                    </span>
                    <span>
                        8/16/2021
                    </span>
                    <span class="statisticsContent">
                        Workanaut Group PLC Announces Second Quarter 2021 Financial Results
                    </span>
                    <span>
                        8/12/2021
                    </span>
                    <span class="statisticsContent">
                        Workanaut Group PLC Announces Results of 2021 Annual General Meeting
                    </span>
                    <span>
                        8/4/2021
                    </span>
                    <span class="statisticsContent">
                        Workanaut Group PLC to Announce Second Quarter 2021 Financial Results on August 16, 2021
                    </span>
                    <button class="btn btn-danger">
                        READ MORE
                    </button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Bar from '@/components/Bar.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'About',
    components: {
        Header,
        Bar,
        Footer,
    }
}
</script>
<style scoped>
    
    .statistics {
        display: flex;
        justify-content: space-around;
    }

    .statisticsBlock {
        display: flex;
        flex-direction: column;
    }

    .price {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 65%;
    }

     .statisticsContent {
         color: rgb(200, 0, 0);

     }

     .pricing {
        display: flex;
        justify-content: space-around;
        height: 150px;
     }

     .pricingItem {
        display: flex;
        flex-direction: column;
        background-color: rgb(235, 235, 235);
        width: 20%;
        height: 100%;
        justify-content: center;
        align-items: center;
     }

     .pricingItemHeader {
        color: rgb(200, 0, 0);
        font-size: 24px;
        font-weight: bolder;
     }

</style>