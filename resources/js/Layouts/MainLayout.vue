<template>
    <Link href="/listing">Listings</Link>&nbsp;
    <Link href="/listing/create">New Listing</Link>

    <div v-if="flashSuccess" class="success">
    {{ flashSuccess }}
  </div>
    <slot>Default</slot>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
import { computed } from 'vue'

const props = defineProps({
  flash: Object,
});

const flashSuccess = computed(() => props.flash?.success)

</script>

<style scoped>
.success {
    background-color: green;
    color: white;
    padding: 10px;
    border-radius: 5px;
}
</style>
