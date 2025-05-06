<template>
    <ListingFilter :filters="filters" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <IndividualListing
            v-for="listing in listings.data"
            :key="listing.id"
            :listing="listing"
        />
    </div>
    <div v-if="listings.data.length" class="w-full flex justify-center mt-4 mb-4">
        <UIPagination :links="listings.links" />
    </div>
</template>

<script setup>
import IndividualListing from "@/Pages/Listing/Index/Components/IndividualListing.vue";
import UIPagination from "@/Components/UI/UIPagination.vue";
import ListingFilter from "@/Pages/Listing/Index/Components/ListingFilter.vue";

defineProps({
    listings: Object,
    filters: Object,
});
</script>
