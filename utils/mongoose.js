import mongoose from 'mongoose'
import {MONGODB_URI} from '../config.js' //traemos el codigo de pase de mongodb hasta replit

export async function connectToDB() {
	//usamos try para saber si ocurre un error y lo comunique por consola
	try {
		//creamos una funcion asincrona
	await mongoose.connect(MONGODB_URI)
		console.log('MongoDB connected')
	} catch (error) {
		console.error(error)
	}

}
