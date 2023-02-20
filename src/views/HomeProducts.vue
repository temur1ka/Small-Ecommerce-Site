<template>
  
    <SideBar />
    <v-main>
      <MainCarousel />
      <MiddleCards />
      <router-view />
      <FooterAll />
    </v-main>
  
      
    
   
  
  </template>
  
  <script>
  
  import SideBar from "@/components/Common/SideBar.vue";
  import MainCarousel from "@/components/Common/MainCarousel.vue";
  import MiddleCards from '@/components/different/MiddleCards.vue';
  import FooterAll from '@/components/Common/AllFooter.vue'
  import { defineComponent } from "vue";
  
  // Components
  
  export default defineComponent({
  
  components: {
    SideBar,
    MainCarousel,
    MiddleCards,
    FooterAll
  },
  data: () => ({
  
  }),
  });
  </script>
  <style scoped>
  .border {
  border-right: 1px solid grey
  }
  </style>
  