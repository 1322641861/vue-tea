<template>
  <div id="app">
    <router-view></router-view>
	<main-tab v-show="$route.meta.show"></main-tab>
  </div>
</template>

<script>
import mainTab from "@/components/content/mainTab";

export default {
  name: 'App',
  components: {
	  mainTab
  }
}
</script>

<style>
	#app {
		height: 100vh;
		/* overflow: hidden; */
	}
</style>
