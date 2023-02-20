<template>
    
  <v-dialog v-model="dialogg" scrollable>
    <template v-slot:activator="{ props }">
      <v-btn color="red" v-bind="props" class="ma-4" width="330">  Add To Cart </v-btn>
    </template>

    <div class="d-flex">
      <v-img
        src="HeadSets/HeadSet8.jpg"
        max-width="750"
        max-height="650"
        cover
      >
      
      </v-img>
      <v-card cols="12">
        <v-card-title
          >Logitech G335 Wired Gaming Headset, with Flip to Mute Microphone,
           3.5mm Audio Jack, Memory<br /> Foam Earpads, Lightweight, Compatible with PC, PlayStation, Xbox, Nintendo Switch - Mint</v-card-title
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
          <span id="size">-29%</span>
          <span id="sizee"> <sup> $</sup>49.99</span>
          <h4>Purchase via Amazon</h4>
          <a href="https://www.amazon.com/dp/B08KKW2ZS2/ref=sspa_dk_detail_1?pd_rd_i=B08KY2WFGP&pd_rd_w=Y4VWW&content-id=amzn1.sym.4d0fffec-3aba-4480-8fad-c6bd8f7f6b41&pf_rd_p=4d0fffec-3aba-4480-8fad-c6bd8f7f6b41&pf_rd_r=D4ARZBV283Q7PBQM2AJS&pd_rd_wg=2cg4Q&pd_rd_r=d4a541a7-4061-47f1-9df4-d1f346413d2c&s=pc&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyME1NUDJPNDdVN0g0JmVuY3J5cHRlZElkPUEwMzIxMTM3Mkc3QUxGSE9PRU1KRCZlbmNyeXB0ZWRBZElkPUEwMzIwMTMwMjlWWFo5R05SRlo2NiZ3aWRnZXROYW1lPXNwX2RldGFpbF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1">Link</a>
          <v-divider></v-divider>
          <p>Style:</p>
          <h4>Wired</h4>
          <v-divider></v-divider>

          <div>
            <span id="p">Brand</span>
            <span id="pa" class="mx-15">Logitech G</span>
            <br />
            <span id="p">Color</span>
            <span id="pa" class="mx-16">Mint</span>

            <br />
            <span id="p">Connectivity</span>
            <span id="pa" class="mx-4">
              Wired</span
            >

            <br />
            <span id="p">Form Factor</span>
            <span id="pa" class="mx-6">Over Ear</span>
            <br />
            <span id="p">Model Name</span>
            <span id="pa" class="mx-5"> G335</span>
          </div>
        </div>
        <div class="my-6 mx-3">
          <h4>About this item</h4>

          <li>
            Lightweight Design: Weighing in at only 8.5 oz (240 g), G335 is smaller and lighter than the G733, <br />
             features a suspension headband to help distribute weight and is adjustable for a customized fit.
          </li>
          <li>
            All-day Comfort: Soft memory foam ear pads and sports mesh material are comfortable for <br />
             extended use so you can take your gaming to the next level in style and comfort.
          </li>
          <li>
            Plug and Play: Quickly jump into your game and simply connect with the 3.5 mm audio jack;<br />
             these colorful headphones are compatible with PC, laptop, gaming consoles, and select mobile devices.
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
  @import url('https://fonts.cdnfonts.com/css/amazon-ember');
  
  .v-dialog {
    overflow-y: visible;
  }
  #p , #pa {
    font-family: 'Amazon Ember', sans-serif;

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
  