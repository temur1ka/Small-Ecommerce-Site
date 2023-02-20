<template>
    
  <v-dialog v-model="dialogg" scrollable>
    <template v-slot:activator="{ props }">
      <v-btn color="red" v-bind="props" class="ma-4" width="330">  Add To Cart </v-btn>
    </template>

    <div class="d-flex">
      <v-img
        src="HeadSets/HeadSet5.jpg"
        max-width="750"
        max-height="650"
        cover
      >
      
      </v-img>
      <v-card cols="12">
        <v-card-title
          >BINNUNE Wireless Gaming Headset with Microphone for PC PS4 PS5 Playstation 4 5,<br />
           2.4G Wireless Bluetooth USB Gamer Headphones with Mic for Laptop Computer
          Brand: BINNUNE</v-card-title
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
          <span class="text-red"> 30 left</span>
          <v-divider></v-divider>
          <span id="size">-33%</span>
          <span id="sizee"> <sup> $</sup>39.99</span>
          <h4>Purchase Via Amazon</h4>
          <a href="https://www.amazon.com/BINNUNE-Microphone-Playstation-Headphones-Cancelling/dp/B096VRK6J5/ref=sr_1_6?content-id=amzn1.sym.7d1cec21-d5cf-4aa0-b55a-3303ecdebc2b%3Aamzn1.sym.7d1cec21-d5cf-4aa0-b55a-3303ecdebc2b&keywords=Gaming%2Bheadsets%2Bps5&pd_rd_r=89b62e00-5611-404c-ac1c-ae48148b6292&pd_rd_w=XyNbh&pd_rd_wg=cIp5y&pf_rd_p=7d1cec21-d5cf-4aa0-b55a-3303ecdebc2b&pf_rd_r=ZHT08TYPZ9MYGXTB3JF6&qid=1673193924&sr=8-6&th=1">Link</a>
          <v-divider></v-divider>
          <p>Style:</p>
          <h4>Wireless</h4>
          <v-divider></v-divider>

          <div>
            <span id="p">Brand</span>
            <span id="pa" class="mx-16">BINNUNE</span>
            <br />
            <span id="p">Model Name</span>
            <span id="pa" class="mx-6">Wireless Gaming Headset
            </span>

            <br />
            <span id="p">Connectivity</span>
            <span id="pa" class="mx-5">
              Wireless</span
            >

            <br />
            <span id="p">Special Feature</span>
            <span id="pa" class="mx-1"> Ergonomic Design</span>
            <br />
            <span id="p">Communication</span>
            <span id="pa" class="mx-1"> BlueTooth</span>
          </div>
        </div>
        <div class="my-6 mx-3">
          <h4>About this item</h4>

          <li>
            [High Performance 2.4G+Bluetooth 5.0] BINNUNE wireless gaming headset combines high performance 2.4 GHz<br />
             lossless wireless for Pro-level gaming audio on PlayStation and PC , <br />
            with the convenience of simultaneous Bluetooth connectivity for most of your mobile devices.
          </li>
          <li>[Ultra- Low Latency Wireless Gaming] Features ultra-low latency 2.4GHz lossless wireless for high fidelity audio,<br /> 
            the audio latency is less than 38ms which is far more better than Bluetooth 150ms, no audio and video<br />
             to be out of sync issue, so you can enjoy an immersive lag-free wireless gaming experience.</li>
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
  