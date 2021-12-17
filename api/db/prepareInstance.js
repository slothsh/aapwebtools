const env = require('dotenv');
const { Sequelize } = require('sequelize');
const { CuesMonolithic, CuesMonolithicModel } = require('./models.js');

// TODO: Handle misconfigured environment
env.config({ path: process.cwd() + '/env/api.env' });
const db_table = (process.env.NODE_ENV === 'development') ? process.env.AWTDBTABLE_DEV : process.env.AWTDBTABLE;

// Create pools for database to be used throughout application
const dbInstance = new Sequelize ({
    dialect: 'postgres',
    database: process.env.AWTDBNAME,
    username: process.env.AWTDBUSER,
    password: process.env.AWTDBPASS,
    host: process.env.AWTDBHOST,
    port: process.env.AWTDBPORT,
    timezone: '+02:00'
});


// Initialization of CuesMonolithic model
// Production model instance
CuesMonolithic.init(
    // Model
    {
        ...CuesMonolithicModel
    },

    // Database connection for model
    {
        sequelize: dbInstance,
        modelName: 'CuesMonolithic',
        tableName: db_table,
        timestamps: true,
        updatedAt: 'timestamp_update',
        createdAt: 'timestamp_entry'
    }
);

// Test if model matches database table structure
if (CuesMonolithic !== dbInstance.models.CuesMonolithic) {
    console.log(`DATABASE: ORM model for API database ${dbInstance.getDatabaseName()} instance does not match`);
}

// Test if connection is successful
(async () => {
    try {
        // Authenticate connection to instance
        await dbInstance.authenticate();
        console.log(`DATABASE: Connection to database ${process.env.AWTDBNAME} is successful`);
        
        // Synchronize database
        await dbInstance.models.CuesMonolithic.sync();
        console.log(`DATABASE: Model synchronization for ${dbInstance.models.CuesMonolithic.name} is successful`);
    } catch (e) {
        console.error(`[ERROR] An error during authentication and table model syncronization occured for ${process.env.AWTDBNAME}\nREASON: ${e}`);
        process.exit(1);
    }
})();

module.exports = {
    dbInstance,
    CuesMonolithic
};