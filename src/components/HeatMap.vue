<template>
    <div class="heatMap">
        <div class="dayBox">
            <el-tooltip effect="dark" :content="`${day.date} ${day.times}次提交`" :show-after="50" placement="top" v-for="day in dayList" :key="day.date">
                <div class="dayItem" :class="{ today: day.isToday, lightGreen: 0 < day.times && day.times < 8, darkGreen: day.times >= 8 }"></div>
            </el-tooltip>
        </div>
        <div class="monthBox">
            <div class="monthItem" :class="{ notExist: month.column === -1 }" v-for="month in monthList" :key="month.value">{{ month.value }}月</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { getDateList } from '@/utils/date'
import { useStateStore } from '@/stores/state'
import { completeDayTimes } from '@/businessHelper/state'

const stateStore = useStateStore()

const { dayList: day, monthList: month } = getDateList()
const dayList = reactive(day) // 日期列表
const monthList = reactive(month) // 月份列表
const { heatMap } = storeToRefs(stateStore) // 后端热力数据

onMounted(async () => {
    // 获取热力数据
    await stateStore.getHeatMap()
    // 将热力数据中的次数记录至dayList
    completeDayTimes(dayList, heatMap.value)
    console.log('dayList', dayList)
})
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
            font-size: 12px;

            &.today {
                border: 1px solid $heat-border-color;
            }

            &.lightGreen {
                background-color: $heat-lightGreen-color;
            }

            &.darkGreen {
                background-color: $heat-darkGreen-color;
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
