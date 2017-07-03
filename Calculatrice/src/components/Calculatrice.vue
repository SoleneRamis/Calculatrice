<template>
  <div class="calculatrice">
    <h4>{{ msg }}</h4>
  <div class="calculator">
    <div class='input'>
      <input type='text' disabled="disabled" v-model='equation'>
    </div>
    <div class='buttons'>
      <div class='row'>
        <div class='button' v-on:click="append('7')">7</div>
        <div class='button' v-on:click="append('8')">8</div>
        <div class='button' v-on:click="append('9')">9</div>
          <div class='button' v-on:click='clearAll'>C</div>
      </div>
      <div class='row'>
        <div class='button' v-on:click="append('4')">4</div>
        <div class='button' v-on:click="append('5')">5</div>
        <div class='button' v-on:click="append('6')">6</div>
        <div class='button' v-on:click='clearLastNum'>&#x2190;</div>
      </div>
      <div class='row'>
        <div class='button' v-on:click="append('1')">1</div>
        <div class='button' v-on:click="append('2')">2</div>
        <div class='button' v-on:click="append('3')">3</div>
        <div class='button' v-on:click="append('+')">+</div>
      </div>
      <div class='row'>
        <div class='vide'></div>
        <div class='button' v-on:click="append('0')">0</div>
        <div class='vide'></div>
        <div class='button' v-on:click='result'>=</div>
      </div>
    </div>
  </div>

</script>
  </div>
</template>

<script>
export default {
  name: 'calculatrice',
  data () {
    return {
      msg: 'Solène Ramis',
      equation: 0
    }
  },
  methods: {
    clearAll () {
      this.equation = 0
    },

    clearLastNum () {
      this.equation = this.equation.substring(0, this.equation.length - 1)
      if (this.equation.length === 0) {
        this.clearAll()
      }
    },

    append (num) {
      console.log(num)
      if (this.equation[0] === this.equation) {
        this.equation = this.equation.substring(1, this.equation.length)
      }
      this.equation += num
    },

    result () {
    /*
      post(number1, number2, {

        accumulated = reponse
      })
    */
      let tokens = this.equation.split(/\b/)
      let accumulated = parseFloat(tokens.shift())

      while (tokens.length) {
        let operator = tokens.shift()
        let second = parseFloat(tokens.shift())
        switch (operator) {
          case '+' : accumulated = accumulated + second
        }
      }
      console.log('=', accumulated)
      this.equation = accumulated
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
