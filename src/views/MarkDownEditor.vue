<script setup lang="ts">
import { h,ref,onMounted  } from 'vue';
import { NLayout,NLayoutContent,NInput,NSelect,NButton  } from 'naive-ui';
import IndexLayoutSider from '@/components/IndexLayoutSider.vue';
import Axios from "axios";
import {marked} from '@/assets/js/marked.esm.js';

//一个功能将"/api/read/file"接口的数据放到file_content中,hearder中添加token
var file_name = ref(null);
var file_path = ref(null);
var loading = ref(false);
var file_content = ref('');
var file_markdown = ref(marked(file_content.value));

// onMounted(async() => {
//   const response = await Axios.get('/api/api/read/file', {
//     headers: {
//       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJudW1iZXIiOiI5MzAzIiwiaWF0IjoxNzEwODM5NjYwLCJleHAiOjE3MTA4NDMyNjB9.hYsRHZPn4Ch3Qs7EBlMxPD4Q5JnALf9wiPFMYhlanTc'
//     },
//     params:{
//       path: '.',
//       filename: 'README.md'
//     }
//   });
//   file_markdown.value = marked.parse(response.data.data);
//   console.log(file_markdown);
// })


const options = [
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: "You Won't See",
    value: 'song3'
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7'
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: "I'm looking through you",
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]


</script>

<template>
    <n-layout class="layout" has-sider >
        <IndexLayoutSider/>
        <n-layout-content class="container">
          <div class="welcome-content">
            <p>Hello <b>qibao</b> </p>
            <h1>Welcome to Markdown Editor</h1>
          </div>
          <div class="file-select">
            <p>选择要编辑的文件：</p>
            <n-select
              v-model:value="file_name"
              filterable
              placeholder="选择文件"
              :options="options"
              :loading="loading"
              clearable
              remote
            />
            <n-button secondary type="primary"> 加载 </n-button>
            <n-button secondary type="info"> 保存 </n-button>
            <n-button secondary type="error"> 上传 </n-button>
          </div>
          <div class="file-info">
            <p>当前正在编辑的文件：{{ file_name }}  文件路径：{{ file_path }}</p>
          </div>
          <div class="text-editor">
              <div class="text-input">
                  <n-input v-model:value="file_content" type="textarea" placeholder="请输入内容" />
              </div>
              <div class="s-markdonw" v-html="file_markdown">
              </div>
          </div>
        </n-layout-content>
    </n-layout>
</template>

<style scoped>

.layout{
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
.layout .container{
  margin: 30px 30px 0 30px;
  background-color: #fff;
}
.layout .container .welcome-content{
  margin: 0px 30px;
  gap: 10px;
}
.layout .container .welcome-content p {
  color: #369fff;
  font-size: 14px;
  font-weight: 600;
}

.layout .container .welcome-content b{
  color: #369fff;
  font-size: 15px;
  font-weight: 600;
}

.layout .container .welcome-content h1{
  font-size: 30px;
  font-weight: 600;
}


.layout .container .file-select{
  margin: 20px 30px 10px 30px;
  gap: 15px;
  display: flex;
  flex-direction: row;
}


.layout .container .file-select .n-select{
  max-width: 300px;
}

.layout .container .file-select p{
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  /* 字体垂直居中 */
  display: flex;
  align-items: center;
}

.layout .container .file-info{
  margin: 20px 30px 10px 30px;
  gap: 15px;
  display: flex;
  flex-direction: row;
}

.layout .container .text-editor{
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 40px;
    margin: 20px 30px 0px 30px;
}
.layout .container .text-editor .text-input{
    background-color: #fff;
    /* display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;*/
    padding: 10px; 
    border-style:solid;
    border-width:2px; 
    border-radius: 10px;
    border-color: rgb(97, 152, 201);
    text-align: left;
}

:deep(.n-input-wrapper) {
    resize: horizontal!important;
    max-width: 1150px;
}

:deep(.n-input) 
{
    --n-border: none!important;
    --n-border-disabled: none!important;
    --n-border-hover: none!important;
    --n-border-focus: none!important;
    --n-box-shadow-focus: none!important;
    --n-font-size: 18px!important;
    --n-height: 70vh!important;
}

:deep(.n-input__textarea-el){
  padding-top: 8px!important;
  padding-bottom: 0px!important;
}

:deep(.n-input__placeholder){
  padding-top: 8px!important;
  padding-bottom: 0px!important;
}


.layout .container .text-editor .s-markdonw{
    background-color: #fff;
    /* display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;*/
    padding: 20px; 
    border-style:solid;
    border-width:2px;
    border-radius: 10px;
    border-color: rgb(101, 201, 97);
}

</style>