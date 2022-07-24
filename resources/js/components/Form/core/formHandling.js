import Error from './errorHandling'
export default class FormHandling{
	constructor(){
		this.currentGroup = ''
	}
	//handle input change
	handleChange(target){
		let data = {
			value:target.value,
			group:target.form.name,
			fieldName:target.name
		}

		FormData.set(data)

	}

	//set current group
	setFormGroup(group){

		return this.currentGroup = group
	}


	//get current form group
	getFormGroup(){

		return this.currentGroup
	}



}