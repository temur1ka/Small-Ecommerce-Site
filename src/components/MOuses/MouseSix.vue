<template>
    
  <v-dialog v-model="dialogg" scrollable>
    <template v-slot:activator="{ props }">
      <v-btn color="red" v-bind="props" class="ma-4" width="330">  Add To Cart </v-btn>
    </template>

    <div class="d-flex">
      <v-img
        src="Mouses/Mouse8.jpg"
        max-width="750"
        max-height="650"
        cover
      >
      </v-img>

      <v-card cols="12">
        <v-card-title
          >RaceGT RGB Gaming Mouse, Ultra-Lightweight Honeycomb Shell, 
           LED Lightweight Smooth <br>Glide PTFE Feet, 6 Adjustable DPI Up to 8000 DPI for Windows/PC/Mac/Laptop Gamer (Black)</v-card-title
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
          <span class="text-red"> 30+ left</span>
          <v-divider></v-divider>
          
          <span id="sizee"> <sup> $</sup>15.99</span>
          <h4>Purchase Via Amazon </h4>
          <a href='https://www.amazon.com/RaceGT-Ultra-Lightweight-Honeycomb-Lightweight-Hyperflex/dp/B09CGLS4R4/ref=d_pd_pbp13n_semsims_sccl_3_7/146-7794941-9800038?pd_rd_w=hC1JK&content-id=amzn1.sym.9d29fd23-1ef2-413a-aade-4cde680c396a&pf_rd_p=9d29fd23-1ef2-413a-aade-4cde680c396a&pf_rd_r=G92CG7P0FVRHECM8PQS1&pd_rd_wg=SpMXa&pd_rd_r=815d2b71-453e-4b19-acad-21ecf837b3c0&pd_rd_i=B09CGLS4R4&th=1'>Link</a>
          <v-divider></v-divider>
          <p>Style:</p>
          <h4>Wireless</h4>
          <v-divider></v-divider>

          <div>
            <span id="p">Brand</span>
            <span id="pa" class="mx-16">RaceGT</span>
            <br />
            <span id="p">Color</span>
            <span id="pa" class="mx-16">Bright Black</span>

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
            【Wired Gaming Mouse】- Built for Gaming Computers - Ergonomic RGB Backlit Gaming PC Mouse up to 8000 <br>
            DPI (user adjustable 800/1600/2400/3200/4800/8000 DPI). The High-Precision Sensor delivers Pinpoint Accuracy <br>
             while the Gaming Grade Micro Switches ensure longevity, greater durability and extreme responsiveness
          </li>
          <li>
            【Ultra-light honeycomb shell design】- The lightweight Honeycome Shell provides you the feather-light weight , <br>
             offers you better touch experience. Assures your soft feeling and excellent gaming experience even a long-period using
          </li>
          <li>
            【HyperFlex USB Cable】-It reduces tension and resistance when you are using mouse during game, <br>
            let you enjoy the easier mouse movement.
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
  