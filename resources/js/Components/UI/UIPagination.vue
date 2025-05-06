<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
    <div class="flex gap-1">
        <Link
            v-for="(link, index) in links"
            :key="index"
             :href="link.url ?? ''"
            class="px-4 py-2 border rounded-md"
            :class="{
                'bg-indigo-500 dark:bg-indigo-800 text-gray-300': link.active,
                'pointer-events-none opacity-50': !link.url, // disable if no URL
            }"
            v-html="link.label"
        />

    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
defineProps({
    links: Array,
});
</script>
