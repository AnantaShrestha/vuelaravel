<template>
	<form :method="method" :class="className" :name="name" :ref="name" @submit.prevent="onSubmit">
		<slot></slot>
	</form>
</template>

<script>
	export default{
		props:{
			method:{
				type:String,
				default:'post'
			},
			className:{
				type:String,
				require:false
			},
			name:{
				type:String,
				require:false
			},
			validation:{
				type:[Array,Object],
				require:false
			},
			onFinish:{
				type:Function,
				require:true,
			},
		},
		mounted(){
			
		},
		methods:{
			onSubmit(e){
				let data = FormHandling.getFormData(e.target.getAttribute('name'));
				return this.onFinish(data)
			}
		}
	}
</script>