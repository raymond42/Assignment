console.log("Welcome to your contacts manager!");
function whatTodo(){
    console.log("1: List contacts");
    console.log("2: Add a contact");
    console.log("0: Quit")
    console.log("Here's the list of all your contacts");
}
do{
whatTodo();
var nmbr = prompt("Enter 1 to view your contact list, 2 to add new contact, or 0 to quit: ");
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
    var person3 = new Names(this.last , this.first);
    Names.push = (person3);
    console.log (person3.describe());
}
    var choice = parseInt(nmbr);
    switch(choice)
    {
        case 1 : 
            console.log("Here`s the list of all your contacts: ");
            for (var i=0; persons.length>i; i++)
            {
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
