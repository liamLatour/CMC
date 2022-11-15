<template>
  <q-page class="text-center items-top justify-center">
    <h1 class="title">ENT</h1>
    <ENTCard img="https://cdn.quasar.dev/img/parallax2.jpg" />
    <div class="text-body1 text-left width q-mx-auto w-1">
      Pour les mots de passe, veuillez vous adresser à vos délégués.
    </div>
  </q-page>
</template>

<script lang="ts">
import ENTCard from '../components/ENTCard.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ENTPage',

  components: {
    ENTCard,
  },
});
</script>
