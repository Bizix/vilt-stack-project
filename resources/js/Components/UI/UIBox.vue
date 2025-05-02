<template>
    <div class="border border-gray-200 dark:border-gray-800 dark:text-gray-300 p-4 rounded-md shadow-sm">
        <div class="text-gray-500 font-medium mb-1">
            <slot name="header"></slot>
        </div>
        <slot>Default</slot>
    </div>
</template>


