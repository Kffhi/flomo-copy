<template>
    <div class="heatMap">
        <div class="dayBox">
            <el-tooltip effect="dark" :content="`${day.date} ${day.times}次提交`" :show-after="200" placement="top" v-for="day in dayList" :key="day.date">
                <div class="dayItem" :class="{ today: day.isToday, lightGreen: 0 < day.times < 10, dark_green: day.times >= 10 }"></div>
            </el-tooltip>
        </div>
        <div class="monthBox">
            <div class="monthItem" :class="{ notExist: month.column === -1 }" v-for="month in monthList" :key="month.value">{{ month.value }}月</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getDateList } from '@/utils/date'

const { dayList, monthList } = getDateList()
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
        grid-auto-flow: column;
        gap: 4px;

        .dayItem {
            background: #efefef;
            border: 1px solid transparent;
            border-radius: 2px;
            cursor: pointer;

            &.today {
                border: 1px solid #55bb8e;
            }
        }
    }

    .monthBox {
        height: 16px;
        margin-top: 10px;
        font-size: 12px;
        @include flex(space-between);

        .monthItem {
            &.notExist {
                display: none;
            }
        }
    }
}
</style>
