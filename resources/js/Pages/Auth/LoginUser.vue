<template>
    <form @submit.prevent="login">
        <div class="w-1/2 mx-auto">
            <div>
                <label for="email" class="label">E-mail</label>
                <input
                    id="email"
                    type="text"
                    class="form-input"
                    v-model="form.email"
                />
                <div class="form-input-error" v-if="form.errors.email">
                    {{ form.errors.email }}
                </div>
            </div>
            <div class="mt-4">
                <label for="password" class="label">Password</label>
                <input
                    id="password"
                    type="password"
                    class="form-input"
                    v-model="form.password"
                />
                <div class="form-input-error" v-if="form.errors.password">
                    {{ form.errors.password }}
                </div>
            </div>
            <div class="mt-4">
                <button class="btn-primary w-full" type="submit">Login</button>
                <div class="mt-4 text-center">
                    <Link
                        :href="route('user-account.create')"
                        class="text-sm text-gray-500"
                        >Don't have an account? Register</Link
                    >
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>
import { useForm, Link } from "@inertiajs/vue3";

const form = useForm({
    email: null,
    password: null,
});

// eslint-disable-next-line no-undef
const login = () => form.post(route("login.store"));
</script>
