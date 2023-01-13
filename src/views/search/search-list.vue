<template>
    <div class="search-list">
		<search-header @searchComfirm="setSearchHistory"></search-header>
	</div>
</template>

<script>
import searchHeader from "./header"

export default {
    components: {
		searchHeader,
	},
    name: 'search-list',
    data() {
        return {

        };
    },
    computed: {},
    watch: {},
    methods: {
		setSearchHistory(searchName) {
			if (searchName) {
				this.searchList.unshift(searchName);
				localStorage.setItem('search-history', JSON.stringify(this.searchList))
			}
		},
	},
    created() {},
    mounted() {},
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {},
}
</script>
<style scoped>
</style>