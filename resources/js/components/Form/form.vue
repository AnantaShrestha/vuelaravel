<template>
	<form :method="method" :class="className" :name="name" :ref="name">
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
			}
		},
		mounted(){
			
		}
	}
</script>