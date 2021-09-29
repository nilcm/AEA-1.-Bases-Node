require('colors');
const { crearAlumne } = require ("./helpers/hores");

console.clear();

console.log(process.argv);

let nom = process.argv[2];
nom = nom.split('=')[1]; 

let hores = process.argv[3];
hores = hores.split('=')[1];  //sortida es un array

//console.log(nom);
//console.log(hores);

crearAlumne(nom, hores);

//crearFitxer(base);
//console.log(sortida);
//fs.writeFileSync(`taula${base}.txt`, sortida, (err) =>{
//    if(err) throw err;
//    console.log("El fitxer s'ha guardat correctament");
//});
