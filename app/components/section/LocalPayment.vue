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

      <div class="flex flex-col-reverse gap-8 text-black lg:order-2 lg:grid lg:grid-cols-2">
        <div class="flex max-w-[518px] flex-col gap-4 lg:pt-24">
          <div class="flex flex-col gap-4">
            <h3 class="text-[28px] leading-[1] font-medium lg:text-[44px]">Digital wallets</h3>

            <p class="base-paragraph text-black">
              Accept Apple Pay, Google Pay, PayPal, Alipay and more. Increase conversions by letting customers pay with
              their preferred digital wallet.
            </p>
          </div>

          <div class="mt-auto flex flex-col gap-4">
            <button
              v-for="link in localPaymentLinks"
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

        <div class="lg:max-w-[628px] lg:self-end">
          <LazyLocalPaymentSwiper v-model:active-index="activeTabIndex" :slides="localPaymentLinks">
            <template #slide="{ slide }">
              <div class="relative min-h-[292px] after:block after:size-0 after:pt-[56%] lg:h-[560px]">
                <div class="absolute inset-0 overflow-hidden rounded-[16px] lg:rounded-[32px]">
                  <img :src="slide.image" :alt="slide.title" class="size-full object-cover object-center" />
                </div>
              </div>
            </template>
          </LazyLocalPaymentSwiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { localPaymentLinks, ELocalPaymentLinks } from '~~/mock';

const activeLink = ref<ELocalPaymentLinks | undefined>(ELocalPaymentLinks.DIGITAL_WALLETS);
const activeTabIndex = computed({
  get: () => localPaymentLinks.findIndex((link) => link.key === activeLink.value),
  set: (value: number) => {
    activeLink.value = localPaymentLinks[value]?.key;
  },
});
</script>
