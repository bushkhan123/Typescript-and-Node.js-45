let guest_list :string[] = ['Babar Azam','Sajal Ali','Hania Amir'] ;

for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr. ' + guest_list [i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

}

let absent_guest :string = 'Babar Azam' ;

let new_guest :string = 'Imran Khan' ;

guest_list[0] = new_guest ;

for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite yoy in our party.\n\nThank You!\n\n')


}

console.log(`Mr. ${absent_guest} is not coming to the party.`);

