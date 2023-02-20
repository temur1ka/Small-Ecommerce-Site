<template>
    
  <v-dialog v-model="dialogg" scrollable>
    <template v-slot:activator="{ props }">
      <v-btn color="red" v-bind="props" class="ma-4" width="330">  Add To Cart </v-btn>
    </template>

    <div class="d-flex">
      <v-img
        src="Mouses/Mouse7.jpg"
        max-width="750"
        max-height="650"
        cover
      >
      
      </v-img>
      <v-card cols="12">
        <v-card-title
          >FIRSTBLOOD ONLY GAME. AJ52 Watcher RGB Gaming Mouse, Programmable
           7 Buttons, Ergonomic<br> LED Backlit USB Gamer Mice Computer Laptop PC, for Windows Mac Linux OS, Star White</v-card-title
        >
        <div>
          <v-rating
          readonly
            class="mx-3"
            v-model="rating"
            size="sm"
            background-color="orange lighten-3"
            color="orange"
          ></v-rating>
        </div>

        <div class="mx-3">
          <span>In Stocks</span>
          <span class="text-red"> 35 left</span>
          <v-divider></v-divider>
          <span id="size">-23%</span>
          <span id="sizee"> <sup> $</sup>19.99</span>
          <v-divider></v-divider>
          <p>Style:</p>
          <h4>Wireless</h4>
          <v-divider></v-divider>

          <div>
            <span id="p">Brand</span>
            <span id="pa" class="mx-16">FIRSTBLOOD ONLY GAME.</span>
            <br />
            <span id="p">Color</span>
            <span id="pa" class="mx-16">Star White</span>

            <br />
            <span id="p">Connectivity</span>
            <span id="pa" class="mx-5">
              USB-A</span
            >

            <br />
            <span id="p">Special Feature</span>
            <span id="pa" class="mx-1"> Ergonomic Design</span>
            <br />
            <span id="p">Movement</span>
            <span id="pa" class="mx-8"> Optical</span>
          </div>
        </div>
        <div class="my-6 mx-3">
          <h4>About this item</h4>

          <li>
            【RGB LED BACKLIGHT】Colorful lights will be emitted from the front and back of the mouse and <br>
            penetrate through the grain of the surface which is made through special processes, to create the coolest<br>
             lighting effects. Default 7 colors correspond to 7 DPI level. Choose the color from a spectrum of over 16.8 million <br>
             colors and different modes freely through the software,<br>
             choose what your favorite and what works best for you, bring you wonderful visual experience and fun.
          </li>
          <strong>Note</strong>: Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally <br>
           and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.
        </div>
      </v-card>
    </div>
  </v-dialog>
       
  
  </template>
  
  <script>
  export default {
    data() {
      return {
        dialog: false,
        dialogg: false,
        rating: 4,
        dialogm1: "",
      };
    },
  };
  </script>
  
  <style scoped>
  .v-dialog {
    overflow-y: visible;
  }
  #size {
    font-size: 2rem;
    font-weight: 200;
    color: rgb(247, 3, 3);
  }
  #sizee {
    font-size: 2rem;
    font-weight: 400;
  }
  #p {
    font-size: 13px;
    font-weight: 600;
  }
  </style>
  