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
// ·db.nombreDeLaColeccion.find({}, {_id: 0, edad: 0}) = muestra excluyendo esos campos 0=no mostrar 1= solo muestra ese
// ·db.nombreDeLaColeccion.find({}).sort({edad: 1}) = muestra de forma ascendente (1) o descendente (-1)
// ·db.nombreDeLaColeccion.find({}).sort({edad: 1}).limit(1) = limita a cierta cantidad de resultados desde el comienzo, aca muestra solo el primero
// ·db.nombreDeLaColeccion.find({}).sort({edad: 1}).skip(2).limit(1) = desde el comienzo, saltea 2 y trae solo elq ue sigue

//CRUD - Create Update Read Delete
// · db.nombreDeLaColeccion.insertOne({doc}) = agrega un document a la coleccion seleccionada
// · db.nombreDeLaColeccion.insertMany([{doc}, {doc}]) = agrega un document a la coleccion seleccionada
// doc tiene que ser un objeto json db.nombreDeLaCollecion.insertOne({nombre: 'uwu', edad: 25})
// · db.nombreDeLaColeccion.findOne({criterio}) = Devuelve el elemento que primero encuentre que cumpla con el citerio de busqueda,
// si no se pone nada trae el primero de la coleccion | sino ({nombre: 'Juan'})
// · db.nombreDeLaColeccion.find({criterio}) = Devuelve los elementos que cumplan con el citerio de busqueda
// · db.nombreDeLaColeccion.distinct({edad}) = Devuelve un aray con todos los valores de ese campo en la db
// · db.nombreDeLaColeccion.deleteOne({_id: ObjectId("sdasdas52d4as6d5")}) = borra según criterio de busqueda
// · db.nombreDeLaColeccion.deleteMany({edad: {$lt: 25}}) = borra varios según criterio de busqueda. Sin criterio borra todos
// · db.nombreDeLaColeccion.updateOne({nombre: 'Ivan'}, {$push: {cualidades: 'Fachero'}})
// · db.nombreDeLaColeccion.updateMany({})
// updates= $set = agrega o cambia valor a un campo | $unset = quitar el valor del campo | $rename = renombrar campo | $push = agregar valor a un campo con array
// | $inc = suma la cantidad que se pasa por criterio | $mul = lo mismo pero multiplicando | $min = actualiza los numeros a un minimo,
// si es menor a ese numero se pasa al minimo, si son mayores no se modifican y $max lo mismo pero maximo
// · db.nombreDeLaColeccion.updateOne({nombre: 'Ivan'}, {$push: {cualidades: 'Fachero'}, {upsert: true}) = Si no encuentra lo crea

//Filtros y criterios de busqueda
// · db.nombreDeLaColeccion.find({edad: {$gt: 20}}) Filtros =
// $gt = mayor que | $gte = mayor o igual que | $lt = menor que | $lte = menor o igual a |
// $eq = igual a | $ne = que no sea igual a
// · db.nombreDeLaColeccion.find({ $and: [ {edad: {$gt: 20}}, {nombre: 'Juan'} ] }) = filtro and
// · db.nombreDeLaColeccion.find({ $or: [ {edad: 20}, {edad: 24} ] }) = filtro or
// · db.nombreDeLaColeccion.find({ $and: [ {nacionalidad: {$exists: true}}, {nacionalidad: { $ne: 'arg' }} ] })
// = devuelve solo si existe el campo y evita comparar con  undefined
// · db.nombreDeLaColeccion.find({ edad: { $in: [20, 24] } }) = devuelve los que aplican a esos valores, usualmente usado para keys
// | $nin los que no apliquen a esos valores
// · db.nombreDeLaColeccion.find({ problemasMentales: {$size: 2} = devuelve los que tienen array en ese campo, con el numero del tamaño que coincida
// · db.nombreDeLaColeccion.find({ problemasMentales: {$all: ['esquizofrenia', 'ansiedad']} = devuelve los que contengan todos los criterios dentro del array
