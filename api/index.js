const server = require('./src/app')
const { conn } = require('./src/db.js');
const { PORT } = process.env;
const seed = require('./seed')

conn.sync({ force: false })
    .then(async() => {
        console.log('DB connected!');
        server.listen(3001, () => console.log(`Server listening on port 3001`));
        seed()
    })
    .catch((e) => console.log('Connection Failed!', e))