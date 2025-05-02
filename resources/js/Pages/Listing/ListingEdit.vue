
<template>
    <form @submit.prevent="update">
        <div class="grid grid-cols-6 gap-4">
            <div class="col-span-2">
                <label class="form-label">Beds</label>
                <input type="text" v-model.number="form.beds" class="form-input"/>
                <div v-if="form.errors.beds" class="form-input-error">
                    {{ form.errors.beds }}
                </div>
            </div>

            <div class="col-span-2">
                <label class="form-label">Baths</label>
                <input type="text" v-model.number="form.baths" class="form-input"/>
                <div v-if="form.errors.baths" class="form-input-error">
                    {{ form.errors.baths }}
                </div>
            </div>

            <div class="col-span-2">
                <label class="form-label">Area</label>
                <input type="text" v-model.number="form.area" class="form-input"/>
                <div v-if="form.errors.area" class="form-input-error">
                    {{ form.errors.area }}
                </div>
            </div>

            <div class="col-span-4">
                <label class="form-label">City</label>
                <input type="text" v-model="form.city" class="form-input"/>
                <div v-if="form.errors.city" class="form-input-error">
                    {{ form.errors.city }}
                </div>
            </div>

            <div class="col-span-2">
                <label class="form-label">Post Code</label>
                <input type="text" v-model="form.code" class="form-input"/>
                <div v-if="form.errors.code" class="form-input-error">
                    {{ form.errors.code }}
                </div>
            </div>

            <div class="col-span-4">
                <label class="form-label">Street</label>
                <input type="text" v-model="form.street" class="form-input"/>
                <div v-if="form.errors.street" class="form-input-error">
                    {{ form.errors.street }}
                </div>
            </div>

            <div class="col-span-2">
                <label class="form-label">Street Nr</label>
                <input type="text" v-model="form.street_nr" class="form-input"/>
                <div v-if="form.errors.street_nr" class="form-input-error">
                    {{ form.errors.street_nr }}
                </div>
            </div>

            <div class="col-span-6">
                <label class="form-label">Price</label>
                <input type="text" v-model="form.price" class="form-input"/>
                <div v-if="form.errors.price" class="form-input-error">
                    {{ form.errors.price }}
                </div>
            </div>

            <div class="col-span-6">
                <button type="submit" class="btn-primary">Edit</button>
            </div>
        </div>
    </form>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import MainLayout from "@/Layouts/MainLayout.vue";

defineOptions({
    layout: MainLayout,
});

const props = defineProps({
    listing: Object,
});

const form = useForm({
    beds: props.listing.beds,
    baths: props.listing.baths,
    area: props.listing.area,
    city: props.listing.city,
    code: props.listing.code,
    street: props.listing.street,
    street_nr: props.listing.street_nr,
    price: props.listing.price,
});

const update = () => {
    // eslint-disable-next-line no-undef
    form.put(route("listing.update", {listing: props.listing.id}));
};
</script>

<style scoped>
label {
    margin-right: 2em;
}

div {
    padding: 2px;
}
</style>
