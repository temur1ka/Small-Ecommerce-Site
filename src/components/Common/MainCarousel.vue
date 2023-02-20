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
        src: 'computer/ryzen.jpg'
      },
      {
        src: 'computer/mouse.jpg'
      },
      {
        src: 'computer/gtx.jpg'
      },
      {
        src: 'computer/keyboard.jpg'
      },
    ],
    
  }),
};
</script>

<style></style>
