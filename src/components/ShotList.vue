<template>
<div class="wrapper">
  <div class="shot">
    <div>
      <h1>Whos taking the shot</h1>
      <button class="auto" @click= "updateShot()">Select</button>
      <div>
        <button class="auto" @click= "updateShot()">Select</button>
      </div>
      <p></p>
    </div>
  </div>
</div>
</template>




<script>
export default {
  name: 'ProductList',
  props: {
    shot: Array
  },
  data() {
    return{
      GoForThree: null,
      Decision: null,
      id: null
      shottype = ""
    }
  }
  methods: {
    updateShot() {
      if (typeof this.GoForThree == "undefined" || this.Decision || this.id) {
        return;
      }
      this.$root.$data.shot = { id: this.id, goForThree: this.GoForThree, Decision: this.Decision }
      console.log(this.$root.$data.shot)
    }
  }
}
</script>


<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.shot {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.shot {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.shot img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: center;
}

.shot .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
