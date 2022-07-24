import Error from './core/errorHandling'
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
		group:{
			type:String,
			require:false
		},
		errors:{
			type: Object,
            default: () => new Error
		}

	},
	
}