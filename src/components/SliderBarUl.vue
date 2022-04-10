<template>
    <ul class="sliderBarUl">
        <li :class="{ selected: activeMenu === ACTIVE_MENU.MEMO }" @click="handleClickMenu(ACTIVE_MENU.MEMO)">
            <el-icon>
                <grid />
            </el-icon>
            Memo
        </li>
        <li :class="{ selected: activeMenu === ACTIVE_MENU.HANG_OUT }" @click="handleClickMenu(ACTIVE_MENU.HANG_OUT)">
            <el-icon>
                <wind-power />
            </el-icon>
            随机漫步
        </li>
    </ul>
</template>

<script setup lang="ts">
import { Grid, WindPower } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '@/stores'
import { useTagStore } from '@/stores/tags'
import { ACTIVE_MENU } from '@/utils/constants'
import { ACTIVE_MENU_TYPE } from '@/types'

const globalStore = useGlobalStore()
const tagsStore = useTagStore()
const { activeMenu } = storeToRefs(globalStore)

const handleClickMenu = (id: ACTIVE_MENU_TYPE) => {
    globalStore.setActiveMenu(id)
    tagsStore.setCurrTag(null) // 清除当前选中的tag
}
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
