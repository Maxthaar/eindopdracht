<!-- In je component: inspectiesComponent.vue -->

<template>
  <v-app>
    <v-main>

      <!-- Display data from API -->
      <div v-if="myJson && myJson.length">
        <h2>Data from API</h2>
        <div v-for="(item, index) in myJson" :key="index">
          <p>Building Name: {{ item.buildingName }}</p>
          <p>Status: {{ item.status }}</p>
          <p>Inspector: {{ item.inspector }}</p>
          <!-- Add more properties as needed -->
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { title: 'Toegewezen rapportages', icon: 'mdi-file-document', route: '/toegewezen-raportages' },
        { title: 'Uitgevoerde rapportages', icon: 'mdi-file-check', route: '/uitgevoerde-raportages' },
        { title: 'Kennisbase', icon: 'mdi-book-open', route: '/kennisbase' },
        { title: 'Instellingen', icon: 'mdi-cog', route: '/instellingen' },
      ],
      myJson: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('https://my-json-server.typicode.com/Maxthaar/eindopdracht/db');
        if (!response.ok) {
          throw new Error('Failed to fetch data from the API');
        }

        const jsonData = await response.json();

        // Gebruik het datamodel inline om de gegevens te structureren
        this.myJson = jsonData.inspections.map(inspection => ({
          id: inspection.id,
          buildingName: inspection.buildingName,
          status: inspection.status,
          inspector: inspection.inspector,
          photo: inspection.photo,
          date: inspection.date,
          details: inspection.details,
        }));

        console.log('myJson:', this.myJson);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    },
    navigate(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style>
.custom-text-color {
  color: rgba(41,52,57,1);
}
</style>
