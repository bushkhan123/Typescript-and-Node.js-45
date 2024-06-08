let guest_list :string[] = ['Babar Azam','Sajal Ali','Hania Amir'] ;

// for(let i=0; i<guest_list.length; i++){

//     console.log('Dear Mr. ' + guest_list [i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

// }

let absent_guest :string = 'Babar Azam' ;

let new_guest :string = 'Imran Khan' ;

guest_list[0] = new_guest ;

for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite yoy in our party.\n\nThank You!\n\n')


}

console.log(`Mr. ${absent_guest} is not coming to the party.`);

console.log('Good News! We find Big Table So we are inviting 3 more guest.');


guest_list.unshift('Sir Zia Khan') ;
guest_list.splice(2 , 0 , 'Salman khan');
guest_list.push('Mahira Khan');

for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite yoy in our party.\n\nThank You!\n\n')


}
