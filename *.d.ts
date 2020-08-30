declare module "easy-cryptography-js" {
    function encrypt_256_CBC(
        text: string,
        key: string,
        iv: string
    ): any;

    function decrypt_256_CBC(
        text: string,
        key: string,
        iv: string
    ): any;

    function encrypt_256_GCM(
        text: string,
        key: string,
        iv: string
    ): any;

    function decrypt_256_GCM(
        text: string,
        key: string,
        iv: string 
    ): any;

    function Shake_256_hash(
        text: string
    ): string;

    function sha3_512_hash(
        text: string
    ): string;

    function sha3_384_hash(
        text: string
    ): string;

    function sha512_hash(
        text: string
    ): string;

    function sha384_hash(
        text: string
    ): string;
}