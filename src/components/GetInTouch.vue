<template>
    <div class="get-in-touch">
        <GmapMap class="map"
        :center="{lat:10, lng:10}"
        :zoom="7"
        map-type-id="terrain"
        style="width: 100%; height: 900px"
        >
            <GmapMarker
                :key="index"
                :position="marker.position"
                :clickable="true"
                :draggable="true"
                @click="center=marker.position"
            />
        </GmapMap>

        <div id="get-in-touch" class="get-in-touch__form">
            <div class="get-in-touch__form-inner">
                <div class="get-in-touch__form-header">
                    <svg class="get-in-touch__icon"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="42px" height="60px">
                        <image  x="0px" y="0px" width="42px" height="60px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAA8CAQAAAC6ReBWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflAgcWJRMZrAWzAAAC20lEQVRYw7WY3ZWbMBBGP7sCSiAVhA5CB0sHoYN1Ce6AEtgOOKmA7cBOBd4OcAc3DxJrfmZkbJ9IT0ajKzTzzUh4h5KtUKmfypWpkHTWVV/6q0+dk7Pwek7DgNcuNOTeXA/YxckDHQdKSoQoKTnQfS/W2mALeYxTOip3H9X3ssf70JwTAL2/uYltD8BpaTs3KxiAIfGG6zcOMwoPGpCnDe+43tsMu0ZmDyGFyJbY+cAzSGP2+LgBhieRwQkD0EyhBcAD4bFDBgQXhAc90L2EFKID+hFaAiRiXtJERfY0MbdsF8R3FaIFWtewX+W9nxiRJMQw+mLVx2RoqcjJqWhjRfDsYUDBwZcEcpkMhtgn/QKUoXw0pkHvKDeosncdcAxTa0cinnKDKq2Q1UC/Vybpy6jeb5I+dDUr+5c+JP02R6RMAK53bL+NMrQjAexA0s48Z+zn98aR9voPba+rpNwYuUoq3HlFtFi2XNJ1r7MD/ZRUutAqWliLnQP0zRj+I+ldmYnM9B4tlu2XpHPQ48mNv10TWjf2J6ASmVujyni2zxMgi/lvST/UKY118GiuW8fbSB0Xzam5gJODIeW7AK3dzYgyQuZXHq+mXsL5EX4MicMko57U1J7aPclCtdAIPbpV55Hej26cOrh4CVncAj4VSfsSdEKYiyF/Gjmbb6702ntOoa/4tZjvc7nacxro57tc+6V8GLm6jMyHG7e4pPppeR7PhzMGN6+9Xq9P3aXJ8cErZXiNw/zp2uziXi6s3ljFyHP7NmkVdmgt026ztJx7rWWaW34y+gEYrNS2zbeEK/OXTmkvfWHvfE2nQ1C5yCoVzntisV0Qtn705qZ85iu2TSyYhI6KLTc/3wS1XZBNv+2egQYXzFXQpbd+Hzpu9aaCaksS34POE+FO1LdDNfnA6bcV8S3QIibkIfFR9jA0lI7QDlvst0EV/zDa+Pm+u/O33O1CfpH0w/lYW7R/tCICVSHGLJMAAAAASUVORK5CYII=" />
                    </svg>
                    <h3 class="get-in-touch__title">GET IN TOUCH</h3>
                </div>        
                <form action method="POST">
                    <div class="form-input__datas">
                        <input class="form-input__name" type="text" placeholder="Your name *" spellcheck="false">
                        <input class="form-input__email" type="email" placeholder="Your email *">
                    </div>
                    
                    <div class="form-input-text">
                        <textarea name="" id="" cols="30" rows="10" placeholder="Your message *"></textarea>
                    </div>
                    
                    <button class="get-in-touch__button button" type="submit">
                        <span>send message</span>
                    </button>
                </form>
            </div>   
        </div>

        <div  class="contact__links">
            <div id="contact__link-adress" class="contact-link">
                <div v-on:click="show = !show" class="contact__link-button">
                    <div class="contact__link-icon">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="38px" height="36px">
                            <image  x="0px" y="0px" width="38px" height="36px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAkCAQAAABP/IAuAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflAggAHgoBvY3fAAACiUlEQVRIx+3Wv08TYRzH8fdBaUuhQkwcdDFd3HQycREjbrBIIAH7wxZjGPwRRtZrwn9ApES0KhY1MfwMkcBoHNTNOBkToomDq0kTaXttPw6U41rba4urzy3X57nv67733Peep4Zo2oIsYnGPbL3BpOPc05TqZ4krQB8JfnGKGU5TBsAgxwZvWsdOsMQAI8A6S0TZR/RTRoBFjP3WsW4yXGWct0CY1yxzgxm6AAGdnMVwXt7hQvXygkHC7AKwS5hrvCSAhUWRIkVKqDUsyBMGGWfb7tlmnEGeEbRjjeqQRpifNENE2anq3SHKEGn89YM6GlAZhok5sjrKLsYwmQrXi68ZFqhktVn3RpuV7AIUec8X59Dfb9PPQ64TZqvhbG4S5hVlppiufgG1mI/HjHLThQLYIkEGg3ilfOtifh4xSpxVmrVVDJ4jpsjVnzMf84wRY6UpBbBCjDHmk756mJcUESZZa4kCWGOSCKmk1+7RweFRWnlFRJtHRHml5TExMSuYV4vKaaJtCqEJ5bQo7yHmU0p5RY9FYaKo8krJZ4J6tSBLieNRwsRECVlaUC9al6W4EOpXoG2sR30mJorL0gZ6UMnKp4ym2sbu6OnBfOm25jzct4vkEj9bLovDFuIyHgqQTFcX7T5W25jF76Pv023Z9nLOXggPW5avFBoFuGFnWCZE1l5PRZBvjPD9OJiHk8zyzl4A8www7RbhhokiH/jo6OniLi67ttvuBNDt8qttrK32H/s3zKBUNWbVKQPVfHIl518EZ52V8dBJl32ZH6OGEwZ+uui0b+dxbnZOrMAtLuK1sSChmlxLhFgma2MFzvOjHmYxxwV8jlxK7LBXhe0xS49NgcEnPh89+B/PbH3rfOctrQAAAABJRU5ErkJggg==" />
                        </svg>
                    </div>
                </div>
                <transition class="contact__link-info" name="slide">
                    <div class="contact__link-info-adress">    
                        <p v-if="show" >
                            Ikan Piranha Atas 220CБ<br>
                            Malang - East Java<br>
                            Indonesia
                        </p>
                    </div>
                </transition>
            </div>
            <div id="contact__link-phone" class="contact-link">
                <div v-on:click="show = !show" class="contact__link-button">
                    <div class="contact__link-icon">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="38px" height="36px">
                            <image  x="0px" y="0px" width="38px" height="36px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAkCAQAAABP/IAuAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflAggAHgoBvY3fAAACiUlEQVRIx+3Wv08TYRzH8fdBaUuhQkwcdDFd3HQycREjbrBIIAH7wxZjGPwRRtZrwn9ApES0KhY1MfwMkcBoHNTNOBkToomDq0kTaXttPw6U41rba4urzy3X57nv67733Peep4Zo2oIsYnGPbL3BpOPc05TqZ4krQB8JfnGKGU5TBsAgxwZvWsdOsMQAI8A6S0TZR/RTRoBFjP3WsW4yXGWct0CY1yxzgxm6AAGdnMVwXt7hQvXygkHC7AKwS5hrvCSAhUWRIkVKqDUsyBMGGWfb7tlmnEGeEbRjjeqQRpifNENE2anq3SHKEGn89YM6GlAZhok5sjrKLsYwmQrXi68ZFqhktVn3RpuV7AIUec8X59Dfb9PPQ64TZqvhbG4S5hVlppiufgG1mI/HjHLThQLYIkEGg3ilfOtifh4xSpxVmrVVDJ4jpsjVnzMf84wRY6UpBbBCjDHmk756mJcUESZZa4kCWGOSCKmk1+7RweFRWnlFRJtHRHml5TExMSuYV4vKaaJtCqEJ5bQo7yHmU0p5RY9FYaKo8krJZ4J6tSBLieNRwsRECVlaUC9al6W4EOpXoG2sR30mJorL0gZ6UMnKp4ym2sbu6OnBfOm25jzct4vkEj9bLovDFuIyHgqQTFcX7T5W25jF76Pv023Z9nLOXggPW5avFBoFuGFnWCZE1l5PRZBvjPD9OJiHk8zyzl4A8www7RbhhokiH/jo6OniLi67ttvuBNDt8qttrK32H/s3zKBUNWbVKQPVfHIl518EZ52V8dBJl32ZH6OGEwZ+uui0b+dxbnZOrMAtLuK1sSChmlxLhFgma2MFzvOjHmYxxwV8jlxK7LBXhe0xS49NgcEnPh89+B/PbH3rfOctrQAAAABJRU5ErkJggg==" />
                        </svg>
                    </div>
                </div>
                <transition class="contact__link-info" name="slide">
                    <div class="contact__link-info-phone">  
                        <p v-if="show" >
                            Ikan Piranha Atas 220CБ<br>
                            Malang - East Java<br>
                            Indonesia
                        </p>
                    </div>  
                </transition>    
            </div>    
            
        </div>
        <div class="contact__link-home">
            <a href="#">
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="36px" height="21px">
                    <path fill-rule="evenodd"  fill="rgb(230, 230, 230)"
                    d="M35.492,20.876 C35.009,21.134 34.391,20.981 34.112,20.534 L18.000,2.319 L1.888,20.534 C1.609,20.981 0.991,21.134 0.508,20.876 C0.025,20.618 -0.141,20.047 0.138,19.600 L17.062,0.467 C17.243,0.177 17.568,0.027 17.906,0.017 C17.938,0.012 17.968,0.012 18.000,0.011 C18.032,0.012 18.062,0.012 18.094,0.017 C18.431,0.027 18.757,0.177 18.938,0.467 L35.862,19.600 C36.141,20.047 35.975,20.618 35.492,20.876 Z"/>
                </svg>
            </a>
        </div>
    </div>
</template>

<script>

export default {
    data: function () {
        return {
            show: false,
            marker: {
                possition: {
                lat: -12.043333,
                lng: -77.028333
                } 
            }
            
        }
        
    }  
}
</script>

<style>
    .get-in-touch{
        position: relative;
        z-index: 1;
    }

    .get-in-touch__form{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background-color: rgba(159, 154, 207, 0.5);
        text-align: center;
        padding-top: 56px;
        padding-bottom: 54px;
    }

    .get-in-touch__form-header{
        margin-bottom: 221px;
        z-index: 10;
    }

    .get-in-touch__icon{
        opacity: 1;
    }

    .get-in-touch__title{
        font-family: ProximaNova;
        font-size: 36px;
        font-weight: 600;
        color: #ffffff;
        opacity: 1;
    }

    .form-input__datas{
        padding: 27px;
        opacity: 0.5;
        color: #ebebeb;
    }

    .form-input__datas input{
        padding: 18px 287px 20px 18px;
        border: none;
        border-radius: 5px;
        
    }

    .form-input__name{
        margin-right: 10px;
        font-family: 'PTSans', sans-serif;
        font-size: 16px;
        font-style: italic;
        color: #fefefe;
    }

    .form-input__email{
        margin-left: 10px;
        font-family: 'PTSans', sans-serif;
        font-size: 16px;
        font-style: italic;
        color: #fefefe;
    }

    .form-input-text textarea{
        padding: 24px 720px 0 20px;
        border: none;
        border-radius: 5px;
        opacity: 0.5;
        color: #ebebeb;
        font-family: 'PTSans', sans-serif;
        font-size: 16px;
        font-style: italic;
        color: #fefefe;
    }

    .form-input-text{
        margin-bottom: 55px;
    }

    .get-in-touch__button{
        padding: 27px 68px 27px 68px;
        border: none;
        color: #9f9acf;
        opacity: 1;
    }

    .get-in-touch__button span{
        font-family: ProximaNova;
        font-size: 20px;
        font-weight: bold;
        color: #ffffff;
    }

    .contact__links{
        position: absolute;
        top: 219px;
        right: 0;
        cursor: pointer;
        z-index: 10;
    }

    .contact__link{
        display: flex;
    }

    .slide-enter-active,
    .slide-leave-active {
        transition: all .3s ease;
    }

    .slide-enter,
    .fade-leave-to{
        transform: translateX(1000px);
    }

    

    .contact__link-icon{
        background-color: #9f9acf;
        height: 91px;
        width: 91px;
        text-align: center;
        
    }

    .contact__link-icon svg{
        margin-top: 25px;
    }

    .contact__link-info{
        background-color: #ebebeb;
        opacity: 0.7;
        height: 91px;
    }

    .contact__link-info{
        text-align: center;
    }

    .contact__link-info-adress{
        margin: 17px 42px 17px 42px;
        background-color: #ebebeb;
        opacity: 0.5;
        
    }

    /* .contact__link{
        display: flex;
        transition: all .5s ease-in;
        
    }

    .contact__link:hover{
        transform: translate(-246px, 0);
    }

    .contact__link-icon{
        background-color: #9f9acf;
        height: 91px;
        width: 91px;
        text-align: center;
        
    }

    .contact__link-icon svg{
        margin-top: 25px;
    }

    .contact__link-info{
        background-color: #ebebeb;
        opacity: 0.7;
        height: 91px;
    }

    .contact__link-info{
        text-align: center;
    }

    .contact__link-info-adress{
        margin: 17px 42px 17px 42px;
    }

    .contact__link-info-number{
        margin: 17px 71px 17px 71px;
    }
    */

    .contact__link-home{
        position: absolute;
        bottom: 46px;
        right: 129px;
        z-index: 10;
    }

    .contact__link-home a{
        background-color: #9f9acf;
        opacity: 0.7;
        padding: 30px 24px 24px 24px;
    }
    
    @media screen and (max-width: 1024px) {
        .get-in-touch__form-header {
            margin-bottom: 100px;
        }

        .form-input__datas{
            display: flex;
            flex-direction: column;
            padding-left: 40px;
            padding-right: 40px;
        }

        .form-input__datas input{
            margin-bottom: 30px;
        }

        .form-input__name{
           margin-right: 0; 
        }

        .form-input__email{
            margin-left: 0; 
        }
        
        .form-input-text{
            margin: 0 40px 55px 40px ;
        }

        .form-input-text textarea{
           padding: 24px 685px 0 20px; 
        }

        .contact__links {
            top: 100px;
        }
    }
    
    
    
    /* @media screen and (max-width: 992px) {
        .get-in-touch__form-header {
            margin-bottom: 100px;
        }
        
        .form-input__datas{
            display: flex;
            flex-direction: column;
            padding-left: 40px;
            padding-right: 40px;
        }

        .form-input__datas input{
            margin-bottom: 30px;
        }

        .form-input__name{
           margin-right: 0; 
        }

        .form-input__email{
            margin-left: 0; 
        }
        
        .form-input-text{
            margin: 0 40px 55px 40px ;
        }

        .form-input-text textarea{
           padding: 24px 620px 0 20px; 
        }

        .contact__links {
            top: 100px;
        }
    } */
</style>