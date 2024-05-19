import { Schema, model, models } from "mongoose";

const petSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: [3, "El nombre debe tener por lo menos 3 caracteres"],
  },
  gender: {
    type: String,
    required: true,
    enum: ["Macho", "Hembra"],
  },
  size: {
    type: String,
    required: true,
    enum: ["Pequeño", "Mediano", "Grande"],
  },
  address: {
    type: String,
    required: true,
  },
  health: {
    type: String,
    required: true,
    enum: ["Saludable", "Regular", "Necesita atención"],
  },
  nature: {
    type: String,
    required: true,
    enum: ["Tranquilo", "Juguetón", "Tímido", "Dominante", "Amigable"],
  },
  whatsapp: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default models.Pet || model("Pet", petSchema);
