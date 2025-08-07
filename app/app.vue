<template>
  <NuxtRouteAnnouncer />

  <NuxtLayout>
    <UApp :locale="locales[locale]">
      <NuxtPage :page-key="(route: any) => route?.fullPath" />
    </UApp>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import * as locales from '@nuxt/ui/locale';

const { locale } = useI18n();

const lang = computed(() => locales[locale.value].code);
const dir = computed(() => locales[locale.value].dir);

useHead({
  htmlAttrs: {
    lang,
    dir,
  },
});

useSeoMeta({
  robots: 'index, follow, all',
  ogType: 'website',
});
</script>
