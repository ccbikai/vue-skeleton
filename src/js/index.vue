<template>
    <div class="app">
        <div v-for="data, index in list" class="list">
            <div class="title">{{data.title}}</div>
            <div class="content">{{data.content}}</div>
        </div>
    </div>
</template>

<script>
import news from 'mock/news'

export default {
    data() {
        return {
            list: news
        }
    }
}
</script>

<style>
* {
    box-sizing: border-box;
}

body {
    background: #fff;
}

.app {
    width: 100%;
    max-width: 750px;
    margin: 50px auto;
}

.app .title {
    width: 60%;
    height: 40px;
    margin: 20px 0;
    padding: 0 10px;
    font-size: 20px;
    line-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.app .content {
    width: 95%;
    height: 100px;
    margin: 10px 0;
    padding: 0 10px;
    font-size: 16px;
    line-height: 20px;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
}
</style>
