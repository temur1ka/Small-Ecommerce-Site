<template>
    
  <v-dialog v-model="dialogg" scrollable>
    <template v-slot:activator="{ props }">
      <v-btn color="red" v-bind="props" class="ma-4" width="330">  Add To Cart </v-btn>
    </template>

    <div class="d-flex">
      <v-img
        src="Mouses/Mouse2.jpg"
        max-width="750"
        max-height="650"
        cover
      >
      </v-img>

      <v-card cols="12">
        <v-card-title
          >Logitech G305 LIGHTSPEED Wireless Gaming Mouse, Hero 12K Sensor, 12,000 DPI, Lightweight,<br>
           6 Programmable Buttons, 250h Battery Life, On-Board Memory, PC/Mac - Mint</v-card-title
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
          <span id="size">-20%</span>
          <span id="sizee"> <sup> $</sup>39.99</span>
          <h4> Buy Via amazon </h4>
          <a href="https://www.amazon.com/Logitech-Lightspeed-Wireless-Lightweight-Programmable/dp/B08SYJ32T3/ref=pd_rhf_d_se_s_gcx-rhf_sccl_2_2/146-7794941-9800038?pd_rd_w=atAAn&content-id=amzn1.sym.2ae4ccb1-7034-4114-8654-5ba995870d70&pf_rd_p=2ae4ccb1-7034-4114-8654-5ba995870d70&pf_rd_r=BMNXXFNQF4RQHV7TW4RY&pd_rd_wg=q4r3B&pd_rd_r=4daf2438-e7a5-44e2-9e15-08a9d8f9dafd&pd_rd_i=B08SYJ32T3&th=1">Link</a>
          <v-divider></v-divider>
          <p>Style:</p>
          <h4>Mouse</h4>
          <v-divider></v-divider>

          <div>
            <span id="p">Brand</span>
            <span id="pa" class="mx-15">Logitech G</span>
            <br />
            <span id="p">Color</span>
            <span id="pa" class="mx-16">Mint</span>

            <br />
            <span id="p">Connectivity</span>
            <span id="pa" class="mx-5">
              RF, USB</span
            >

            <br />
            <span id="p">Special Feature</span>
            <span id="pa" class="mx-1"> Wireless</span>
            <br />
            <span id="p">Movement</span>
            <span id="pa" class="mx-8"> Optical</span>
          </div>
        </div>
        <div class="my-6 mx-3">
          <h4>About this item</h4>

          <li>
            HERO Sensor - Next-generation HERO sensor delivers incredible performance and up to 10x the power<br>
             efficiency over previous generations.
             HERO is an optical sensor capable of exceptional accuracy and responsiveness with <br>
              400 IPS precision and up to 12,000 DPI sensitivity.
          </li>
          <li>
            LIGHTSPEED Wireless - Ultra-fast LIGHTSPEED Wireless technology gives you a lag-free gaming experience.<br>
             G305 delivers incredible responsiveness and reliability with a super fast 1 ms report rate for competition-level performance.
          </li>
          <li>
            Ultra-Long Battery Life - Play at peak performance without worrying about running out of power. G305 boasts an incredible<br> 
            250 hours of continuous gameplay at 1ms.report rate in Performance mode on just one AA battery.
            
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
  