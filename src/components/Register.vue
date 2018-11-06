<template>
    <div class="hello">
  <div>
</div><br><br>
          <form action="">
                <div>
                  <b-container fluid style="width:35%;">
                      <b-row class="my-1">
                        <b-col sm="3"><label for="input-default">ชื่อผู้ใช้:</label></b-col>
                        <b-col sm="9">
                          <b-form-input id="input-default" type="text" min=0 placeholder="" v-model="username"></b-form-input>
                        </b-col>
                      </b-row>
                      <b-row class="my-1">
                        <b-col sm="3"><label for="input-default">รหัสผ่าน:</label></b-col>
                        <b-col sm="9">
                          <b-form-input id="input-default" type="text" min=0 placeholder="" v-model="password"></b-form-input>
                        </b-col>
                      </b-row>
                      <b-row class="my-1">
                        <b-col sm="3"><label for="input-default">รหัสประชาชน:</label></b-col>
                        <b-col sm="9">
                          <b-form-input id="input-default" type="number" min=0 placeholder="" v-model="idpeople"></b-form-input>
                        </b-col>
                      </b-row>
                      <b-row class="my-1">
                        <b-col sm="3"><label for="input-default">ชื่อ:</label></b-col>
                        <b-col sm="9">
                          <b-form-input id="input-default" type="text" placeholder="" v-model="name"></b-form-input>
                        </b-col>
                      </b-row>
                      <b-row class="my-1">
                        <b-col sm="3"><label for="input-default">นามสกุล:</label></b-col>
                        <b-col sm="9">
                          <b-form-input id="input-default" type="text" placeholder="" v-model="sername"></b-form-input>
                        </b-col>
                      </b-row>
                      <b-row class="my-1">
                        <b-col sm="3"><label for="input-default">วัน/เดือน/ปี:</label></b-col>
                        <b-col sm="9">
                          <b-form-input id="input-default" type="date" placeholder="" v-model="day"></b-form-input>
                        </b-col>
                      </b-row>
                      <b-row class="my-1">
                        <b-col sm="3"><label for="input-default">ส่วนสูง:</label></b-col>
                        <b-col sm="9">
                          <b-form-input id="input-default" type="number" min=0 placeholder="" v-model="height"></b-form-input>
                        </b-col>
                      </b-row>
                      <b-row class="my-1">
                        <b-col sm="3"><label for="input-default">กรุ๊ปเลือด:</label></b-col>
                        <b-col sm="9">
                          <b-form-input id="input-default" type="radio" name="blood"  placeholder="" v-model="bloodtype"></b-form-input>
                        </b-col>
                      </b-row>
                      <b-row class="my-1">
                        <b-col sm="3"><label for="input-default">ที่อยู่:</label></b-col>
                        <b-col sm="9">
                          <b-form-input id="input-default" type="text" placeholder="" v-model="address"></b-form-input>
                        </b-col>
                      </b-row>
                      <b-row class="my-1">
                        <b-col sm="3"><label for="input-default">เบอร์โทร:</label></b-col>
                        <b-col sm="9">
                          <b-form-input id="input-default" type="text" placeholder="" v-model="numberphone"></b-form-input>
                        </b-col>
                      </b-row>
                      <b-row class="my-1">
                        <b-col sm="3"><label for="input-default">ยาที่แพ้:</label></b-col>
                        <b-col sm="9">
                         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="medical"></textarea>
                        </b-col>
                      </b-row>
                      <b-row class="my-1">
                        <b-col sm="3"><label for="input-default">โรคประจำตัว:</label></b-col>
                        <b-col sm="9">
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="disease"></textarea>
                        </b-col>
                      </b-row>
                      <router-link to="/Login"><b-button type="submit" variant="primary" class="btn btn-outline-primary" @click="insertUser ()">สมัครสมาชิก</b-button></router-link>
                      <b-button type="reset" variant="danger" class="btn btn-outline-danger">ยกเลิก</b-button>
                  </b-container>
                </div>
          </form>
  </div>
</template>

<script>

import firebase from 'firebase'
var database = firebase.database()
var UserRef = database.ref('/User')

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: '',
      password: '',
      idpeople: '',
      name: '',
      sername: '',
      day: '',
      height: '',
      bloodtype: '',
      address: '',
      numberphone: '',
      medical: '',
      disease: '',
      HN: ''
    }
  },
  methods: {
    insertUser () {
      let tmp = ({
        username: this.username,
        password: this.password,
        idpeople: this.idpeople,
        name: this.name,
        sername: this.sername,
        day: this.day,
        height: this.height,
        bloodtype: this.bloodtype,
        address: this.address,
        numberphone: this.numberphone,
        medical: this.medical,
        disease: this.disease,
        HN: this.HN = Math.floor(Math.random() * (1000000000 - 1 + 1)) + 1
      })
      UserRef.child(this.username).push(tmp)
      this.username = ''
      this.password = ''
      this.idpeople = ''
      this.name = ''
      this.sername = ''
      this.day = ''
      this.height = ''
      this.bloodtype = ''
      this.address = ''
      this.numberphone = ''
      this.medical = ''
      this.disease = ''
      this.HN = ''
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
button {
  font-family:'Abel', sans-serif,'Mitr', sans-serif;
  font-size: 14px;
}
input {
  font-family:'Abel', sans-serif,'Mitr', sans-serif;
  font-size: 14px;
}
</style>
