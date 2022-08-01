<template>
  <router-view />
  <nav>
    <h2>{{ $t("message.hello") }}</h2>
    <h1>{{ welcomeMessage }}</h1>
    <button @click="changeLanguage">切换语言</button>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/chat">Chat</router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      username: "zep",
    };
  },
  computed: {
    welcomeMessage() {
      return this.username + ", " + this.$t("message.welcome");
    },
  },
  methods: {
    changeLanguage() {
      if (this.$i18n.locale === "en") {
        this.$i18n.locale = "cn";
      } else {
        this.$i18n.locale = "en";
      }
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
