<template >
  <div id="building">
    <div class="containerT">
      <div class="login-title">
        <img class="logo" src="https://file.qingflow.com/assets/logo.png" alt="logo">
        <h1>登录</h1>
      </div>



      <div class="form" id="entry_form">
        <div class="login-item">
        </div>
        <div class="login-item">
          <a class="login ad-color" id="ad-login" style="background-color: #0478E6;color: #FFFFFF" href="https://accounts.qingflow.com/passport/login">
            <span>企业微信登录</span>
            <!-- <span>Volvo CDSID Authorization</span> -->
          </a>

        </div>
        <!--						<div class="login-item" th:if="${thirdPartLogin!=null?(#lists.size(thirdPartLogin) ge 2):false}">-->
        <!--							<a class="login third-color" id="qywx-login" th:attr="data-url=${thirdPartLogin!=null?thirdPartLogin[1].authRequestURL:''}" href="javascript:;">-->
        <!--								<span th:text="${thirdPartLogin!=null?thirdPartLogin[1].name:''}">企业微信扫码登录</span>-->
        <!--								<span th:text="${thirdPartLogin!=null?thirdPartLogin[1].enName''}">WeChat Work Login</span>-->
        <!--							</a>-->
        <!--						</div>-->



        <!-- <div class="login-item">
          <a class="login third-color" id="qf-login" href="javascript:;">
            <span>合作伙伴登录</span>
            <span>Partner Login</span>
          </a>
        </div> -->
      </div>

    </div>
    <div class="footer">
      <div style="width:300px;margin:0 auto; padding:90vh 0;bottom: 10vh">
        <a target="_blank" href="https://beian.miit.gov.cn/#/Integrated/index" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="" style="float:left;"><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 50px">粤ICP备</p></a>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
body{
  margin:0;
  padding:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#building{
  background:url("https://file.qingflow.com/uploads/file/4b85b5df-7b89-4d3e-a548-6be008934773.jpg");
  width:100%;
  height:100%;
  position:fixed;
  background-size:100% 100%;
  margin:0;
  padding:0;
  border:0;
}
banner {
  background-color: black;
  width: 100vw;
  height: 100vh;
}
.containerT {
  width: 350px;
  text-align: center;
  position: absolute;
  top: 30%;
  top: -moz-calc(50%-315px);
  top: -webkit-calc(50%-315px);
  top: calc(50% - 315px);
  right: 40%;
  border-radius: 15px;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, .15);
  background-color: rgba(255, 255, 255, 0.8);
}

.containerT h1 {
  font-size: 26px;
  font-family: microsoft yahei, Arial, sans-serif;
  -webkit-transition-duration: 1s;
  transition-duration: 1s;
  -webkit-transition-timing-function: ease-in-put;
  transition-timing-function: ease-in-put;
  font-weight: 600;
  margin-top: 20px;
  height: 60px;
}

.form {
  width: 90%;
  padding: 0 5%;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* margin-top: 45px; */
}

.form a {
  width: 100%;
  height: 50px;
  border-radius: 6px;
  margin-top: 30px;
  cursor: pointer;
  transition: all .3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.form input {
  width: 100%;
  height: 40px;
  border-radius: 6px;
  border: none;
  padding: 6px;
  margin: 10px 0;
  border: 1px solid #EFEFEF;
}
.form input:focus-visible {
  border: 1px solid #eee !important;
}
.form .login-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form .login img {
  width: 60px;
}

.form .login-item span:last-child {
  font-size: 12px;
}

.ad-color {
  background-color: #3D5881;
  color: #FFF;
}
#btn-password-login:hover {
  background-color: #03a9f4;
}
.login-title {
  display: flex;
  align-items: center;
}

@media screen and (max-width:800px) {
  .containerT {
    width: 80%;
    position: relative;
    margin: 4% auto;
    top: auto;
    right: auto;
  }
  .footer {
    text-align: center;
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    padding: 20px;
    color: #fff7f7;
    background-color: rgba(0, 0, 0, .15);
    width:300px;margin:0 auto; padding:20px 0;
  }
  .footer a {
    color: #fff7f7;}}
</style>
