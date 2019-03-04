const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Bill = new Schema({
  createdby: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  cutomername: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
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
  oldunit: [
    {
      type: Number
    }
  ],
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

module.exports = mongoose.model("bill", Bill);
