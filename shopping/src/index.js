const express = require('express');
const { PORT } = require('./config/index');
const { databaseConnection } = require('./database');
const expressApp = require('./express-app');
const { CreateChannel } = require('./utils');

const StartServer = async () => {

    const app = express();

    await databaseConnection();

    const channel = await CreateChannel()

    await expressApp(app, channel);

    app.listen(PORT, () => {
        console.log(`shopping listening to port ${PORT}`);
    })
        .on('error', (err) => {
            console.log(err);
            process.exit();
        })
}

StartServer();