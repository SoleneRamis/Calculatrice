<template>
  <div class="calculatrice">
    <h4>{{ msg }}</h4>
    <div class="calculator">
      <p>{{ alert }}</p>
      <div class='input'>
        <input type='text' disabled="disabled" v-model='lastResult'>
      </div>
      <div class='buttons'>
        <div class='row'>
          <div class='button' v-on:click="getNumber(7)">7</div>
          <div class='button' v-on:click="getNumber(8)">8</div>
          <div class='button' v-on:click="getNumber(9)">9</div>
        </div>
        <div class='row'>
          <div class='button' v-on:click="getNumber(4)">4</div>
          <div class='button' v-on:click="getNumber(5)">5</div>
          <div class='button' v-on:click="getNumber(6)">6</div>
        </div>
        <div class='row'>
          <div class='button' v-on:click="getNumber(1)">1</div>
          <div class='button' v-on:click="getNumber(2)">2</div>
          <div class='button' v-on:click="getNumber(3)">3</div>
        </div>
        <div class='row'>
          <div class='vide'></div>
          <div class='button' v-on:click="getNumber(0)">0</div>
          <div class='button' v-on:click='clearAll'>Clear all</div>
        </div>
      </div>
    </div>
  </div>
</template>

</script>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'calculatrice',
  data () {
    return {
      msg: 'Solène Ramis',
      alert: 'Cliquer sur deux nombres pour que le serveur puisse les additionner',
      lastResult: 0
    }
  },
  methods: {
    clearAll () {
      this.lastResult = 0
      console.log(this.lastResult)
    },

    getNumber (num) {
      console.log(this.lastResult, '+', num)
      let number1 = this.lastResult
      let number2 = num
      let addition = '+'
      this.alert = 'Attendre la réponse du serveur...'
      this.sendCalcul(number1, number2, addition)
    },

    sendCalcul (num1, num2, addition) {
      let that = this
      axios.post('http://localhost:7000/', {
        number1: num1,
        number2: num2,
        equationtype: addition
      })
      .then(function (res) {
        console.log(res.data.newNumber)
        that.lastResult = res.data.newNumber
        that.alert = 'Cliquer sur deux nombres pour que le serveur puisse les additionner'
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.calculatrice
  position absolute
  display flex
  justify-content center
  width 90%
  height 90%
  margin: 0px
  padding 0px
  .container
    flex-wrap nowrap
    flex-direction column
    margin auto

h4
  margin-top -3%
  color rgba(167, 13, 31, 0.87)

.calculator
  width 40%
  height: 70%
  margin-top 4%

  .input
    padding 0 1em 0 1em
    input
      border-radius 0.2em
      border none
      width 100%
      padding 0.7em
      background-color rgba(189, 191, 188, 0.44)
      font-size 1.2em
      text-align right
      color black
      &focus
        color black
        outline 2px solid white

  .buttons
    display table
    padding 1em
    width 100%
    .button, .vide
      margin-right 2%
    .button:hover
      background-color rgba(167, 13, 31, 0.87)
    .row
      display flex
      flex-flow row
      justify-content center
    .button, .vide
      display table-cell
      text-align center
      background-color #888
      width 100%
      padding-top 1em
      padding-bottom 1em
      color white
      font-weight bold
      border-radius 0.2em
    .row ~ .row
      margin-top 1em

</style>
