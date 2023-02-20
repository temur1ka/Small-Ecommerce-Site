<template>
    
  <v-dialog v-model="dialogg" scrollable>
    <template v-slot:activator="{ props }">
      <v-btn color="red" v-bind="props" class="ma-4" width="330">  Add To Cart </v-btn>
    </template>

    <div class="d-flex">
      <v-img
        src="Mouses/Mouse4.jpg"
        max-width="750"
        max-height="650"
        cover
      >
      </v-img>

      <v-card cols="12">
        <v-card-title
          >Razer DeathAdder Essential Gaming Mouse: 6400 DPI Optical Sensor - <br>
          5 Programmable Buttons - Mechanical Switches - Rubber Side Grips - Classic Black</v-card-title
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
          <span class="text-red"> 10 left</span>
          <v-divider></v-divider>
          <span id="size">-34%</span>
          <span id="sizee"> <sup> $</sup>19.89</span>
          <h4>Buy Now Via Amazon</h4>
          <a href="https://www.amazon.com/Razer-DeathAdder-Essential-Gaming-Mouse/dp/B094PS5RZQ/ref=sr_1_13?keywords=gaming%2Bmouse&pd_rd_r=531f5e68-7654-426f-8f40-db4d6f1bd209&pd_rd_w=fk5Sk&pd_rd_wg=X92eH&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=TD733RNJQ0YMVK3SA0TN&qid=1673255344&sr=8-13&th=1">Link</a>
          <v-divider></v-divider>
          <p>Style:</p>
          <h4>Wireless</h4>
          <v-divider></v-divider>

          <div>
            <span id="p">Brand</span>
            <span id="pa" class="mx-16">SteelSeries</span>
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
            <span id="pa" class="mx-1"> Lightweight</span>
            <br />
            <span id="p">Movement</span>
            <span id="pa" class="mx-8"> Optical</span>
          </div>
        </div>
        <div class="my-6 mx-3">
          <h4>About this item</h4>

          <li>
            The Best-Selling Gaming Peripherals Manufacturer in the US: Source - The NPD Group, Inc. U.S. <br>
             Retail Tracking Service, Keyboards, Mice, PC Headset/Pc Microphone, 
             Gaming Designed, based on dollar sales, 2017-2021
          </li>
          <li>
            High-Precision 6,400 DPI Optical Sensor: Offers on-the-fly sensitivity adjustment <br>
             through dedicated DPI buttons (reprogrammable) for gaming and creative work
          </li>
          <li>
            Durable Mechanical Switches: Supports up to 10 million clicks, backed by a 2 year warranty
          </li>
          <li>
            Ridged, Rubberized Scroll Wheel for Maximum Accuracy: Small, tactile bumps increases grip<br>
             and allows for more controlled scrolling in high-stakes gaming situations
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
  