//Author: Boglárka Máthé
//Time: 27/02/2017

// A függvény a legköltésghatékonyabb útvonalat kell visszadja

//A bemenet egy objektum, amelyben a célpontok mint kulcsok és a függőségeik, mint ezek értékei jelennek meg.
//Először azt az esetet vizsgálom, ha minden célponthoz 1 vagy nulla függőség kerül.

function perfectSequence(destinations) {
  var lines = [];
  for (var destination in destinations) {
    if ( destinations.hasOwnProperty(destination)) {
      console.log( destination + ' -> ' + destinations[destination]);
      if ( destinations[destination] != null) {
        var line = [destination, destinations[destination]];
        lines.push(line);
      } else {
        lines.push(destination);
      }
    }
  }
  console.log(lines);
  for (var i = 0; i < lines.length-1; i++) {
    console.log(i)
    for (var j = 0; j < lines[i+1].length; j++) {
      if ( !lines[i].includes(lines[i+1][j])) {
        console.log('nincs benne ', lines[i+1][j])
        lines[i][lines[i].length] = lines[i+1][j];
      }
    }
  }
  console.log(lines);
  return lines;
}


var destinations = {
  'A' : 'C',
  'B' : 'D',
  'C' : null,
  'D' :'E',
  'E' : null,
  'F' : null,
  'G' : 'F'
}

perfectSequence(destinations);

module.exports = perfectSequence;
