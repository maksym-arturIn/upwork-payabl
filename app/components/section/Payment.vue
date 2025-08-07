<template>
  <section class="bg-primary-600 py-24 lg:py-40">
    <div class="wrapper-container grid grid-cols-1 items-center justify-between gap-12 md:py-[96px] lg:grid-cols-2">
      <div class="max-w-[520px] space-y-4 text-center max-lg:mx-auto lg:text-left">
        <h2 class="section-title text-primary text-center lg:text-left">
          {{ $t('section.payment.title') }}
        </h2>

        <p class="text-base text-white lg:text-lg">
          {{ $t('section.payment.base-paragraph') }}
        </p>
      </div>

      <div class="flex w-screen max-w-[100%] flex-col gap-16 lg:w-[50vw]">
        <BaseLogoRow :logos="logos" :duration="30" />
        <BaseLogoRow :logos="logos" :duration="30" direction="reverse" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const logos = [
  '/images/partners/payment-logo-1.svg',
  '/images/partners/payment-logo-2.svg',
  '/images/partners/payment-logo-3.svg',
  '/images/partners/payment-logo-4.svg',
  '/images/partners/payment-logo-5.svg',
  '/images/partners/payment-logo-6.svg',
];
</script>
