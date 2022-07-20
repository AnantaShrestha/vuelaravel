import Errors from './errorHandling'
export default class FormHandling{
	constructor(){
		this.data = {}
		this.errors = {}
		this.group = ''
	}

	//FORM DATA FORMAT
	
	handleChange(target){
		let formData = this.data
		let fieldName = target.name
		let group =target.form.name
		let value  =target.value
		if(formData[group] === undefined){
			formData = {...formData,[group]:{[fieldName]:value}}
		}else{
			formData[group][fieldName] = value
		}
		this.data =formData
		

		return formData
		
		
	}

	//VALIDATION FORM
	validation(group,validationData){
		var formData = this.data[group] 
		var errors = this.errors

		validationData && validationData?.map((item)=>{
			let name =item?.name
			let rules = item?.rules.split('|')
			if((formData === undefined || formData[name] === undefined || formData[name] === '' ) && rules.includes('required')){
				if(errors[group] === undefined){
					errors =  {...errors,[group] : {[name]:`${name} field is required`}}
				}else{
					errors[group][name] = `${name} field is required`
				}
			}
		})
		//Errors.set(errors)
		return errors[group] ?? true
	}

	//validation message
	

	//GET FORM DATA
	getFormData(group){

		return this.data[group] ?? {}
	}

	getValidationErrors(group){

		return this.errors[group] ?? {}
	}

	setGroup(group){

		return this.group = group
	}

	getGroup(){

		return this.group
	}

	
}