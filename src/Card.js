var fetch = require("node-fetch");
import React from 'react';

let defaultKanji = [
  'dog',
  'cat',
  'bird',
]
let kanjiList = [];
 
const fetchKanji = async function(search) {
  const resp = await fetch (`https://kanjialive-api.p.rapidapi.com/api/public/search/${search}` 
    ,{headers:{"X-RapidAPI-Key": "248efa6aa8msh5005b7a79ccea0ap133b74jsn6fc7e3d0b298"}})
  const myJSON = await resp.json();
  kanjiList.push(myJSON[0].kanji.character);
  console.log(myJSON)
} 
fetchKanji('rain');
console.log('list',kanjiList);


// 'word' is a prop destructed from an object that is passed from app.js
const Card = ({word}) => {

};

export default Card