"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = __importStar(require("crypto"));
var algorithmCBC = "aes-256-cbc";
var algorithmGCM = "aes-256-gcm";
var algorithmCBC192 = "aes-192-cbc";
var algorithmGCM192 = "aes-192-gcm";
// ! DeprecationWarning: crypto.createCredentials is deprecated. Use tls.createSecureContext instead.
// ! DeprecationWarning: crypto.Credentials is deprecated. Use tls.SecureContext instead.
// AES 256 CBC
function encrypt_256_CBC(text, key, iv) {
    if (key.length != 32) {
        throw "Key Length Must Be 32 Characters Long";
    }
    if (iv.length != 16) {
        throw "The IV Length Must Be 16 Characters Long";
    }
    var cipher = crypto.createCipheriv(algorithmCBC, Buffer.from(key), iv);
    var encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString(), encryptedData: encrypted.toString("hex") };
}
exports.encrypt_256_CBC = encrypt_256_CBC;
function decrypt_256_CBC(text, key, iv) {
    if (key.length != 32) {
        throw "Key Length Must Be 32 Characters Long";
    }
    if (iv.length != 16) {
        throw "The IV Length Must Be 16 Characters Long";
    }
    var messageIV = Buffer.from(text.iv);
    var encryptedText = Buffer.from(text.encryptedData, "hex");
    var decipher = crypto.createDecipheriv(algorithmCBC, Buffer.from(key), messageIV);
    var decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}
exports.decrypt_256_CBC = decrypt_256_CBC;
// AES 256 GCM
function encrypt_256_GCM(text, key, iv) {
    if (key.length != 32) {
        throw "Key Length Must Be 32 Characters Long";
    }
    if (iv.length != 16) {
        throw "The IV Length Must Be 16 Characters Long";
    }
    var cipher = crypto.createCipheriv(algorithmGCM, Buffer.from(key), iv);
    var encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString(), encryptedData: encrypted.toString("hex") };
}
exports.encrypt_256_GCM = encrypt_256_GCM;
function decrypt_256_GCM(text, key, iv) {
    if (key.length != 32) {
        throw "Key Length Must Be 32 Characters Long";
    }
    if (iv.length != 16) {
        throw "The IV Length Must Be 16 Characters Long";
    }
    var messageIV = Buffer.from(text.iv);
    var encryptedText = Buffer.from(text.encryptedData, "hex");
    var decipher = crypto.createDecipheriv(algorithmGCM, Buffer.from(key), messageIV);
    var decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}
exports.decrypt_256_GCM = decrypt_256_GCM;
// ! In Development DO NOT USE!!
function encrypt_192_CBC(text, key, iv) {
    if (key.length != 28) {
        throw "Key Length Must Be 32 Characters Long";
    }
    if (iv.length != 16) {
        throw "The IV Length Must Be 16 Characters Long";
    }
    var k = crypto.createHash("md5");
    k.update(key);
    var working_key = k.digest();
    var cipher = crypto.createCipheriv(algorithmCBC192, Buffer.from(working_key), iv);
    var encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString(), encryptedData: encrypted.toString("hex") };
}
// ! In Development DO NOT USE!!
function decrypt_192_CBC(text, key, iv) {
    if (key.length != 32) {
        throw "Key Length Must Be 32 Characters Long";
    }
    if (iv.length != 16) {
        throw "The IV Length Must Be 16 Characters Long";
    }
    var cipher = crypto.createDecipheriv(algorithmCBC192, Buffer.from(key), iv);
    var decrypted = cipher.update(Buffer.from(text));
    decrypted = Buffer.concat([decrypted, cipher.final()]);
    return decrypted.toString();
}
// * hashing
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
