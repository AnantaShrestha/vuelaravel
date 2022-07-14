<template>
	<button disabled={isLoading} :type="type" :class="className" >
		<span className="spinner" v-if="isLoading"></span>
		<span className="btn-span" v-else >{{text}}</span>
	</button>
</template>
<script>
	export default{
		props:{
			className:{
				type:String,
				require:false
			},
			type:{
				type:String,
				default:'button'
			},
			text:{
				type:String,
				require:true
			},
			isLoading:{
				type:Boolean,
				default:false
			}


		},
	}
</script>