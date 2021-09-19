//shint esversion:6

exports.getDate = function (){

  const today = new Date();

  let currentDay = today.getDay();
const options ={
    weekday: "long",
    day: "numeric",
    month: "long"
};

return today.toLocaleDateString ("en-US", options);

};


exports.getDay = function (){

  const today = new Date();

  let currentDay = today.getDay();
  const options ={
    weekday: "long",
    
};

return today.toLocaleDateString ("en-US", options);


}