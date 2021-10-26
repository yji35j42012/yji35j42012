<template>
	<!-- <tr v-for="(item, index) in filterList" :key="item.tId"> -->
	<tr>
		<td width="10%">
			<label class="todolist_chk">
				<input type="checkbox" v-model="item.todo.done" :checked="item.todo.done">
				<span></span>
			</label>
		</td>
		<td width="20%">2020.03.26</td>
		<td width="50%">
			<span v-if="!edit">{{ item.todo.content}}</span>
			<span v-else>
				<input type="text" v-model="item.todo.content">
			</span>
		</td>
		<td width="20%">
			<button class="icon _delete"></button>
		</td>
	</tr>
</template>

<script>
	export default {
		props:{
			todo:{
				type: Object,
				required: true,
			},
			edit:{
				type: Boolean,
				default:false,
			}
		},
		data(){
			return{
				editContent:'',
			}
		},
		methods:{
			
		}
	}
// module.exports = {
// 	data: function() {
// 		return {

// 		}
// 	}
// }
</script>

<style>
.hello {
	background-color: #ffe;
}
</style>