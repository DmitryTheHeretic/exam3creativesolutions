<template>
    <div id="recent-works" class="recent-works">
        <div class="container">
            <div class="recent-works__header">
                <svg class="recent-works-logo"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="40px" height="60px">
                    <image  x="0px" y="0px" width="40px" height="60px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAA8CAQAAAC+sDBrAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflAgYPISaAOPsOAAACaUlEQVRYw6WYXbHjMAxGNUVgCIFQCGFwC8EQymDDoBC6i+DOIsgsgkAIhMwiOPvQJP6TFSebvLS2fCz7k2S3gqzvxPVn2ilyk+3p5Prjos872wMLXZir8Z0BH77HXSPwfRLngTluiTvvAPT/418KFF75fGf9y4GOBRiu+5cDz0njtfWUZu3SKP5pwFZpvL7fmumrOUN8OfqmxP3f5gzRsquYo2MBHk1LVuQrDb+BsUkUVb7cqAfg3gTsoFyLFgqv5sAegBlXBw7AkhqYr2POM6uUwzfjBOEBEEtzTY5cmlEDnpHDkOZYDseTEYCR57E0R3Lcs8NrUiWLnLHlcEzAgsfh8CwVZLRdthx5nH0KsLbwnWDLMRV++/QULkNuG6ZnB5At0AFUpVlwwtPIDm1wDbhK8wnMp2HySFpqSxbWrLnJHxH5qhTQXyLyii4aTn6IyO+K9ZeI/Nx2pVfndGugPFYP5rK6ZBnTC8LbyOE7SxLYSzU5V0pgdxVDx8AMwMxQLW37OgP9XTE90jYEzR7YRz4eAz973QfgJ3jel4FDOPS3pl7Jilagi0tLaB7Ne5cFfMaXktDcmweUBUwuTXnHcBqYXZryruU0cE5rgeF8E9DnG2W63wA0D3pBqke9DlSENEK0AaiEmh6kfRNQTYZy1j3ND4FqupZAveCWwLteUDTltIJbAislTwNqxSwHVgueBtRmz4HVkqwDy/lTYFc/2HRgqWAKNI61GjCPsRhYi1UTmGdBDBwwrs51YJqnAWj6ZwHTShKAtWxvAMYFdwO6o58eFjAuuBvQc/CvhA30aI+/DtT+wJrsEf8AVQ6UhE4ObNgAAAAASUVORK5CYII=" />
                </svg>
                <h3 class="recent-works-title">RECENT WORKS</h3>
            </div>

            <div class="recent-works__carousel">
                <VueSlickCarousel v-bind="settings" class="recent-works__slider">
                    <div class="recent-works__carousel-card">
                        <img src="../assets/Recent-Works-Card1.png" alt="">
                    </div>

                    <div class="recent-works__carousel-card">
                        <img src="../assets/Recent-Works-Card2.png" alt="">
                    </div>

                    <div class="recent-works__carousel-card">
                        <img src="../assets/Recent-Works-Card3.png" alt="">
                    </div>
                </VueSlickCarousel>
            </div>

            <button class="recent-works__button button">
                <span>View Gallery</span>
            </button>
        </div>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    
export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
    data () {
        return {
            settings: {
            "dots": true,
            "edgeFriction": 0.35,
            "infinite": true,
            "speed": 500,
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "adaptiveHeight": true
            } 
        }
    }
    
}
</script>

<style>
    .recent-works{
        background: url(../assets/Recent-Works-back.png) no-repeat;
        background-size: cover;
        padding-top: 49px;
        padding-bottom: 60px;
    }

    .recent-works__header{
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .recent-works-title{
        font-family: ProximaNova;
        font-weight: 700;
        font-size: 36px;
        color: #fefcfd;
    }

    .recent-works__carousel{
        padding-top: 68px;
        padding-bottom: 105px;
        margin-left: 50px;
        margin-right: 50px;
    }

    .recent-works__carousel-card{
        margin-left: 18%;
        max-height: 546px;
    }

    .slick-prev {
        left: 15px;
    }

    .slick-next{
        right: 15px;
    }

    .recent-works__button{
        margin-left: 45%;
        padding: 18px 52px 18px 52px;
        border: solid 1px #ffffff;
        background-color: transparent;
    }

    .recent-works__button span{
        font-family: 'PT Sans', sans-serif;
        font-size: 20px;
        font-style: italic;
        color: #ffffff;
    }
</style>