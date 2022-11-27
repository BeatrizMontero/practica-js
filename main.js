import readline from 'readline';


const students = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'edu'
},
{
  age: 39,
  examScores: [],
  gender: 'female',
  name: 'luisa'
},
{
  age: 25,
  examScores: [],
  gender: 'male',
  name: 'victor'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'silvia'
}]

const availableNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos','edu','cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
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
  if(Number.isNaN(number)){
    return false
  }else{
    return true
  }
}

// productor
function selectedNumber() {
  const promise = new Promise((resolve, reject) => { 
      rl.question('Selecciona una opción:',(num) => {
          rl.pause();
          if (isNumber(num)) {
              num = Number.parseInt(num);
              resolve(num);
          } else {
              reject('La opción seleccionada no es válida.');
          }
      })
  })

  return promise;
}
function calculateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}
async function Choices() {
  //const availableNumber = numberChoice(0, 15)
  
  let counter = 0
  let numberChoice
  do {
    console.log("---MENU---")
    console.log("1.Mostrar en formato de tabla todos los alumnos.")
    console.log("2.Mostrar por consola la cantidad de alumnos que hay en clase")
    console.log("3.Mostrar por consola todos los nombres de los alumnos.")
    console.log("4.Eliminar el último alumno de la clase.")
    console.log("5.Eliminar un alumno aleatoriamente de la clase.")
    console.log("6.Mostrar por consola todos los datos de los alumnos que son chicas.")
    console.log("7.Mostrar por consola el número de chicos y chicas que hay en la clase.")
    console.log("8.Mostrar true o false por consola si todos los alumnos de la clase son chicas.")
    console.log("9.Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.")
    console.log("10. Añadir un alumno nuevo.")
    console.log("11.Mostrar por consola el nombre de la persona más joven de la clase.")
    console.log("12.Mostrar por consola la edad media de todos los alumnos de la clase.")
    console.log("13.Mostrar por consola la edad media de las chicas de la clase.")
    console.log("14.Añadir nueva nota a los alumnos. Por cada alumno de la clase")
    console.log("15.Ordenar el array de alumnos alfabéticamente según su nombre.")
    
    try {
          counter++
          numberChoice = await selectedNumber()
          console.log("Opción"+numberChoice)

      } catch (error) {
          console.log("No has metido un numero y se cancela la ejecucion.")
          process.exit(0)
      }
      switch(numberChoice) {
      case 1:
        console.table(students)
         break;
     case 2:
        console.log('El numero de alumnnos es:',students.length)
         break;
      case 3:
        students.forEach(studentsName=>{console.log('Nombre del alumno:',studentsName.name)});
        break;
      case 4:
        students.pop()
        console.table(students)
        break;
      case 5:
        console.log("Numero de alumnos:"+students.length)
        const ramdomStudent=calculateRandomNumber(0, students.length)  
        const random=students.splice(ramdomStudent, 1)
        console.table(students)
        break;
      case 6:
        const femaleStudents=students.filter(person=>person.gender==='female')
        console.log('Las alumnas son:',femaleStudents)
        break;
      case 7:
        const girlStudents=students.filter(person=>person.gender==='female')
        console.log('El numero de chicas es:',girlStudents.length)
        const boyStudents=students.filter(person=>person.gender==='male')
        console.log('El numero de chicos es:',boyStudents.length)
        break;
      case 8:
        const allfemale=students.every(person=>person.gender==='female')
        console.log('¿Todas las alumnos son chicas?',allfemale)
        break;
      case 9:
        const selectedAge=students.filter(person=>person.age>=20 && person.age<=25) 
        console.log('Los estudiantes entre 20 y 25 años son:',selectedAge)
        break;
      case 10:
        const randomAlum = calculateRandomNumber(0,availableNames.length-1)
        const randomName = availableNames[randomAlum]
        const randomAge = calculateRandomNumber(20,50)
        const genero = availableMaleNames.indexOf(randomName);

        let gener=""
        if(genero == -1 ){
          gener = "female"
        }else{
          gener = "male"
        }
        const newStudent = {
          age:randomAge, 
          examScores:[],
          gender:gener,
          name: randomName 
        };

         console.log("Nuevo estudiante:",newStudent)
         break;
      case 11:
        let edadMinima = 999
        let nombre
        students.forEach(function(element){
          let edad= element.age
          if(edad < edadMinima){
            nombre = element.name
          }
        });
        console.log("El alumno mas joven es: "+nombre)
        break;
      case 12:
        let average = students.reduce((acc, curr) => acc + curr.age, 0) / students.length
        console.log('La edad media de todos los alumnos es:',average)
        break;
      case 13:
        const girlsAverage=students.filter((person)=>person.gender==='female')
        const gAverage= girlsAverage.reduce((acc, curr) => acc + curr.age, 0) / girlsAverage.length
        console.log('La edad media de las chicas es:',gAverage)
        break;
      case 14:
        const allStudentsExam = students.map(item =>{
          item.examScores = calculateRandomNumber(1, 10)
          return item.examScores
        })
        console.log(students)
        break;
      case 15:
        const order=students.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          else{
           return 0;
        }});
        console.log('Los alumnos ordenados alfabeticamente son:',order)
         break;
      default:
        console.log('Aplicacion cerrada.')
        break;
  }
  
  }while ( numberChoice > 0 && numberChoice < 16) 
}
Choices()






