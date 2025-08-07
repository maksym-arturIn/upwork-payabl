<template>
  <div class="bg-primary-100 hidden gap-4 rounded-[64px] px-4 py-3 lg:inline-flex">
    <button
      v-for="tab in tabs"
      :key="tab.key"
      class="cta-button bg-white px-4 py-2 text-base transition-colors duration-300"
      :class="{ '!bg-primary': tab.key === activeTab }"
      @click="$emit('update:activeTab', tab.key)"
    >
      {{ tab.title }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'update:activeTab', value: string): void;
}>();

defineProps<{
  activeTab: string;
  tabs: { key: string; title: string }[];
}>();
</script>
