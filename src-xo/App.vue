<template>
  <div>
    <header>井字棋小游戏</header>
    <div class="wra">

      <div class="tex">第{{n}}手</div>
      <div>
        <div class="row">

          <Cell
            @click="onClickCell(0,$event)"
            :n="n"
          />
          <Cell
            @click="onClickCell(1,$event)"
            :n="n"
          />
          <Cell
            @click="onClickCell(2,$event)"
            :n="n"
          />
        </div>
        <div class="row">
          <Cell
            @click="onClickCell(3,$event)"
            :n="n"
          />
          <Cell
            @click="onClickCell(4,$event)"
            :n="n"
          />
          <Cell
            @click="onClickCell(5,$event)"
            :n="n"
          />
        </div>
        <div class="row">
          <Cell
            @click="onClickCell(6,$event)"
            :n="n"
          />
          <Cell
            @click="onClickCell(7,$event)"
            :n="n"
          />
          <Cell
            @click="onClickCell(8,$event)"
            :n="n"
          />
        </div>
        <div class="tex">获得胜利方:{{resu === ''? '胜负未分' : resu}}</div>
      </div>
    </div>
    <footer>制作:胡开浩</footer>
  </div>
</template>

<script>
import Cell from './Cell.vue'

export default {
  components: { Cell },
  data () {
    return { n: 0, map: [[null, null, null], [null, null, null], [null, null, null]], resu: '' }
  },
  methods: {
    onClickCell (i, text) {
      console.log(i, text)
      this.map[Math.floor(i / 3)][i % 3] = text
      console.log(this.map)
      this.n += 1
      this.tell()
    },
    tell () {
      let map = this.map
      for (let i = 0; i < 2; i++) {
        if (map[i][0] !== null &&
          map[i][0] === map[i][1] &&
          map[i][0] === map[i][2]) {
          this.resu = map[i][0]
        }
        if (map[0][i] !== null &&
          map[0][i] === map[1][i] &&
          map[0][i] === map[2][i]) {
          this.resu = map[0][i]
        }
        if (map[0][0] !== null &&
          map[0][0] === map[1][1] &&
          map[0][0] === map[2][2]) {
          this.resu = map[0][0]
        }
        if (map[0][2] !== null &&
          map[0][2] === map[1][1] &&
          map[0][2] === map[2][0]) {
          this.resu = map[0][0]
        }
      }
    }
  }
}
</script>

<style>
* {
}
.row {
  display: flex;
}
.wra {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
header {
  padding: 20px 0;
  font-size: 30px;
  color: #ccf;
  text-align: center;
}
footer {
  position: absolute;
  right: 10px;
  bottom: 8px;
  color: #ccc;
}
</style>
