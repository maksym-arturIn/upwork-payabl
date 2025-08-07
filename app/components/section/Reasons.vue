<template>
  <section class="bg-secondary w-full py-24 lg:py-48">
    <div class="wrapper-container">
      <h2 class="section-title mb-8 lg:mb-12">
        {{ $t('section.reasons.title') }}
      </h2>

      <div :key="reasonsSlice?.length" class="flex flex-col gap-4 lg:grid lg:grid-cols-12 lg:gap-8">
        <div
          v-for="(reason, index) in reasonsSlice || []"
          :key="reason?.title"
          class="card-with-light group hover:bg-primary hover:text-primary-600 relative col-span-full min-h-[186px] rounded-[16px] bg-black p-4 text-white transition-colors hover:before:!content-none hover:after:content-none lg:col-span-4 lg:rounded-[32px] lg:p-8"
          :class="{ 'lg:!col-span-3': index >= 3 }"
        >
          <NuxtImg
            v-if="reason?.icon"
            :src="reason?.icon"
            alt="Fast onboarding"
            class="group-hover:text-primary-600 mb-4 block size-11 lg:mb-6 lg:size-18"
          />

          <h5 class="group-hover:text-primary-600 mb-2.5 text-2xl font-medium lg:mb-4">
            {{ reason?.title }}
          </h5>

          <p class="text-sm group-hover:text-black lg:text-lg">
            {{ reason?.description }}
          </p>
        </div>

        <div class="col-span-full flex justify-center lg:hidden">
          <button
            class="inline-flex items-center gap-2 text-base font-medium text-black"
            @click="isAllVisible = !isAllVisible"
          >
            {{ isAllVisible ? 'Show less' : 'Show all' }}
            <UIcon
              name="i-heroicons-chevron-down"
              class="size-4 transition-all"
              :class="{ 'rotate-180': isAllVisible }"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reasons } from '~~/mock';
import { breakpointsTailwind } from '@vueuse/core';

const { isGreaterOrEqual } = useBreakpoints(breakpointsTailwind);
const { width } = useWindowSize();

const isAllVisible = ref(false);

const MAX_MOBILE_REASONS_COUNT = 3;
const reasonsSlice = ref<Array<(typeof reasons)[number] | null>>([]);

watch(
  [width, isAllVisible],
  () => {
    reasonsSlice.value =
      isGreaterOrEqual('lg') || isAllVisible.value ? reasons : reasons.slice(0, MAX_MOBILE_REASONS_COUNT);
  },
  { immediate: true }
);
</script>
