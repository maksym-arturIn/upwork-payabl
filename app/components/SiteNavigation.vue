<template>
  <div class="group relative flex">
    <UDrawer v-model:open="isMobileNavOpen" direction="right">
      <button type="button" class="mt-auto inline-flex size-10 items-center justify-center text-white lg:hidden">
        <UIcon name="i-heroicons-bars-3" class="size-8 cursor-pointer" />
      </button>

      <template #content>
        <div>
          <div class="flex justify-end p-2">
            <UButton icon="i-heroicons-x-mark" @click="isMobileNavOpen = false" />
          </div>

          <nav class="flex max-h-[100dvh] min-w-[300px] flex-col gap-6 overflow-y-auto py-10 sm:min-w-[420px]">
            <div v-for="item in navigationLinks" :key="item.title">
              <h3 class="mb-4 text-2xl font-medium">{{ item.title }}</h3>

              <ul class="flex flex-col gap-2">
                <li v-for="link in item.dropdown" :key="link.title">
                  <NuxtLink :to="link.to" class="hover:text-primary-600 text-base font-medium">{{
                    link.title
                  }}</NuxtLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </template>
    </UDrawer>

    <nav class="hidden rounded-[35px] bg-white px-4 py-3 lg:block" @mouseleave="activeDropdown = null">
      <ul class="flex items-center justify-between gap-x-7 px-7">
        <li
          v-for="item in navigationLinks"
          :key="item.title"
          @click="activeDropdown = item.title"
          @mouseenter="activeDropdown = item.title"
        >
          <NuxtLink :to="item.to" class="hover:text-primary-600 text-base font-medium">{{ item.title }}</NuxtLink>
        </li>

        <li class="flex gap-2">
          <NuxtLink to="#" class="px-6 py-3 text-base font-medium">Log In</NuxtLink>
          <NuxtLink to="#" class="cta-button px-6 py-3 text-base">Contact us</NuxtLink>
        </li>
      </ul>

      <div
        class="h-0 transition-all duration-1000"
        :class="{ '!h-auto': activeDropdown && activeDropdownLinks?.length }"
      >
        <div v-show="activeDropdown && activeDropdownLinks?.length" class="flex gap-8 p-7">
          <ul v-for="(group, idx) in activeDropdownLinks" :key="idx" class="flex flex-col gap-2">
            <li v-for="link in group || []" :key="link.title">
              <NuxtLink :to="link.to" class="hover:text-primary-600 text-base font-medium">{{ link.title }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { UButton } from '#components';
import { navigationLinks } from '~~/mock';

const MAX_LINKS_IN_GROUP = 6;
const activeDropdown = ref<string | null>(null);
const isMobileNavOpen = ref(false);

// Split dropdown links into groups of 6
const dropdownLinksGroups = computed(() => {
  return navigationLinks.map((item) => ({
    ...item,
    dropdown: item.dropdown
      ?.reduce(
        (acc, _, idx, arr = []) => [...acc, arr.slice(idx * MAX_LINKS_IN_GROUP, MAX_LINKS_IN_GROUP * (idx + 1))],
        [] as Array<typeof item.dropdown>
      )
      .filter((group) => group.length),
  }));
});

const activeDropdownLinks = computed(
  () => dropdownLinksGroups.value.find((item) => item.title === activeDropdown.value)?.dropdown
);
</script>
