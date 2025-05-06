<template>
    <header
        class="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 w-full"
    >
        <div class="container mx-auto">
            <nav class="p-4 flex items-center justify-between">
                <div class="text-lg font-bold">
                    <Link :href="route('listing.index')">Listings</Link>&nbsp;
                </div>
                <div
                    class="text-xl text-indigo-600 dark:text-indigo-300 font-bold text-center"
                >
                    <Link :href="route('listing.index')">Larazillow</Link>
                </div>
                <div v-if="user" class="flex items-center gap-4">
                    <div class="text-gray-500">{{ user.name }}</div>
                    <Link :href="route('listing.create')" class="btn-primary"
                        >+ New Listing</Link
                    >
                    <Link
                        :href="route('logout')"
                        class="hover:underline"
                        as="button"
                        method="delete"
                        >Logout</Link
                    >
                </div>
                <div v-else class="flex items-center gap-2">
                    <Link :href="route('user-account.create')">Register</Link>
                    <Link :href="route('login')">Login</Link>
                </div>
            </nav>
        </div>
    </header>
    <main class="container mx-auto p-4 w-full">
        <div
            v-if="flashSuccess"
            class="mb-4 border rounded-md shadow-md border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900 p-2"
        >
            {{ flashSuccess }}
        </div>
        <slot>Default</slot>
    </main>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import { computed } from "vue";
import { route } from "ziggy-js";

const props = defineProps({
    flash: Object,
    user: Object,
});

const user = computed(() => props.user);

const flashSuccess = computed(() => props.flash?.success);
</script>
