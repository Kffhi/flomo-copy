<template>
    <div class="theStat">
        <div class="dataShow">
            <div class="dataItem">
                <div class="value">{{ userInfo.memoNumber }}</div>
                <div class="key">MEMO</div>
            </div>
            <div class="dataItem">
                <div class="value">{{ userInfo.tagNumber }}</div>
                <div class="key">TAG</div>
            </div>
            <div class="dataItem">
                <div class="value">{{ userInfo.duration }}</div>
                <div class="key">DAY</div>
            </div>
        </div>
        <div class="heatMap">heatmap</div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
// import { onMounted } from 'vue'
import { useStateStore } from '@/stores/state'

const stateStore = useStateStore()

const { userInfo } = storeToRefs(stateStore)
</script>

<style lang="scss" scoped>
.theStat {
    width: 100%;
    height: 206px;
    margin-bottom: 20px;
    @include flex(flex-start, flex-start);
    flex-wrap: wrap;
    flex-direction: column;

    .dataShow {
        @include flex(space-between);
        flex-direction: row;
        width: 100%;
        height: 48px;
        padding: 0 16px;
        color: $text-main-color;

        .value {
            font-weight: bold;
            font-size: 24px;
            line-height: 1;
        }

        .key {
            font-size: 10px;
            line-height: 2;
        }
    }

    .heatMap {
        width: 100%;
        padding: 0 16px;
        margin-top: 10px;
        @include flex(center);
        flex: 1;
    }
}
</style>
