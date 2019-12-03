<template>
  <div>
    <div
      class="cell"
      v-on:click="onClickMe"
    >
      <template v-if="a">{{text}}</template>
      <template v-else></template>
    </div>
  </div>
</template>

<script>
export default {
  props: ['n'],
  data () {
    return { a: false, text: '' }
  },

  methods: {
    onClickMe () {
      if (this.text !== '') {
        return
      }
      this.text = this.n % 2 === 0 ? 'x' : 'o'
      this.a = true
      this.$emit('click', this.text)
    }
  }
}
</script>

<style>
.cell {
  border: 1px solid #ccc;
  font-size: 90px;
  width: 120px;
  height: 120px;
  background: #ccf;
  display: flex;
  justify-content: center;
  align-content: center;
}
* {
  margin: 0;
  padding: 0;
}
</style>
