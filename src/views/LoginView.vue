<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { NForm,NInput } from 'naive-ui';
import Axios from "axios";
const formValue = ref({
        user: {
          number: '',
          code: ''
        }
      });
const rules = {
  user: {
    number: {
            required: true,
            message: 'please input Number',
            trigger: 'blur'
          },
          code: {
            required: true,
            message: 'please input Code',
            trigger: ['input', 'blur']
          }
        }
}
const onlyAllowNumber = (value: string) => !value || /^\d+$/.test(value);
const router = useRouter();
const container = ref<any>(null)

async function login() {
  try {
    const response = await Axios.post('/api/login',{
      number: formValue.value.user.number,
      code: formValue.value.user.code})
    console.log(response.data)
    if(response.data.status == 'success'){
      router.push('/index')
    }else
    {
      console.log("Login Failed")
      alert("Wrong Number or Code")
    }
  } catch (error) {
    console.error(error)
  }
}

function getCode(){
  container.value.classList.add('active')
}

function signIn(){
  container.value.classList.remove('active')
}

async function testAxios() {
  try {
    const response = await Axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(response.data[0])
  } catch (error) {
    console.error(error)
  }
}

</script>

<template>
  <main id="app">
    <div class="container" ref="container">
      <div class="form-container sign-in">
          <n-form ref="formRef" :model="formValue" :rules="rules" >
            <h1>Sign in</h1>
            <div class="social-icons">

            </div>
            <n-input  v-model:value="formValue.user.number" placeholder="QQ Number" :allow-input="onlyAllowNumber" />
            <n-input  v-model:value="formValue.user.code" placeholder="Code" type="password" show-password-on="mousedown" :maxlength="6" />
            <span>What is Code?</span>
            <button @click="login()">Sign In</button>
          </n-form>
      </div>
      <div class="form-container sign-up">
            <form >
                <h1>还是混吃等死吧</h1>
                <div class="social-icons">
                   
                </div>
                <div class="group-img">
                  这里是一个群聊二维码，当然现在还没有。
                </div>
            </form>
        </div>
      <div class="toggle-container">
        <div class="toggle">
            <div class="toggle-panel toggle-right">
                <h1>你好, 欢迎来到饥荒的管理后台!</h1>
                <p>如果你还不知道什么是登录的Code,请点击下方按钮，在群聊中获取Code。</p>
                <button class="hidden" id="code" @click="getCode()">Get Code</button>
            </div>
            <div class="toggle-panel toggle-left">
                    <h1>欢迎您，我的新朋友</h1>
                    <p>
                        扫描二维码，加入群聊后。发送[#饥荒Code]指令,从狼宝那里获取Code，Code有效期为1小时。
                    </p>
                    <button class="hidden" id="login" @click="signIn()">Sign In</button>
                </div>
          </div>
      </div>
    </div>
    <div class="test" style="display: none;">
      <button type="button" @click="testAxios()">TEST</button>
    </div>
  </main>
</template>

<style scoped>
@import url("https://fonts.font.im/css?family=Roboto");

#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #a5f4ce;
  background: linear-gradient(to right,#e2e2e2,#a5f4ce);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}

.container{
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35) ;
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
}

.container form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px 30px;
    gap: 15px;
}

.container h1{
  font-size: 30px;
  font-weight: 700;
  text-align: left;
}

.container .form-container h1{
  margin-top: 10px;
}

.container p {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    margin: 20px 0;
    text-align: left;
}

.container span {
    font-size: 14px;
    font-weight: 500;
}

.container a{
    color: #333;
    font-size: 13px;
    text-decoration: none;
    margin: 15px 0 10px;
}

.container button{
    background-color: #2fa82d;
    color: #fff;
    font-size: 12px;
    padding: 10px 45px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 10px;
    cursor: pointer;
}

.container button.hidden{
    background-color: transparent;
    border-color: #fff;
}

.container input{
    background-color: #eee;
    border: none;
    margin: 8px 0;
    padding: 10px 15px;
    font-size: 13px;
    border-radius: 8px;
    width: 80%;
    outline: none;
}

.container .n-input{
    background-color: #eee;
    border: none;
    margin: 8px 0;
    padding: 10px 4px;
    font-size: 13px;
    border-radius: 8px;
    width: 80%;
    height: 50px;
    outline: none;
}



.form-container{
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6 ease-in-out;
}

.sign-in{
    left: 0;
    width: 50%;
    z-index: 2;
}

.container.active .sign-in{
    transform: translateX(-100%);
}

.sign-up{
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
}
.container.active .sign-up{
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: move 0.6s;
}

@keyframes move{
    0%,49.99%{
        opacity: 0;
        z-index: 1;
    }
    50%,100%{
        opacity: 1;
        z-index: 5;
    }
}
.social-icons{
    margin: 10px 0px;
}

.social-icons a{
    border: 1px solid #ccc;
    border-radius: 20%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 3px;
    width: 40px;
    height: 40px;
}

.toggle-container{
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: all 0.6s ease-in-out;
    border-radius: 150px 0 0 100px;
    z-index: 1000;
}

.container.active .toggle-container{
    transform: translateX(-100%);
    border-radius: 0 150px 100px 0;
}

.toggle {
    background-color: #2fa82d;
    height: 100%;
    background: linear-gradient(to right,#5cc0ae,#2fa82d);
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
}

.container.active .toggle{
    transform: translateX(50%);
}

.toggle-panel{
    position: absolute;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 30px;
    text-align: center;
    top: 0;
    transform: translateX(0);
    transition:  all 0.6s ease-in-out;
}

.toggle-left{
    transform: translateX(-200%);
}

.container.active .toggle-left{
    transform: translateX(0);
}

.toggle-right{
    right: 0;
    transform: translateX(0);
}

.container.active .toggle-right{
    transform: translateX(200%);
}

</style>
