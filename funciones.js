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
    age: 35,
    examScores: [],
    gender: 'female',
    name: 'ana'
  }]
  
const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos','edu'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];
const availableNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos','edu','cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];

// 1 mostrar en formato tabla los alumnos

const studentsTable = console.table(students)

//2 mostrar por consola la cantidad de alumnos que hay en la clase

const numberOfStudents=console.log('El numero de alumnnos es:',students.length)

//3 mostrar todos los nombres de los alumnos
const nameOfStudents = students.forEach(studentsName=>{console.log('Nombre del alumno:',studentsName.name)});


//4 eliminar el ultimo alumno de la clase
const laststudent = students.pop()
console.table(students)
  
//5 eliminar un alumno aleatorio
function calculateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }
const ramdomStudent=calculateRandomNumber(1,4)  
const random=students.splice(ramdomStudent, 1)

console.table(students)

//6 montrar por consola todos los datos de los alumnos que son chicas
const femaleStudents=students.filter(person=>person.gender==='female')
console.log('Las alumnas son:',femaleStudents)

//7 Mostrar por consola el número de chicos y chicas que hay en la clase
const girlStudents=students.filter(person=>person.gender==='female')
console.log('El numero de chicas es:',femaleStudents.length)
const boyStudents=students.filter(person=>person.gender==='male')
console.log('El numero de chicos es:',boyStudents.length)

//8 Mostrar true o false por consola si todos los alumnos de la clase son chicas
const allfemale=students.every(person=>person.gender==='female')
console.log('¿Todas las alumnas son chicas?',allfemale)

//9 Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años
const selectedAge=students.filter(person=>person.age>=20 && person.age<=25)
console.log('Los estudiantes entre 20 y 25 años son:',selectedAge)

// 10 Añadir un alumno nuevo con los siguientes datos:
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


//11 Mostrar por consola el nombre de la persona más joven de la clase.
let edadMin = 999
let nombre
students.forEach(function(element){
  let edad= element.age
  if(edad < edadMin){
    nombre = element.name
  }
});
console.log("El alumno mas joven es: "+nombre)

//12 Mostrar por consola la edad media de todos los alumnos de la clase.
let average = students.reduce((acc, curr) => acc + curr.age, 0) / students.length
console.log('La edad media de todos los alumnos es:',average)
  
//13 Mostrar por consola la edad media de las chicas de la clase.
const girlsAverage=students.filter((person)=>person.gender==='female')
const gAverage= girlsAverage.reduce((acc, curr) => acc + curr.age, 0) / girlsAverage.length
console.log('La edad media de las chicas es:',gAverage)


//14  Añadir nueva nota a los alumnos. Por cada alumno de la clase, 
const allStudentsExam = students.map(item =>{

  item.examScores = calculateRandomNumber(1, 10)
  return item.examScores

})

console.log("Nueva notas: "+allStudentsExam)
console.log(students)


//15 Ordenar el array de alumnos alfabéticamente según su nombre.
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
