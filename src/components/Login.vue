<template>
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-grey">Login</h3>
                    <div class="box">
                        <figure class="avatar">
                            <img src="https://media1.tenor.com/images/f217536789f9643c9fcd8bd0c5c3434f/tenor.gif?itemid=11533002">
                        </figure>
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-medium" type="number" placeholder="หมายเลข HN" autofocus="">
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input class="input is-medium" type="number" placeholder="รหัสบัตรประชาชน">
                                </div>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                  <input type="checkbox">
                 จดจำรหัสผ่าน
                </label>
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth">เข้าสู่ระบบ</button>
                        </form>
                    </div>
                    <p class="has-text-grey" >
                        <a><router-link to="/Register">ผู้ป่วยใหม่</router-link></a> &nbsp;·&nbsp;
                        <a><router-link to="/">หน้าหลัก</router-link></a>
                    </p>
                </div>
            </div>
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
html,body {
  font-family:'Abel', sans-serif,'Mitr', sans-serif;
  font-size: 14px;
  font-weight: 300;
}
.hero.is-success {
  background: #F2F6FA;
}
.hero .nav, .hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.box {
  margin-top: 5rem;
}
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
}
input {
  font-weight: 300;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}
button {
  font-family:'Abel', sans-serif,'Mitr', sans-serif;
  font-size: 14px;
}
input {
  font-family:'Abel', sans-serif,'Mitr', sans-serif;
  font-size: 14px;
}
</style>
