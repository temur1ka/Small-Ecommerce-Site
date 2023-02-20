<template>
    
  <v-dialog v-model="dialogg" scrollable>
    <template v-slot:activator="{ props }">
      <v-btn color="red" v-bind="props" class="ma-4" width="330">  Add To Cart </v-btn>
    </template>

    <div class="d-flex">
      <v-img
        src="Mouses/Mouse0.jpg"
        max-width="750"
        max-height="650"
        cover
      >
      </v-img>

      <v-card cols="12">
        <v-card-title
          >Razer Mamba Elite Wired Gaming Mouse: 16,000 DPI Optical Sensor - Chroma RGB Lighting <br>
           - 9 Programmable Buttons - Mechanical Switches</v-card-title
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
          <span class="text-red"> 35 left</span>
          <v-divider></v-divider>
          <span id="size">-56%%</span>
          <span id="sizee"> <sup> $</sup>39.95</span>
          <h4>Purchase Via Amazon</h4>
          <v-icon icon="mdi-cart-variant"></v-icon>
          <a href="https://www.amazon.com/Razer-Mamba-Elite-Programmable-Ergonomic/dp/B07F816PH9/ref=sr_1_2?crid=28DWZGX8USHCX&keywords=Razer%2BMamba%2BElite%2BWired%2BGaming%2BMouse&qid=1673267140&sprefix=razer%2Bmamba%2Belite%2Bwired%2Bgaming%2Bmouse%2Caps%2C325&sr=8-2&th=1">Link</a>
          <v-divider></v-divider>
          <p>Style:</p>
          <h4>Mamba Elite</h4>
          <v-divider></v-divider>

          <div>
            <span id="p">Brand</span>
            <span id="pa" class="mx-16">Razer</span>
            <br />
            <span id="p">Color</span>
            <span id="pa" class="mx-16">Classic Black</span>

            <br />
            <span id="p">Connectivity</span>
            <span id="pa" class="mx-5">
              USB</span
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
            High-Precision 16,000 DPI Optical Sensor: Offers on-the-fly sensitivity adjustment <br>
            through dedicated DPI buttons (programmable) for gaming
           
          </li>
          <li>
            Customizable Chroma RGB Color Profiles: Includes 16.8 million color combinations w, included preset profiles
           
          </li>
          <li>
            Improved, Ergonomic Design: Rubberized side grips reduce fatigue over long use sessions           
          </li>
          <li>
            Ridged, Rubberized Scroll Wheel for Maximum Accuracy: Small, tactile bumps increases grip and <br>
            helps with more controlled scrolling in high-stakes gaming situations           
          </li>
          <li>
            9 Programmable Buttons: Allows for reconfiguration and assignment of complex macro functions through Razer Synapse         
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
        rating: 5,
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
  