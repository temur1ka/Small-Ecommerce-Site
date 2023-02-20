<template>
  <!--MiddleBar-->
  <v-responsive>
    <v-app-bar color="#F4F5F9" app flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="font-weight-light">Silept</span>
        <span>Marketing</span>
      </v-toolbar-title>

      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn color="secondary" v-bind="props">
            Top Best Computer Components
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-btn flat>
              <a href="#"> Product Name </a>
            </v-btn>
            <v-btn flat>
              <a href="#"> Product Name </a>
            </v-btn>
            <v-btn flat>
              <a href="#"> Product Name </a>
            </v-btn>
            <v-btn flat>
              <a href="#"> Product Name </a>
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn color="secondary" v-bind="props">
            Top Best Home Products
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-btn flat>
              <a href="#"> Product Name </a>
            </v-btn>
            <v-btn flat>
              <a href="#"> Product Name </a>
            </v-btn>
            <v-btn flat>
              <a href="#"> Product Name </a>
            </v-btn>
            <v-btn flat>
              <a href="#"> Product Name </a>
            </v-btn>
            
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn color="secondary" v-bind="props">
            Top Best Baby's Products
          </v-btn>
        </template>

        <v-list>
          <v-list-item class="text-center" color="secondary">
            <v-btn flat>
              <a href="#"> Product Name </a>
            </v-btn>
            <v-btn flat>
              <a href="#"> Product Name </a>
            </v-btn>
            <v-btn flat>
              <a href="#"> Product Name </a>
            </v-btn>
            <v-btn flat>
              <a href="#"> Product Name </a>
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!--Side Bar-->
    <v-navigation-drawer v-model="drawer" permanent color="#F4F5F9" app>
      <v-list-item class="px-2 py-5">
        <v-list-item-title class="text-capitalize">
          <v-img src="logo1.png" size="" id="logo"></v-img>
        </v-list-item-title>
      </v-list-item>
      <v-list nav>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          class="text-black"
          :value="item"
          :active-color="yellow"
          link
          router
          :to="item.route"
        >
          <v-list-item-title v-text="item.text"></v-list-item-title>

          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-responsive>
</template>

<script>
export default {
  data: () => ({
    blue: "#ff6b6c",
    yellow: "#ffc145",
    drawer: null,

    items: [
      { text: "Computer Components", icon: "mdi-laptop", route: "/" },
      { icon: "mdi-devices", text: "Technologies", route: "/technologies" },

      {
        icon: "mdi-watch-variant",
        text: "Watches & Accessories",
        route: "/watches",
      },
      { icon: "mdi-dumbbell", text: "Gym Supplement", route: "/gymsupplement" },

      {
        icon: "mdi-baby-bottle",
        text: "Baby Products",
        route: "/babyproducts",
      },
      {
        icon: "mdi-home-account",
        text: "Home Products",
        route: "/homeproducts",
      },
      { icon: "mdi-account", text: "Cosmetic", route: "/cosmetic" },
    ],
  }),
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgb(43, 226, 147);
}
</style>
