<template>
	<div className="form-group" :class="wrapperClassName">
		<div className="form-label" v-if="label">
			<label>{{label}}</label>
		</div>
		<div className="form-input">
			<input :name = 'name' :class="className" :type="type" :placeholder="placeholder" @input ="onInput" />
		</div>
	</div>
</template>
<script>
	import HasError from './hasError'
	import Base from './base'
	export default{
		mixins:[Base],
		components:{
			HasError
		},
		props:{
			
		},

		methods:{
			onInput(e){
				
				FormHandling.handleChange(e.target)
			}
		}
	}
</script>