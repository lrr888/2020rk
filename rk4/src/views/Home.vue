<template>
  <div class="home">
    <input/>
    <dl v-for="(item,index) in getdatalist" :key="index">
      <dt>
        <img :src="item.img"/>
      </dt>
      <dd>
        {{item.name}}
      </dd>
    </dl>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  data() {
    return {
      getdatalist:[]
    }
  },
  created() {
    this.getdata()
    
  },
  methods: {
    getdata(){
      this.$http.get('/api/app').then(res=>{
        console.log(res.data.list)
        this.getdatalist=res.data.list
      })
    }
  },
  components: {

  }
}
</script>
