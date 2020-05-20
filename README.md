# Cryptography-JS ![ubuntu CI](https://github.com/DevSamuelV/Easy-Cryptography-js/workflows/ubuntu%20CI/badge.svg)

### Install
` npm i easy-cryptography-js`

### Documentation
``` javascript
// for AES 256 CBC encryption
const AES_256 = require('easy-cryptography-js/AES_256.js');

// encrypt data
AES_256.encrypt_256_CBC("Your Message", "Your Key", "Your IV");

// decrypt data
AES_256.decrypt_256_CBC("Your Encrypted Message", "Your Key", "Your IV");

```

- **Supported Ciphers**
    - **AES (Advanced Encryption Standard)**
        - **256 CBC**
        - **256 GCM**