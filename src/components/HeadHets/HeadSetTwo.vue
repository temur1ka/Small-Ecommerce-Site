<template>
    
  <v-dialog v-model="dialogg" scrollable>
    <template v-slot:activator="{ props }">
      <v-btn color="red" v-bind="props" class="ma-4" width="330">  Add To Cart </v-btn>
    </template>

    <div class="d-flex">
      <v-img
        src="HeadSets/HeadSet2.jpg"
        max-width="750"
        max-height="650"
        cover
      >
      
      </v-img>
      <v-card cols="12">
        <v-card-title
          >Logitech G733 Lightspeed Wireless Gaming Headset with Suspension Headband, Lightsync <br />
          RGB, Blue VO!CE mic technology and PRO-G audio drivers - Black</v-card-title
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
          <span class="text-red"> 4 left</span>
          <v-divider></v-divider>
          <span id="size">-18%</span>
          <span id="sizee"> <sup> $</sup>123.00</span>
          <h4>Purchase Via Amazon</h4>
          <a href="https://www.amazon.com/Logitech-Wireless-Headset-Black-Tico/dp/B081415GCS/ref=sxin_15_pa_sp_search_thematic-asin_sspa?content-id=amzn1.sym.075b4844-907e-4733-ac4c-baaec37ffd39%3Aamzn1.sym.075b4844-907e-4733-ac4c-baaec37ffd39&cv_ct_cx=gaming%2Bheadsets&keywords=gaming%2Bheadsets&pd_rd_i=B081415GCS&pd_rd_r=3a030e5f-a2ac-4887-bce6-7cd28896f0ec&pd_rd_w=SyAlz&pd_rd_wg=sqwc8&pf_rd_p=075b4844-907e-4733-ac4c-baaec37ffd39&pf_rd_r=ZHT08TYPZ9MYGXTB3JF6&qid=1673193705&sr=1-2-4a643ae4-6005-4b15-bc31-2c5125e2b25b-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExRk83WFk0VlBCQVdWJmVuY3J5cHRlZElkPUEwOTI1MTEyMTIwVFFOTUs5RlRSWCZlbmNyeXB0ZWRBZElkPUEwMTEzODIyRDBBWEs0N1BIMEpFJndpZGdldE5hbWU9c3Bfc2VhcmNoX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1">Link</a>
          <v-divider></v-divider>
          <v-divider></v-divider>

          <div>
            <span id="p">Brand</span>
            <span id="pa" class="mx-16">Logitech G</span>
            <br />
            <span id="p">Color</span>
            <span id="pa" class="mx-16">Black</span>

            <br />
            <span id="p">Connectivity</span>
            <span id="pa" class="mx-5">
              Wireless</span
            >

            <br />
            <span id="p">Model Name</span>
            <span id="pa" class="mx-1"> G733 LIGHTSPEED</span>
            
          </div>
        </div>
        <div class="my-6 mx-3">
          <h4>About this item</h4>

          <li>
            Total freedom with up to 20 meter wireless range and Lightspeed wireless audio transmission.   <br /> Keep playing for up to 29 hours of battery life.
          Play in stereo on PlayStation(R) 4..Note : If the size of the earbud tips does <br />not match the size of your ear canals or the headset is

            not <br />worn properly  in your ears, you may not obtain the correct sound qualities or call performance.<br> Change the earbud tips to ones that fit more snugly in your ear
          </li>
          <li>
            Colorful, reversible suspension headbands are designed for comfort during long play sessions.
          </li>
          <li>
            G733 weighs only 278 gram for long-lasting comfort.
          </li>
          <li>
            Hear every audio cue with breathtaking clarity and get immerse in your game. PRO-G drivers are <br>designed to significantly reduce distortion and reproduce precise, consistent, rich sound quality.
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
  