<template>
    <div id="aboutus" class="aboutus">
        <div class="container">
            <div class="aboutus__inner">
                <div class="aboutus__img">
                    <img src="../assets/About-Us.png" alt="">
                </div>
                
                <div class="aboutus__content">
                    <p>
                        Nullam quis risus eget urna <span> mollis ornare </span> vel eu leo. 
                        Donec id elit non mi porta gravida at eget metus. 
                        Donec ullamcorper nulla non metus auctor fringilla. 
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </p>

                    <p>
                        <span> Morbi leo risus, </span> porta ac consectetur ac, vestibulum at eros. 
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. 
                        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. 
                        Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. 
                        Sed posuere consectetur est at lobortis.
                    </p>

                    <button class="aboutus__button button">
                        <span>Learn More</span>
                    </button>
                </div>
            </div>

            <div id="services" class="aboutus__cards grid-container">
                    <div class="aboutus__card card-1 card-grey">
                        <svg class="card__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="47px" height="61px">
                            <image  x="0px" y="0px" width="47px" height="61px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAA9CAMAAAAK58AOAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC7lBMVEVkX2BkYGBkYGH///9jX2BkYGBkYGBkX2BkX2BkX2BkYGBkX2BkX2BkX2BkX2BkX2BkX2BkX2BkX2BkX2BkX2BkX2BkX2BkX2BkX2BkX2BkX2BkX2BkX2BkX2BkYGFkX2BkYGFkX2BkX2BkX2BkX2BkYGFkX2BkX2BkX2BkX2BkX2BkX2BkYGFkX2BkYGFkX2BkX2BkX2BkYGFkX2BkYGBkX2BkX2BkX2BkX2BkX2BkYGBkX2BkX2BkX2BkX2BkX2BkX2BkX2BkX2BkX2BkYGBkX2BkYGFkYGFkX2BkX2BkX2BkX2BkX2BkX2BkYGFkYGFkX2BkX2BkX2BkX2BkX2BkX2BkYGFkX2BkX2BkX2BkX2BkYGBkX2BkX2BkYGFkYGBkX2BkYGFkX2BkX2BkX2BkX2BkX2BkX2BkYGFkYGFkX2BkX2BkYGBkYGFkX2BkX2BkX2BkX2BkX2BkX2BkX2BkYGBkYGBkYGFkX2BkX2BkYGFkYGFkX2BkX2BkX2BkX2BkYGBkX2BkX2BkX2BkX2BkX2BkX2BkX2BkX2BkYGFkX2BkX2BkX2BkYGBkX2BkX2BkYGFkX2BkX2BkX2BkX2BkYGBkYGFkX2BkX2BkX2BkYGBkX2BkX2BkYGBkX2BkYGBkX2BkX2BkYGBkYGBkX2BkX2BkX2BkYGFkYGBkX2BkX2BkX2BkYGBkX2BkX2BkX2BkYGFkYGBkX2BkX2BkX2BkYGFkX2BkYGFkX2BkX2BkX2BkYGBkX2BkX2BkYGFkX2BkX2BkYGBkX2BkX2BkX2BkX2BkX2BkYGBkYGFkX2BkX2BkYGBkYGBkX2BkYGBkYGFkX2BkYGFkYGBjX2BkYGBkX2BkX2BkX2BkX2BkYGBkX2BkX2BkX2BkYGBkX2BkX2BkYGBkX2BkX2BkX2BkYGFkX2BkX2BkX2BkYGFkYGFkX2BkYGFkX2BkYGFkYGBkX2BkX2BkYGBkYGBkX2BkX2BkX2BkX2BkYGBkYGH///8Nl5iPAAAA9nRSTlMAAAAAAHK6wL/FlhQDcW8eAdMqUOqfIWE7QC7gyegwLNV8+rjh6dVt+6ILxr0X02YjRnK6v7n09iSLr8RC52UGM+veHTtBQOAIzKES3Sj53dePrDkCcyq3dQnaKKAixjPp7SDfgQ0YqIQMmpzM5V5f7mIHlQRd3b4Zcrq/q4atEYD4pRPmZ69g7NAbiPXw3B8sPNmeMP0GiVH82E/y1fD8wsdnyYBIXd/T+VvPBifbtvIYlM4VIOLH0k57LP2wyVc2bb675cq99OypFkC+gx8R97w11q4lfTTtKlK8giI3mF9DBVkfyzoOkfZF5sHIgwwaofdLOEQd8ZHmAAAAAWJLR0QDEQxM8gAAAAd0SU1FB+UCBgItAPZYoqwAAATASURBVEjHfZZ5QFRFHMfnqHZrKYlAOSRAiVDDMkGoFTFqyUKNkiLJyqSorKCIig4tU6zsUKgsEis67dAyikrowsiyyy4zuy277+P33p/N8WbezNvNWXbf7vKZ33znO7/f7y1CGPE/Pgh77r5HKKzGnntFEKKUJu29z7BkKgcKjH1BDwecFMHvl+pA2nCDJ3IJgjk/Ij1DjswskDwdyWZn7+/z2Iyf433GJFfxeaNG5zsHZBp6sJrFeeJ9WaD4AwvHjB0HBxVZ+iU1XsTHNj/SOZgekg8T7P2q+GzioRND4eKSSYzHXE5pYRmlh8HhkUT+sPgoKuzh/hBKJ5fDlApKpx5ReaTNY80XHRXLqMo8GlIwodOOgWOr2SoV02EG40l8fOxNlvrzZh43TFhZI/jjT5hVa/KO9PPEiSGm/yTG18HJswVfD6cwnimdc2pQP0KniR1w/QUwS+Cnzz1jHuMb+NGfeVaQb0yPcf0s/tnuOedyfr70JwznnV/oXtA0zeCJf16YNl8IF7Vwl1zhf5p7cesllwJc1oa1fnT5FaHwlZ5+elUhVC5YWAppV3P+mkXXLsaxJQDtFX7+RL0UFf7XyfdLIyJ/rrv+hmU33gQ3wy3LJb+C+58e0/k5ORs6OuHW25JkfmbkZ6feDnPGRqF9JROu81P6jxFL5jvuLO8qU/Uy7y6AJataUVN3w3LDHz5W8/jNd98TWQBjqnV93QvhNv7fHrivAmNxvkSUDmL5j/H98MDiTniQav6h7oeFcr4ARmu8+PJ8U1DeI9OrH5302DKfZ4HbH+eC2XUlVvUyzmH5CWuT18EU+gTIE/P4picb9AKE8eIc1rPzzXIbn4Lep5/pg7XU4PkCFTzms9COnvP0sD0wf55fx5Rv6Aqtt3jPGn5t6YV+XaAFEB14IUJfhJeSTB6THu9we2BVveFnAdvByzSWqs334r+SBdnRwXB446tO30wYek00t+JwySZwS3s21gy8/sZmi/d6mssefm8zh5sS4HlPe1M0tSp+qcpQH/kbnkcBPof4HcjrjeoLxhTE81aTwJKV7wQ/9Fao7u13kiVPeI0Qs8kRo2sIXo60d0U/YTnQL0KZrQWrV8E3d3SMWLjFea9I+L/G1GMMouJLf97/AD6M2PqxJYtdibnfj/pgglfjZJfxlT9bB5aaPc1awthvruI/nrstzk/zboPVfj/x3K8H4afNExKI759XDfD1tZ8Yxa9j8pvzXeT1EKIZ4vvDT9jUv727V+h3E/vvx/f0fwqf6f0GbCEWL+NvLR31uZmfSoS+ufJ5mv9idBdsbzX89O6ifAIO6BkaLNnkugwX+Txe9QQcEMSXUvnpbvtyuM7/FdhPyMBOhD9fdXw9Y4dVL2Q34usx8p/QYH1hKx+MOUjlf+6u6lFNIfH5rHk3RwX0apf4KzFmdYL+QJDxw4xlElGHkCi+k4MTFgxKwIvfYP3kf7IznieGP1hvFGtHOe/YeqLwTRLRLSSuHqeWD5RZejYsqvzWpIwK4Px8CDda/b9lJ+z8rhbJLWCjdfHX73/4EX5KtuKj2M8Anb+wlm+NYvYY/HULwG+/2/cLhP748y+j/TvWLaDm7x00yGM0+5+Y3/KN8W9bLTXHfwOjCZYyvPlIAAAAAElFTkSuQmCC" />
                        </svg>
                        <p class="aboutus__card-title">GRAPHIC DESIGN</p>
                        <p class="aboutus__card-subtitle">
                            Cras mattis consectetur<br> purus sit amet fermentum.
                        </p>
                    </div>
                    
                    <div class="aboutus__card card-2">
                        <svg class="card__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="58px" height="59px">
                            <image  x="0px" y="0px" width="58px" height="59px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA7CAMAAAAdOWm/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABIFBMVEVkYGFkX2BkYGD///9jX2BkX2BkYGBkX2BkYGBkX2BkX2BkX2BkX2BkX2BkX2BkX2BkX2BkYGBkX2BkX2BkX2BkX2BkX2BkX2BkYGBkYGFkX2BkX2BkX2BkYGFkX2BkYGFkYGFkX2BkX2BkYGFkX2BkX2BkYGBkX2BkX2BkYGBkX2BkX2BkYGBkX2BkYGBkX2BkYGBkX2BkX2BkX2BkX2BkX2BkX2BkX2BkX2BkX2BkX2BkX2BkYGFkYGBkX2BkX2BkX2BkX2BkX2BkX2BkYGBkX2BkX2BkYGBkYGBkYGFkYGFkYGBjX2BkX2BkX2BkX2BkX2BkX2BkX2BkYGFkX2BkYGFkYGBkYGBkYGFkYGBkYGBkX2BkX2BkYGFkYGD///8GFKZ1AAAAXHRSTlMAAAAAAI+8v7/CnAyHvcCUFvRTPkA07fRHQDr5GegK9xnoxL/89xlQP0A59grFvrv5wf3f/vAT1OYQOzNSPkMVAQ74QRIX9egX9Rf16J++rA2XpD5H9MS7Fv4QEm5/2/AAAAABYktHRAMRDEzyAAAAB3RJTUUH5QIGAi4aIBcIFQAAA21JREFUSMeNVglbEzEQnR3RrQcIslKKrVgvQEVAUBBPxAqC4n0n+/9/htlkkkyOrebr1+6meZl5M5PJg9NnyrJTluXZc+ehKArEwo/oWf93YbLUY+oiCDemzQp0K9UPgIUCTcy49Qp6abaqqstzBkqrMmbpvSvme72qWrjSQPt6cuChGoHpRnq2K66easZiA72mJ4fienlDs9DfnU7JRqf56PnJmwS91UBvE1SK5iNqTaT2MVDPkr1xaF87MqyXlhWHtrFCv3fuinsWWsu+Jja0XCNu8dsMt7p6X3FYW2dhSoffrys2NOcHNWxuEbGHj0weMUlJEPjtLcNY7sDj3erJnHj67PmLl0UryJjVJbE3Wy28EvPV/mtQkzgUo3+5CkDl1PB8o/nqSvNQFiNWzQYFeo5BdU7lSIMgcTmoKz1CKCQOQ5gYaIU6h9GuBG6VnEfzrqG1h9ajqBT4Rmi/PFRXlKZ3EDgMY3IUWcUi4ooUXQQy2Xhst8smB8dasx2DWUVKTtSWqLPwb/OYSw5kjEGUGUWBQ5WtA3HY6mZgFqK8IvxHDVOejNW3PjkNFMcY5Y+Zakr7Ji8pdAHLFiK0NuAxNTywhYgB1LZ+ZBsEyYHG6hFbg4kl73YR1jCVPxUT0KnmBdHiMDQlUY9oUwjNJKxRO3xcJ+eVRwWdVZzgeA2VBAUbYQgddfT0BDAoO+oHUTVNJPa93bhLREedUcMw15hE2EOZr5mBmUI8zFsteGXkkqPyeuSCAunllnKVrJpGNqm+9jDnQGsfDgOCISZjNYFivJq2MUniEcagmWJ8XcQhD/PqL8lcawu3xDxXBHcBpz7YA520cJNXYDIv9QDceT32ffidPHTXETud4UN6q6NxGF2p21MCeeJR9x+wCGvOzgr46ELC9f1kuXZFrJ5sfPhY2BXoc6GOTigKPp0ozaS009Rn0BqwllYPM6OWATKNAcWMEllSWj38pepZPQxhvWfodsXXRiuSHqauOE0WW84OjW8kLxdrK6VVlL97MUzK2DwHyjjUw300ZRENaaRwTdJYykgPS2d1IJaWnfrtMQWs3lb020ozr/QwCXjJHJ7moUlUG7UC7AZ6+ERx+LEufkYHLNPZgPRwp8ktbP4iCloPxyshSdD2FpHegd+7RtprPRwdM3Zpuqe9WbN+/89flp6504y+4NwAAAAASUVORK5CYII=" />
                        </svg>
                        <p class="aboutus__card-title">WEB DEVELOPMENT</p>
                        <p class="aboutus__card-subtitle">
                            Cras mattis consectetur<br> purus sit amet fermentum.
                        </p>
                    </div>
                    
                    <div class="aboutus__card card-3 card-big">
                        <svg class="card-big__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="62px" height="60px">
                            <image  x="0px" y="0px" width="62px" height="60px"  xlink:href="data:img/png;base64,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" />
                        </svg>
                        <p class="aboutus__card-big-title big-card__title">OUR SERVICES</p>
                        <p class="aboutus__card-big-subtitle big-card__subtitle">
                            “Nullam quis risus eget urna mollis ornare vel <br> eu leo. 
                            Nulla vitae elit libero, a pharetra augue.” <br>
                            <span>- Borat -</span>
                        </p>
                    </div>
                    
                    <div class="aboutus__card card-4">
                        <svg class="card__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="50px" height="61px">
                            <image  x="0px" y="0px" width="50px" height="61px"  xlink:href="data:img/png;base64,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" />
                        </svg>
                        <p class="aboutus__card-title">SEO & MARKETING</p>
                        <p class="aboutus__card-subtitle">
                            Cras mattis consectetur<br> purus sit amet fermentum.
                        </p>
                    </div>
                    
                    <div class="aboutus__card card-5 card-grey">
                        <svg class="card__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="36px" height="61px">
                            <image  x="0px" y="0px" width="36px" height="61px"  xlink:href="data:img/png;base64,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" />
                        </svg>
                        <p class="aboutus__card-title">MOBILE DEVELOPMENT</p>
                        <p class="aboutus__card-subtitle">
                            Cras mattis consectetur<br> purus sit amet fermentum.
                        </p>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .aboutus__inner{
        display: flex;
        justify-content: space-between;
        padding-top: 124px;
        padding-bottom: 120px;
    }

    .aboutus__img{
        position: relative;
        z-index: 1;
    }

    .aboutus__img::before{
        content: url(../assets/AboutUs-Icon.png);
        position: absolute;
        left: 44%;
        top: 75px;
        z-index: 2;
    }
    
    .aboutus__img::after{
        content: 'About Us';
        position: absolute;
        z-index: 2;
        top: 173px;
        left: 32%;
        font-family: ProximaNova;
        font-size: 36px;
        font-weight: 600;
        color: #fefefb;
    }
    
    .aboutus__content{
        text-align: center;
        max-width: 633px;
        padding-top: 78px;
    }

    .aboutus__content p{
        font-family: 'PT Sans', sans-serif;
        font-size: 20px;
        color: #665f60;
        text-align: left;

    }

    .aboutus__content p span{
        font-family: 'PT Sans', sans-serif;
        font-weight: bold;
        font-size: 20px;
    }

    .aboutus__button{
        margin-top: 93px;
        padding: 18px 52px 18px 52px;
    }

    .aboutus__button span{
        font-family: 'PT Sans', sans-serif;
        font-size: 20px;
        font-style: italic;
        color: #7d7a7c;

    }

    .aboutus__cards{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas:
        "card-1 card-2 card-3"
        "card-4 card-5 card-3";
    }

    .card-1 { grid-area: card-1; }
    .card-2 { grid-area: card-2; }
    .card-3 { grid-area: card-3; }
    .card-4 { grid-area: card-4; }
    .card-5 { grid-area: card-5; }

    .aboutus__card{
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 84px;
        padding-bottom: 148px;
        padding: 84px 20px 148px 20px;
    }

    .aboutus__card-title{
        font-family: 'PT Sans', sans-serif;
        font-size: 24px;
        font-weight: bold;
        color: #665f60;
    }

    .aboutus__card-big-title{
        font-family: ProximaNova;
        font-size: 36px;
        font-weight: 600;
        color: #fefcfd;
    }

    .aboutus__card-subtitle{
        font-family: 'PTSans', sans-serif;
        font-size: 18px;
        color: #665f60;
        font-style: italic;
        text-align: center;
    }

    .aboutus__card-big-subtitle{
        font-family: 'PTSans', sans-serif;
        font-size: 16px;
        font-style: italic;
        color: #fefcfd;
        text-align: center;
    }

    .aboutus__card-big-subtitle span{
        font-style: normal;
        font-weight: bold;
    }

    .card-grey{
        background-color: #dbdbdb;
    }

    .card-big{
        background: url(../assets/Card-big-back.png);
    }

    @media screen and (max-width: 1062px){
        .aboutus__content{
        padding-left: 40px;
    }
        
    }
</style>