<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">หน้าหลัก <span class="sr-only">(current)</span></a>
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
      <a href="/#/Login"><button style="margin-left:0%;" class="btn btn-outline-primary">เข้าสู่ระบบ</button></a>
      <a href="/#/Register"><button style="margin-left:2%;" class="btn btn-outline-primary">สมัครสมาชิก</button></a>
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
