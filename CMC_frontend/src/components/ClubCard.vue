<template>
  <div class="q-pa-md row items-start q-gutter-md w-05">
    <q-card v-ripple class="my-card cursor-pointer q-hoverable">
      <span class="q-focus-helper"></span>

      <img :src="img" alt="unable to load image" class="card-img" />

      <q-list class="text-left">
        <q-item>
          <q-item-section avatar>
            <q-icon color="primary" name="location_on" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ location }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon color="red" name="schedule" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ when }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon color="amber" name="sell" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ price }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
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
