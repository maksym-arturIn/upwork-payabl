<template>
  <div class="w-full">
    <Swiper
      v-bind="swiperConfig"
      class="w-full"
      @swiper="initSwiper"
      @slide-change="$emit('update:active-index', $event.activeIndex)"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <slot name="slide" :slide="slide" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts" generic="T">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCards, Parallax } from 'swiper/modules';

defineEmits<{
  (e: 'update:active-index', value: T): void;
}>();

const props = defineProps<{
  slides: T[];
  activeIndex: number;
}>();

const swiper = ref<typeof Swiper | null>(null);
const swiperConfig = {
  modules: [EffectCards, Parallax],
  parallax: true,
  grabCursor: true,
  // TODO: vertical is not working with cards effect, I've done a hack with rotate
  // direction: 'vertical',
  effect: 'cards',
  cardsEffect: {
    perSlideOffset: 10,
    perSlideRotate: 0,
    slideShadows: false,
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
