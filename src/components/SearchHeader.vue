<template>
    <div class="searchHeader">
        <div class="left">MEMO</div>
        <div class="right">
            <el-input :prefix-icon="Search"></el-input>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.searchHeader {
    width: 100%;
    height: 50px;
    padding: 10px 20px 0;
    @include flex(space-between);

    .left {
        width: 70px;
    }

    .right {
        width: 208px;
    }
}
</style>
