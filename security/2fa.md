---
title: Two-factor authentication
date: 2019-05-24 18:00:00 Z
---

# Two-Factor Authentication

Two-Factor Authentication (2FA) is an industry standard for multi-layered authentication. It requires two separate methods of verifying your identity by requesting something you know (ID and password) and something you have (an **authenticator app** on your phone). This provides an additional layer of security and ensures that no one else has access your Workato account.

### How it works

Upon logging in with your ID and password, Workato will request authentication through an **authenticator app**.

![Workato requesting two-factor authentication](/assets/images/security/2fa/2fa-request.png)
*Workato requesting two-factor authentication*

A unique verification code is generated for you whenever you login to your Workato account. It is a temporary 6-digit code that lets us know it is indeed *you*. Afterwards, the code will expire and cannot be reused.

Workato allows authentication through mobile applications and hardware security keys. Some of the common ones are:
- [Authy](https://authy.com/download/)
- [Symantec VIP](https://vip.symantec.com/)
- [Yubico](https://www.yubico.com/products/yubikey-hardware/) (hardware security key)

### Setup two-factor authentication

Let's go through the activation for two-factor authentication. You will need to be logged in to your Workato account and have your [authenticator app](https://www.pcworld.com/article/3225913/what-is-two-factor-authentication-and-which-2fa-apps-are-best.html) ready. In this example, we will be using **Symantec VIP**.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='10%'>Step</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>
        Open <b>Account Setting</b>.<br>
        <br>
        <img src="/assets/images/security/2fa/profile-dropdown.png"></img><br>
        <i>Profile dropdown</i><br>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>
        Select <b>Two-factor authentication</b> > <b>Setup two-factor authentication</b><br>
        <br>
        <img src="/assets/images/security/2fa/account-setting-before-activation.png"></img><br>
        <i>Two-factor authentication disabled</i><br>
        </td>
    </tr>
    <tr>
      <td>3</td>
      <td>
        Using Symantec VIP, <b>scan</b> the QR code.<br>
        <br>
        <img src="/assets/images/security/2fa/setup-2fa.png"></img><br>
        <i>Two-factor authentication setup</i><br>
        </td>
    </tr>
    <tr>
      <td>4</td>
      <td>
        Copy the 6-digit <b>verification code</b> from Symantec VIP to the Workato setup.<br>
        <br>
        <img src="/assets/images/security/2fa/symantec-workato.png"></img><br>
        <i>Symantec VIP unique verification code</i><br>
        <br>
        The <code>Workato</code> label and <code>profile name</code> lets you know that the connection between Symantec VIP and Workato platform is functioning properly.<br><br>
        <img src="/assets/images/security/2fa/setup-2fa-input.png"></img><br>
        <i>Confirming authenticator app with Workato account</i><br>
        </td>
    </tr>
    <tr>
      <td>5</td>
      <td>
        Save or <code>download</code> a copy of the <b>recovery codes</b>.<br>
        <br>
        <img src="/assets/images/security/2fa/setup-2fa-codes.png"></img><br>
        <i>Recovery codes</i><br>
        <br>
        Remember to store your recovery codes in a secure location. They are <a href="#recovery-codes">single-use</a> codes to authenticate your login, in the event where you do not have your authenticator app with you.
        </td>
    </tr>
    <tr>
      <td>6</td>
      <td>
        Done! You have completed the one-time setup of your Workato two-factor authentication.<br>
        <br>
        <img src="/assets/images/security/2fa/account-setting-activated.png"></img><br>
        <i>Two-factor authentication enabled</i><br>
        </td>
    </tr>
  </tbody>
</table>

### Disable two-factor authentication

In certain situations, you would have to disable your two-factor authentication. For example, in the event of a stolen device or switching to a new work device.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='10%'>Step</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>
        Open <b>Account Setting</b>.<br>
        <br>
        <img src="/assets/images/security/2fa/profile-dropdown.png"></img><br>
        <i>Profile dropdown</i><br>
        </td>
    </tr>
    <tr>
      <td>2</td>
      <td>
        Select <b>Two-factor authentication</b> > <b>Disable two-factor authentication</b><br>
        <br>
        <img src="/assets/images/security/2fa/account-setting-activated.png"></img><br>
        <i>Two-factor authentication</i><br>
        <br>
        <blockquote>This will remove the <b>all trusted devices</b> that were logged in with the authenticator app.</blockquote>
        </td>
    </tr>
  </tbody>
</table>

### Recovery codes

Recovery codes are alphanumeric strings that are uniquely tied to your Workato account. You can use the recovery code to verify your identity in place of the 6-digit verification code. Every recovery code can be use **only once**.

![Using recovery code](/assets/images/security/2fa/recovery-screen.png)
*Using recovery code*

A list of 10 recovery codes are auto-generated at the two-factor authentication setup. You should store them in a secure location, preferably not in the same location as your authenticator app (*i.e. not on your phone*).

#### Lost authentication device

If you deleted your app, changed or lost your device (or security key), you can still access your Workato account. You can use a recovery code to perform two-factor authentication.

Upon logging in, you are advised to **reset** your two-factor authentication settings. By changing the two-factor authentication setting, you are preventing unwanted access to your account thru a stolen device. This also resets two-factor authentication to your new device.

 First, [disable two-factor authentication](#disable-two-factor-authentication). Next, [setup two-factor authentication](#setup-two-factor-authentication) with your new device.

#### Lost recovery codes

If you have not stored your recovery codes or have accidentally deleted them, you can retrieve them from your two-factor authentication setup.

To view your recovery codes, go to  **Account settings** > **Two-factor authentication** > **View recovery codes**.

You are advised to store them in a secure but accessible location.

#### Generate new recovery codes

If you realised that you have misplaced your recovery codes, we advise that you generate a new set. Remember that other people can use the recovery codes to access to your Workato account!

You can also generate new recovery codes if they are depleting. Using the **single-use** recovery codes for two-factor authentication will reduce the total number of available codes. Generating a new set of recovery codes will ensure that you never get locked out of your Workato account.

Select **Account settings** > **Two-factor authentication** > **View recovery codes** > **Regenerate recovery codes**

![Generate new recovery codes](/assets/images/security/2fa/2fa-regenerate-codes.png)
*Generate new recovery codes*

#### Trusted devices

You can temporarily disable two-factor authentication for trusted devices, like a secured work laptop. This allows the device to login without authentication for 30 days.

Select **trust this device** during the two-factor authentication process.

![Trust this device for 30 days](/assets/images/security/2fa/trust-this-device.png)
*Trust this device for 30 days*
