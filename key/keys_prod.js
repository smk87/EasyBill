module.exports = {
  mongoURI:
    "mongodb://admin:admin@easybill-shard-00-00-zrnt8.mongodb.net:27017,easybill-shard-00-01-zrnt8.mongodb.net:27017,easybill-shard-00-02-zrnt8.mongodb.net:27017/easybill?ssl=true&replicaSet=easyBill-shard-0&authSource=admin&retryWrites=true",
  secret: process.env.SECRET
};
