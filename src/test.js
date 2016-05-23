function helloWorld() {
	return "Hello world!";
}

var Person = function() {};

Person.prototype.helloSomeone = function(toGreet) {
	return this.sayHello() + " " + toGreet;
};

Person.prototype.sayHello = function() {
	return "Hello";
};

describe("Hello world", function() {
	it("hello", function() {
		expect(helloWorld()).toEqual("Hello world!");
	});

	it("world", function() {
		expect(helloWorld()).toContain("world");
	});
});

describe("Person", function() {
	it("calls the sayHello() function", function() {
		var fakePerson = new Person();
		spyOn(fakePerson, "sayHello");
		fakePerson.helloSomeone("world");
		expect(fakePerson.sayHello).toHaveBeenCalled();
	});

	it("greets the world", function() {
		var fakePerson = new Person();
		spyOn(fakePerson, "helloSomeone");
		fakePerson.helloSomeone("world");
		expect(fakePerson.helloSomeone).toHaveBeenCalledWith("world");
	});

	it("greets the world", function() {
		var fakePerson = new Person();
		spyOn(fakePerson, "helloSomeone");
		fakePerson.helloSomeone("world");
		expect(fakePerson.helloSomeone).not.toHaveBeenCalledWith("foo");
	});
});