<template>
  <div class="hello">
    <b-alert show>Default Alert</b-alert>
  <div>
    <b-nav>
      <b-nav-item active><router-link to="/Home">หน้าหลัก</router-link></b-nav-item>
      <b-nav-item><router-link to="/Question">ปรึกษาแพทย์</router-link></b-nav-item>
      <b-nav-item>ติดต่อ</b-nav-item>
      <b-nav-item disabled>Disabled</b-nav-item>
      <button style="margin-left:50%;" class="btn btn-outline-primary"><router-link to="/Login">เข้าสู่ระบบ</router-link></button>
      <button style="margin-left:1%;" class="btn btn-outline-success"><router-link to="/Register">สมัครสมาชิก</router-link></button>
    </b-nav>
</div><br><br>
<v-toolbar>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
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
