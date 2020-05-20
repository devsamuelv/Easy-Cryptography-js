import * as crypto from "crypto";

const algorithmCBC = "aes-256-cbc";
const algorithmGCM = "aes-256-gcm";

// AES 256 CBC
export function encrypt_256_CBC(text: any, key: string, iv: string) {
  let cipher = crypto.createCipheriv(algorithmCBC, Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString(), encryptedData: encrypted.toString("hex") };
}

export function decrypt_256_CBC(text: any, key: string, iv: string) {
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
  let cipher = crypto.createCipheriv(algorithmGCM, Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString(), encryptedData: encrypted.toString("hex") };
}

export function decrypt_256_GCM(text: any, key: string, iv: string) {
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
