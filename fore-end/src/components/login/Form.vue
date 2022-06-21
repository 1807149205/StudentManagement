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

        <el-input 
        v-model="username" 
        placeholder="请输入用户名/学号/工号" 
        class="input_us" 
        clearable/>

        <el-input 
        type="password" 
        v-model="password" 
        placeholder="请输入密码" 
        class="input_ps" 
        @keydown.enter="onSubmit"
        clearable/>
        
        <el-button 
        type="primary" 
        class="loginBtn" 
        @click="onSubmit"
        ref="input_password">登录</el-button>
      </div>
      <el-divider class="divider_1"/>
      <div class="register_title">
        <a href="login">点我注册,(仅在校学籍学生\教师)</a>
      </div>
    </div>
  </div>

</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue';
import { ElMessage } from 'element-plus'
import login from './hooks/login'

export default defineComponent({
  name: 'Form',
  components: {

  },
  setup() {
    const username = ref('')
    const password = ref('')
    const onSubmit = () => {
      const isLogin: boolean = login(username.value , password.value)
      if(isLogin) {
        ElMessage({
          message: '登录成功',
          type: 'success',
        })
      } else {
        ElMessage({
          message: '登录失败，请检查用户名和密码',
          type: 'error',
        })
      }
    }
    return {
      username,
      password,
      onSubmit,
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
  top: 20%;
  left: 55%;
  width: 28%;
  height: 35rem;
  max-width: 600px;
  min-width: 500px;
  border-radius: 50px;
  background-color: rgb(252,252,252);
  box-shadow: 100px 100px 100px 100px rgba(153, 203, 243, 0.5);
}

.input_us{
  position: absolute;
  top: 10rem;
  left: 10%;
  width: 80%;
  height: 50px;
  font-size: 18px;
}
.input_ps{
  position: absolute;
  top: 15rem;
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
  top: 23rem;
  left: 10%;
  border-radius: 50px;
}
.title{
  position: absolute;
  top: 20%;
  left: 10%;
  font-size: 60px;
  font-weight: 900;
}
.divider_1{
  position: absolute;
  top:80%;
}
.register_title{
  /* position: absolute; */
  margin-top: 90%;
  text-align: center;
}
</style>