//

// - AGGREGATIONS - (Agregaciones xd) son un conjunto de acciones que van una tras la otra usando la informacion de la anterior (pipelines)
// Ej.: Buscar según criterio => ordenarlos de mayor a menor => crear campos nuevos con el valor máximo y el valor mínimo (stages)
// Stages: (lista completa = https://www.mongodb.com/docs/manual/meta/aggregation-quick-reference/)
// ·$count = cuenta el número de documentos en el stage
// ·$group = agrupa según criterio los documentos (cada grupo tiene un id unico)
// ·$limit = limita el número de documentos en el stage
// ·$lookup = combina los datos de campos de dos colecciones distintas
// ·$set / $addFields =
// ·$lookup = combina los datos de campos de dos colecciones distintas
// ·$merge = Crea una nueva coleccion con los valores del los archivos en el pipeline

// - PAGINATE - (paginado) npm i
//
