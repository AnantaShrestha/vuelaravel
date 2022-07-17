<template>
	<form :method="method" :class="className" :name="name" @submit.prevent="onSubmit">
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
				let formName = e.target.getAttribute('name')
				let validate = FormHandling.validation(formName,this.validation)
		 		if(validate === true)

		 			return this.onFinish(FormHandling.getFormData(formName))
			}
		}
	}
</script>