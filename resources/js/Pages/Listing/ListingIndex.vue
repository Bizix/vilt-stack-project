<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <IndividualListing v-for="listing in listings" :key="listing.id" :listing="listing"/>
    </div>
</template>

<script setup>
import IndividualListing from "./Index/Components/IndividualListing.vue";
defineProps({
    listings: Array,
});
</script>
