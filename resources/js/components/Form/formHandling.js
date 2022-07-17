export default class FormHandling{
	constructor(){
		this.data = {}
		this.errors = {}
	}

	//FORM DATA FORMAT
	formData(target){
		let formData = this.data
		let fieldName = target.getAttribute('name')
		let formName =target.form.getAttribute('name')
		let value  =target.value
		target.nextSibling && (
			target.classList.remove('invalid'),
			target.nextSibling.remove()
		)
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
		this.validationMessage(formName,errors[formName])

		return errors[formName] ?? true
	}

	//validation message
	validationMessage(formName,errors){
		let form = document.querySelector(`form[name = ${formName}]`)
		errors && Object.entries(errors)?.map(([key,error],i)=>{
			let fieldElement = form.querySelector(`input[name=${key}]`) || 
						   		form.querySelector(`textarea[name=${key}]`)
			let div=document.createElement('div')
				div.classList.add('validation-error-wrapper')
			let span =document.createElement('span')
				div.append(span)
			if(fieldElement){
				span.innerHTML = error
				fieldElement.classList.add('invalid')
				fieldElement.nextSibling && (fieldElement.nextSibling.remove())
				fieldElement.parentNode.append(div)
			}
		})
	}

	//GET FORM DATA
	getFormData(formName){

		return this.data[formName] ?? {}
	}

	getValidationErrors(formName){

		return this.errors[formName] ?? {}
	}

	
}