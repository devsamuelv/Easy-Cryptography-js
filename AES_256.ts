import * as crypto from "crypto";
import * as tls from 'tls';

const algorithmCBC = "aes-256-cbc";
const algorithmGCM = "aes-256-gcm";
const algorithmCBC192 = "aes-192-cbc";
const algorithmGCM192 = "aes-192-gcm";

// ! DeprecationWarning: crypto.createCredentials is deprecated. Use tls.createSecureContext instead.
// ! DeprecationWarning: crypto.Credentials is deprecated. Use tls.SecureContext instead.

// AES 256 CBC
export function encrypt_256_CBC(text: any, key: string, iv: string) {
  if (key.length != 32) { throw "Key Length Must Be 32 Characters Long"; }
  if (iv.length != 16) { throw "The IV Length Must Be 16 Characters Long"; }
  let cipher = crypto.createCipheriv(algorithmCBC, Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString(), encryptedData: encrypted.toString("hex") };
}

export function decrypt_256_CBC(text: any, key: string, iv: string) {
  if (key.length != 32) { throw "Key Length Must Be 32 Characters Long"; }
  if (iv.length != 16) { throw "The IV Length Must Be 16 Characters Long"; }
  let messageIV = Buffer.from(text.iv);
  let encryptedText = Buffer.from(text.encryptedData, "hex");
  let decipher = crypto.createDecipheriv(
    algorithmCBC,
    Buffer.from(key),
    messageIV
  );
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

// AES 256 GCM
export function encrypt_256_GCM(text: any, key: string, iv: string) {
  if (key.length != 32) { throw "Key Length Must Be 32 Characters Long"; }
  if (iv.length != 16) { throw "The IV Length Must Be 16 Characters Long"; }
  let cipher = crypto.createCipheriv(algorithmGCM, Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString(), encryptedData: encrypted.toString("hex") };
}

export function decrypt_256_GCM(text: any, key: string, iv: string) {
  if (key.length != 32) { throw "Key Length Must Be 32 Characters Long"; }
  if (iv.length != 16) { throw "The IV Length Must Be 16 Characters Long"; }
  let messageIV = Buffer.from(text.iv);
  let encryptedText = Buffer.from(text.encryptedData, "hex");
  let decipher = crypto.createDecipheriv(
    algorithmGCM,
    Buffer.from(key),
    messageIV
  );
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

// ! In Development DO NOT USE!!
function encrypt_192_CBC(text: string, key: string, iv: string) {
  if (key.length != 28) { throw "Key Length Must Be 32 Characters Long"; }
  if (iv.length != 16) { throw "The IV Length Must Be 16 Characters Long"; }  

  var k = crypto.createHash("md5");
  k.update(key);
  var working_key = k.digest();

  var cipher = crypto.createCipheriv(algorithmCBC192, Buffer.from(working_key), iv);
  var encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString(), encryptedData: encrypted.toString("hex") };
}

// ! In Development DO NOT USE!!
function decrypt_192_CBC(text: string, key: string, iv: string) {
  if (key.length != 32) { throw "Key Length Must Be 32 Characters Long"; }
  if (iv.length != 16) { throw "The IV Length Must Be 16 Characters Long"; }
  var cipher = crypto.createDecipheriv(algorithmCBC192, Buffer.from(key), iv);
  var decrypted = cipher.update(Buffer.from(text));
  decrypted = Buffer.concat([decrypted, cipher.final()]);
  return decrypted.toString();
}