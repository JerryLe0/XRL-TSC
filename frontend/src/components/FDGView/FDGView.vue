<template src='./FDGView.html'></template>

<script src='./FDGView.js'></script>

<style scoped>
    .cute-btn {
        font-weight: 600;
        font-family: 'Times New Roman', Times, serif;
        height: 36px;
        width: 55px;
        border: 1px solid #ccc;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: all 0.2s ease;
        cursor: pointer;
        position: relative;
        z-index: 10;
    }
    
    .cute-btn:hover {
        background-color: #f0f8ff;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
        border-color: #90c1e8;
    }
    
    .cute-btn:active {
        transform: translateY(0);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        background-color: #e6f2ff;
    }
    
    /* Add a subtle indicator of the intersection position */
    .cute-btn::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: 8px;
        height: 8px;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 50%;
    }
    
    .card {
        margin-bottom: 10px;
        margin-left: 1px;
        /* height: 400px; */
        border-radius: 5px;
    }

    .card-header {
        font-size: 12px;
        padding: 6px 12px;
        height: 36px;
    }

    .card-block {
        padding: 0px;
        position: center 0;
        width: 100%;
        /*background: url("5.png") no-repeat;no-repeat:背景图将不会被重复*/
        /*background-size: cover; 背景图片放大到适合元素容器的尺寸，图片比例不变.背景图像的某些部分可能无法显示在背景定位区域中。 */
        /* padding-bottom: 44.7%;起到的效果是让宽度与高度关联,具体数值=(图片高/图片宽) */

    }

    text {
        font-weight: 300;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serf;
        font-size: 14px;
    }

    #FDGContainer {
        /* height: 243px; */
        height: 380px;
    }


</style>
