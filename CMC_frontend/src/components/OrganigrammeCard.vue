<template>
  <div class="q-pa-md row items-start q-gutter-md w-02">
    <q-card class="my-card">
      <img :src="img" alt="unable to load image" class="card-img" />

      <q-list class="text-center">
        <q-item>
          <q-item-section>
            <q-item-label>{{ name }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label>{{ position }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'OrganigrammeCard',
  props: {
    img: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      default: 'Inconnue',
    },

    position: {
      type: String,
      default: 'Inconnue',
    },
  },
});
</script>
