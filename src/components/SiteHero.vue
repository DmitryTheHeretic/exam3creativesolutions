<template>
    <div id="home" class="site-hero">
        <div class="container">
            <div class="header-inner">
                <router-link to="/" class="header-logo">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="54px" height="72px">
                        <path fill-rule="evenodd"  fill="rgb(246, 246, 246)"
                        d="M29.714,52.981 C29.206,58.539 28.174,63.426 26.295,67.698 C25.672,69.114 24.539,70.465 24.016,72.000 C23.940,72.000 23.864,72.000 23.788,72.000 C23.788,71.622 23.788,71.245 23.788,70.868 C24.216,70.203 24.007,69.293 24.244,68.377 C25.372,64.020 25.457,58.207 23.560,54.566 C20.320,48.345 13.832,50.438 7.379,47.773 C4.851,46.730 2.994,44.583 1.681,42.339 C1.225,41.057 0.769,39.773 0.313,38.490 C-0.403,35.785 0.251,32.291 0.997,30.339 C4.104,22.208 11.869,18.630 21.281,23.094 C21.281,22.868 21.281,22.641 21.281,22.415 C20.474,21.319 20.736,19.682 20.369,18.113 C19.384,13.894 18.625,0.046 23.332,-0.000 C24.609,0.926 27.063,0.885 27.207,2.943 C26.831,3.348 26.809,3.512 26.751,4.302 C26.827,4.302 26.903,4.302 26.979,4.302 C26.979,4.226 26.979,4.151 26.979,4.075 C27.960,3.045 28.229,0.705 29.942,0.453 C31.310,1.673 33.625,1.916 34.044,4.075 C32.902,5.521 31.775,8.049 31.309,9.962 C31.461,9.962 31.613,9.962 31.765,9.962 C33.193,8.085 39.077,2.711 41.793,3.169 C42.597,4.461 43.427,5.738 43.844,7.472 C42.409,7.981 41.749,9.367 40.653,10.189 C36.654,13.188 33.422,17.563 30.853,21.962 C31.081,21.962 31.309,21.962 31.537,21.962 C33.106,20.742 39.510,20.151 42.249,20.830 C49.471,22.622 51.501,25.101 53.188,32.377 C53.423,33.388 53.732,35.769 53.416,37.132 C51.233,46.574 46.626,51.341 37.007,53.434 C34.436,53.993 31.873,53.097 29.714,52.981 Z"/>
                    </svg>
                </router-link>

                <nav class="menu header-menu">    
                    <input id="menu__toggle" type="checkbox">
                    <label class="menu__btn" for="menu__toggle">
                        <span class="open-menu__stroke open-menu__stroke--one"></span>
                        <span class="open-menu__stroke open-menu__stroke--two"></span>
                        <span class="open-menu__stroke open-menu__stroke--three"></span>
                    </label>

                    <ul class="header-menu__list">
                        <li class="header-menu__item">
                            <a href="#home" class="header-menu__link">Home</a>
                        </li>
                        <li class="header-menu__item">
                            <a href="#aboutus" class="header-menu__link">About</a>
                        </li>
                        <li class="header-menu__item">
                            <a href="#services" class="header-menu__link">Services</a>
                        </li>
                        <li class="header-menu__item">
                            <a href="#recent-works" class="header-menu__link">Work</a>
                        </li>
                        <li class="header-menu__item">
                            <a href="#get-in-touch" class="header-menu__link">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
            
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

    .header-inner{
    
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 41px 0 0 0;
        z-index: 2;
    }

    .header-menu__list {
        display: flex;
        flex-wrap: wrap;
    }

    .header-menu__item{
        margin-left:20px;
    }   

    .header-menu__link{
        font-family: ProximaNova;
        font-size: 24px;
        font-weight: 600;
        color: #ffffff;
        position: relative;
    }

    .header-menu__link::before {
    background: #ffffff;
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 50%;
    height: 1px;
    opacity: 0;
    transition: .2s ease-in-out;
    }

    .header-menu__link:hover::before {
        top: -5px;
        opacity: 1;
    }

    #menu__toggle {
	display: none;
    }

    #menu__toggle:checked ~ .menu__btn > span {
        transform: rotate(45deg);
    }

    #menu__toggle:checked ~ .menu__btn > span::before {
        top: 0;
        transform: rotate(0);
    }
    
    #menu__toggle:checked ~ .menu__btn > span::after {
        top: 0;
        transform: rotate(90deg);
    }
    
    #menu__toggle:checked ~ .header-menu__list {
        display: block;
    }

    @media screen and (max-width: 768px) {
        .menu__btn {
            display: flex;
            align-items: center;
            position: absolute;
            top: 50px;
            right: 20px;
            width: 46px;
            height: 46px;
            cursor: pointer;
            z-index: 6;
        }
        
        .menu__btn > span,.menu__btn > span::before,.menu__btn > span::after {
            display: block;
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: #ffffff;
            transition-duration: .25s;
        }
        
        .menu__btn > span::before {
            content: '';
            top: -8px;
        }
        
        .menu__btn > span::after {
            content: '';
            top: 8px;
        }

        .header-menu__list {
            position: absolute;
            top: -20px;
            right: 0px;
            display: none;
            width: 100%;
            padding-top: 20px;
            padding-bottom: 20px;
            background-color: #9f9acf;
            text-align: center;
            z-index: 5;
        }

        .header-menu__item{
            margin-top: 35px;
            padding: 10px 0 25px 0;
        }
        
        .header-menu__link {
            font-size: 20px;
        }

        .header-logo{
            z-index: 20;
        }
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