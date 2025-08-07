<template>
  <button
    :class="[
      'cursor-pointer font-medium text-[#181818] transition-colors duration-300',
      padding || 'px-4 py-3',
      rounded === '72' ? 'rounded-[72px]' : 'rounded-[64px]',
      isActive ? 'bg-[#7CDDAE]' : '',
    ]"
    :style="{ background: !isActive ? background : undefined }"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  rounded?: '64' | '72';
  background?: string;
  padding?: string;
  isActive?: boolean;
}>();
</script>
