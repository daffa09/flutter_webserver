var koneksi = require('../koneksi');
const Sequelize = require('sequelize');
const pengumumanModel = koneksi.define('pengumuman',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        judul: {
            type: Sequelize.STRING,
        },
        kategori: {
            type: Sequelize.STRING,
        },
        konten: {
            type: Sequelize.TEXT,
        },
    }, 
    {
        freezeTableName: true 
    }
);

module.exports=pengumumanModel;
