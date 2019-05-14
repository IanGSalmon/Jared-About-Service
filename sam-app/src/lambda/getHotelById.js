const {
  Pool,
} = require('pg')

const pool = new Pool({
  user: process.env.DatabaseUid,
  host: process.env.DatabaseHost,
  database: process.env.DatabaseName,
  password: process.env.DatabasePwd,
  port: process.env.DatabasePort,
  max: 50,
});

module.exports.handler = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    let client;
    pool.connect().then(c => {
        client = c;
        return client.query("SELECT * FROM hotel WHERE id=1");
    }).then(res => {
        client.release();
        const response =  {
            "isBase64Encoded": false,
            "statusCode": 200,
            "body": JSON.stringify(res.rows),
            "headers": {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Credentials": true
                        }
        }
        callback(null, response);
    }).catch(error => {
        console.log("ERROR", error);
        const response =  {
            "isBase64Encoded": false,
            "statusCode": 500,
            "body": JSON.stringify(error)
        }

        callback(null, response);
    });
};
