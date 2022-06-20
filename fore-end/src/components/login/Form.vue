<template>
  <div class="main">
    <div class="bg">
      <div class="left-content">
        <div class="title">学 生 管 理 系 统</div>
      </div>
      <div class="right-content">

      </div>
    </div>
    <div class="form-content">
      <div style="position: relative;">
        <span class="form-content-span1">登   录</span>
        <el-input v-model="username" placeholder="请输入用户名/学号/工号" class="input_us" clearable/>
        <el-input type="password" v-model="password" placeholder="请输入密码" class="input_ps" clearable/>
        <el-button type="primary" class="loginBtn">登录</el-button>
      </div>
    </div>
  </div>


</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  name: 'Form',
  components: {

  },
  setup() {
    
    const username = ref('')
    const password = ref('')
    const onSubmit = () => {
      console.log('submit!')
    }
    return {
      username,
      password,
    }
  }
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
}

.main {
  width: 100%;
  height: 100%;
}

.bg {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: -1;
}

.left-content {
  background-color: rgb(242,252,252);
  width: 75%;
  height: 100%;
  position: relative;
}

.right-content {
  background-color: #cdcdfc;
  width: 25%;
  height: 100%;
}

.form-content {
  position: absolute;
  top: 16%;
  left: 55%;
  width: 28%;
  height: 59%;
  border-radius: 50px;
  background-color: rgb(252,252,252);
  box-shadow: 10px 10px 100px 10px rgba(203, 203, 243, 0.5);
}

.input_us{
  position: absolute;
  top: 160px;
  left: 10%;
  width: 80%;
  height: 50px;
  font-size: 18px;
}
.input_ps{
  position: absolute;
  top: 250px;
  left: 10%;
  width: 80%;
  height: 50px;
  font-size: 18px;
}
.form-content-span1{
  position: absolute;
  top: 50px;
  left: 45%;
  font-size:xx-large;
  font-weight: 900;
}
.loginBtn{
  width: 80%;
  height: 45px;
  position: absolute;
  top: 350px;
  left: 10%;
  border-radius: 50px;
}
.title{
  position: absolute;
  top: 20%;
  left: 10%;
  font-size: 80px;
  font-weight: 900;
}

</style>