<template>
  <div class="relative w-full overflow-hidden">
    <div
      class="flex flex-nowrap gap-x-28 whitespace-nowrap"
      :class="direction === 'reverse' ? 'animate-scroll-reverse' : 'animate-scroll'"
      :style="{ '--animation-duration': `${duration}s` }"
    >
      <template v-for="item in 2" :key="item">
        <img v-for="(logo, idx) in logos" :key="idx" :src="logo" class="block h-12 w-auto shrink-0 object-contain" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  logos: string[];
  direction?: 'forward' | 'reverse';
  duration?: number;
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'forward',
  duration: 40,
});

const { direction, duration } = props;
</script>
