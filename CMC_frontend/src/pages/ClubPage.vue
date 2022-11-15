<template>
  <q-page class="text-center items-top justify-center">
  <h1 class="title q-mb-xs">{{club.title}}</h1>

  <div class="row items-center justify-center q-mt-xs">
    <div>
      <q-icon name="location_on" />
      <h5 class="inline">{{club.where}}</h5>
    </div>

    <div>
      <q-icon name="schedule" />
      <h5 class="inline">{{club.when}}</h5>
    </div>

    <div>
      <q-icon name="sell" />
      <h5 class="inline">{{club.price}}</h5>
    </div>
  </div>

  <h1>{{club.description}}</h1>
  <h1>{{club.members}}</h1>
</q-page>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ClubPage',
  data: function () {
    return {
      fetched: false,
      club: {} as Record<string, unknown>,
    };
  },
  created: async function () {
    let response = await this.$api.get("/api/clubs/"+this.$route.params.id);
    let club = response.data;
    this.club = club;
    console.log(club)
    this.fetched = true;
  },
});
</script>
