<template>
    
  <v-dialog v-model="dialogg" scrollable>
    <template v-slot:activator="{ props }">
      <v-btn color="red" v-bind="props" class="ma-4" width="330">  Add To Cart </v-btn>
    </template>

    <div class="d-flex">
      <v-img
        src="Mouses/Mouse1.jpg"
        max-width="750"
        max-height="650"
        cover
      >
      </v-img>

      <v-card cols="12">
        <v-card-title
          >PWNAGE Ultra Custom Wireless Gaming Mouse Symm 1 Gen 2.0 RGB - <br>
          Esports Pro Gamer Flawless Professional PAW3370 Optical Sensor 19,000 DPI - <br>
          100% PTFE Skates (Honeycomb Sides, Wireless, White)</v-card-title
        >
        <div>
          <v-rating
            class="mx-3"
            readonly
            v-model="rating"
            size="sm"
            background-color="orange lighten-3"
            color="orange"
          ></v-rating>
        </div>

        <div class="mx-3">
          <span>In Stocks</span>
          <span class="text-red"> 30 left</span>
          <v-divider></v-divider>
          
          <span id="sizee"> <sup> $</sup>59.99</span>
          <h4>Buy Now Via Amazon</h4>
          <a href="https://www.amazon.com/Pwnage-Ultra-Custom-Wireless-Gaming/dp/B09NXG9LSC/ref=sr_1_3?crid=3SZL0MPUI10L&keywords=pwnage%2Bwireless%2Bgaming%2Bmouse&qid=1673262325&sr=8-3&th=1">Link </a>
          <v-divider></v-divider>
          <p>Style:</p>
          <h4>White Wireless Gen 2</h4>
          <v-divider></v-divider>

          <div>
            <span id="p">Brand</span>
            <span id="pa" class="mx-16">PWNAGE</span>
            <br />
            <span id="p">Color</span>
            <span id="pa" class="mx-16">White</span>

            <br />
            <span id="p">Connectivity</span>
            <span id="pa" class="mx-5">
              Lag Free 2.4GHz Wireless</span
            >

            <br />
            <span id="p">Number of Buttons</span>
            <span id="pa" class="mx-1"> 6</span>
          </div>
        </div>
        <div class="my-6 mx-3">
          <h4>About this item</h4>

          <li>
            68g Ultra Lightweight - When quick movements and large swipes
            matter, Aerox 3s super light design allows for
            <br />
            faster and more accurate reaction times in game.
          </li>
          <li>
            Pure Aim Technology: Flawless Pro Grade Optical Sensor - Pixart 3370 gaming sensor with 
            <br />
            Maximum resolution up to 19000DPI
          </li>
          <li>
            Ultra Flexible Paracord: FCC Compliant Flex Cable produces a drag-free wireless feel
            <br />
            
          </li>
          <li>
            Mouse Feet: The ultra custom is equipped with 100% PTFE Skates with custom rounded
            <br />
             edges are optimized for buttery smooth glide and movement control.
          </li>
         
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
  