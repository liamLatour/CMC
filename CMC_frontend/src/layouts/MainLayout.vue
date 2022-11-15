<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> CMCluj </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <essential-link
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-white text-dark">
      <div
        class="text-body2 text-left q-mx-auto q-ma-xs w-2"
        style="opacity: 0.7"
      >
        Ce site est géré par des étudiants
        <br />
        Pour toute recommandation/réclamation, contacter nous
      </div>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: "Page d'accueil",
    icon: 'home',
    link: '/',
  },
  {
    title: 'Nouveaux étudiants',
    icon: 'school',
    link: '/nouveaux_etudiants',
    subLinks: [
      {
        title: 'Intégration',
        icon: 'school',
        link: '/nouveaux_etudiants/integration',
      },
      {
        title: 'FAQ',
        icon: 'help',
        link: '/nouveaux_etudiants/faq',
      },
    ],
  },
  {
    title: 'Clubs',
    icon: 'sports_rugby',
    link: '/clubs',
    subLinks: [
      {
        title: 'Basketball',
        icon: 'school',
        link: '/nouveaux_etudiants/integration',
      },
      {
        title: 'Escalade',
        icon: 'help',
        link: '/nouveaux_etudiants/faq',
      },
      {
        title: 'handball',
        icon: 'help',
        link: '/nouveaux_etudiants/faq',
      },
      {
        title: 'pompom',
        icon: 'help',
        link: '/nouveaux_etudiants/faq',
      },
      {
        title: 'rock',
        icon: 'help',
        link: '/nouveaux_etudiants/faq',
      },
      {
        title: 'rugby',
        icon: 'help',
        link: '/nouveaux_etudiants/faq',
      },
      {
        title: 'théâtre',
        icon: 'help',
        link: '/nouveaux_etudiants/faq',
      },
      {
        title: 'Volleyball',
        icon: 'help',
        link: '/nouveaux_etudiants/faq',
      },
    ],
  },
  {
    title: 'CMC',
    icon: 'groups',
    link: '/cmc',
  },
  {
    title: 'ENT',
    icon: 'import_contacts',
    link: '/ent',
    subLinks: [
      {
        title: 'Accès délégués',
        icon: 'help',
        link: '/nouveaux_etudiants/faq',
      },
      {
        title: 'Médecine',
        icon: 'help',
        link: '/nouveaux_etudiants/faq',
      },
      {
        title: 'Pharmacie',
        icon: 'help',
        link: '/nouveaux_etudiants/faq',
      },
      {
        title: 'Dentaire',
        icon: 'help',
        link: '/nouveaux_etudiants/faq',
      },
      {
        title: 'Vétérinaire',
        icon: 'help',
        link: '/nouveaux_etudiants/faq',
      },
    ],
  },
  {
    title: 'Pairs Vigils',
    icon: 'phone_in_talk',
    link: '/pairs_vigils',
  },
  {
    title: 'Nous Contacter',
    icon: 'share',
    link: '/contact',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
