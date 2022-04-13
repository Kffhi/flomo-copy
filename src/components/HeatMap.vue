<template>
    <div class="heatMap">
        <div class="dayBox">
            <el-tooltip effect="dark" content="又么得提交" :show-after="200" placement="top" v-for="i in dayArray" :key="i">
                <div class="dayItem"></div>
            </el-tooltip>
        </div>
        <div class="monthBox">1月</div>
    </div>
</template>

<script setup lang="ts">
const dayArray = new Array(12 * 7)
for (let i = 0; i < 12 * 7; i += 1) {
    dayArray[i] = i
}
console.log('day', dayArray)
</script>

<style lang="scss" scoped>
.heatMap {
    width: 100%;
    height: 100%;
    @include flex(flex-center, flex-center);
    flex-wrap: wrap;
    flex-direction: column;

    .dayBox {
        flex: 1;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(7, 1fr);
        gap: 4px;

        .dayItem {
            background: #efefef;
            border: 1px solid transparent;
            border-radius: 2px;
            cursor: pointer;
        }
    }

    .monthBox {
        height: 16px;
        margin-top: 10px;
        font-size: 12px;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
    }
}
</style>
