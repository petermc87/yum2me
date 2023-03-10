const { Schema, model } = require('mongoose')

const driverProfileSchema = new Schema({
  image: { type: String },
  location: { type: String, required: true },
  user: { type: String },
  availability: { type: Boolean, default: true },
  assignedOrders: [{ type: Schema.Types.ObjectId, ref: 'Order' }]
}, {
  timestamps: true
})

const Driver = model('Driver', driverProfileSchema)

module.exports = Driver
