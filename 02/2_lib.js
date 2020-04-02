var person = {
  name: 'Eliseo'
}

Object.defineProperty(person, 'name', {
  set: function (newVal) { // <- el argumento contiene el valor que se asigno a la variable
    alert('Se asignó un valor a person.name = ' + newVal)
  }
})

/*
* nota: No se puede declarar un
* value junto con un get o set
*/
