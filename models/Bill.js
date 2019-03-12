const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Bill = new Schema({
  createdby: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  customername: {
    type: String,
    required: true
  },
  meterno: {
    type: String
  },
  position: {
    type: String,
    required: true
  },
  current: {
    type: Boolean,
    default: true
  },
  basebill: {
    type: Number
  },
  gasbill: {
    type: Number
  },
  waterbill: {
    type: Number
  },
  garagebill: {
    type: Number
  },
  wastebill: {
    type: Number
  },
  electricitybill: {
    type: Number
  },
  bills: [
    {
      gas: {
        type: Number
      },
      water: {
        type: Number
      },
      electricity: {
        type: Number
      },
      base: {
        type: Number
      },
      garage: {
        type: Number
      },
      waste: {
        type: Number
      }
    }
  ]
});

module.exports = mongoose.model("bills", Bill);
