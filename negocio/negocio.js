const {conectar,getById,getByNombre,deleteById,putId,putUsuarios,insertarUsuarios,listar,insertar,Eliminar,Actualizar} = require( '../persistencia/persistencia.js');
const PrimeraConexion = require( './singleton.js');

async function conectarse() {
    return new PrimeraConexion().obtenerHora();
}
async function actualizarUsuarios(username,contador) {
    await putUsuarios(username,contador);
}
async function getNombre(username) {
    return await getByNombre(username);
}
async function agregarUsuarios(user) {
    await insertarUsuarios(user);
}
async function mostrarMensajes() {
    return await listar("Mensajes");
}
async function grabarMensajes(data) {
    await insertar(data,"Mensajes");
}
async function mostrarProductos() {
    return await listar("Productos");
}
async function grabarProductos(data) {
    await insertar(data,"Productos");
}
async function borrarProductos(data) {
    await Eliminar(data,"Productos");
}
async function actualizarProductos(data,id) {
    await Actualizar(data,id,"Productos");
}
module.exports={conectarse,actualizarUsuarios,getNombre,agregarUsuarios,mostrarMensajes,grabarMensajes,mostrarProductos,grabarProductos,borrarProductos,actualizarProductos}