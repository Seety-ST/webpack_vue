<template>
	<div>
		<g-header></g-header>
		<h1 class="logo">{{age}}</h1>
		<ul class="list">
			<li v-for="item in lists" >{{item.id}}</li>
		</ul>
		<g-footer></g-footer>
	</div>
	
</template>
<script>


// 引入公共头部start
import header from '../../components/header.vue';
import footer from '../../components/footer.vue';

// 引入公共头部end
export default {
	data() {
		return {
			age:'',
			lists:[]
		}
	},

	created () {
		// 组件创建完后获取数据，这里和1.0不一样，改成了这个样子
		this.get_data();
		
	},
	methods: {
		get_data: function(params) {
			var self = this
			if (!params) params = {
				name : 'nihao',
				age : 2,
			}
			self.$http.post('/test', [{
				params:{
					'name' : "nihao",
					'age':1,
				},
				dataType: 'json' 
			}])
			.then(function(res){
			    // 响应成功回调
            			var res = JSON.parse(res.bodyText);
			    
			    console.log(res);
			    self.age= res.age;
			}, function(response){
			    // 响应错误回调
			});
			
		},
	},
	components : {
		'g-header' : header,
		'g-footer' : footer
	}
}
</script>
<style lang="scss">
  @import "../../style/page/index";

</style>