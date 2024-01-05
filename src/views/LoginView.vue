<script setup lang="ts">
import { ref } from 'vue';
import { NForm,NFormItem,NInput,NButton,NTooltip } from 'naive-ui';
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
function login() {
  console.log(`Number：${formValue.value.user.number}`);
  console.log(`Number：${formValue.value.user.code}`);
}

</script>

<template>
  <main id="app">
    <div class="background">
      <div class="login">
        <h2>Sign In</h2>
        <n-form ref="formRef"  :model="formValue" label-align="center" :rules="rules">
          <n-form-item label-style="color:rgb(250, 250, 250);" label="Number" path="user.number">
            <n-input v-model:value="formValue.user.number" placeholder="number" :allow-input="onlyAllowNumber" />
          </n-form-item>
          <n-form-item label-style="color:rgb(250, 250, 250);" label="Code" path="user.code" >
            <n-input v-model:value="formValue.user.code" placeholder="code" type="password" show-password-on="mousedown" :maxlength="6" />
          </n-form-item>
          <n-button type="info" @click="login()">Try it</n-button>
          <n-tooltip :show-arrow="false" trigger="hover" placement="bottom">
            <template #trigger>
              <n-button ghost text color="rgb(250, 250, 250)"> What is Code?</n-button>
            </template>
            Send a message to LangBao to get the Code, which is valid for 1 day.
          </n-tooltip>
        </n-form>
      </div>
    </div>
  </main>
</template>

<style scoped>

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
.background  {
  background: url('@/assets/dontdie.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
}

.login {
  position: absolute;
  top: 50%;
  left: 16%;  
  transform: translate(-50%, -50%);
  background-color: rgba(62, 60, 60, 0.2);
  padding: 20px;
  border-radius: 10px;
  width: 19%;
}

input {
  margin-bottom: 15px;
}

h2 {
  color: rgb(255, 255, 255);
  text-align: left;
  margin-bottom: 20px;
}

button{
  margin-right: 20px;
}
</style>
