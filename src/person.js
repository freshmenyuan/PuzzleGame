class Person{
	constructor(firstname,lastname){
		//objest's own properties
		this._firstname = firstname;
		this._lastname = lastname;
		// this.getName() = this.getName().bind(this);
		setTimeout(() => {
			console.log(this._lastname);
		},2000);
	}

	//prototype functions
	getName(){
		return this._firstname;
	}

	printName(){
		console.log(this.getName());
	}
}

class Student extends Person{
	constructor(){
		super();
	}


}

export Person;