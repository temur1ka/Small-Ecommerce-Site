<template>
    
  <v-dialog v-model="dialogg" scrollable>
    <template v-slot:activator="{ props }">
      <v-btn color="red" v-bind="props" class="ma-4" width="330">  Add To Cart </v-btn>
    </template>

    <div class="d-flex">
      <v-img
        src="Mouses/Mouse9.jpg"
        max-width="750"
        max-height="650"
        cover
      >
      </v-img>

      <v-card cols="12">
        <v-card-title
          >RaceGT Wired RGB Gaming Mouse, Ergonomic Mouse with 7 Backlight RGB Lighting Modes, <br>
          up to 3600 DPI, 6 Buttons for Windows/PC/Mac/Laptop Gamer (Black)</v-card-title
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
          <span class="text-red"> 30+ left</span>
          <v-divider></v-divider>
          
          <span id="sizee"> <sup> $</sup>9.99</span>
          <h4>Purchase Via Amazon</h4>
          <a href="https://www.amazon.com/RaceGT-Ultra-Lightweight-Honeycomb-Lightweight-Hyperflex/dp/B0BF9VS1DG/ref=d_pd_pbp13n_semsims_sccl_3_7/146-7794941-9800038?pd_rd_w=hC1JK&content-id=amzn1.sym.9d29fd23-1ef2-413a-aade-4cde680c396a&pf_rd_p=9d29fd23-1ef2-413a-aade-4cde680c396a&pf_rd_r=G92CG7P0FVRHECM8PQS1&pd_rd_wg=SpMXa&pd_rd_r=815d2b71-453e-4b19-acad-21ecf837b3c0&pd_rd_i=B09CGLS4R4&th=1">Link</a>
          <v-divider></v-divider>
          <p>Style:</p>
          <h4>Wireless</h4>
          <v-divider></v-divider>

          <div>
            <span id="p">Brand</span>
            <span id="pa" class="mx-16">RaceGT</span>
            <br />
            <span id="p">Color</span>
            <span id="pa" class="mx-16">AK11-Black</span>

            <br />
            <span id="p">Connectivity</span>
            <span id="pa" class="mx-5">
              Wired</span
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
           【WIRED GAMING MOUSE】As a wired mouse, easy to use and plug-and-play. You can feel the fast response of this mouse,<br> won't squeak or get stuck.
          </li>
          <li>
           【RGB BACKLIGHT PC GAMING MOUSE】Seven color gradient breathing light effect. Muti-colors lights provide you fancy <br>gaming environment and highlight your game atmosphere.
          </li>
          <li>
           【4 ADJUSTABLE DPI】You can change the DPI from 1200 to 3600 to meet your  multiplying wants when you are playing<br> gaming or during daily work.
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
        rating: 5 ,
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
  