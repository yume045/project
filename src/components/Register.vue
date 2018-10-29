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
          <form action="">
                <div>
                  <b-container fluid style="width:35%;">
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
                      <router-link to="/Login"><b-button type="submit" variant="primary" class="btn btn-primary btn-medium" @click="insertUser ()">สมัครสมาชิก</b-button></router-link>
                      <b-button type="reset" variant="danger" class="btn btn-danger btn-medium">ล้าง</b-button>
                  </b-container>
                </div>
          </form>
  </div>
</template>

<script>

import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyCA20IXkP9kav5RufZBxtahCvq2-_qGbQU',
  authDomain: 'online-medical.firebaseapp.com',
  databaseURL: 'https://online-medical.firebaseio.com',
  projectId: 'online-medical',
  storageBucket: '',
  messagingSenderId: '273486925918'
}
let app = firebase.initializeApp(config)
let db = app.database()
let UserRef = db.ref('User')

export default {
  name: 'HelloWorld',
  fiurebase: {
    User: UserRef
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      idpeople: '',
      name: '',
      sername: '',
      day: '',
      height: '',
      bloodtype: '',
      address: '',
      numberphone: '',
      medical: '',
      disease: ''
    }
  },
  methods: {
    insertUser () {
      let tmp = ({
        idpeople: this.idpeople,
        name: this.name,
        sername: this.sername,
        day: this.day,
        height: this.height,
        bloodtype: this.bloodtype,
        address: this.address,
        numberphone: this.numberphone,
        medical: this.medical,
        disease: this.disease
      })
      UserRef.push(tmp)
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
