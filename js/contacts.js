let contacts = [];
let quit = false;

console.log("Welcome to your contacts manager!");

while (!quit) 
{
    console.log("1: List contacts");
    console.log("2: Add a contact");
    console.log("0: Quit");
    let choice = prompt("Enter Choice");

    if(choice == 0) 
    {
        quit = true;
    }

    if(choice == 1) 
    {
        console.log("Here's the list the of your contacts");
        console.log("Last name: Smith, First name: John");
        console.log("Last name: Doe, First name: Jane");

        contacts.forEach(function(contact)
        {
            console.log("Last name:"+contact[1]+", First name:"+contact[0]);
        });
    }

    if(choice == 2) 
    {
        let fname = prompt("Enter First Name")
        let lname = prompt("Enter Last Name");
        let contact = [fname, lname];
        contacts.push(contact);
        console.log("Contact added");
        
    }
}