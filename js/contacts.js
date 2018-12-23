/* 
Activity: Contact manager
*/
// TODO: Complete the program
/* console.log("Welcome to your contacts manager!");
function whatTodo(){
    console.log("1: List contacts");
    console.log("2: Add a contact");
    console.log("0: Quit")
}
do {
    whatTodo();
    var Person = {
    //initialize the personalbar
   /* init: function(last, first){
        this.last = last;
        this.first = first;
    },
    //Describe of peoples
   /* describe: function(){
        var description = "Last name: " + this.last + ", first name: " + this.first;
        return description;
    }
};
var person1 = Object.create(Person);
person1.init("Smith", "John");
var person2 = Object.create(Person);
person2.init("Doe", "Jane");
var person3;
var peoples = [];
peoples.push(person1);
peoples.push(person2);
function listPeople(){
    peoples.forEach(function(people){
        console.log(people.describe());
    });
}
//function addNewPerson (last, first){
    //person3 = Object.create(Person);
//  last = prompt("Enter last name for person: ");
//  first = prompt("Enter first name for person: ");

   /* 
   person3.init(last, first);
    var arrayPush = peoples.push(person3);
    return arrayPush;
}
    var nmbr = prompt("Enter 1 to view your contact list, 2 to add new contact, or 0 to quit: ");
    var choice = parseInt(nmbr);
    switch(choice){
        case 1 : 
            console.log("Here`s the list of all your contacts: ");
            listPeople();
            break;
        case 2 : 
            last = prompt("Enter last name for person: ");
            first = prompt("Enter first name for person: ");
            addNewPerson(last, first);
            break;
        default:
            break;
    }
}
while (choice != 0); 
*/

console.log("Welcome to your contacts manager!");
function whatTodo(){
    console.log("1: List contacts");
    console.log("2: Add a contact");
    console.log("0: Quit")
    console.log("Here's the list of all your contacts");
}
whatTodo();
function Names(last, first) {
    this.last = last;
    this.first = first;
}

Names.prototype.describe = function() {
    var description = "Last name: " + this.last + ", first name: " + this.first;
        return description;
}
 var person1 = new Names("Smith", "John");
 var person2 = new Names("Doe", "Jane");
 var persons = [];
 Names.push = (person1);
 Names.push = (person2);

 console.log(person1.describe());
 console.log(person2.describe());

function addNewPerson (last, first){
    this.last = last;
    this.first = first;
    var person3 = new Names(this.last + this.first);
    Names.push = (person3);
    console.log (person3.describe());
}
//last = prompt( "Enter the last name: ");
//first = prompt("Enter the first name: ");

do{

var nmbr = prompt("Enter 1 to view your contact list, 2 to add new contact, or 0 to quit: ");
    var choice = parseInt(nmbr);
    switch(choice){
        case 1 : 
            console.log("Here`s the list of all your contacts: ");
            for (var i=0; persons.length>i; i++){
                console.log(persons[i]);
            }
            break;
        case 2 : 
            last = prompt("Enter last name for person: ");
            first = prompt("Enter first name for person: ");
            addNewPerson(last, first);
            break;
        default:
            break;
    }

} while (choice != 0);

