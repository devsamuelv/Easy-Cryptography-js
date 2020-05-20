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
// AES 256 CBC
function encrypt_256_CBC(text, key, iv) {
    var cipher = crypto.createCipheriv(algorithmCBC, Buffer.from(key), iv);
    var encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString(), encryptedData: encrypted.toString("hex") };
}
exports.encrypt_256_CBC = encrypt_256_CBC;
function decrypt_256_CBC(text, key, iv) {
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
    var cipher = crypto.createCipheriv(algorithmGCM, Buffer.from(key), iv);
    var encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString(), encryptedData: encrypted.toString("hex") };
}
exports.encrypt_256_GCM = encrypt_256_GCM;
function decrypt_256_GCM(text, key, iv) {
    var messageIV = Buffer.from(text.iv);
    var encryptedText = Buffer.from(text.encryptedData, "hex");
    var decipher = crypto.createDecipheriv(algorithmGCM, Buffer.from(key), messageIV);
    var decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}
exports.decrypt_256_GCM = decrypt_256_GCM;
