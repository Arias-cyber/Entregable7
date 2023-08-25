import mongoose from "mongoose";

const collection = "Users";

const schema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:{type:String,unique:true}, //campo email tiene que ser unico
    age:Number,
    password:String,
    cart: {type:mongoose.Schema.Types.ObjectId,ref:'Carts'},//referencia a carrito
    rol: { type: String, default: 'user'},

})
schema.pre('save', function (next) {
    if (this.isNew || this.isModified('rol')) {
      this.rol = this.rol || 'user';
    }
    next();
  });
// Omitir el campo "rol" en las consultas por defecto
//schema.set('toJSON', { getters: true, virtuals: false });
//schema.set('toObject', { getters: true, virtuals: false });

  
  
const userModel = mongoose.model(collection,schema);

export default userModel;