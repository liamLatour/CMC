<template>
  <q-page class="text-center items-top justify-center">
    <h1 class="title">Pairs vigils</h1>
    <div class="text-body1 text-left q-mx-auto w-1">
      Tu n'as pas la forme ? Tu te sens perdu.e ? Il est normal de rencontrer
      des difficultés lorsqu'on entreprend de longues études qui demandent un
      énorme investissement personnel, qui plus est en s'expatriant. Il arrive
      dans ce genre de situation de se sentir dépassé.e par la situation, il est
      alors très bénéfique de chercher de l'aide auprès d'autrui : des étudiants
      et des spécialistes de la santé se tiennent à ta disposition pour te venir
      en aide.
      <br />
      <br />
      Nous savons qu'il faut du courage pour demander de laide, par conséquent
      nous avons mis à disposition un numéro, le +40 743 878 208, disponible
      7j/7, 24h/24, où tu pourras entrer en contact avec d'autres étudiants de
      manière anonyme ou non. Tu peux aussi rentrer en contact avec nous par
      message sur facebook. Tu peux aussi trouver ci-dessous une liste de
      spécialistes qui pourront te venir en aide.
      <br />
      <br />
      Sur ce, n'attends pas plus longtemps pour nous contacter !
      <br />
      <br />
      Pour les personnes qui veulent nous contacter pour diverses raisons
      (recrutement par exemple), veuillez nous contacter sur facebook. Nous
      organisons aussi des réunions auxquelles vous êtes les bienvenues; toute
      l'actualité est disponible sur notre page facebook.
    </div>
    <div class="q-pa-md text-left">
      <q-table grid :rows="rows" :columns="columns" row-key="name" />
    </div>
  </q-page>
</template>

<script lang="ts">
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Nom',
    align: 'left',
    field: (row: Record<string, unknown>) => row.name,
  },
  { name: 'email', align: 'left', label: 'e-amil', field: 'email' },
  { name: 'phone', align: 'left', label: 'Téléphone', field: 'phone' },
  {
    name: 'software',
    align: 'left',
    label: 'Logiciel Utilisé',
    field: 'software',
  },
  { name: 'nickname', align: 'left', label: 'Surnom', field: 'nickname' },
  { name: 'tong', align: 'left', label: 'Langues', field: 'tong' },
  {
    name: 'preference',
    align: 'left',
    label: 'Moyen de contact préféré',
    field: 'preference',
  },
  { name: 'message', align: 'left', label: 'Message', field: 'message' },
];

const rows = [
  {
    name: 'Loredana Vrabiescu	',
    email: 'loredana_vrabiescu@yahoo.com',
    phone: '+40721255030',
    software: 'Skype',
    nickname: 'vrabia2005',
    tong: 'anglais',
    preference: 'téléphone, e-mail, sms',
    message:
      'My name is Loredana Vrabiescu and I chose this job because i like wotking with people. Being a psychotherapist does not mean reading thoughts, but as Yalom says: “Our task is to remove obstacles that block the path.”',
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%',
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%',
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%',
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%',
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%',
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%',
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%',
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%',
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%',
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
    };
  },
};
</script>
