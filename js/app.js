/*jshint esversion: 6*/

var requestInfo = document.querySelector('#requestResourceButton');
let contentDisplay;

requestInfo.addEventListener('click', function(){
  let display = document.querySelector('#contentContainer');
  if(resourceType.value === 'people'){
    people();
  }
  if(resourceType.value === 'planets'){
    planets(num);
  }
  if(resourceType.value === 'starships'){
    starships(num);
  }
  display.innerHTML = contentDisplay;
});

function people(){
  console.log('people test');
}