<template>
<div>
  <div class="wrapper">

  </div>
  <div>
  <center>
    <h1> 2.7 seconds left on the clock.... your team is down by 2. What do you do?</h1>
    <h1> HOW TO PLAY THE GAME</h1>
    <p>1. Select 5 players to create your team (must be 5 or it wont tell you if you won)</p>
    <p>2. Choose shot selection. (The first player you select will be taking the shot)</p>
    <p>3. Then scroll up to the top and click "Outcome of the game" in the top right corner</p>
  </center>
  </div>
  <PlayerList :players="players" />
  <div>
    <p> What shot are you going for? </p>
    <center>
    <button class="auto" @click= "shotType('Dunk')"> DUNK </button>
    <button class="auto" @click= "shotType('Mid-Range Jumper')"> Mid-Range Jumper</button>
    <button class="auto" @click= "shotType('3 Pointer')"> 3 Pointer</button>
    </center>
  </div>

</div>
</template>


<script>
import PlayerList from "../components/PlayerList.vue"
export default {
  name: 'Home',
  components: {
    PlayerList
  },
  data() {
    return {
      searchText: '',
    }
  },
  methods: {
    addToCart(player) {
      this.$root.$data.players.push(player)
    },
    addShotToBucket(shot){
        this.$root.$data.bucket.push(shot)
      },
    shotType(type){
      this.$root.$data.shot = type
    }
  },
  computed: {
    players() {
      return this.$root.$data.players.filter(player => player.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
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

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
