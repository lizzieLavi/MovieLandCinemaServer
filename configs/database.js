const mongoose = require('mongoose');

mongoose.connect('mongodb://lizzieLavi:olishuk2089@cinemadb-shard-00-00.j1yph.mongodb.net:27017,cinemadb-shard-00-01.j1yph.mongodb.net:27017,cinemadb-shard-00-02.j1yph.mongodb.net:27017/CinemaWS?ssl=true&replicaSet=atlas-rdjdpv-shard-0&authSource=admin&retryWrites=true&w=majority');
