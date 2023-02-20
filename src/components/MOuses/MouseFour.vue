<template>
    
  <v-dialog v-model="dialogg" scrollable>
    <template v-slot:activator="{ props }">
      <v-btn color="red" v-bind="props" class="ma-4" width="330">  Add To Cart </v-btn>
    </template>

    <div class="d-flex">
      <v-img
        src="Mouses/Mouse3.jpg"
        max-width="750"
        max-height="650"
        cover
        
      >
      </v-img>

      <v-card cols="12">
        <v-card-title
          >SteelSeries Rival 600 Gaming Mouse - 12,000 CPI TrueMove3Plus Dual Optical Sensor -<br>
           0.5 Lift-off Distance - Weight System - RGB Lighting</v-card-title
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
          <span id="size">-51%</span>
          <span id="sizee"> <sup> $</sup>38.95</span>
          <h4>Purchase Via Amazon </h4>
          <a href="https://www.amazon.com/dp/B078LJ6RPK?pd_rd_i=B078LJ6RPK&pf_rd_p=b000e0a0-9e93-480f-bf78-a83c8136dfcb&pf_rd_r=ZS2K9QTKD9M0YRKFY1AS&pd_rd_wg=d6cqM&pd_rd_w=BYVUn&pd_rd_r=9f9a4185-88a9-4574-a8d9-c3136dc9cbeb">Link</a>
          <v-divider></v-divider>
          <p>Style:</p>
          <h4>Wireless</h4>
          <v-divider></v-divider>

          <div>
            <span id="p">Brand</span>
            <span id="pa" class="mx-16">SteelSeries</span>
            <br />
            <span id="p">Color</span>
            <span id="pa" class="mx-16">	black</span>

            <br />
            <span id="p">Connectivity</span>
            <span id="pa" class="mx-5">
              USB</span
            >

            <br />
            <span id="p">Special Feature</span>
            <span id="pa" class="mx-1"> Foldable</span>
            <br />
            <span id="p">Movement</span>
            <span id="pa" class="mx-8"> Optical</span>
          </div>
        </div>
        <div class="my-6 mx-3">
          <h4>About this item</h4>

          <li>
            Exclusive true move 3 12,000 cpi, 350 ips optical 1 to 1 tracking esports sensor
          </li>
          <li>
            The world's lowest and most accurate lift off distance; Cable length 2 meter; 6.5 foot
          </li>
          <li>
           256 center of gravity weight tuning configurations; Lift off distance: Customizable, 0.5 millimeter, 2 millimeter
          </li>
          <li>
           Split trigger 60 million click mechanical switches
          </li>
          <li>
           Revolutionary silicone side grips for increased grip and durability
          </li>
          <li>
          Premium magnetic wrist rest – Provides full palm support and comfort
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
  