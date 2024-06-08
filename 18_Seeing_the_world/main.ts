//store the locations in a array.make sure the array is not in alphabetic order.

let places :string[] = ["china","turkey","india","sudia arabia","australia"];
//prints your array in its original order.
console.log('original ' + places);
//print your array in a alphabetical order without modifying the actual list.
console.log('copy ' + [...places].sort());
//show that your array is still in its original order by printing it. 
console.log('original ' + places);
//print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy ' + [...places].sort().reverse());
//show that your array is still in its original order by printing it again.
console.log('original ' + places);
//reverse the array of your list.print the array to show that its order has changed.
console.log('original ' + places.reverse());

//reverse the order of your list again.print the list to show it's back to its original order.
console.log('original ' + places.reverse());
//sort your array so it's stored in alphabetical order.print the array to show that its order has been changed.
console.log('original ' + places.sort());
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('original ' + places.sort().reverse());






