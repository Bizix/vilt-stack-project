<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>Index</div>
    <Link href="/hello">Show Page</Link>
    <div>The message is: {{ message }}</div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";

defineProps({ message: String });
</script>

