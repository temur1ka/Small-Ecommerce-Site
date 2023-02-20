<template>
  <section class="text-center d-flex flex-column" id="margin">
    <div>
      <h4 class="text-red ma-7" id="h4">SupportName@gmail.com</h4>
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="ma-1"
          :icon="icon"
          color="white"
          variant="text"
        ></v-btn>
      </div>
      <span class="text-white" id="gray"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quasi
        aliquam beatae, minus, corrupti <br> velit voluptatum quis illum, pariatur
        minima iusto quo animi nobis possimus nesciunt maxime sint laboriosam.
        Ab!</span
      > 
       
    <div id="footer" class="ma-5">
      {{ new Date().getFullYear() }} —
      <strong>©2023 silept.com |All right reserved.</strong>
    </div>
    </div>
  
 

  </section>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style scoped>
 #margin {
  margin-top: 110px;
  background-color: #24262b;
}

#h4 {
  background-color: #24262b;
  font-size: 30px;
}
#footer {
  color: #f4f2f2;
}
</style>
