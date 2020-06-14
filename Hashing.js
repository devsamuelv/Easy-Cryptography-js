"use strict";
exports.__esModule = true;
var crypto = require("crypto");
// Algorithms
var SHA_512_Algorithm = "sha512";
var SHA_384_Algorithm = "sha384";
var SHAKE_256_Algorithm = "shake256";
var SHA3_512_Algorithm = "sha3-512";
var SHA3_384_Algorithm = "sha3-384";
/**
 *
 * @this s Shake 256 Hash is a Super Secure Hashing Function
 */
function Shake_256_hash(text) {
    var hash = crypto.createHash(SHAKE_256_Algorithm);
    hash.update(text);
    return hash.digest('hex');
}
exports.Shake_256_hash = Shake_256_hash;
function sha3_512_hash(text) {
    //if (text.length !< 12) { throw "Hashing Below 12 Characters and Non-Random is Insecure!!"; }
    var hash = crypto.createHash(SHA3_512_Algorithm);
    hash.update(text);
    return hash.digest('hex');
}
exports.sha3_512_hash = sha3_512_hash;
function sha3_384_hash(text) {
    var hash = crypto.createHash(SHA3_384_Algorithm);
    hash.update(text);
    return hash.digest('hex');
}
exports.sha3_384_hash = sha3_384_hash;
/**
 * @deprecated InSecure For Short Non-Random Inputs
 */
function sha512_hash(text) {
    if (text.length < 12) {
        throw "SHA-512 Hashing Below 12 Characters and Non-Random is Insecure!!";
    }
    var hash = crypto.createHash(SHA_512_Algorithm);
    hash.update(text);
    return hash.digest('hex');
}
exports.sha512_hash = sha512_hash;
/**
 * @deprecated In-Secure For Short Non-Random Inputs
 */
function sha384_hash(text) {
    if (text.length < 12) {
        throw "SHA-384 Hashing Below 12 Characters and Non-Random is Insecure!!";
    }
    var hash = crypto.createHash(SHA_384_Algorithm);
    hash.update(text);
    return hash.digest('hex');
}
exports.sha384_hash = sha384_hash;
