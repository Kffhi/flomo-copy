<template>
    <div class="userHeader">
        <div class="left">Kffhi</div>
        <div class="iconWrap">
            <el-icon :size="18" color="#333">
                <bell />
            </el-icon>
            <el-icon :size="18" color="#333">
                <setting />
            </el-icon>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Bell, Setting } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.userHeader {
    width: 100%;
    height: 65px;
    padding: 0 16px;
    @include flex(space-between);

    .left {
        height: 80px;
        @include flex();
    }

    .iconWrap {
        width: 50px;
        cursor: pointer;
        @include flex(space-between);
    }
}
</style>
