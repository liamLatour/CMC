<template>
  <div class="q-pa-md row items-start q-gutter-md w-05">
    <q-card v-ripple class="cursor-pointer q-hoverable">
      <span class="q-focus-helper"></span>

      <img :src="img" alt="unable to load image" class="card-img" />
      <div class="absolute-bottom text-subtitle2 text-center over">
        Médecine
      </div>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ClubCard',
  props: {
    img: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      default: 'Inconnue',
    },

    when: {
      type: String,
      default: 'Inconnue',
    },

    price: {
      type: String,
      default: 'Inconnue',
    },
  },
});
</script>

<style>
.card-img {
  min-width: 0;
}
</style>
