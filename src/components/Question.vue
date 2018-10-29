<template>
  <div class="hello">
    <b-alert show>Default Alert</b-alert>
  <div>
    <b-nav>
      <b-nav-item active><router-link to="/">หน้าหลัก</router-link></b-nav-item>
      <b-nav-item><router-link to="/Question">ปรึกษาแพทย์</router-link></b-nav-item>
      <b-nav-item>ติดต่อ</b-nav-item>
      <b-nav-item disabled>Disabled</b-nav-item>
      <button style="margin-left:50%;"><router-link to="/Login">เข้าสู่ระบบ</router-link></button>
      <button style="margin-left:1%;"><router-link to="/Register">สมัครสมาชิก</router-link></button>
    </b-nav>
</div><br><br>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
