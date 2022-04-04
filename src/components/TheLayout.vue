<template>
    <div class="theLayout">
        <div class="main">
            <div class="sliderWrap">
                <slot name="slider"></slot>
            </div>
            <div class="mainWrap">
                <slot name="main"></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.theLayout {
    @include flex(center);
    width: 100vw;
    height: 100vh;
    background-color: $background-main-color;

    .main {
        width: 880px;
        height: 100%;
        @include flex();

        .sliderWrap {
            width: 240px;
            height: 100%;
            overflow-x: hidden;
            overflow-y: auto;

            &::-webkit-scrollbar {
                display: none;
            }
        }

        .mainWrap {
            width: 640px;
            height: 100%;
            overflow: hidden;
            @include flex(flex-start, flex-start);
            flex-wrap: wrap;
            flex-direction: column;
        }
    }
}
</style>
