<template>
    <div>
        <span class="font-bold">
            {{ listing.beds }} bds <span class="text-gray-400">| </span>
        </span>
        <span class="font-bold">
            {{ listing.baths }} ba <span class="text-gray-400">| </span>
        </span>
        <span class="font-bold">
            {{ listing.area }} m<sup>²</sup>
        </span>
    </div>
</template>

<script setup>
defineProps({
    listing: Object,
});
</script>
