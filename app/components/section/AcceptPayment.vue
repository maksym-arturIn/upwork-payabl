<template>
  <section class="pt-24 pb-12 lg:pt-40 lg:pb-24">
    <div class="wrapper-container">
      <div class="text-center">
        <h2 class="section-title mb-4 text-black lg:mb-6">
          {{ $t('section.local-payment.title') }}
        </h2>

        <p class="base-paragraph mb-12 text-black">
          {{ $t('section.local-payment.base-paragraph') }}
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 text-black lg:grid-cols-2">
        <div class="flex max-w-[518px] flex-col gap-8 lg:pt-24">
          <div class="flex flex-col gap-4">
            <h3 class="text-[32px] font-medium lg:text-[44px]">
              {{ $t('section.accept-payment.article-title') }}
            </h3>

            <p class="base-paragraph text-black">
              {{ $t('section.accept-payment.article-base-paragraph') }}
            </p>
          </div>

          <div
            class="before:bg-primary-400 relative ml-3 flex flex-col gap-4 pl-3 before:absolute before:top-0 before:-left-2.5 before:h-full before:w-2.5 before:rounded-lg lg:hidden"
          >
            <h3 class="text-primary-400 text-[28px] leading-[1] font-medium lg:text-[44px]">
              {{ acceptPaymentsTabs[activeTabIndex].title }}
            </h3>

            <p class="base-paragraph text-black">
              {{ acceptPaymentsTabs[activeTabIndex].description }}
            </p>
          </div>

          <div class="mt-auto flex flex-col gap-4">
            <button
              v-for="link in acceptPaymentsTabs"
              :key="link.key"
              type="button"
              class="inline-flex cursor-pointer items-center gap-2"
              :class="{ 'text-primary-600': activeLink === link.key }"
              @click="activeLink = link.key"
            >
              {{ link.title }}

              <UIcon name="i-heroicons-arrow-up-right" class="size-4" />
            </button>
          </div>
        </div>

        <div class="relative max-w-[628px] self-end max-lg:hidden">
          <div
            :style="progressBarOffset"
            class="bg-primary-400 absolute top-0 left-0.5 z-[1] h-auto w-2.5 rounded-lg transition-all"
          />

          <ul
            ref="tabsContainer"
            class="before:bg-primary-100 relative ml-3 flex flex-col gap-8 pl-4 before:absolute before:top-0 before:-left-2.5 before:h-full before:w-2.5 before:rounded-lg"
          >
            <li v-for="tab in acceptPaymentsTabs" :key="tab.key" ref="tabRefs" @click="activeLink = tab.key">
              <h4 class="text-primary-400 mb-4 text-[28px] leading-[1] font-medium lg:text-[44px]">
                {{ tab.title }}
              </h4>

              <p class="base-paragraph text-black">
                {{ tab.description }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { acceptPaymentsTabs, EAcceptPaymentsTabs } from '~~/mock';

const activeLink = ref(EAcceptPaymentsTabs.WooCommerce);
const activeTabIndex = computed(() => acceptPaymentsTabs.findIndex((link) => link.key === activeLink.value));
const { width: windowWidth } = useWindowSize();
const tabRefs = useTemplateRef<HTMLElement[]>('tabRefs');
const tabsContainer = useTemplateRef<HTMLElement>('tabsContainer');
const progressBarOffset = ref({
  top: `0px`,
  height: `0px`,
});

const updateProgressBar = () => {
  const { top: tabsContainerTop } = useElementBounding(tabsContainer);
  const { top: activeTabTop, height: activeTabHeight } = useElementBounding(tabRefs.value?.[activeTabIndex.value]);

  progressBarOffset.value = {
    top: `${activeTabTop.value - tabsContainerTop.value}px`,
    height: `${activeTabHeight.value}px`,
  };
};

watchDebounced(activeTabIndex, updateProgressBar, { immediate: true, debounce: 100 });
watchDebounced(windowWidth, updateProgressBar, { immediate: true, debounce: 100 });
</script>
