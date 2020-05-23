# Cryptography-JS ![ubuntu CI](https://github.com/DevSamuelV/Easy-Cryptography-js/workflows/ubuntu%20CI/badge.svg) ![Mac OS CI](https://github.com/DevSamuelV/Easy-Cryptography-js/workflows/Mac%20OS%20CI/badge.svg) ![Windows CI](https://github.com/DevSamuelV/Easy-Cryptography-js/workflows/Windows%20CI/badge.svg)

### Install
` npm i easy-cryptography-js`

- **Supported Ciphers**
    - **AES (Advanced Encryption Standard)**
        - **256 CBC**
        - **256 GCM**

- **Supported Hashes**
    - **SHA-256**
    - **SHA-512**
    - **SHA3-512**
    - **SHA3-384**
    - **SHAKE-256**

### Encryption And Decrypting
``` javascript
// for AES 256 encryption
const AES_256 = require('easy-cryptography-js/AES_256.js');

// encrypt data 256 CBC
AES_256.encrypt_256_CBC("Your Message", "Your Key", "Your IV");

// decrypt data 256 CBC
AES_256.decrypt_256_CBC("Your Encrypted Message", "Your Key", "Your IV");

// encrypt data 256 GCM
AES_256.encrypt_256_GCM("Your Message", "Your Key", "Your IV");

// decrypt data 256 GCM
AES_256.decrypt_256_GCM("Your Encrypted Message", "Your Key", "Your IV");

```

### Hashing
``` javascript
const hashing = require('easy-cryptography-js/Hashing.js')

// Shake 256 Hash (recommended)
hashing.Shake_256_hash("Your Text");

// SHA3 512 (recommended)
hashing.sha3_512_hash("Your Text");

// SHA3 384 (recommended)
hashing.sha3_384_hash("Your Text");

// SHA2 512 (Not-recommended)
hashing.sha512_hash("Your Text");

// SHA2 384 (Not-recommended)
hashing.sha384_hash("Your Text");
```