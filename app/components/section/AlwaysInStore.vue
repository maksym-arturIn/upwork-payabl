<template>
  <section class="bg-primary-600 py-24 lg:py-40">
    <div class="wrapper-container grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-6">
      <div class="max-w-[520px] text-center max-lg:mx-auto lg:text-left">
        <h2 class="section-title text-primary mb-6 lg:text-left">
          {{ $t('section.always-in-store.title') }}
        </h2>

        <p class="base-paragraph mb-12 text-white">
          {{ $t('section.always-in-store.base-paragraph') }}
        </p>

        <button class="cta-button w-full lg:w-auto">Learn more</button>
      </div>

      <div
        class="relative min-h-[292px] overflow-hidden rounded-[32px] after:block after:size-0 after:pt-[56%] lg:h-[560px]"
      >
        <div class="absolute inset-0">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/i4ompLBhUg4?si=d0F8RwHrdp91ml1t"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            autoplay
            muted
            loop
            controls="0"
          />
        </div>
      </div>
    </div>
  </section>
</template>
