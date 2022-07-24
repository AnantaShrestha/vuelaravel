<template>
	<form :method="method" :class="className" :name="group" @submit.prevent="onSubmit">
		<slot 
			:group='group
		'>
			
		</slot>
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
		methods:{
			onSubmit(){
				FormHandling.setFormGroup(this.group)
				let formData =FormData.get(this.group)
				let validated = FormData.validated(this.validation,formData)
  	
				if(validated === true){
					FormData.remove(this.group)
					return this.onFinish(formData)
				}
			}
		}
	}
</script>