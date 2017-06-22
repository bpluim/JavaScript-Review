/* Declare and Define the functions here that will make the function calls below work properly */



var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function first(cb) {
  var firstName = names.shift();
  cb(firstName);
}

first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function last(names, cb) {
  var lastName = names.pop();
  cb(lastName);
}

last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//have the contains function return a boolean value for if the name is in the array or not.


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function contains(newName, names, cb) {
  for (var i = 0; i < names.length; i++) {
    if (names[i] === newName) {
      var yes = true;
    }
  }
  cb(yes);
}

contains('Colt', names, function(yes){
  if(yes){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through a transformation function

function map(numbers, cb) {
  for (var i = 0; i < numbers.length; i++) {
    numbers[i] = cb(numbers[i]);
  }
  return numbers;
}

map(numbers, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function uniq(names, cb) {
  var uniqArr = [];
  for (var i = 0; i < names.length; i++) {
    if (uniqArr.indexOf(names[i]) === -1) {
      uniqArr.push(names[i]);
    }
  }
  cb(uniqArr);
}

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function each(names, cb) {
  for (var i = 0; i < names.length; i++) {
    var indice = i;
    var item = names[i];
    cb(item, indice);
  }
}

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

function getUserById(idNumber, users, cb) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].id === idNumber) {
      var user = users[i];
    }
  }
  cb(user);
}

getUserById('16t', users, function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




//Looks through each value in the list, returning the first one that passes a truth test 
var numbers  = [1, 2, 3, 4, 5, 6];

function find(numbers, cb) {
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] = cb(numbers[i])) {
      return numbers;
    }
  }
}

find(numbers, function(num){ 
  return num % 2 == 0; //should return 2
});
