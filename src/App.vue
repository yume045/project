<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar navbar-light shadow-lg p-3 mb-5" style="background-color: #00BFFF;">
  <a class="navbar-brand" href="/#/">Medical Service</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/#/">หน้าหลัก <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/#/Question">ปรึกษาแพทย์</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/#/Medicine">ยา</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="/#/Disease">โรค</a>
      </li>
    </ul>
  </div>
      <a class="nav-link disabled " href="/#/Login">เข้าสู่ระบบ</a>
      <a class="nav-link disabled " href="/#/Register">สมัครสมาชิก</a>
</nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family:'Abel', sans-serif,'Mitr', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
