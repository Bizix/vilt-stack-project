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
                <template #header> Monthly payment </template>
                <div>
                    <label>Interest rate ({{ interestRate }}%)</label>
                    <input
                        v-model="interestRate"
                        type="range"
                        min="0.1"
                        max="30"
                        step="0.1"
                        class="w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                    <label>Duration ({{ duration }} years)</label>
                    <input
                        v-model="duration"
                        type="range"
                        min="3"
                        max="35"
                        step="1"
                        class="w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                    <div class="text-gray-600 dark:text-gray-300 mt-2">
                        <div class="text-gray-400">Your monthly payment</div>
                        <ListingPrice
                            :price="monthlyPayment"
                            class="text-2xl font-bold"
                        />
                    </div>
                    <div class="text-gray-500 mt-2">
                        <div class="text-gray-400">
                            <div class="flex justify-between">
                                <div>Total paid</div>
                                <ListingPrice :price="totalPaid" class="font-medium"/>
                            </div>
                            <div class="flex justify-between">
                                <div>Principal paid</div>
                                <ListingPrice :price="listing.price" class="font-medium"/>
                            </div>
                            <div class="flex justify-between">
                                <div>Interest paid</div>
                                <ListingPrice :price="totalInterestPaid" class="font-medium"/>
                            </div>
                        </div>
                    </div>
                </div>
            </UIBox>
        </div>
    </div>
</template>

<script setup>
import ListingAddress from "@/Components/ListingAddress.vue";
import ListingPrice from "@/Components/ListingPrice.vue";
import ListingSpace from "@/Components/ListingSpace.vue";
import UIBox from "@/Components/UI/UIBox.vue";
import { ref } from "vue";
import { useMonthlyPayment } from "@/Composables/useMonthlyPayment";

const interestRate = ref(2.5);
const duration = ref(25);

const props = defineProps({
    listing: Object,
});

const { monthlyPayment, totalPaid, totalInterestPaid } = useMonthlyPayment(
    props.listing.price,
    interestRate,
    duration,
);
</script>
