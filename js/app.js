/*jshint esversion: 6*/

const requestInfo = document.querySelector('#requestResourceButton');

requestInfo.addEventListener('click', function(){

  if(resourceType.value === 'people'){
    people(resourceId.value);
  }
  if(resourceType.value === 'planets'){
    planets(resourceId.value);
  }
  if(resourceType.value === 'starships'){
    starships(resourceId.value);
  }
});

//Get character info
function people(num){
  oReq = new XMLHttpRequest();
  oReq.addEventListener('load', updateDisplay);
  oReq.addEventListener('load', peopleSpecies);
  oReq.open('GET', 'http://swapi.co/api/people/' + num + '/' );
  oReq.send();
}
//Get character species
function peopleSpecies(){
  const requestData = JSON.parse(this.responseText);
  const species = requestData.species;
  oReq = new XMLHttpRequest();
  oReq.addEventListener('load', updateSpecies);
  oReq.open('GET', species);
  oReq.send();
}
//Append Species
function updateSpecies(){
  const requestData = JSON.parse(this.responseText);
  const display = document.querySelector('#contentContainer');
  console.log(requestData.name);
  const personSpecies = document.createElement('p');
  personSpecies.innerHTML = "Species: " +requestData.name;
  display.appendChild(personSpecies);
}
//Append Name and Gender
function updateDisplay(){
  const requestData = JSON.parse(this.responseText);
  const display = document.querySelector('#contentContainer');
  console.log(requestData);
  const personName = document.createElement('h2');
  const personGender = document.createElement('p');
  personName.innerHTML = 'Name: ' + requestData.name;
  personGender.innerHTML = 'Gender: ' + requestData.gender;
  display.appendChild(personName);
  display.appendChild(personGender);
}

function planets( num ){
  oReq = new XMLHttpRequest();
  oReq.addEventListener('load', updatePlanet);
  oReq.open('GET', "http://swapi.co/api/planets/" + num + '/');
  oReq.send();
}

function updatePlanet(){
  const requestData = JSON.parse(this.responseText);
  const display = document.querySelector('#contentContainer');
  console.log(requestData);
  const planetName = document.createElement('h2');
  const planetTerrain = document.createElement('p');
  const planetPopulation = document.createElement('p');
  planetName.innerHTML = 'Name: ' + requestData.name;
  planetTerrain.innerHTML = 'Terrain: ' + requestData.terrain;
  planetPopulation.innerHTML = 'Population: ' + requestData.population;
  display.appendChild(planetName);
  display.appendChild(planetTerrain);
  display.appendChild(planetPopulation);
}