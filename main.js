import readline from 'readline';


const students = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'edu'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'silvia'
}]

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos','edu'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];


// configuramos la utilidad de node para que los datos se pidan y se muestren por consola.
const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout, 
});


function isNumber(value){
  const number = Number.parseInt(value)
  if(!Number.isNaN(number)){
    return false
  }else{
    return true
  }
}


let numberChoice= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(numberChoice)
// productor
function selectedNumber() {
  const promise = new Promise((resolve, reject) => { 
      rl.question('Selecciona un número:',(num) => {
          rl.pause();
          if (isNumber(num)) {
              num = Number.parseInt(num);
              resolve(num);
          } else {
              reject('Debes seleccionar un número de la lista.');
          }
      })
  })

  return promise;
}
async function Choices() {
  //const availableNumber = numberChoice(0, 15)
  
  let counter = 0
  
  do {
      try {
          counter++
          numberChoice = await selectedNumber()
      } catch (error) {
          console.log(error)
          process.exit(0)
      }
      
      numberChoice=''
      switch(numberChoice) {
      case 1:
        console.table(students)
         break;
      case 2:
        console.log('El numero de alumnnos es:',students.length)
         break;
      case 3:
        console.log('Nombre del alumno:',studentsName.name)
         break;
      case 4:
        console.table(students)
         break;
      case 5:
        console.table(students)
         break;
      case 6:
        console.log('Las alumnas son:',femaleStudents)
         break;
      case 7:
        console.log('El numero de chicas es:',femaleStudents.length)
        console.log('El numero de chicos es:',boyStudents.length)
         break;
      case 8:
        console.log('¿Todas las alumnas son chicas?',allfemale)
         break;
      case 9:
        console.log('Los estudiantes entre 20 y 25 años son:',selectedAge)
         break;
      case 10:
        console.log("Nuevo estudiante:",newStudent)
         break;
      case 11:
        console.log("El alumno mas joven es: "+nombre)
         break;
      case 12:
        console.log('La edad media de todos los alumnos es:',average)
         break;
      case 13:
        console.log("Nueva notas: "+allStudentsExam)
        console.log(students)
         break;
      case 14:
        console.log("Nueva notas: "+allStudentsExam)
        console.log(students)
         break;
      case 15:
        console.log('Los alumnos ordenados alfabeticamente son:',order)
         break;
      case 16:
        console.log()
         break;
      case 17:
        console.log()
         break;
      case 18:
        console.log()
         break;
      case 19:               
      default:
        console.log('Introduzca un número valido')
      break;
  }
  
      }
  while ( numberChoice >18 || numberChoice < 1) 
}
Choices()


/*async function playGame() {
  const MAX_TRIES = 5;
  const secretNumber = calculateRandomNumber(0, 100);
  let numberFromConsole;
  let counter = 0;

  do {
    try {
      counter++;
      numberFromConsole = await getNumberFromConsole();
    } catch (error) {
      console.log(error);
      process.exit(0);
    }

    if (numberFromConsole === secretNumber) {
      rl.close();
      console.log("Enhorabuena maquinote. Has acertado");
    } else {
      if (numberFromConsole < secretNumber) {
        console.log("El número secreto es mayor. Prueba otra vez.");
      } else {
        console.log(" El número secreto es menor. Inténtalo otra vez!");
      }
    }

    if (counter === MAX_TRIES) {
      console.log('has alcanzado el número máximo de intentos');
    } else {
      const diff = MAX_TRIES - counter;
      console.log(`Te quedan ${diff} intentos`);
    }

  } while (numberFromConsole !== secretNumber && counter < MAX_TRIES); // condiciones de continuar jugando
}

playGame();*/



