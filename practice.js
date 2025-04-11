// this file is for practicing the concepts of the miniexpress.js file


//           method property 
const routes = {

};
function sayHello() {
    console.log('Hello');
}

function add (first ,second, callback){
    routes[first + second] = callback;
}
add('firstName', 'lastName', ()=>{ //   anonymous function inside routes object
    console.log('Hello');
})
add('firstName', 'lastName', sayHello); //   not anonymous function inside routes object
routes['firstNamelastName']();
console.log(routes);

//           method property 