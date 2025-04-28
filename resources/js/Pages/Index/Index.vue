<template>
    <h1>Hello World {{ counter }}</h1>
</template>

<script setup>
import { ref } from 'vue';

const counter = ref(0);

setInterval(() => counter.value++, 1000);
</script>


