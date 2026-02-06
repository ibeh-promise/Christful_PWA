import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
    input: 'openapi.yaml',
    output: 'src/lib/api',
    plugins: ['@hey-api/client-axios'],
});

