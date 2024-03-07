<template>
  <infinite-scroll></infinite-scroll>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InfiniteScroll from 'src/components/InfiniteScroll.vue';

export default defineComponent({
  components: {
    InfiniteScroll,
  },
});
</script>
