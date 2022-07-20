<template>
	<div class="validation-error-wrapper">
		<span>{{message}}</span>
	</div>
</template>
<script>
	export default{
		props:{
			message:{
				type:String,
				require:false
			}
		}
	}
</script>