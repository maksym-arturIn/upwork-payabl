<template>
  <footer class="bg-black py-12 text-white lg:py-22">
    <div class="wrapper-container flex flex-col gap-11 lg:gap-32">
      <div class="flex gap-20">
        <div class="hidden grow gap-8 lg:flex">
          <div v-for="column in footerLinksColumns" :key="column.title" class="flex flex-col gap-4">
            <h3 class="font-ginka text-xl font-medium">{{ column.title }}</h3>

            <ul class="flex flex-col gap-2">
              <li v-for="link in column.links" :key="link.label">
                <NuxtLink :to="link.to" :title="link.to" class="hover:text-primary text-base transition-colors">
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="flex grow flex-col gap-4">
          <h4 class="mb-2 text-xl font-medium lg:hidden">
            {{ $t('footer.findUsOnSocialMedia') }}
          </h4>

          <div class="flex flex-wrap gap-1 lg:max-w-[464px] lg:justify-end lg:gap-4 lg:self-end">
            <NuxtLink
              v-for="link in footerSocialLinks"
              :key="link.label"
              :to="link.to"
              class="hover:bg-primary rounded-full bg-white px-4 py-2 text-center text-base text-black hover:cursor-pointer hover:opacity-80"
              :title="link.to"
            >
              {{ link.label }}
            </NuxtLink>
          </div>

          <div class="mt-11 flex flex-col gap-4 lg:mt-24">
            <h4 class="mb-6 text-xl font-medium lg:mb-10 lg:max-w-[400px] lg:text-end lg:text-[32px]">
              {{ $t('footer.signUpForOurMonthlyFinanceNewsletter') }}
            </h4>

            <form class="flex flex-col gap-6 lg:flex-row" @submit="handleSubmit">
              <input
                id="subscribe-form-email"
                v-model="formState.email"
                type="email"
                placeholder="Enter your email"
                class="email-input"
              />

              <button type="submit" class="cta-button shrink-0 max-lg:grow">
                {{ $t('footer.signUp') }}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-start gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div class="flex shrink-0 flex-col gap-4">
          <NuxtImg src="/images/logo.svg" alt="logo" class="h-16 w-auto lg:h-28" />

          <NuxtLink to="#" class="text-xs">
            {{ $t('footer.copyright') }}
          </NuxtLink>
        </div>

        <NuxtImg src="/images/footer-qm-sign.svg" alt="footer-qm-sign" class="h-20 w-auto shrink-0 lg:h-28" />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { footerLinksColumns, footerSocialLinks } from '~~/mock';

const formState = ref({
  email: '',
});

const handleSubmit = (e: Event) => {
  e.preventDefault();
};
</script>
