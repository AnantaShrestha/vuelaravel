<template>
	<form :method="method" :class="className" :name="group" @submit.prevent="onSubmit">
		<slot :group='group'></slot>
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
			group:{
				type:String,
				default:'form'
			},
			validation:{
				type:[Array,Object],
				default:[]
			},
			onFinish:{
				type:Function,
				require:true,
			},
		},
		data(){
			return{
				errors:{}
			}
		},
		methods:{
			onSubmit(e){
				FormHandling.setGroup(this.group)
				let validate = FormHandling.validation(this.group,this.validation)
		 		if(validate === true)

		 			return this.onFinish(FormHandling.getFormData(this.group))
			}
		}
	}
</script>