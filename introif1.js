
let isSnowing=true;
let personName="sara";
let personAge=21;

let saraObject={
    name:personName,
    age:personAge,
    isSnowing:isSnowing
}

//our condition if snows she cannot come to school 
if (saraObject.isSnowing==true) { //saraObject.isSnowing

    console.log("sara cannot come to school");
}else {
    console.log("sara can come to school");
}

//if she's under 18 then she cannot drive a car

if (saraObject.age<18) {
    console.log("sara cannot drive a car");
}else {
    console.log("sara can drive a car");
}

adminCredentials= {
    username:"admin",
    password:"1234"
}

// if username is admin and password is 1234 print out welcome admin
//else print out wrong username or password

if (adminCredentials.username == "user" && adminCredentials.password == "1234") {
    console.log("Welcome Admin");
} else {
    console.log("Incorrect password or username");
}

//else if
// if   a person is under 18 no tax if a person between 18 and 30 tax rate is %10 
// if a person over 30 tax rate is %30 and all other conditions 50%

let joeObject={
    name:"devrim",
    age:145,
    income:1000000
};

class Person  {
    constructor(name,age,income,taxRate) {
        this.name=name;
        this.age=age;
        this.income=income;
        this.taxRate=taxRate;
    }
    showNetto() {
        return this.income*(1-this.taxRate);


    }
}
// create an instance 
let person= new Person("Henry",31,10000,0.3)
console.log(person.showNetto());

let taxRate=0;

//let console out the starting init tax rate value
console.log(`the person tax rate is now ${taxRate}`)

if (joeObject.age<18 ) {
    taxRate=0;

} else if (joeObject.age>=18 && joeObject.age<30) {
    taxRate=0.1;

} else if (joeObject.age>=30 && joeObject.age<=50) {
    taxRate=0.3;

} else if (joeObject.age>50) {
    taxRate=0.5;


}

//end of if block

//let console out the starting init tax rate value
let nettoIncome=joeObject.income*(1-taxRate);
console.log(`${joeObject.name} tax rate is now ${taxRate}\nthe ${joeObject.name} net income is ${nettoIncome}$`);


