const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

// Export config object
module.exports = {
  //uri: 'mongodb://localhost:27017/mean-angular-2', // Databse URI and database name
  uri: 'mongodb://adnan:internet123@ds151127.mlab.com:51127/angular2-app',
  secret: crypto, // Cryto-created secret
  db: 'angular2-app' // Database name
}
