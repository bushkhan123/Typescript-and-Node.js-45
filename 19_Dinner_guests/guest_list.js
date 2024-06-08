var guest_list = ['Babar Azam', 'Sajal Ali', 'Hania Amir'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list [i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
var absent_guest = 'Babar Azam';
var new_guest = 'Imran Khan';
guest_list[0] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite yoy in our party.\n\nThank You!\n\n')
// }
// console.log(`Mr. ${absent_guest} is not coming to the party.`);
// console.log('Good News! We find Big Table So we are inviting 3 more guest.');
//array mai teen guest add kiya hain.
guest_list.unshift('Sir Zia Khan');
guest_list.splice(2, 0, 'Salman khan');
guest_list.push('Mahira Khan');
// yahan per mane 6 guest ke array ko print karwaya hai.
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite yoy in our party.\n\nThank You!\n\n')
// }
// sorry message to guest for not inviting.
// console.log('\nSorry we can not arrange big table, Only Two peoples will be invited.');
// yahan per mene guest remove kiya hain.
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    // console.log(`Sorry Mr. ${remove_guest}, You are not invited for Dinner.`);
}
// Hamare bache howe 2 invited guest.
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nYou are still invited.\n\nThank You!\n\n')
// }
//mene sare guest array se remove kar diya.
guest_list.splice(0, 2);
console.log(guest_list);
//Exercise 19
//print a message indicating the number of people you are inviting to dinner.
console.log("total number of guest are:".concat(guest_list.length));
