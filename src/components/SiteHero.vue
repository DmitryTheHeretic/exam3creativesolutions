<template>
    <div class="site-hero">
        <div class="container">
            <h1 class="page-main-title">
                CreativE DIGITAL Project
            </h1>
            <h5 class="page-main-subtitle">
                Duis mollis, est non commodo luctus,<br>
                nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            </h5>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .container{
        max-width: 1170px;
        margin: 0 auto;
        padding-left: 15px;
        padding-right: 15px;
    }
    .site-hero{
        background: url("../assets/Site-Hero-Back.png") no-repeat;
        background-size: cover;
    }

    .page-main-title{
        text-align: center;
        padding-top: 406px;
    }

    .page-main-subtitle{
        text-align: center;
        padding-bottom: 510px;
    }

    .page-main-title{
        font-family: ProximaNova;
        font-size: 72px;
        font-weight: bold;
        color: #fefefb;
        text-transform: uppercase;
    }

    .page-main-subtitle{
        font-family: 'PT Sans', sans-serif;
        font-size: 30px;
        font-style: italic;
        color: #fefefb;
        font-weight: normal;
    }
</style>