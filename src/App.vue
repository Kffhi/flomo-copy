<template>
    <the-layout>
        <template v-slot:slider>
            <user-header></user-header>
            <the-stat></the-stat>
            <slider-bar-ul></slider-bar-ul>
            <tags-tree></tags-tree>
        </template>
        <template v-slot:main>
            <search-header></search-header>
            <the-editor></the-editor>
            <the-memos-wrap></the-memos-wrap>
        </template>
    </the-layout>
</template>

<script lang="ts" setup></script>
