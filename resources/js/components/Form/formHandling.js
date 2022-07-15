export default class FormHandling{
	constructor(){
		this.data = {}
	}

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

	getFormData(formName){

		return this.data[formName]
	}

	
}