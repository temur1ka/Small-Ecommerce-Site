<template>
  <div>
    <v-carousel
    
      cycle
      height="400"
      
      hide-delimiter-background
      show-arrows="hover"
      progress="yellow"
      
    >
    <v-carousel-item
    v-for="(image,i) in images"
    :key="i"
    :src="image.src"
    cover
  ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data: () => ({
    themes: [
      {red: '#ff6b6c'}
    ],
    images: [
      {
        src: 'Watches/w.jpg'
      },
      {
        src: 'Watches/watch.jpg'
      },
      {
        src: 'Watches/watches.jpg'
      },
      {
        src: 'Watches/watchess.jpg'
      },
    ],
    
  }),
};
</script>

<style></style>
