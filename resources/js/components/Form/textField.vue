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
	export default{
		props:{
			wrapperClassName:{
				type:String,
				require:false
			},
			className:{
				type:String,
				require:false
			},
			label:{
				type:String,
				require:false
			},
			name:{
				type:String,
				require:true
			},
			type:{
				type:String,
				default:'text'
			},
			placeholder:{
				type:String,
				require:false
			},

		},
		methods:{
			onInput(e){
				FormHandling.formData(e.target.form.getAttribute('name'),e.target)
			}
		}
	}
</script>