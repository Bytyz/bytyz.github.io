<template>
    <div id="app" class="container-fluid main default">
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
        background-color: #0f1232;
        color: #fff;
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
        cursor: pointer;
        color: #fff;
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
    .setting__variants {

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
        cursor: pointer;
    }
    .setting__item a:hover {
        opacity: .5;
        background-color: blue;
    }
    .tasks__menu {
        cursor: pointer;
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
    .btn_save {
        min-height: 38px;
    }
    .edit_row {
        z-index: 1;
        display: flex;
        background-color: #fff;
        align-items: center;
        position: absolute;
        left: 0;
    }


    .tasks.matrix_view .task__body {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .tasks.matrix_view .task__item {

        display: grid;
        box-sizing: border-box;
        background: #e0ddd5;
        color: #171e42;
        padding: 10px;
        border: 1px solid #000;
        margin: 10px;
    }
    .tasks.matrix_view .task__text {
        display: flex;
        flex-direction: column;
    }

    @mixin n-columns($min-width, $gutter, $last-equal: false, $max-cols: 5) {
        .tasks.matrix_view
            .task__body {
                display: flex;
                flex-wrap: wrap;
                margin-left: -$gutter;
                margin-top: -$gutter;

                .task__item {
                    flex: 1 0 $min-width;
                    margin-left: $gutter;
                    margin-top: $gutter;

                    @if $last-equal {
                        @for $i from 2 through $max-cols {
                            $screen-width: ($min-width*$i)+($gutter*$i);
                            $column-width: (100%/$i);
                            @media (min-width: $screen-width) {
                                max-width: calc(#{$column-width} - #{$gutter});
                            }
                        }

                        $column-width: (100%/$max-cols);
                        @media (min-width: $min-width*$max-cols) {
                            min-width: calc(#{$column-width} - #{$gutter});
                        }
                    }
                }
            }
    }

    @include n-columns(300px,  10px, true, 5);

    .red{
        background-color: red;}
    .orange {
        background-color: orange;}
    .dark {
        background-color: darkslategrey;}
    .green {
        background-color: green;}

    .setting__variant {
        display: flex;
        flex-direction: row;
    }
    .setting__variant span:first-child {
        width: 200px;
        text-align: left;
    }
</style>
