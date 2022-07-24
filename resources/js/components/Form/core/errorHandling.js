export default class Error{
	constructor(){
		this.errors = {}
	}


	set(errors){
		
		this.errors =errors
	}

	get(){

		return this.errors
	}


}