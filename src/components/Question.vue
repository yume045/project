<template>
  <div class="hello">
  <div>
</div><br><br>
<nav class="navbar is-white">
  <div class="container">
    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item is-active" href="#">Popular</a>
        <a class="navbar-item" href="#">Recent</a>
        <a class="navbar-item" href="#">Rising</a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <input class="input" type="search" placeholder="Search forum...">
            </div>
            </div>
            </div>
            </div>
            </nav>
            <section class="container">
              <div class="columns">
                <div class="column is-3">
                  <a class="button is-primary is-block is-alt is-large" href="#">New Post</a>
                  <aside class="menu">
                    <p class="menu-label">
                      Tags
                      </p>
                      <ul class="menu-list">
                        <li><span class="tag is-primary is-medium ">Dashboard</span></li><br>
                        <li><span class="tag is-link is-medium ">Customers</span></li><br>
                        <li><span class="tag is-light is-danger is-medium ">Authentication</span></li><br>
                        <li><span class="tag is-dark is-medium ">Payments</span></li><br>
                        <li><span class="tag is-success is-medium ">Transfers</span></li><br>
                        <li><span class="tag is-warning is-medium ">Balance</span></li><br>
                        <li><span class="tag is-medium ">Question</span></li>
                      </ul>
                  </aside>
                </div>
                <div class="column is-9">
                  <div class="box content">
                    <article class="post">
                      <h4>Bulma: How do you center a button in a box?</h4>
                      <div class="media">
                        <div class="media-left">
                          <p class="image is-32x32">
                            <img src="http://bulma.io/images/placeholders/128x128.png">
                          </p>
                        </div>
                        <div class="media-content">
                          <div class="content">
                            <p>
                              <a href="#">@jsmith</a> replied 34 minutes ago &nbsp;
                              <span class="tag">Question</span>
                            </p>
                          </div>
                        </div>
                        <div class="media-right">
                          <span class="has-text-grey-light"><i class="fa fa-comments"></i> 1</span>
                        </div>
                      </div>
                    </article>
                    <article class="post">
                      <h4>TypeError: Data must be a string or a buffer when trying touse vue-bulma-tabs</h4>
                      <div class="media">
                        <div class="media-left">
                          <p class="image is-32x32">
                            <img src="http://bulma.io/images/placeholders/128x128.png">
                          </p>
                        </div>
                        <div class="media-content">
                          <div class="content">
                            <p>
                              <a href="#">@jsmith</a> replied 53 minutes ago &nbsp;
                              <span class="tag">Question</span>
                            </p>
                          </div>
                        </div>
                        <div class="media-right">
                          <span class="has-text-grey-light"><i class="fa fa-comments"></i> 13</span>
                        </div>
                      </div>
                    </article>
                    <article class="post">
                      <h4>How to vertically center elements in Bulma?</h4>
                      <div class="media">
                        <div class="media-left">
                          <p class="image is-32x32">
                            <img src="http://bulma.io/images/placeholders/128x128.png">
                          </p>
                        </div>
                        <div class="media-content">
                          <div class="content">
                            <p>
                              <a href="#">@jsmith</a> replied 1 hours ago &nbsp;
                              <span class="tag">Question</span>
                            </p>
                          </div>
                        </div>
                        <div class="media-right">
                          <span class="has-text-grey-light"><i class="fa fa-comments"></i> 0</span>
                        </div>
                      </div>
                    </article>
                    <article class="post">
                      <h4>I'm trying to use hamburger menu on bulma css, but it doesn't work. What is wrong?</h4>
                      <div class="media">
                        <div class="media-left">
                          <p class="image is-32x32">
                            <img src="http://bulma.io/images/placeholders/128x128.png">
                          </p>
                        </div>
                        <div class="media-content">
                          <div class="content">
                            <p>
                              <a href="#">@jsmith</a> replied 2 hours ago &nbsp;
                              <span class="tag">Question</span>
                            </p>
                          </div>
                        </div>
                        <div class="media-right">
                          <span class="has-text-grey-light"><i class="fa fa-comments"></i> 5</span>
                        </div>
                      </div>
                    </article>
                    <article class="post">
                      <h4>How to make tiles wrap with Bulma CSS?</h4>
                      <div class="media">
                        <div class="media-left">
                          <p class="image is-32x32">
                            <img src="http://bulma.io/images/placeholders/128x128.png">
                          </p>
                        </div>
                        <div class="media-content">
                          <div class="content">
                            <p>
                              <a href="#">@jsmith</a> replied 3 hours ago &nbsp;
                              <span class="tag">Question</span>
                            </p>
                          </div>
                        </div>
                        <div class="media-right">
                          <span class="has-text-grey-light"><i class="fa fa-comments"></i> 2</span>
                        </div>
                      </div>
                    </article>
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

</style>
