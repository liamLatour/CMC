<template>
  <q-page class="text-center items-top justify-center">
    <h1 class="title">Clubs</h1>
    <div class="text-body1 text-left width q-mx-auto w-1">
      Les étudiants inscrits à la CMC ont la possibilité de s'inscrire à des
      clubs. Vous pouvez accéder aux pages qui vous permettront d'en apprendre
      plus avec les liens ci-dessous:
    </div>
    <div class="full-width row wrap justify-center items-center content-center">
      <club-card
      v-for="club in clubs"
          :key="club.id"
        img="https://cdn.quasar.dev/img/parallax2.jpg"
        :location="club.where"
        :when="club.when"
        :price="club.price"
        clickable
        @click="goToPage(club.id)"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import ClubCard from '../components/ClubCard.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ClubsPage',
  components: {
    ClubCard,
  },
  data: function () {
    return {
      fetched: false,
      clubs: [] as Array<Record<string, unknown>>,
    };
  },
  created: async function () {
    let response = await this.$api.get("/api/clubs");
    let clubs = response.data;
    this.clubs = clubs;
    this.fetched = true;
  },
  methods:{
    goToPage(id:string){
      window.location.href = '/clubs/'+id;
    }
  }
});
</script>
