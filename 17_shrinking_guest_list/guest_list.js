"use strict";
let guest_list = ['Babar Azam', 'Sajal Ali', 'Hania Amir'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list [i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
let absent_guest = 'Babar Azam';
let new_guest = 'Imran Khan';
guest_list[0] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite yoy in our party.\n\nThank You!\n\n')
// }
console.log(`Mr. ${absent_guest} is not coming to the party.`);
console.log('Good News! We find Big Table So we are inviting 3 more guest.');
guest_list.unshift('Sir Zia Khan');
guest_list.splice(2, 0, 'Salman khan');
guest_list.push('Mahira Khan');
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite yoy in our party.\n\nThank You!\n\n');
}
console.log('\nSorry we can not arrange big table, Only Two peoples will be invited.');
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`Sorry Mr. ${remove_guest}, You are not invited for Dinner.`);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nYou are still invited.\n\nThank You!\n\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
