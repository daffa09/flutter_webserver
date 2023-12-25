var koneksi = require('../koneksi');
const Sequelize = require('sequelize');
const model = koneksi.define('berita',
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
        gambar: {
            type: Sequelize.STRING,
        },
    }, 
    {
        freezeTableName: true 
    }
);

module.exports=model;
