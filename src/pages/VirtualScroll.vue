<template>
  <virtual-scroll></virtual-scroll>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VirtualScroll from 'src/components/VirtualScroll.vue';

export default defineComponent({
  components: {
    VirtualScroll,
  },
});
</script>
