<template>
    <div class="tagItem">
        <span class="icon" v-if="icon">
            {{ icon }}
        </span>
        {{ label }}
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
    label: String,
    icon: String,
    id: String
})
</script>

<style lang="scss" scoped>
.tagItem {
    width: 100%;
    height: 36px;
    @include flex();
    font-size: 16px;
    cursor: pointer;
    color: $text-main-color;

    .icon {
        margin: 0 10px 0 10px;
    }

    &:hover {
        background-color: $background-hover-color;
        border-radius: 5px;
    }
}
</style>
