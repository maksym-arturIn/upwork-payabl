<template>
  <div class="flex h-screen w-screen flex-col items-center justify-center gap-10 p-3">
    <h1 class="text-4xl">Error: {{ props.error?.statusCode }}</h1>

    <button class="btn-base btn-lg" @click="handleError">{{ $t('backToHome') }}</button>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({ error: Object as () => NuxtError });

const handleError = () => clearError({ redirect: '/' });
</script>
