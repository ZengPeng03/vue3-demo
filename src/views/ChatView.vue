<!--
 * @Author: zengpeng zengpeng@tenorshare.cn
 * @Date: 2022-07-29 09:58:11
 * @LastEditors: zengpeng zengpeng@tenorshare.cn
 * @LastEditTime: 2022-08-01 11:50:07
 * @FilePath: \vue3app\src\views\ChatView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <el-card class="box-card" shadow="never">
      <template #header>
        <div class="card-header">
          <!-- 设备下拉框 -->
          <el-select v-model="value" class="m-2" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <!-- 消息类型下拉框 -->
          <el-select v-model="value" class="m-2" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <!-- 联系人下拉框 -->
          <el-select v-model="value" class="m-2" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </template>
      <div class="chatBox">
        <!-- 左侧联系人无限滚动列表 -->
        <div class="leftContacts">
          <ul
            v-infinite-scroll="load"
            class="infinite-list"
            style="overflow: auto"
          >
            <li
              v-for="(i, index) in count"
              :key="i"
              class="infinite-list-item"
              @click="handleInfoBoxClick(index)"
            >
              <div :class="['infoBox', currentIndex === index ? 'active' : '']">
                <div class="userInfo">
                  <div class="avatar">
                    <el-avatar>user</el-avatar>
                  </div>
                  <div class="center">
                    <div class="nickname">zep</div>
                    <div class="content">ohello</div>
                  </div>
                </div>
                <div class="publishTime">2022.08.15</div>
              </div>
            </li>
          </ul>
        </div>
        <!-- 右侧聊天信息无限滚动列表 -->
        <div class="rightChatInfo">
          <ul
            v-infinite-scroll="load"
            class="infinite-list"
            style="overflow: auto"
          >
            <li v-for="i in count" :key="i" class="infinite-list-item">
              <div class="chatContainer">
                <chatItem :layout="'left'" />
                <chatItem :layout="'right'" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </el-card>
    <el-button-group class="ml-4">
      <el-button type="primary" v-for="item in months" :key="item">{{
        item
      }}</el-button>
    </el-button-group>
  </div>
</template>

<script>
import moment from "moment";
import { ref } from "vue";
import chatItem from "@/components/ChatItem.vue";

export default {
  components: {
    chatItem,
  },
  setup() {
    // 无限滚动
    const count = ref(0);
    const load = () => {
      count.value += 2;
    };

    // 下拉选项
    const value = ref("");
    const options = [
      {
        value: "Option1",
        label: "Option1",
      },
      {
        value: "Option2",
        label: "Option2",
      },
    ];

    // 左侧联系人列表
    const currentIndex = ref(null);
    const handleInfoBoxClick = (index) => {
      currentIndex.value = index;
    };

    // 最近三个月的月份按钮组
    let months = [];
    for (let i = 0; i < 3; i++) {
      const month = moment(new Date()).subtract(i, "months").format("MMMM");
      months.push(month);
    }
    months.reverse();
    console.log(months);

    return {
      count,
      load,
      handleInfoBoxClick,
      currentIndex,
      value,
      options,
      months,
    };
  },
};
</script>

<style lang="less" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chatBox {
  display: flex;
  min-height: 600px;
}

.box-card {
  width: 75%;
}

.leftContacts {
  width: 30%;
}
.rightChatInfo {
  width: 60%;
  background-color: #f2f2f2;
  overflow: hidden;
  margin-left: 40px;
}
// 无限滚动
.infinite-list {
  height: 600px;
  padding: 0;
  margin: 0;
  list-style: none;
}

// 滚动条样式
::-webkit-scrollbar {
  width: 6px;
  //   background-color: none;
}

/*定义滚动条轨道内阴影+圆角*/
::-webkit-scrollbar-track {
  border-radius: 10px;
}

/*定义滑块内阴影+圆角*/
::-webkit-scrollbar-thumb {
  background-color: #0003;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
}

.infinite-list-item {
  width: 100%;
  min-height: 70px;
  overflow: hidden;
}

.infoBox {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background: #f6fbfc;
  border-bottom: #f2f2f2 1px solid;
  padding: 15px 0;
  border-left: transparent 2px solid;
}
.infoBox:hover {
  background-color: #edf7f9;
}

.active {
  border-left: #d05454 2px solid !important;
  background-color: #f9f9f9;
}

.infoBox .userInfo {
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
}
.infoBox .avatar {
  width: 80px;
}
.infoBox .center {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}

.infoBox .center .content {
  width: 100%;
  word-break: break-all;
  text-align: left;
  color: #999;
}

.infoBox .center .nickname {
  color: #060606;
  font-weight: 600;
  margin-bottom: 15px;
}

.infoBox .publishTime {
  width: 120px;
  color: #bababa;
  font-size: 12px;
}

/* 文本换行 */
.wordWrap {
  /*这两行代码可以解决大部分场景下的换行问题*/
  word-break: break-all;
  word-wrap: break-word;
  /*但在有些场景中，还需要加上下面这行代码*/
  white-space: normal;
}

/* 右侧聊天列表 */
.chatContainer {
  padding: 0 20px;
}
</style>
