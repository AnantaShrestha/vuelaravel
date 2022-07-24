import Error from './errorHandling'
export default class FormData{
	constructor(){
		this.data={}
	}

	//set form data
	set(data){
		let manageData =this.data

		if(manageData[data.group] === undefined){
			manageData = {...manageData,[data.group]:{[data.fieldName]:data.value}}
		}else{
			manageData[data.group][data.fieldName] = data.value
		}

		this.data = manageData
	}

	// validate form data
	validated(rules,data){
 		let errors = {}
 		rules && rules?.map((item,i)=>{
 			let field=item?.name
 			let fieldRules = item?.rules
 			let fieldRuleArr =fieldRules?.split('|')
 			
 			if(fieldRuleArr.includes('required') && (data === undefined || data[field] === undefined || data[field]==='')){
 				errors =  {...errors,[field]:`${field} field is required`}
 			}
 			
 		})
 		new Error().set(errors)
 		return Object.keys(errors).length ===  0 ? true : errors
	}

	//get form data
	get(group){

		return this.data[group]
	}

	//remove form data
	remove(group){

		delete this.data[group];
	}
}