<template>
    <ul class="sliderBarUl">
        <li class="selected">
            <el-icon>
                <grid />
            </el-icon>
            Memo
        </li>
        <li>
            <el-icon>
                <wind-power />
            </el-icon>
            随机漫步
        </li>
    </ul>
</template>

<script setup lang="ts">
import { Grid, WindPower } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.sliderBarUl {
    width: 100%;
    margin: 9px 0 18px;
    font-size: 14px;
    color: $text-main-color;

    li {
        line-height: 36px;
        padding-left: 17px;
        cursor: pointer;
        @include flex();

        .el-icon {
            margin-right: 5px;
        }

        &.selected {
            background-color: $main-color;
            color: $white-color;
            border-radius: 5px;
        }
    }
}
</style>
