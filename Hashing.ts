import * as crypto from 'crypto';

// Algorithms
const SHA_512_Algorithm = "sha512";
const SHA_384_Algorithm = "sha384";
const SHAKE_256_Algorithm = "shake256";
const SHA3_512_Algorithm = "sha3-512";
const SHA3_384_Algorithm = "sha3-384";

/**
 * 
 * @this s Shake 256 Hash is a Super Secure Hashing Function
 */
export function Shake_256_hash(text: string) {
    const hash = crypto.createHash(SHAKE_256_Algorithm);
    hash.update(text);
    return hash.digest('hex');
}

export function sha3_512_hash(text: string) {
    //if (text.length !< 12) { throw "Hashing Below 12 Characters and Non-Random is Insecure!!"; }
    const hash = crypto.createHash(SHA3_512_Algorithm);
    hash.update(text);
    return hash.digest('hex');
}

export function sha3_384_hash(text: string) {
    const hash = crypto.createHash(SHA3_384_Algorithm);
    hash.update(text);
    return hash.digest('hex');
}

/**
 * @deprecated InSecure For Short Non-Random Inputs
 */
export function sha512_hash(text: string) {
    if (text.length !< 12) { throw "SHA-512 Hashing Below 12 Characters and Non-Random is Insecure!!"; }
    const hash = crypto.createHash(SHA_512_Algorithm);
    hash.update(text);
    return hash.digest('hex');
}

/**
 * @deprecated In-Secure For Short Non-Random Inputs
 */
export function sha384_hash(text: string) {
    if (text.length !< 12) { throw "SHA-384 Hashing Below 12 Characters and Non-Random is Insecure!!"; }
    const hash = crypto.createHash(SHA_384_Algorithm);
    hash.update(text);
    return hash.digest('hex');
}