<template>
  <div class="hello">
  <div>
</div><br><br>
  <div class="container">
    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item is-active">ดูคำถามทั้งหมด</a>
        <a class="navbar-item">ดูเฉพาะคำถามที่มีคำตอบทั้งหมด</a>
        <a class="navbar-item">ดูเฉพาะคำถามที่ยังไม่มีคำตอบทั้งหมด</a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <input class="input" type="search" placeholder="Search forum...">
            </div>
            </div>
            </div>
            </div>
            <section class="container">
              <div class="columns">
                <div class="column is-3">
                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">New Post</button>
                  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <form>
                            <div class="form-group">
                              <label for="recipient-name" class="col-form-label">Recipient:</label>
                              <input type="text" class="form-control" id="recipient-name">
                            </div>
                            <div class="form-group">
                              <label for="message-text" class="col-form-label">Message:</label>
                              <textarea class="form-control" id="message-text"></textarea>
                            </div>
                          </form>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Send message</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <aside class="menu">
                    <p class="menu-label">
                      Tags
                      </p>
                      <ul class="menu-list">
                        <li><span class="menu-label">Dashboard</span></li><br>
                        <li><span class="menu-label">Customers</span></li><br>
                        <li><span class="menu-label">Authentication</span></li><br>
                        <li><span class="menu-label">Payments</span></li><br>
                        <li><span class="menu-label">Transfers</span></li><br>
                        <li><span class="menu-label">Balance</span></li><br>
                        <li><span class="menu-label">Question</span></li>
                      </ul>
                  </aside>
                </div>
                <div class="column is-9">
                    <div class="box content">
                      <div class="md-form amber-textarea active-amber-textarea">
                        <i class="fa fa-pencil prefix"></i>
                        <textarea type="text" id="form22" class="md-textarea form-control" rows="3"></textarea>
                        <label for="form22"></label>
                      </div>
                        <form class="md-form" action="#">
                            <div class="file-field">
                                <div class="btn btn-primary btn-sm float-left">
                                    <input type="file" multiple>
                                </div>
                                <button>send</button>
                                <button>cancle</button>
                            </div>
                        </form>
                    </div>
                  </div>
                </div>
            </section>
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
html,body {
  font-family: 'Open Sans', serif;
  background: #F2F6FA;
}
footer {
  background-color: #F2F6FA !important;
}
.topNav {
  border-top: 5px solid #3498DB;
}
.topNav .container {
  border-bottom: 1px solid #E6EAEE;
}
.container .columns {
  margin: 3rem 0;
}
.navbar-menu .navbar-item {
  padding: 0 2rem;
}
aside.menu {
  padding-top: 3rem;
}
aside.menu .menu-list {
  line-height: 1.5;
}
aside.menu .menu-label {
  padding-left: 10px;
  font-weight: 700;
}
.button.is-primary.is-alt {
  background: #00c6ff;
  background: -webkit-linear-gradient(to bottom, #0072ff, #00c6ff);
  background: linear-gradient(to bottom, #0072ff, #00c6ff);
  font-weight: 700;
  font-size: 14px;
  height: 3rem;
  line-height: 2.8;
}
.media-left img {
  border-radius: 50%;
}
.media-content p {
  font-size: 14px;
  line-height: 2.3;
  font-weight: 700;
  color: #8F99A3;
}
article.post {
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #E6EAEE;
}
article.post:last-child {
  padding-bottom: 0;
  border-bottom: none;
}
.menu-list li{
  padding: 5px;
}
.modal-backdrop {
  position: inherit;
}
.file-field.medium .file-path-wrapper {
  height: 3rem; }
  .file-field.medium .file-path-wrapper .file-path {
    height: 2.8rem; }

.file-field.big-2 .file-path-wrapper {
  height: 3.7rem; }
  .file-field.big-2 .file-path-wrapper .file-path {
    height: 3.5rem; }
</style>
