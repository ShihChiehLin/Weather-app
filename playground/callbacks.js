var getUser = (id, callback) =>{
  var user={
    id:id,
    name:'Vikram'
  };
  // var user1={
  //   id:id
  // };
  setTimeout(()=>{
    callback(user);
  },3000);
  // callback(user1);
};

getUser(31, (userObject)=>{
  console.log(userObject);
});
