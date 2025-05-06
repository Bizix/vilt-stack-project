<template>
    <form @submit.prevent="register">
        <div class="w-1/2 mx-auto">
            <div>
                <label for="name" class="label">Name</label>
                <input id="name" type="text" class="form-input" v-model="form.name" />
                <div class="form-input-error" v-if="form.errors.name">{{ form.errors.name }}</div>
            </div>
            <div>
                <label for="email" class="label mt-4">E-mail</label>
                <input id="email" type="text" class="form-input" v-model="form.email" />
                <div class="form-input-error" v-if="form.errors.email">{{ form.errors.email }}</div>
            </div>
            <div class="mt-4">
                <label for="password" class="label">Password</label>
                <input id="password" type="password" class="form-input" v-model="form.password" />
                <div class="form-input-error" v-if="form.errors.password">{{ form.errors.password }}</div>
            </div>
            <div class="mt-4">
                <label for="password_confirmation" class="label">Password Confirmation</label>
                <input id="password_confirmation" type="password" class="form-input" v-model="form.password_confirmation" />
            </div>
            <div class="mt-4">
                <button class="btn-primary w-full" type="submit">Create Account</button>
                <div class="mt-4 text-center">
                    <Link
                        :href="route('login')"
                        class="text-sm text-gray-500"
                        >Already have an account? Login</Link
                    >
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>
import { useForm, Link } from "@inertiajs/vue3";

const form = useForm({
    name: null,
    email: null,
    password: null,
    
});

// eslint-disable-next-line no-undef
const register = () => form.post('');
</script>
