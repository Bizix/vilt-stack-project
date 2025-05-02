<template>
    <div class="flex flex-col-reverse md:grid md:grid-cols-12 gap-4">
        <UIBox class="md:col-span-7 flex items-center">
            <div class="w-full text-center font-medium text-gray-500">
                No images
            </div>
        </UIBox>
        <div class="md:col-span-5 flex flex-col gap-4">
            <UIBox>
                <template #header> Basic info </template>
                <ListingPrice
                    :price="listing.price"
                    class="text-2xl font-bold"
                />
                <ListingSpace :listing="listing" class="text-lg" />
                <ListingAddress :listing="listing" class="text-gray-500" />
            </UIBox>
            <UIBox>
                <template #header> Offer </template>
                Make an offer</UIBox
            >
        </div>
    </div>
</template>

<script setup>
import ListingAddress from "@/Components/ListingAddress.vue";
import ListingPrice from "@/Components/ListingPrice.vue";
import ListingSpace from "@/Components/ListingSpace.vue";
import UIBox from "@/Components/UI/UIBox.vue";
defineProps({
    listing: Object,
});
</script>
