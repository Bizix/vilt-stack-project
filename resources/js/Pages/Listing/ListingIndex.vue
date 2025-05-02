<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <UIBox v-for="listing in listings" :key="listing.id">
            <div>
                <Link :href="route('listing.show', { listing: listing.id })">
                    <ListingPrice :price="listing.price" class="text-2xl font-bold"/>
                    <ListingSpace :listing="listing" class="text-lg"/>
                    <ListingAddress :listing="listing" class="text-gray-500"/>
                </Link>
            </div>
            <div>
                <Link :href="route('listing.edit', { listing: listing.id })">
                    Edit
                </Link>
            </div>
            <div>
                <Link
                    :href="route('listing.destroy', { listing: listing.id })"
                    method="delete"
                    as-button
                >
                    Delete
                </Link>
            </div>
        </UIBox>
    </div>
</template>

<script setup>
import ListingAddress from "@/Components/ListingAddress.vue";
import ListingPrice from "@/Components/ListingPrice.vue";
import ListingSpace from "@/Components/ListingSpace.vue";
import { Link } from "@inertiajs/vue3";
import UIBox from "@/Components/UI/UIBox.vue";

defineProps({
    listings: Array,
});
</script>
