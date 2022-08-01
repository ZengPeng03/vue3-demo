<!--
 * @Author: zengpeng zengpeng@tenorshare.cn
 * @Date: 2022-07-29 09:58:11
 * @LastEditors: zengpeng zengpeng@tenorshare.cn
 * @LastEditTime: 2022-08-01 10:52:13
 * @FilePath: \vue3app\src\views\ChatView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div :class="[layout === 'left' ? 'chatLeft' : 'chatRight']">
    <div class="leftItem" v-if="layout === 'left'">
      <div class="avatar">
        <el-avatar>user</el-avatar>
      </div>
      <div class="chatInfo">
        <div class="username">左左左</div>
        <div class="content">
          可以了可以了可以了可以了可以了可以了可以了可以了可以了可以了可以了可以了可以了可以了可以了可以了可以了可以了可以了可以了可以了可以了可以了可以了可以了可以了可以了
        </div>
        <div class="publishTime">2022.07.29 16:04:55</div>
      </div>
    </div>
    <div class="rightItem" v-else>
      <div class="chatInfo">
        <div class="username">友友有</div>
        <div class="content">
          Nowadays, I'm more interested in maintaining the existing translated
          docs and helping new contributors, while keeping an eye on
          localization and internationalization so that the language is not a
          barrier for anyone wanting to build with web technologies.
        </div>
        <div class="publishTime">2022.07.29 16:04:55</div>
      </div>
      <div class="avatar">
        <el-avatar>user</el-avatar>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    layout: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.chatLeft {
  display: flex;
  justify-content: flex-start;
}
.chatRight {
  display: flex;
  justify-content: flex-end;
}
.leftItem {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 20px;
}

.leftItem .avatar {
  width: 60px;
  height: 60px;
  margin-right: 10px;
  align-self: flex-start;
}
.leftItem .chatInfo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.leftItem .chatInfo .username {
  font-size: 14px;
  color: #060606;
  font-weight: 600;
}

.leftItem .chatInfo .content {
  text-align: left;
  font-size: 14px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  max-width: 75%;
  display: inline-block;
  word-wrap: break-word;
  word-break: normal;
  margin-top: 5px;
}
.leftItem .chatInfo .publishTime {
  font-size: 13px;
  color: #bdbdbd;
  padding-left: 5px;
  margin-top: 5px;
}

.rightItem {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
}
.rightItem .avatar {
  width: 60px;
  height: 60px;
  margin-left: 10px;
  align-self: flex-start;
}

.rightItem .chatInfo {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}

.rightItem .chatInfo .username {
  font-size: 14px;
  color: #060606;
  font-weight: 600;
}

.rightItem .chatInfo .content {
  text-align: left;
  font-size: 14px;
  background-color: #b2e281;
  padding: 10px;
  border-radius: 5px;
  max-width: 75%;
  display: inline-block;
  word-wrap: break-word;
  word-break: normal;
  margin-top: 5px;
}
.rightItem .chatInfo .publishTime {
  font-size: 13px;
  color: #bdbdbd;
  padding-left: 5px;
  margin-top: 5px;
}
</style>
