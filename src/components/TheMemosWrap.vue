<template>
    <div class="memosWrap">memosWrap</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.memosWrap {
    @include flex(flex-start, flex-start);
    flex-wrap: wrap;
    flex: 1;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
}
</style>
