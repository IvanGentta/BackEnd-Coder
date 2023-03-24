// Es una base de datos no relacional ()
// $ mongod --dbpath "C:\Users\micro\OneDrive\Escritorio\Yentta\MONGO"
// elejis donde guardar la base de datos conviene en una terminal aparte del vsc.
// En otra terminal mongosh para conectar el cliente al servidor de base de datos
// Se pueden gestionar varias bases de datos distintas desde el mismo servidor de base de datos.

//Comandos
// · show dbs = Muestra las bases de datos existentes
// · use db nombreDeBaseDeDato = cambia de base de dato o en caso de no existir la crea,
// pero hasta no tener nada guardado adentro no se guarda la base
// · crear colecion = db.createCollection('usuarios') | {ok: 1} = salió bien
// · show collections = muestra las colecciones de la base de datos donde estamos posicionados
// · db.nombreDeColeccion.find() = muestra el contenido de la coleccion
// · db.nombreDeColeccion.drop() = elimina la coleccion
// · db.dropDatabase() = elimina la base de datos donde estoy posicionado

//CRUD - Create Update Read Delete
// · db.nombreDeLaColeccion.insertOne({doc}) = agrega un document a la coleccion seleccionada
// · db.nombreDeLaColeccion.insertMany([{doc}, {doc}]) = agrega un document a la coleccion seleccionada
// doc tiene que ser un objeto json db.nombreDeLaCollecion.insertOne({nombre: 'uwu', edad: 25})
// · db.nombreDeLaColeccion.findOne({criterio}) = Devuelve el elemento que primero encuentre que cumpla con el citerio de busqueda,
// si no se pone nada trae el primero de la coleccion | sino ({nombre: 'Juan'})
// · db.nombreDeLaColeccion.find({criterio}) = Devuelve los elementos que cumplan con el citerio de busqueda
// · db.nombreDeLaColeccion.find({edad: {$gt: 20}}) Filtros =
// $gt = mayor que | $gte = mayor o igual que |
// · db.nombreDeLaColeccion.find({ $and: [ {edad: {$gt: 20}}, {nombre: 'Juan'} ] }) = filtro and
// · db.nombreDeLaColeccion.find({ $or: [ {edad: 20}, {edad: 24} ] }) = filtro or
