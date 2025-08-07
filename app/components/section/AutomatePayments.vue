<template>
  <section class="py-24 lg:py-40">
    <div class="wrapper-container flex flex-col items-center gap-12">
      <div class="space-y-4 text-center lg:mb-10">
        <h2 class="section-title text-black">
          {{ $t('section.automate.title') }}
        </h2>

        <p class="text-base text-black lg:text-lg">
          {{ $t('section.automate.base-paragraph') }}
        </p>
      </div>

      <BaseTabs v-model:active-tab="activeTab" :tabs="automatePaymentsTabs" class="max-lg:hidden" />

      <div class="flex justify-center gap-3 lg:hidden">
        <button
          v-for="tab in automatePaymentsTabs"
          :key="tab.key"
          type="button"
          class="cursor-pointer rounded-full bg-black px-3 py-1.5 text-sm text-white transition-colors hover:opacity-80"
          :class="{ 'bg-primary-500 text-black': activeTab === tab.key }"
          @click="activeTab = tab.key"
        >
          {{ tab.title }}
        </button>
      </div>

      <div class="w-screen overflow-visible pl-4 lg:max-w-3xl">
        <div class="w-full lg:ml-auto lg:w-[calc(50%+50vw)]">
          <LazyAutomatePaymentSwiper v-model:active-index="activeTabIndex" :slides="automatePaymentsCards">
            <template #slide="{ slide }">
              <div class="w-full space-y-4">
                <div class="flex h-[400px] items-center justify-center overflow-hidden rounded-[32px] bg-black p-10">
                  <img :src="slide.img" :alt="slide.title" class="max-h-full w-auto object-contain object-center" />
                </div>

                <h3 class="text-center text-[28px] font-medium lg:text-[44px]">{{ slide.title }}</h3>

                <p class="text-center text-base lg:text-lg">{{ slide.description }}</p>
              </div>
            </template>
          </LazyAutomatePaymentSwiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { automatePaymentsCards, automatePaymentsTabs, EAutomatePaymentsTabs } from '~~/mock';

const activeTab = ref<EAutomatePaymentsTabs | undefined>(EAutomatePaymentsTabs.OneClick);
const activeTabIndex = computed({
  get: () => automatePaymentsTabs.findIndex((tab) => tab.key === activeTab.value),
  set: (value: number) => {
    activeTab.value = automatePaymentsTabs[value]?.key;
  },
});
</script>
