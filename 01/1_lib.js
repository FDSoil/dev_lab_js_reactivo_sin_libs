var person = {}

// implícita
//person.name = 'Eliseo'

// explícita
Object.defineProperty(person, 'name', {
  value: 'Eliseo'
})

/*
* Al objeto person, en el nodo 'name',
* se asigna el valor 'Eliseo'
* person['name'] = 'Eliseo'
*/
