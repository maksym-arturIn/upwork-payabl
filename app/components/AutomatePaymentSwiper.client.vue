<template>
  <Swiper v-bind="swiperConfig" class="w-full" @swiper="initSwiper" @slide-change="$emit('update:active-index', swiper.activeIndex)">
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <slot name="slide" :slide="slide" />
    </swiper-slide>
  </Swiper>
</template>

<script setup lang="ts" generic="T">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';

defineEmits<{
  (e: 'update:active-index', value: T): void;
}>();

const props = defineProps<{
  slides: T[];
  activeIndex: number;
}>();

const swiper = ref<typeof Swiper | null>(null);
const swiperConfig = {
  modules: [Pagination],
  slidesPerView: 1.1,
  spaceBetween: 24,
  breakpoints: {
    1024: {
      slidesPerView: 1.5,
      spaceBetween: 48,
    },
  },
};

watch(
  () => props.activeIndex,
  (index) => {
    swiper.value?.slideTo(index);
  }
);

const initSwiper = (s: typeof Swiper) => {
  swiper.value = s;
};
</script>
