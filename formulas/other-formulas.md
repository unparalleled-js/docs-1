---
title: Other formulas
date: 2017-03-30 05:00:00 Z
---

# Other formulas
This section covers formulas that work with a number of data types.

## null

Gives a null/nil value. Note: passing this into an input field will not update the field value as null. Use clear formula to update a field value to null. Remember to toggle the field to formula mode.

![Null formula in input field](/assets/images/formula-docs/null-formula.png)

---

## clear

Clears the value of the field in the target app to null/nil. Remember to toggle the field to formula mode.

![Clear formula in input field](/assets/images/formula-docs/clear-formula.png)
*Use clear formula instead of null when looking to clear field in target app*

---

## uuid

Generates an UUID.

### Example

| Example    | Result                                |
| -----------| ------------------------------------- |
| uuid       | "c52d735a-aee4-4d44-ba1e-bcfa3734f553"|

---

## encrypt

Encrypts the input string with a secret key using AES-256-CBC algorithm. Encrypted output string is packed in [RNCryptor V3](https://github.com/RNCryptor/RNCryptor-Spec/blob/master/RNCryptor-Spec-v3.md) format and base64 encoded.

_Note: The encryption key should not be hard coded in the recipe. Use account properties (with `key` or `password` in the name) to store the encryption keys._

### Example

`encrypt([ssn], [encryption_key])`

---

## decrypt

Decrypts the encrypted input string with a secret key using AES-256-CBC algorithm. Encrypted input string should be  packed in [RNCryptor V3](https://github.com/RNCryptor/RNCryptor-Spec/blob/master/RNCryptor-Spec-v3.md) format and base64 encoded.

_Note: The encryption key should not be hard coded in the recipe. Use account properties (with `key` or `password` in the name) to store the encryption keys._

### Example

`decrypt([encrypted_ssn], [encryption_key])`

---

## encode_sha256

Encodes a string or binary array using SHA256 algorithm

### Example

`"hello".encode_sha256`

---

## encode_hex

Converts binary string to its hex representation

### Example

| Example                               | Result                            |
| --------------------------------------| ----------------------------------|
| `"0101010101011010".encode_hex`       | "30313031303130313031303131303130"|


---

## decode_hex

Decode hexadecimal into binary string

### Example

| Example                                               | Result            |
| ------------------------------------------------------| ------------------|
| `"30313031303130313031303131303130".decode_hex`       | "0101010101011010"|

---

## encode_base64

Encode using Base64 algorithm

### Example

| Example    | Result |
| -------------------- | ------ |
| `"Hello World!".encode_base64` | "aGVsbG8gd29ybGQh"|

---

## decode_base64

Decode using Base64 algorithm

### Example

| Example    | Result |
| -------------------- | ------ |
| `"aGVsbG8gd29ybGQh".decode_base64` | "Hello World!"|

---

## encode_url

URL encode a string

### Example

| Example                    | Result          |
| -------------------------- | --------------- |
| `"Hello World".encode_url` | "Hello%20World" |

---

## encode_urlsafe_base64

Encode using urlsafe modification of Base64 algorithm

### Example

| Example                    | Result          |
| -------------------------- | --------------- |
| `"Hello World".encode_urlsafe_base64` | "SGVsbG8gV29ybGQ=" |

---

## decode_urlsafe_base64

Decode using urlsafe modification of Base64 algorithm

### Example

| Example                    | Result          |
| -------------------------- | --------------- |
| `"SGVsbG8gV29ybGQ".decode_urlsafe_base64` | "Hello World" |

---

## as_string

Decode byte sequence as string in given encoding

### Example

| Example                    | Result          |
| -------------------------- | --------------- |
| `"SGVsbG8gV29ybGQ=".decode_base64.as_string('utf-8')` | "Hello World" |

---

## as_utf8

Decode byte sequence as UTF-8 string

### Example

| Example                    | Result          |
| -------------------------- | --------------- |
| `"SGVsbG8gV29ybGQ=".decode_base64.as_utf8` | "Hello World" |

---

## to_hex

Converts binary string to its hex representation

### Example

| Example                    | Result          |
| -------------------------- | --------------- |
| `"SGVsbG8gV29ybGQ=".decode_base64.to_hex` | "48656c6c6f20576f726c64" |

---


## SHA1

Encrypts a given string using the SHA1 encryption algorithm. [Details here](https://ruby-doc.org/stdlib-2.4.0/libdoc/digest/rdoc/Digest/SHA1.html)

### Example

| Example                       | Result                         |
| ----------------------------- | ------------------------------ |
| `"abcdef".sha1.encode_base64` | "H4rBDyPFtbwRZ72oS4M+XAV6d9I=" |

---


## HMAC formulae

Creates a HMAC signatures with a variety of signing algorithms

### Example

| Signing algorithm    | Example |
| -------------------- | ------ |
| SHA-256  | "username:password:nonce".hmac_sha256("key")|
| SHA-1    | "username:password:nonce".hmac_sha1("key")|
| SHA-512  | "username:password:nonce".hmac_sha512("key")|
| MD5     | "username:password:nonce".hmac_md5("key")|

---

## md5_hexdigest

Accepts a string and creates message digest using the MD5 Message-Digest Algorithm

### Example

| Example    | Result |
| -------------------- | ------ |
| `"hello".md5_hexdigest`  | "5d41402abc4b2a76b9719d911017c592"|

---

## jwt_encode_rs256

Creates JWT with RS256 - RSA using SHA-256 hash algorithm

### Example

| Example    | Result |
| -------------------- | ------ |
| `workato.jwt_encode_rs256({ name: "John Doe" }, "PEM key")`  | "eyJhbGciO..."|

---

## parse_yaml

Parse a YAML string. Supports true, false, nil, numbers, strings, arrays, hashes

### Example

| Example    | Result |
| -------------------- | ------ |
| `workato.parse_yaml("---\nfoo: bar")`  | "{ "foo" => "bar" }"|
| `workato.parse_yaml("---\n- 1\n- 2\n- 3\n")`  | "[1, 2, 3]"|

---

## render_yaml

Render an object into a YAML string.

### Example

| Example    | Result |
| -------------------- | ------ |
| `workato.render_yaml({ "foo" => "bar" })`  | "---\nfoo: bar\n"|
| `workato.render_yaml([1,2,3])`  | "---\n- 1\n- 2\n- 3\n"|

---

## lookup

This formula allows you to lookup values from your Workato lookup tables via a key. It is case sensitive and data type sensitive.

### Example
For example, let's use the following lookup table with name `Department Codes` with an ID of 6:

![Sample department codes lookup table](/assets/images/formula-docs/department-codes-lookup-table.png)
*Sample department codes lookup table*

| Example                                                                       | Result        |
| ----------------------------------------------------------------------------- | ------------- |
| `lookup('Department Codes', 'Department code': 'ACC')['Department']`          | "Accounting"  |
| `lookup('Department Codes', 'Department code': 'SLS')['Department']`          | "Sales"       |
| `lookup('Department Codes', 'Department': 'Marketing')['Department code']`    | "MKT"         |
| `lookup('6', 'Department code': 'ACC')['Department']`                         | "Accounting"  #interchangeable lookup table name and ID |
| `lookup('Department Codes', 'Department': 'marketing')['Department code']`    | nil #case sensitive value for "Marketing"|
| `lookup('Department Codes', 'Department': 'Marketing')['Department Code']`    | nil #case sensitive value for column name "Department code"|

---

## lookup_table

This formula allows you to create a static lookup table and define the keys and values. It is case sensitive and data type sensitive.

### Example
| Example                                                                | Result    |
| ---------------------------------------------------------------------- | --------- |
| `{"key1" => "value1", "key2" => "value2", "key3" => "value3"}["key2"]` | "value2"  |
| `{"High" => "urgent", "Medium" => "mid", "Low" => "normal"}["Low"]`    | "normal"  |
| `{"High" => "urgent", "Medium" => "mid", "Low" => "normal"}["low"]`    | nil       |
| `{"High" => "urgent", "Medium" => "mid", "Low" => "normal"}["normal"]` | nil       |
| `{1 => "1", 2 => "2", 3 => "3"}[2]`                                    | "2"       |
| `{1 => "1", 2 => "2", 3 => "3"}[2.0]`                                  | nil       |
| `{1 => "1", 2 => "2", 3 => "3"}["2"]`                                  | nil       |

---
