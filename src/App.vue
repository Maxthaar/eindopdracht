<template>
  <v-app>
    <!-- Header -->
    <v-app-bar app color="rgba(0,170,162,1)">
      <v-row align="center">
        <v-col cols="auto">
          <v-img :src="require('@/assets/CaseRealEstateCarelogo.jpg')" alt="RealEstateCare Logo" contain height="40" width="40"></v-img> 
        </v-col>
        <v-col cols="auto">
          <v-toolbar-title class="custom-text-color">RealEstateCare</v-toolbar-title>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
    </v-app-bar>

    <!-- Content -->
    <v-main>
      <router-view></router-view>

      <!-- Display data from API -->
      <div v-if="myJson && myJson.inspections && myJson.inspections.length">
        <h2>Data from API</h2>
        <div v-for="(item, index) in myJson.inspections" :key="index">
          <p>Building Name: {{ item.buildingName }}</p>
          <p>Status: {{ item.status }}</p>
          <p>Inspector: {{ item.inspector }}</p>
          <!-- Add more properties as needed -->
        </div>
      </div>
    </v-main>

    <!-- Bottom Tab Bar -->
    <v-app-bar app color="rgba(71,94,108,1)" fixed-bottom>
      <v-btn v-for="item in menuItems" :key="item.title" icon @click="navigate(item.route)">
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-app-bar>
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
        const response = await fetch('https://my-json-server.typicode.com/Maxthaar/eindopdracht/src/db');
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

        // Sorteer de gegevens op datum (in oplopende volgorde)
        this.myJson.sort((a, b) => new Date(a.date) - new Date(b.date));

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
