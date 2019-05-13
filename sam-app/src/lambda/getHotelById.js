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

exports.handler = (event, context, callback) => {
  console.log(event);
  const { id } = event.pathParameters;
  const queryString = `SELECT * FROM hotel WHERE id=${id}`;

  pool.query(queryString, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      callback(null, {
        statusCode: 200,
        body: result
      });
    }
  });
};

/*
const { Pool } = require('pg')

const pool = new Pool({
    host: 'rickadvisor-about-db-replica.c52xkeof6emi.us-east-2.rds.amazonaws.com',
    database: 'hotels',
    user: 'ian',
    password: 'rhodyhackerdog',
    port: 5432,
    max: 1,
    min: 0,
    idleTimeoutMillis: 300000,
    connectionTimeoutMillis: 1000
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
*.