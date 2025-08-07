<template>
  <section class="py-24 lg:py-40">
    <div class="wrapper-container flex flex-col items-center gap-12">
      <div class="space-y-4 text-center">
        <h2 class="section-title text-black">
          {{ $t('section.build.title') }}
        </h2>

        <p class="text-base text-black lg:text-lg">
          {{ $t('section.build.base-paragraph') }}
        </p>
      </div>

      <BaseTabs v-model:active-tab="activeTab" :tabs="buildCheckoutTabs" />

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-8">
        <div
          v-for="card in buildCheckoutCards"
          :key="card.id"
          class="card-with-light group hover:bg-primary hover:text-primary-600 relative col-span-full min-h-[186px] rounded-[16px] bg-black p-4 text-white transition-colors hover:before:!content-none hover:after:content-none lg:col-span-1 lg:rounded-[32px] lg:p-8"
          :class="{
            '!bg-primary !text-primary-600 before:!content-none after:!content-none': card.id === activeTab,
          }"
          @click="activeTab = card.id"
          @mouseenter="activeTab = card.id"
        >
          <NuxtImg :src="card.imgSrc" :alt="card.imgAlt" class="mb-6 size-11 lg:size-18" />

          <h3 class="lg:text-[32px]] mb-2.5 text-2xl font-medium">
            {{ card.title }}
          </h3>

          <p class="text-base lg:text-lg">
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { buildCheckoutCards, buildCheckoutTabs, EBuildCheckoutTabs } from '~~/mock';

const activeTab = ref<EBuildCheckoutTabs>(EBuildCheckoutTabs.API);
</script>
