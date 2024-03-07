<template>
  <q-layout>
    <q-page-container>
      <q-page
        class="home-page window-height window-width column justify-center items-center q-gutter-xl"
      >
        <q-btn
          @click="triggerShow1"
          label="Normal Import"
          class="self-center"
          color="blue-grey-10"
        />
        <popup-1 v-if="show1"></popup-1>

        <q-btn
          @click="triggerShow2"
          label="Async Import"
          class="self-center"
          color="blue-grey-8"
        />
        <popup-2 v-if="show2"></popup-2>

        <q-btn
          @click="$router.push('/infinite-scroll')"
          label="Go to Infinite Scroll"
          color="blue-grey-7"
        />

        <q-btn
          @click="$router.push('/virtual-scroll')"
          label="Go to Virtual Scroll"
          color="blue-grey-5"
        />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, defineAsyncComponent } from 'vue';
import Popup1 from 'src/components/Popup-1.vue';

const Popup2 = defineAsyncComponent(() => import('src/components/Popup-2.vue'));

export default defineComponent({
  components: {
    Popup1,
    Popup2,
  },

  setup() {
    const show1 = ref(false);
    const show2 = ref(false);

    const triggerShow1 = () => {
      show1.value = !show1.value;
    };

    const triggerShow2 = () => {
      show2.value = !show2.value;
    };

    return {
      show1,
      triggerShow1,
      triggerShow2,
      show2,
    };
  },
});
</script>
