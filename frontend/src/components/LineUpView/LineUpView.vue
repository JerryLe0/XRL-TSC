<template src='./LineUpView.html'></template>
<script src='./LineUpView.js'></script>

<style>
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
        position: relative;
    }


    text {
        font-weight: 300;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serf;
        font-size: 14px;
    }

    #lineUpContainer {
        height: 380px;
    }
    .bar { fill: steelblue; }
    .toolTip {
        position: absolute;
        display: none;
        min-width: 80px;
        height: auto;
        background: none repeat scroll 0 0 #ffffff;
        border: 1px solid #6F257F;
        padding: 14px;
        text-align: center;
    }
</style>
