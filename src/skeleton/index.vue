<template>
    <div class="skeleton">
        <div v-for="data, index in list" class="list">
            <div class="title"></div>
            <div class="content"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: new Array(4).fill()
        }
    }
}
</script>

<style>
body {
    background: #f0f0f0;
}

.skeleton {
    width: 100%;
    max-width: 750px;
    margin: 50px auto;
}

.skeleton .title {
    width: 60%;
    height: 40px;
    margin: 20px 0;
    background: #ccc;
}

.skeleton .content {
    width: 95%;
    height: 100px;
    margin: 10px 0;
    background: #ccc;
}
</style>
