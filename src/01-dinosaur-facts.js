/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleDinosaurData` variable below to gain access to tickets data. This data is pulled from the `data/dinosaurs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all dinosaurs.
*/
const exampleDinosaurData = require("../data/dinosaurs");
// Do not change the line above.

/**
 * getTallestDinosaur()
 * ---------------------
 * Returns an object with the tallest dinosaur from the list. Converts from meters to feet.
 *
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 *
 * EXAMPLE:
 *  getTallestDinosaur(dinosaurs);
 *  //> { Brachiosaurus: 98.43 }
 */
// input : dino array
// output: an object with the key of "name" pointing to height of dino in feet. 
// 1. set variable and make the firstdino the default value (tallestDino)
// 2. loop thru array , compare dino.lengthinmeters to the set variable
// 3. and if it is taller, set it = to tallestDino. 
// 4. return the object of tallest dino.
function getTallestDinosaur(dinosaurs) {
  
  let tallestDino = dinosaurs[0];
  let ans = {};
  if(dinosaurs.length < 1){
    return {};
  }
  for(let i = 1; i < dinosaurs.length; i++){
    if(dinosaurs[i].lengthInMeters > tallestDino.lengthInMeters){
      tallestDino = dinosaurs[i];
    }
  }
  
  dinoName = tallestDino.name
   ans[dinoName] = tallestDino.lengthInMeters*3.281;
  // console.log(ans)
   return ans;
}

/**
 * getDinosaurDescription()
 * ---------------------
 * Returns a formatted description of a dinosaur. If the dinosaur cannot be found, returns an error message.
 *
 * NOTE: Carefully view the test output and example below to see how the returned string should be formatted.
 *
 * NOTE: The `\n` represents a new line in text.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {string} id - The unique identifier for the dinosaur.
 * @returns {string} A detailed description of the dinosaur.
 *
 * EXAMPLE:
 *  getDinosaurDescription(dinosaurs, "U9vuZmgKwUr");
 *  //> "Xenoceratops (ZEE-no-SEH-ruh-tops)\nXenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes. It lived in the Early Cretaceous period, over 77.5 million years ago."
 *
 *  getDinosaurDescription(dinosaurs, "incorrect-id");
 *  //> "A dinosaur with an ID of 'incorrect-id' cannot be found."
 */
function getDinosaurDescription(dinosaurs, id) {

for(let i = 0; i < dinosaurs.length; i++){
  if(dinosaurs[i].dinosaurId === id){
    if(dinosaurs[i].mya.length > 1){
    
      return `${dinosaurs[i].name} (${dinosaurs[i].pronunciation})\n${dinosaurs[i].info} It lived in the ${dinosaurs[i].period} period, over ${dinosaurs[i].mya[1]} million years ago.`
    
    } else {
    
      return `${dinosaurs[i].name} (${dinosaurs[i].pronunciation})\n${dinosaurs[i].info} It lived in the ${dinosaurs[i].period} period, over ${dinosaurs[i].mya[0]} million years ago.`
    }
  }
}  
  return `A dinosaur with an ID of '${id}' cannot be found.`;
}

/**
 * getDinosaursAliveMya()
 * ---------------------
 * Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value. If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
 *
 * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less. For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {number} mya - "Millions of years ago."
 * @param {string} key - An optional parameter. If included, for dinosaurs that lived during the `mya` value given, will return the value of the supplied key. Otherwise, returns the ID.
 * @returns {*[]} An array of values, which depend on the key given. The array should only include data of dinosaurs who lived during the given time period.
 *
 * EXAMPLE:
 *  getDinosaursAliveMya(dinosaurs, 150);
 *  //> ["YLtkN9R37", "GGvO1X9Zeh", "BFjjLjea-O", "V53DvdhV2A"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65);
 *  //> ["WHQcpcOj0G"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "name");
 *  //> ["Dracorex"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "unknown-key");
 *  //> ["WHQcpcOj0G"]
 */
function getDinosaursAliveMya(dinosaurs, mya, key) {
  let arr = [];
  for(let i = 0; i < dinosaurs.length; i++){
    if (key){
      if(dinosaurs[i].mya.length === 1){
        if ((dinosaurs[i].mya[0] - mya) <= 1 && (dinosaurs[i].mya[0] - mya) >= -1){
        arr.push(dinosaurs[i][key]);
      }
    }
      if(dinosaurs[i].mya.length === 2){
      if (dinosaurs[i].mya[0] >= mya && dinosaurs[i].mya[1] <= mya){
        arr.push(dinosaurs[i][key]);
      }
    } 
  }else {
    if(dinosaurs[i].mya.length === 1){
      if ((dinosaurs[i].mya[0] - mya) <= 1 && (dinosaurs[i].mya[0] - mya) >= -1){
        arr.push(dinosaurs[i].dinosaurId);
      }
    }
    if(dinosaurs[i].mya.length === 2){
      if (dinosaurs[i].mya[0] >= mya && dinosaurs[i].mya[1] <= mya){
        arr.push(dinosaurs[i].dinosaurId);
      }
    }
  }
}  
  return arr;
}
  
module.exports = {
  getTallestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
