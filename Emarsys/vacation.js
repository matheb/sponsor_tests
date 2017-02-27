//Author: Boglárka Máthé
//Time: 27/02/2017

// A függvény a legköltésghatékonyabb útvonalat kell visszadja

//A bemenet egy objektum, amelyben a célpontok mint kulcsok és a függőségeik, mint ezek értékei jelennek meg.
//Először azt az esetet vizsgálom, ha minden célponthoz 1 vagy nulla függőség tartozik.

function perfectSequence(destinations) {
  var lines = [];
  var lines2 = [];
  var lines3 = [];

  // A közvetlen függőségek kigyűjtése
  for (var destination in destinations) {
    if ( destinations.hasOwnProperty(destination)) {
      //console.log( destination + ' -> ' + destinations[destination]);
      if ( destinations[destination] != null) {
        if ( destinations[destination].isArray || typeof destinations[destination] == "object" ) {
          throw new Error(" Invalid dependency");
        } else if (destinations[destination] == '' || destinations[destination] == 'null'){
          destinations[destination] = null;
        }else {
          var line = [destination, destinations[destination]];
          lines.push(line);
        }
      } else {
        lines.push(destination);
      }
    }
  }

  // Sortolom a listát, hogy egymástól függő célpontoknak legyen prioritása
  lines.sort(function(a,b){
    return b.length - a.length;
  });
  //console.log(lines)

  //Az összefüggő útvonalak összekapcsolása
  for (var i = 0 ; i < lines.length-1; i++){
    for ( var j = i + 1; j < lines.length; j++) {
      for ( var k = 0; k < lines[j].length; k++) {
        if ( lines[i].includes(lines[j][k])){
          if ( lines[i].indexOf(lines[j][k]) > k) {
            lines[i] = lines[i].concat(lines[j]);
            lines[i] = Array.from(lines[i])
          } else {
            lines[i] = lines[j].concat(lines[i])
            // Ha független állomás volt, stringgé concatenálja az elemeket egyébként
            lines[i] = Array.from(lines[i])
          }
        }
      }
    }
    lines2.push(lines[i]);
  }

  // Egy teljes lehetséges sorrend, minden állomást egyszer érintve
  for (var i = 0 ; i < lines2.length; i++){
    for ( var k = 0; k < lines2[i].length; k++) {
      if ( !lines3.includes(lines[i][k]) && lines[i][k] != ',' ) {
        lines3.push(lines[i][k]);
      }
    }
  }

  return lines3.reverse();
}


var destinations = {
  'A' : 'C',
  'B' : 'A',
  'C' : 'B',
  'D' :'E',
  'E' : '',
  'F' : null,
  'G' : 'F'
}

console.log(perfectSequence(destinations));

module.exports = perfectSequence;
