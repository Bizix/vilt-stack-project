<template>
    <UIBox>
        <div>
            <Link :href="route('listing.show', { listing: listing.id })">
                <div class="flex items-center gap-1">
                    <ListingPrice
                        :price="listing.price"
                        class="text-2xl font-bold"
                    />
                    <div class="text-xs text-gray-500">
                        <ListingPrice :price="monthlyPayment" /> pm
                    </div>
                </div>
                <ListingSpace :listing="listing" class="text-lg" />
                <ListingAddress :listing="listing" class="text-gray-500" />
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
</template>

<script setup>
import ListingAddress from "@/Components/ListingAddress.vue";
import ListingPrice from "@/Components/ListingPrice.vue";
import ListingSpace from "@/Components/ListingSpace.vue";
import { Link } from "@inertiajs/vue3";
import UIBox from "@/Components/UI/UIBox.vue";
import { useMonthlyPayment } from "@/Composables/useMonthlyPayment";
const props = defineProps({
    listing: Object,
});
const { monthlyPayment } = useMonthlyPayment(
    props.listing.price,
    2.5,
    25,
);
</script>
