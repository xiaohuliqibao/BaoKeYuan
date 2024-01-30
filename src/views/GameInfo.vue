<script setup lang="ts">
import { h,ref,reactive  } from 'vue';
import { NLayout,NLayoutContent, NTag,NButton,NDataTable,NCard,NTabs,NTabPane,NCode,NConfigProvider } from 'naive-ui';
import type { DataTableColumns,DataTableBaseColumn,DataTableFilterState } from "naive-ui";
import IndexLayoutSider from '@/components/IndexLayoutSider.vue';
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'

const username = localStorage.getItem("username") || "Guest";

const status = ref({
  map: '运行中',
  cave: '运行中'
})

type gameUser = {
   id: number,
   steam_name: string,
   steam_id: string,
   status: string,
   ban: string
}

const createColumns  = ({user}:{user:(row: gameUser) => void
}): DataTableColumns<gameUser> => {
  return [
    { title: 'Id', key: 'id'},
    { title: 'Steam 昵称', key: 'steam_name' },
    { title: 'Steam 账号', key: 'steam_id' },
    { title: '状态', key: 'status' },
    { title: '黑名单', key: 'ban',className:'ban'},
    {
      title: '操作',
      key: 'actions',
      render(row) {
        return [
          h(NButton,
            { strong: true,  tertiary: true,  size: 'small',  onClick: () => user(row)},
            { default: () => { if (row.ban === 'false') { return '加入黑名单'} else {return '移除黑名单' }}
          }
          )]
      }
    }
]}

const columns = createColumns({ user: (row) => console.log(row) });
const pagination = { pageSize: 6 }
const data = ref([
  {
    id: 1,
    steam_name: 'John Doe',
    steam_id: '123456789',
    status: 'Online',
    ban: 'false'
  },
  {
    id: 2,
    steam_name: 'Jane Smith',
    steam_id: '987654321',
    status: 'Offline',
    ban: 'false'
  },
  {
    id: 3,
    steam_name: 'Bob Johnson',
    steam_id: '555555555',
    status: 'Online',
    ban: 'true'
  },
  {
    id: 4,
    steam_name: 'Bob Johnson',
    steam_id: '555555555',
    status: 'Online',
    ban: 'true'
  },
  {
    id: 5,
    steam_name: 'Bob Johnson',
    steam_id: '555555555',
    status: 'Online',
    ban: 'true'
  },
  {
    id: 6,
    steam_name: 'Bob Johnson',
    steam_id: '555555555',
    status: 'Online',
    ban: 'true'
  },
  {
    id: 7,
    steam_name: 'Jane Smith',
    steam_id: '987654321',
    status: 'Offline',
    ban: 'false'
  }
])

function rewClassName(row:gameUser) {
  if (row.ban === 'true') {
      return 'ban-row'
  } else {
      return ''
  }
}

hljs.registerLanguage('javascript', javascript)

const code = "import { h,ref,reactive  } from 'vue';"

</script>

<template>
    <n-layout class="layout" has-sider >
      <IndexLayoutSider/>
      <n-layout-content class="container">
        <div class="welcome-content">
            <p>Hello <b>{{ username }}</b> </p>
            <h1>Welcome to Dont Strave Game Panel</h1>
        </div>
        <div class="top-img">
          <img src="" >
        </div>
        <div class="game-panel">
          <div class="game-info">
            <h5>游戏运行状态</h5>
            <div class="status">
              <div class="status-detail">
                <p>地面状态：</p> 
                <n-tag type="success">
                    {{ status.map }}
                </n-tag>
                <p>洞穴状态：</p> 
                <n-tag type="success">
                  {{ status.cave}}
                </n-tag>
              </div>
              <div class="status-action">
                <n-button type="info">
                  Restart All
                </n-button>
                <n-button>
                  Start Map
                </n-button>
                <n-button>
                  Start Cave
                </n-button>
              </div>
              <!-- todo <div class="status-alrt">
                <p>未检测到游戏相关进程或文件，请先安装游戏。</p>
              </div> -->
            </div>
            <h5>快捷操作</h5>
            <div class="other-action">
              <div class="action-button">
                <n-button type="info">
                检查游戏版本 
                </n-button>
                <n-button type="info">
                更新游戏
                </n-button>
                <n-button>
                  创建备份文件
                </n-button>
                <n-button>
                  还原最新一次备份文件
                </n-button>
              </div>
              <div class="action-message">
                <p>最新游戏版本为：21.4.3，服务器游戏版本为21.4.3</p>
              </div>
            </div>
            <h5>在线玩家</h5>
            <div class="white-black-list">
              <n-data-table
                :columns="columns"
                :data="data"
                :pagination="pagination"
                :row-class-name="rewClassName"
              />
            </div>
          </div>
          <div class="game-config">
            <n-config-provider :hljs="hljs">
              <n-card title="游戏配置文件" class="card-config">
                <n-tabs type="line" animated>
                  <n-tab-pane name="config1" tab="密钥配置">
                    <div style="overflow: auto">
                      <n-code :code="code" language="config" show-line-numbers />
                    </div>
                  </n-tab-pane>
                  <n-tab-pane name="the beatles" tab="Server.conf">
                    Hey Jude
                  </n-tab-pane>
                  <n-tab-pane name="MasterConf" tab="Master.conf">
                    七里香
                  </n-tab-pane>
                  <n-tab-pane name="CaveConf" tab="Cave.conf">
                    七里香
                  </n-tab-pane>
                </n-tabs>
              </n-card>
            </n-config-provider>
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
  /* background-color: aliceblue; */
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

.layout .container .top-img{
  height: 80px;
  margin: 20px 30px;
  background-color: antiquewhite;
  border-radius: 20px;
}

.layout .container .game-panel{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 40px 30px 0px 30px;
}

.layout .container .game-panel .game-info{
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  padding: 10px;
  border-style:solid;
  border-width:3px;
  border-radius: 12px;
  border-color: aliceblue;
}

.layout .container .game-panel .game-info h5{
  font-size: 20px;
  font-weight: 600;
  margin: 10px 0;
}
.layout .container .game-panel .game-info .status{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;
}

.layout .container .game-panel .game-info .status .status-detail{
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
}

.layout .container .game-panel .game-info .status .status-action{
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-content: right;
}

.layout .container .game-panel .game-info .other-action{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 30px;
}
.layout .container .game-panel .game-info .other-action .action-button{
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap:15px;
}

.layout .container .game-panel .game-info .other-action .action-message p{
  font-size: 14px;
  font-weight: 200;
  margin-left: 5px;
}
.layout .container .game-panel .game-config .card-config{
  /* background-color: gold; */
  height: 770px;
  border-radius: 15px;
  border-color: rgb(227, 237, 207);
  border-style:solid;
  border-width:3px;
}

.layout .container .game-panel .game-info .other-action .white{
  align-items: center;
}

:deep(.n-data-table .n-data-table-th){
  text-align: center;
}

:deep(.n-data-table .n-data-table-td){
  text-align: center;
}

:deep(.ban-row .ban) {
  font-size: 14px;
  color: red;
}
</style>
