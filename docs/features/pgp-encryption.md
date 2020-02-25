---
title: PGP Cryptographic Privacy and Authentication
date: 2018-10-04 23:00:00 Z
---

# PGP (Pretty Good Privacy) Cryptographic Privacy and Authentication
Using the PGP tool in Workato recipe, you can perform common cryptographic functions like encrypting, decrypting, signing and verifying files, based on the common PGP standard. Under the hood, we use AES256 cipher algorithm and SHA256 digest algorithm.

Depending on what operation you wish to perform, you may need to provide the public key, private key, or both keys to setup the PGP encryption tool.

![PGP Actions](~@img/features/files-and-attachments/pgp-actions.png)

## Encrypt

The `Encrypt file with PGP` action lets you encrypt data using the public key specified in the action. In addition, you can choose to sign the data with PGP. Private key and passphrase from the connection is used to sign the data. The `ASCII armor` option generates the encrypted content as printable ASCII characters. The content can be sent in and as standard messaging format such as an email.

![PGP Encrypt](~@img/features/files-and-attachments/pgp-encrypt.png)

## Decrypt

The `Decrypt file with PGP` action lets you decrypt data using the private key specified in the connection. If you specify the `Verification public key` in the action, then the decrypt action will verify the signed content as part of the decrypt action.

![PGP Decrypt](~@img/features/files-and-attachments/pgp-decrypt.png)

## Sign

The `Sign file with PGP` action signs the data using the private key and passphrase specified in the connection. This is a standalone action to sign the data for use cases when only signing is needed. The `ASCII armor` option generates the encrypted content as printable ASCII characters. The content can be sent in and as standard messaging format such as an email.

![PGP Sign](~@img/features/files-and-attachments/pgp-sign.png)

## Verify

The `Verify file signed with PGP` action verifies the signed data using the `Verification public key` specified in the action. This is a standalone action to verify the signed data for use cases when only signature verification is needed.

![PGP Sign](~@img/features/files-and-attachments/pgp-verify.png)

## Connection

Private key and passphrase setup must be done in the connection. Use the public key input field in the action to use the public key for operations that require the public key.

![PGP Connection](~@img/features/files-and-attachments/pgp-connection.png)

Follow the instructions below to generate new PGP keys if you do not have a set already.

## Generating PGP keys
1. Download and install the most recent version of [the GPG command line tools](https://www.gnupg.org/download/) for your operating system.

2. Open Terminal or Command Prompt.

3. Use the command below to generate a PGP key pair:

    `gpg --generate-key`

4. Enter your user ID information. Make sure to enter a valid name and email address.

5. Enter a secure passphrase. Remember this passphrase, you will need to use it later to setup PGP encryption tool.

6. Use the command below to list PGP keys for which you have both a public and private key.

    `gpg --list-secret-keys --keyid-format LONG`

7. From the list of PGP keys, copy the PGP key ID you'd like to use. In this example, the PGP key ID is `7F87F1F21EEAAAB9`:

    ![PGP key ID](~@img/features/files-and-attachments/gpg-key-id.png)

8. Use the commands below to print out Public Key and Private Key, substituting in the PGP key ID you'd like to use. In this example, the PGP key ID is `7F87F1F21EEAAAB9`:

    `gpg --armor --export 7F87F1F21EEAAAB9`

    `gpg --armor --export-secret-key 7F87F1F21EEAAAB9`
