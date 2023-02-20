<template>
    
  <v-dialog v-model="dialogg" scrollable>
    <template v-slot:activator="{ props }">
      <v-btn color="red" v-bind="props" class="ma-4" width="330">  Add To Cart </v-btn>
    </template>

    <div class="d-flex">
      <v-img
        src="HeadSets/HeadSet6.jpg"
        max-width="750"
        max-height="650"
        cover
      >
      
      </v-img>
      <v-card cols="12">
        <v-card-title
          >Gaming Headset for PS5, PS4, Xbox Series X|S & Xbox, PC Gaming Headphone with 7.1 <br />Surround Sound, Noise Canceling Mic- for Playstation 5, Mac</v-card-title
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
          <span id="sizee"> <sup> $</sup>24.99</span>
          <h4>Purchase Via Amazon</h4>
          <a class="text-yellow" href="https://www.amazon.com/Headset-Headphone-Surround-Canceling-Playstation/dp/B093KV34XY/ref=sxin_24_trfobq2a_0_B093KV34XY?content-id=amzn1.sym.d87bdde9-97f6-47ac-b339-55167deba1dc%3Aamzn1.sym.d87bdde9-97f6-47ac-b339-55167deba1dc&cv_ct_cx=Gaming%2Bheadsets%2Bps5&keywords=Gaming%2Bheadsets%2Bps5&pd_rd_i=B093KV34XY&pd_rd_r=a50f29c5-f9cf-4942-a1d7-fe8908fd3efd&pd_rd_w=DvXfu&pd_rd_wg=dORv6&pf_rd_p=d87bdde9-97f6-47ac-b339-55167deba1dc&pf_rd_r=7S5K2XKCZ8TMTC29589P&qid=1673194371&sr=1-1-c944532c-3909-4a2a-84a2-570d2ee3cd13&th=1">Link</a>
          <v-divider></v-divider>
          <p>Style:</p>
          <h4>Wireless</h4>
          <v-divider></v-divider>

          <div>
            <span id="p">Brand</span>
            <span id="pa" class="mx-16">EUARNE</span>
            <br />
            <span id="p">Model Name</span>
            <span id="pa" class="mx-6">KA-K10 PRO</span>
            <br />
            <span id="p">Form Factor</span>
            <span id="pa" class="mx-7">Over Ear</span>

            <br />
            <span id="p">Connectivity</span>
            <span id="pa" class="mx-6">
              Wired</span
            >

            <br />
            <span id="p">Age Range</span>
            <span id="pa" class="mx-8"> Adult</span>
           
          </div>
        </div>
        <div class="my-6 mx-3">
          <h4>About this item</h4>

          <li>
            🎧【NOISE CANCELING MICROPHONE】This PS4 gaming headset provides highprecision 50mm driver to enable you to<br /> chat to your fellow players with crystal clarity.
             7.1 surround sound allows you enjoy immersive games and music.<br />
             You could easily make out the sound of in-game enemies such as footsteps.
          </li>
          <li>
            🎧【Universal Compatibility】Comfort is also a key factor when choosing headset for K10 PRO gaming headphone with <br /> a 2-in-1 3.5mm audio jack is compatible with PS5, PS4, Playstation Vita,<br /> PSP, Xbox Series X/S, Xbox 360, Xbox One X/S, Nintendo Switch (audio).
             We provide this retractable band and breathable<br />
              ear pad make sure you perfect to enjoy the optimal wearing comfort.
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
  