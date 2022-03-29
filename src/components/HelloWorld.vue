<template>
    <p @click="increment">
        more components {{ counter }} || {{ counterPinia.count }}
    </p>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useStore } from "@/stores/index"

let counter = ref(100)
const counterPinia = useStore()

const increment = () => {
    counter.value++
    counterPinia.increment()
}
</script>

<style scoped></style>
