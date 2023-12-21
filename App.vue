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
    };
  },
  methods: {
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