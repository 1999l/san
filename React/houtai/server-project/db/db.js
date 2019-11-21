const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = '1909';
// 连接
const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, {
            useUnifiedTopology: true
        }, function (err, client) {
            err ? reject(err) : resolve(client);
            console.log("Connected successfully to server");
        });
    })
}
// 查
const find = (col, query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.find(query ? query : {}).toArray(function (err, docs) {
            err ? reject(err) : resolve(docs);
        });
        client.close();
    })
}
//增
const insert = (col, query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.insertMany(query, function (err, docs) {
            err ? reject(err) : resolve(docs);
        })
        client.close();
    })
}
// 改
const update = (col, change, obtain) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect()
        const db = client.db(dbName)
        const collection = db.collection(col)
        collection.updateOne(change, obtain, (err, result) => {
            err ? reject(err) : resolve(result)
        })
        client.close()
    })
}

// 删
const remove = (col, query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect()
        const db = client.db(dbName)
        const collection = db.collection(col)
        collection.deleteOne(query, (err, result) => {
            err ? reject(err) : resolve(result)
        });
        client.close()
    })
}
//导出自定义模块
module.exports = {
    find,
    insert,
    remove,
    update
}