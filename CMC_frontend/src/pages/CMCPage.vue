<template>
  <q-page class="text-center items-top justify-center">
    <h2 class="title q-mb-md">Corporation Medicale de Cluj</h2>
    <h5 class="title q-mt-md">Organigramme 2022-2023</h5>

    <div class="">
      <h4 class="q-mb-xs">Conseil Directeur</h4>
      <div
        class="full-width row wrap justify-center items-center content-center"
      >
        <organigramme-card
          img="https://cdn.quasar.dev/img/parallax2.jpg"
          name="Ariana PROVOST"
          position="Présidente"
        />
        <organigramme-card
          img="https://cdn.quasar.dev/img/parallax2.jpg"
          name="Ariana PROVOST"
          position="Présidente"
        />
      </div>
      <h4 class="q-mb-xs">Représentants</h4>
      <div
        class="full-width row wrap justify-center items-center content-center"
      >
        <organigramme-card
          img="https://cdn.quasar.dev/img/parallax2.jpg"
          name="Ariana PROVOST"
          position="Présidente"
        />
        <organigramme-card
          img="https://cdn.quasar.dev/img/parallax2.jpg"
          name="Ariana PROVOST"
          position="Présidente"
        />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import OrganigrammeCard from 'components/OrganigrammeCard.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CMCPage',

  components: {
    OrganigrammeCard,
  },
});
</script>
