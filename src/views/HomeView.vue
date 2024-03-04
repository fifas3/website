<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="getData">
    <div @click="changeNumber">changeNumber</div>
    <div v-for="v in indexInfo" :key="v.item"> {{v}} </div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
// import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

import { computed, defineComponent, reactive, toRefs, PropType, ref } from 'vue'

// @Options({
//   components: {
//     HelloWorld
//   }
// })

// export default class HomeView extends Vue {}

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld
  },
  props: {
    title: String
    // indexInfo: {
    //   type: Object as PropType<{ name: string, item: string }>
    // }
  },
  setup (props) {
    const data = reactive({
      myInfo: '',
      num: 4
    })
    const indexInfo = reactive([
      {
        name: '',
        item: ''
      }
    ])
    const changeNumber = () => {
      data.num++
      return data
    }

    // const num = computed(() => {
    //   return data.num + 8
    // })

    const getData = function (): void {
      console.log('getData')
      const first = 'https://picsum.photos/200/300'
      for (let index = 0; index < 5001; index++) {
        indexInfo.push({
          name: 'image',
          item: `${first}`
        })
      }
    }

    return {
      indexInfo,
      changeNumber,
      // num,
      getData
    }
  }
})
</script>
