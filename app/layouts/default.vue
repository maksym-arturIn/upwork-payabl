<template>
  <div class="mx-auto flex min-h-[100dvh] w-full max-w-[1920px] flex-col">
    <div class="relative z-100">
      <SiteHeader class="absolute top-0 left-1/2 w-full -translate-x-1/2" />
    </div>

    <slot />

    <SiteFooter />
  </div>
</template>
