<template>
    <div id="app" class="container-fluid">
<app-main></app-main>

    </div>


</template>

<script>
    export default {
        name: 'app',

    }
</script>

<style lang="scss">
    body {
        margin: 0;
    }
    a {
        text-decoration: none;
        color: #333;
    }
    a:hover {
        text-decoration: none;
    }
    $color: #50432c;
    #app  {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: $color;
    }
    main {
        height: 100vh;
    }
    .sidebar {
        background-color: #bbb;
    }
    div {
        box-sizing: border-box;
    }
    .top-header {
        height: 80px;
    }
    .top-header a{
        display: flex;
        justify-content: center;
    }
    .main_menu {
        height: calc(100% - 80px);
    }
    /*logo start*/
    .logo {
        position: relative;
        transform: scale(.1);
        height: 50px;
        width: 50px;
        display: inline-block;
        margin-right: 20px;
    }
    // Variables
$logo-size: 450px;
    $base-font: 16px;

    // Mixins
    @mixin center($offset) {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -#{$offset};
        margin-left: -#{$offset};
    }

    // Functions
    @function rem-calc($target, $context: $base-font){
    @return ($target/$context)+0em;
    }


    .chrome-logo{
        display: block;
        width: rem-calc($logo-size);
        height: rem-calc($logo-size);
    @include center(rem-calc($logo-size / 2));
        border-radius: rem-calc($logo-size);
        background-image: linear-gradient(240deg,  transparent 66.4%,  #009C59 0%, #009C59),
        linear-gradient(0deg,    transparent 71.5%,    #E34A35 0%, #E34A35),
        linear-gradient(290deg,  transparent 60%,    #E34A35 0%, #E34A35),
        linear-gradient(120deg,  transparent 66%,  #FFCA38 0%, #FFCA38),
        linear-gradient(57deg,   transparent 58%,    #FFCA38 0%, #FFCA38),
        linear-gradient(190deg,  transparent 58%,    #009C59 0%, #009C59);
        box-shadow: inset 0 0 rem-calc(160px) rgba(0, 0, 0, 0.05),
        0 0 100px rgba(0, 0, 0, 0.05),
        0 0 10px rgba(255, 255, 255, 1);
        transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        overflow: hidden;

    &::before,
    &::after {
         content:'';
         display: block;
     }

    &::before{
         width: rem-calc(28px);
         height: rem-calc(38px);
         position: absolute;
         top: rem-calc(423px);
         left: rem-calc(215px);
         border-bottom-right-radius: rem-calc($logo-size / 2);
         background-color: #FFCA38;
         transform: rotate(30deg);
     }

    &::after{
         width: rem-calc(170px);
         height: rem-calc(170px);
     @include center(rem-calc(85px));
         border-radius: rem-calc($logo-size / 2);
         background-color: #228EF4;
         box-shadow: 0 0 0 rem-calc(15px) rgba(255, 255, 255, 1);
     }

    &:hover {
         transform: rotate(-720deg) scale(0.9);
     }
    }
    /*logo end*/
    .setting__list {
        width: 100%;
        margin: 0;
        padding: 0;
        list-style: none;
        text-align: left;
    }
    .setting__item a {
        width: 100%;
        line-height: 30px;
        display: block;
        padding: 10px 20px;
    }
    .setting__item a:hover {
        opacity: .5;
        background-color: blue;
    }

    @media only screen and (max-width:992px) {
        .setting__item {
            display: inline-block;
        }
        .main_menu {
            height:50px;
        }
        .sidebar {
            height: 150px;
        }
    }
    .checkbox {
        vertical-align: top;
        margin: 0 3px 0 0;
        width: 17px;
        height: 17px
    }

    .checkbox+label {
        cursor: pointer;
        font-size: 14px;
        color: #aaa;
        font-weight: 400;
        line-height: 15px
    }

    .checkbox:not(checked) {
        position: absolute;
        opacity: 0
    }

    .checkbox:not(checked)+label {
        position: relative;
        padding: 0 0 0 60px
    }

    .checkbox:not(checked)+label:before {
        content: '';
        position: absolute;
        top: -4px;
        left: 0;
        width: 50px;
        height: 26px;
        -webkit-border-radius: 13px;
        border-radius: 13px;
        background: #cdd1da;
        -webkit-box-shadow: inset 0 2px 3px rgba(0,0,0,.2);
        box-shadow: inset 0 2px 3px rgba(0,0,0,.2)
    }

    .checkbox:not(checked)+label:after {
        content: '';
        position: absolute;
        top: -2px;
        left: 2px;
        width: 22px;
        height: 22px;
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background: #fff;
        -webkit-box-shadow: 0 2px 5px rgba(0,0,0,.3);
        box-shadow: 0 2px 5px rgba(0,0,0,.3);
        -webkit-transition: all .2s;
        -o-transition: all .2s;
        transition: all .2s
    }

    .checkbox:checked+label:before {
        background: #9fd468
    }

    .checkbox:checked+label:after {
        left: 26px
    }

    .checkbox:focus+label:before {
        -webkit-box-shadow: 0 0 0 3px rgba(255,255,0,.5);
        box-shadow: 0 0 0 3px rgba(255,255,0,.5)
    }
</style>
