<template>
  <q-item v-if="subLinks == null" clickable tag="a" :href="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>

  <q-expansion-item
    v-else
    expand-separator
    clickable
    tag="a"
    :icon="icon"
    :label="title"
    :href="link"
  >
    <q-card>
      <q-card-section>
        <essential-link
          v-for="link in subLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '#',
    },

    icon: {
      type: String,
      default: '',
    },

    subLinks: {
      type: Object,
      default: null,
    },
  },
});
</script>
