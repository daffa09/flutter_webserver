const { Sequelize } = require('sequelize');

const koneksi = new Sequelize('webservice', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    koneksi.authenticate();
    koneksi.sync({ alter: true });
    console.log('Berhasil konek database');
} catch (error) {
    console.error('Gagal konek database:', error);
}

module.exports=koneksi;
