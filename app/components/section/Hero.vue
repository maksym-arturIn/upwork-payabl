<template>
  <section class="card-with-light relative min-h-screen bg-black pt-16 text-white lg:pt-28">
    <div class="wrapper-container grid grid-cols-1 items-center justify-between gap-y-[24px] py-[96px] lg:grid-cols-2">
      <div class="max-w-[628px]">
        <h1 class="mb-4 text-[32px] sm:text-[48px] lg:text-[64px]">
          {{ $t('section.hero.title') }}
        </h1>

        <p class="base-paragraph mb-8 lg:mb-12">
          {{ $t('section.hero.base-paragraph') }}
        </p>

        <div class="flex w-full flex-col items-stretch gap-[24px] lg:flex-row">
          <NuxtLink to="#" class="cta-button px-10 py-4"> Get started </NuxtLink>

          <NuxtLink to="#" class="cta-button bg-transparent px-10 py-4 text-white"> View documentation </NuxtLink>
        </div>
      </div>

      <div class="flex max-w-[628px] flex-col items-center justify-center">
        <img src="/images/hero/banner.webp" alt="banner" class="w-full" />
      </div>
    </div>
  </section>
</template>
