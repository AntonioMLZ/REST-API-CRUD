import app from './app.js'
import {connectToDB} from './utils/mongoose.js' //Exportamos nuestra funcion connectToDB

//Recordatorio siempre que creemos una funcion siempre poner un await cuando se intente ejecutrar
 async function main() {
	await connectToDB() //Inicializamos primero MongoDB
 	app.listen(3000) //inicializa en el puerto 30000
	console.log('Server is running port', 3000)
}

main()






