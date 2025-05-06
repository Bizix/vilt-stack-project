import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
    server: {
        host: "127.0.0.1", 
        port: 5173,    
        strictPort: false,  
    },
    plugins: [
        laravel({
                server: {
        host: "127.0.0.1", // 👈 Force IPv4 to avoid ::1 EACCES error
        port: 5173,        // Optional: change this if another service is using it
    },
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve("resources/js"),
            ziggy: path.resolve("vendor/tightenco/ziggy/dist/index.esm.js"),
        },
    },
});
