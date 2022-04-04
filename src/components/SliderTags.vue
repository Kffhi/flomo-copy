<template>
    <div class="sliderTags">
        <h3>{{ text }}</h3>
        <div class="tags">
            <tag-item id="tag1" icon="🐶" label="测试标签"></tag-item>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
    text: String,
    isAllTag: {
        type: Boolean,
        default: false
    }
})
</script>

<style lang="scss" scoped>
.sliderTags {
    width: 100%;

    h3 {
        font-size: 12px;
        color: $text-glod-color;
        padding-left: 16px;
        margin: 20px 0 0;
    }

    .tags {
        margin: 8px 0 18px;
    }
}
</style>
