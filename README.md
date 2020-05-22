# Cryptography-JS ![ubuntu CI](https://github.com/DevSamuelV/Easy-Cryptography-js/workflows/ubuntu%20CI/badge.svg) ![Mac OS CI](https://github.com/DevSamuelV/Easy-Cryptography-js/workflows/Mac%20OS%20CI/badge.svg) ![Windows CI](https://github.com/DevSamuelV/Easy-Cryptography-js/workflows/Windows%20CI/badge.svg)

### Install
` npm i easy-cryptography-js`

### Documentation
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

- **Supported Ciphers**
    - **AES (Advanced Encryption Standard)**
        - **256 CBC**
        - **256 GCM**