export default class FormHandling{
	constructor(){
		this.data = {}
		this.errors = {}
	}

	//FORM DATA FORMAT
	formData(formName,target){
		let formData = this.data
		let fieldName = target.getAttribute('name')
		let value  =target.value
		if(formData[formName] === undefined){
			formData = {...formData,[formName]:{[fieldName]:value}}
		}else{
			formData[formName][fieldName] = value
		}
		this.data =formData
		

		return formData
		
		
	}

	//VALIDATION FORM
	validation(formName,validationData){
		var formData = this.data[formName] 
		var errors = this.errors

		validationData && validationData?.map((item)=>{
			let name =item?.name
			let rules = item?.rules.split('|')
			if((formData === undefined || formData[name] === undefined || formData[name] === '' ) && rules.includes('required')){
				if(errors[formName] === undefined){
					errors =  {...errors,[formName] : {[name]:`${name} field is required`}}
				}else{
					errors[formName][name] = `${name} field is required`
				}
			}
		})

		return errors[formName] ?? true
	}

	//GET FORM DATA
	getFormData(formName){

		return this.data[formName] ?? {}
	}

	getValidationErrors(formName){

		return this.errors[formName] ?? {}
	}

	
}