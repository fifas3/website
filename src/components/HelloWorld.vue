<template>
  <div class="vfor">
    <div @click="getData">getData</div>
    <div v-for="(test,index) in testObjFreeze" :key="index" style="background-color:lightblue">{{test}}</div>
  </div>
</template>

<script>
var obj={message:200}
var returnObj =  Object.freeze(obj)
export default {
  mounted(){
   //值不会改变
    this.testObjFreeze[0].value = 300
   //值会改变
    this.testObjFreeze = [{
      value:100
    },{
      value:200
    }],
    //结果为 true
    console.log("~~~~~~~~~~~~~~",obj === returnObj)
  },
  data(){
    return{
      testObjFreeze:Object.freeze([{
        value:1
      },{
        value:2
      }]),
      indexInfo: [],
    }
  },

  methods: {
    getData(){
      var first = 'https://picsum.photos/200/300';
      for (let index = 0; index < 50001; index++)
      {
        this.indexInfo.push({
          name: 'image',
          item: `${first}?${index}`
        })
      }
      console.log(this.indexInfo);
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
