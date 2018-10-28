<template>
  <div class="hello">
        <b-alert show>Default Alert</b-alert>
  <div>
    <b-nav>
      <b-nav-item active>หน้าหลัก</b-nav-item>
      <b-nav-item>ปรึกษาหมอ</b-nav-item>
      <b-nav-item>ติดต่อ</b-nav-item>
      <b-nav-item disabled>Disabled</b-nav-item>
      <button style="margin-left:50%;"><router-link to="/Login">เข้าสู่ระบบ</router-link></button>
      <button style="margin-left:1%;"><router-link to="/Register">สมัครสมาชิก++++++++++</router-link></button>
    </b-nav>
</div><br><br>
<div style="margin-left:35%;">
  <b-nav-form>
        <b-form-input style="margin-left:0%; width:50%;" size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>
    </div>
<form action="">
      <div class="columns">
        <br>
      </div>
      <div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns
      <b-card  title="Card Title"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;margin-left:0%;"
                  class="mb-2" >
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
              <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
    </div>
    <div class="col-sm">
      One of three columns
      <b-card  title="Card Title"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;margin-left:0%;"
                  class="mb-2" >
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
              <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
    </div>
    <div class="col-sm">
      One of three columns
      <b-card  title="Card Title"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;margin-left:0%;"
                  class="mb-2" >
                    <p class="card-text">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
              <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
    </div>
  </div>
</div>
    </form>
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
