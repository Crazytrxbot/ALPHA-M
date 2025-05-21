const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined 
    ? databasePath 
    : process.env.DATABASE_URL;


const config = {
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA71V2Y7iRhT9laheQd3eF6SW4g2wzWaDDSbKQzUuL+CNchkwI75l8paHfER+aT4hMt2daSmTSUeK4qdyuXzvObfuOfcTKMq0RjZqweATqHB6ggR1S9JWCAyA2kQRwqAPQkggGICDaZrzYDWWrJwyrcQ3DSRdeWFWxkfmLDCJnxXp7LTH/lp5Arc+qJrnLN19JyDfLkVSRDw8s8eD0aqbRSA6K/4w1Z/jAtkRPjxKhoStQguewK2LCFOcFrFRJShHGGY2ahcwxR+D34738vK0uwRx64mE2lbDfH9gzhNleq0pNfdOPdfT58lS2jgfg7+2Q3s+XyS5H0WBFKfXUk6mY/MypDfCWo/X+yiwbancmqvpC/w6jQsUmiEqSEraD9ddU+R2o83JXOCaxbp2HdNSqNMORnMPja49f6ZvoyOH/D3LfQz4YwRnRlCy2yUJ3Nkc5pzFtlyPmSz8c2TpVxdbqjdPEDM23gNf4LdeOfybuhuzxcrZenqJeR95YS/loIr9yX4ja9d5kbQzkdLE56Wq+97H4JeT6FQ4MorXs9F6bO028+VwE/qJmiVbLxmVmj3X6KvYJm79FT4kDf4eSoc3+bwS3OE028ScHri5I28YYbZ7NHUnX9qRc72yhNKaxxnjHKroEF1l3Q2DcbDdH2t5Mj4q080os5YjdraZsT6LtmR/frozOqDWDMGAvvUBRnFaEwxJWhb3PVboAxielmiHEbmXF+DDdVVeeduURlbI+9CZOseJ4gRHNE5WpyDjztTJWENBH1JPoA8qXO5QXaNwnNakxO0U1TWMUQ0GP91vqiONUV4SZKUhGACZlgWa4xiWY+gf64dzAkkNq+qhQAT0QYTLfIrAgOAG9cH9B503OMaQuKGuMhSl6RTLqpJgSConc6LCyx3F/CXpKs1RTWBegQEtcqLEsjQj3/r/DQ7VUGiBNwTJ4ARGkAXNEGhKMlTeEERNZIf/Fw5FFCRNEWiZFw1qqFG6oA1FTZJoXqNEaWh8Hwcr3n7ugwJdyIueui5g6T6IUlwTr2iqrIThm9jePsLdrmwKsmyLndYtEAaDd9uIkLSI645ZU0C8S9IT0joeYBDBrEZ/Nh7CKHzj8mqmWhl2euAMRloFtgE67F2gv9RmQH+jPNn9GCeLDMuyssjTPC10B7v9PihgFwssy+aHvIU/fPn82y8PDw9fPv/6e1ejV/RdshARmGZ1Z3aLzZzspmPDgimRjNFIMWJFixXwle2bml/Uoupe0zg1Hq7zixP14Nw0enTPOsCdNhTLguIL9cRExw1Dx0/fCNIZVORchPXUltuhLxbIegzqkxAW47lbrdRdj9e4YntAVLwp15CnJ/Jilhx0hX2khGjhrij5GC/oTHfLbdCbOGebqkRHV5SnLluITukOvU+m0Zfl8LRYPl9Kt2FMq1Jcr5QyZ+Hul+WIWbvYnTFTVZ54jEive9vqLHLlsG5w4D3blv94OU33XjbZNvxmEY0I5UpHK371mbvPZa/zJX11gPT+GqXobtevN/KP9/oCvGs/6tZ/F+N1APyNiaqOQ0/wYWJf/Kr2xo/5PlUXJEq3o0JJkGDJ8+35WS6ETCYBuHU6qDJIohLnYABgEeLy3ja4bLp+Nouo/O5YNE1NeWGewZooXzXyLfkzL6cWuKzGsE7AALBRcNbsruFbpaqWBJI3yQGle3RyBrc/APkX9j8lCQAA',
    PREFIXE: process.env.PREFIX || "",
    OWNER_NAME: process.env.OWNER_NAME || "Keith",
    NUMERO_OWNER: process.env.NUMERO_OWNER || "254743995989",     
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',    
    URL: process.env.URL || "https://files.catbox.moe/6hd2t7.jpg",                         
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'no',     
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by alpha',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',  
    ANTICALL_MSG: process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
    EVENTS: process.env.EVENTS || "yes",    
    BOT: process.env.BOT_NAME || 'ALPHA_MD',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    DP: process.env.STARTING_BOT_MESSAGE || "yes",
    ADM: process.env.ANTI_DELETE_MESSAGE || 'no',
    
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? new Sequelize({
            dialect: 'sqlite',
            storage: DATABASE_URL,
            logging: false,
        })
        : new Sequelize(DATABASE_URL, {
            dialect: 'postgres',
            ssl: true,
            protocol: 'postgres',
            dialectOptions: {
                native: true,
                ssl: { 
                    require: true, 
                    rejectUnauthorized: false 
                },
            },
            logging: false,
        })
};


let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

module.exports = config;
