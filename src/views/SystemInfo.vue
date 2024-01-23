<script setup lang="ts">
import { NLayout,NLayoutContent,NFlex, NButton,NCard,NProgress ,NIcon } from 'naive-ui';
import { HardwareChipOutline,BarcodeOutline,ServerOutline } from "@vicons/ionicons5";
import IndexLayoutSider from '@/components/IndexLayoutSider.vue';

const cpuInfo = 30
const username = 'qibao'
</script>

<template>
    <n-layout class="layout" has-sider > 
        <IndexLayoutSider/>
        <n-layout-content class="container">
          <div class="welcome-content">
            <p>Hello <b>{{ username }}</b> </p>
            <h1>Welcome to the System Panel</h1>
          </div>
          <div class="system-content" >
            <div class="item">
              <div class="infomation">
                <n-icon class="icon" >
                <HardwareChipOutline/>
                </n-icon>
                <h5>CUP INFO</h5>
                <p>{{cpuInfo}}%</p>
              </div>
              <div class="progress">
                <n-progress
                  type="circle"
                  :percentage=cpuInfo
                  :color="'var(--color-cpu-progress)'"
                  :rail-color="'var(--color-background)'"
                  :indicator-text-color="'var(--color-background)'"
                />
              </div>  
            </div>
            <div class="item">
              <div class="infomation">
                <n-icon class="icon">
                <BarcodeOutline/>
                </n-icon>
                <h5>MEMORY INFO</h5>
                <p>2457/15675 MB</p>
              </div>
              <div class="progress">
                <n-progress
                  type="circle"
                  :percentage=cpuInfo
                  :color="'var(--color-memory-progress)'"
                  :rail-color="'var(--color-background)'"
                  :indicator-text-color="'var(--color-background)'"
                />
              </div>  
            </div>
            <div class="item">
              <div class="infomation">
                <n-icon class="icon">
                <ServerOutline/>
                </n-icon>
                <h5>DISK INFO</h5>
                <p>127/479 GB</p>
              </div>
              <div class="progress">
                <n-progress
                  type="circle"
                  :percentage="20"
                  :color="'var(--color-disk-progress)'"
                  :rail-color="'var(--color-background)'"
                  :indicator-text-color="'var(--color-background)'"
                />
              </div>  
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
.layout .container .system-content{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: 30px 30px;
}

.layout .container .system-content .item{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0px 25px;
  background-color: aliceblue;
  border-radius: 25px;
  width: 100%;
  height: 200px;
}

.layout .container .system-content .item .infomation h5{
  font-size: 30px;
  font-weight: 500;
  color: #FFF;
}

.layout .container .system-content .item .infomation P{
  font-size: 20px;
  font-weight: 500;
  color: #FFF;
}

.layout .container .system-content .item .infomation .icon{
  color: #FFF;
  font-size: 60px;
}

.layout .container .system-content .item  .progress{
  display: flex;
}

.layout .container .system-content .item:nth-child(1){
  background-color: #8ac53e;
}

.layout .container .system-content .item:nth-child(2){
  background-color: #006ed3;
}

.layout .container .system-content .item:nth-child(3){
  background-color: #ff993a;
}

@media screen
  and (max-width: 1320px){
    .layout .container .system-content .item  .progress{
      display: none;
    }
    .layout .container .system-content .item .infomation .icon{
      font-size: 50px;
    }
    .layout .container .system-content .item .infomation h5{
      font-size: 20px;
    }
    .layout .container .system-content .item .infomation p{
      font-size: 15px;
    }

}

@media screen
  and (max-width: 768px){
    .layout .container .system-content{
      grid-template-columns: 1fr;
    }

    .layout .container .system-content .item{
      width: 100%;
      height:120px
    }
    .layout .container .system-content .item .infomation{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 50px;
    }
    .layout .container .system-content .item .infomation .icon{
      font-size: 100px;
    }
    .layout .container .system-content .item .infomation h5{
      font-size: 25px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .layout .container .system-content .item .infomation p{
      font-size: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>