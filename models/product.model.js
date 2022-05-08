import mongoose from 'mongoose'

//Estamos haciendo una consulta a la base de datos
const productsSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		unique: true
	},
	description: {
		type: String,
		trim: true
	},
	prince: {
		type: Number,
		default: 0
	},
	image: {
		public_id: String,
		secure_url: String
	}
		
	}, {
	timestamps: true
	})

export default mongoose.model('Product', productsSchema)