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
  otherbill: {
    type: Number
  },
  oldunit: {
    type: Number
  },
  newunit: {
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
      electrecity: {
        type: Number
      },
      base: {
        type: Number
      },
      other: {
        type: Number
      }
    }
  ]
});

module.exports = mongoose.model("bills", Bill);
