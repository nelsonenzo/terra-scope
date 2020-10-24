<template>
  <div id="app">
    <div>
      <v-toolbar
        :extended="extended"
        :prominent="prominent"
        :dense="dense"
        :collapse="collapse"
        :flat="flat"
        :src="bg ? 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg' : undefined"
      >
        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn text>Link 1</v-btn>
          <v-btn text>Link 2</v-btn>
          <v-btn text>Link 3</v-btn>
        </v-toolbar-items>

        <template>
          <v-btn icon>
            <v-icon>mdi-export-variant</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-delete-circle</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-plus-circle</v-icon>
          </v-btn>
        </template>
      </v-toolbar>
    </div>
  </div> <!-- #app -->
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data: () => ({
    extended: false,
     extendedSlot: false,
     prominent: false,
     dense: false,
     collapse: false,
     flat: false,
     bg: false
  }),
  created: function() {
  },
  methods: {
  }, // end methods
  // beforeCreate: function() {},
  // beforeMount: function() {},
  // mounted: function() {},
  // beforeUpdate: function() {},
  // updated: function() {},
  // destroyed: function() {}
}
</script>

<style>
body{
  margin:0px;
  background-color: black;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  background: black;
}
#app .container img{
  width:240px;
}
</style>
