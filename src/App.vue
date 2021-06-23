<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="/images/Finals.png">
      </router-link>
    </div>
    <div id="side">
      <router-link to="/browse">

      </router-link>
      <router-link to="/cart">
        <div class="menu-item">
          <p>Outcome of Game</p>
        </div>
      </router-link>
    </div>
  </div>

  <div>
  <center>
  </center>
  </div>

  <router-view />
</div>
</template>

<script>
export default {
  name: 'App',

  computed: {
    cartSize() {
      let basketSize = this.$root.$data.cart.length
      return basketSize
    }
  }
}

</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>
