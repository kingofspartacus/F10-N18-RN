import express from 'express';
import config from 'config';
import log from './logger';
import connect from './db/connect';
import route from './route';

const host = config.get('host') as string;
const port = config.get('port') as number;

const app = express();

var cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
    log.info(`Server listing at http://${host}:${port}`);
    connect()
    route(app)
})
