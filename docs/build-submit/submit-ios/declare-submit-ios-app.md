---
sidebar_position: 1
---

# Declare and submit the app to the App Store
---
### Steps to sign up for an Apple Developer account ###

Your screen will appear as soon as you have your Apple ID, as shown below.

![img alt](/img/publish-app/iOS/declare-apple-01.jpg)

Proceed to sign up

![img alt](/img/publish-app/iOS/declare-apple-02.jpg)

Start to sign up for an *Apple Developer* account

![img alt](/img/publish-app/iOS/declare-apple-03.jpg)

Check *Apple Developer* account registration information.

:::caution

**Town/City:** should fill in the names of major cities, eg Ho Chi Minh, Hanoi, Hai Phong.

**Postal Code:** Apple only accepts 5-digit postal codes, e.g., HCM (15000), Hai Phong (16000), and Ha Noi (10000). If you don't know your postal code, you can look up and search for the city code on Google, and you will have results displayed

:::

Fill in the information to register for an *Apple Developer* account.

![img alt](/img/publish-app/iOS/declare-apple-04.jpg)

Notes when registering for an account *Apple Developer*
Before clicking **“Continue”**, please double-check whether the information is correct or not. Because Apple will evaluate the information, you register to use. So check it out carefully.

Activate account and complete registration

Once you have completed the registration steps, you will receive a confirmation email containing an activation code. You have to select the code and click **“Activate”** on the next page.

![img alt](/img/publish-app/iOS/declare-apple-05.jpg)

---
### Tạo Certificates và P12 ###

Access path: **https://developer.apple.com/account/resources/certificates/list**

![img alt](/img/publish-app/iOS/declare-apple-06.jpg)

Select Option: iOS Distribution (App Store and Ad Hoc) -> **"Continue"**

![img alt](/img/publish-app/iOS/declare-apple-07.jpg)

Select **“Choose File”** to create a new certificate -> **“Continue”**

![img alt](/img/publish-app/iOS/declare-apple-08.jpg)

### Tạo và export Certificate ###

Access Keychain Access on MacBook to create Request a Certificate from a Certificate Authority for your account. Keychain Access > Certificate Assistant > Request a Certificate from a Certificate Authority > Fill in the information > Then save it on your hard drive.

![img alt](/img/publish-app/iOS/declare-apple-09.jpg)

Select “**Choose File”** to create a new certificate just created above -> **“Continue”**

![img alt](/img/publish-app/iOS/declare-apple-10.jpg)

Download ios_distribution.cer file -> On Mac, open file ios_distribution.cer

![img alt](/img/publish-app/iOS/declare-apple-11.jpg)

---
### Generate Keys to get the P8 .file ###

In tab **“Keys”** select **“Create a key”**

![img alt](/img/publish-app/iOS/declare-apple-12.jpg)

Name the Key -> Select **“Apple Push Notifications service (APNs)”** -> Select **“Continue”**

![img alt](/img/publish-app/iOS/declare-apple-13.jpg)

In tab **“Register a New Key”** -> Select **“Register”**

![img alt](/img/publish-app/iOS/declare-apple-14.jpg)

Select **“Download”** to download the P8 file. Save the key of the file to publish the application for iOS and later editions

:::caution

**Note:** You need to keep this P8 file carefully because Apple only allows downloading the file once

:::

![img alt](/img/publish-app/iOS/declare-apple-15.jpg)

Select **“Done”** after downloading the file and saving the Key P8

![img alt](/img/publish-app/iOS/declare-apple-16.jpg)

---
### Create Identifiers ###

In the tab **“Identifiers”** select **“Register an App ID”**

![img alt](/img/publish-app/iOS/declare-apple-17.jpg)

Select **"App IDs"** -> Select **“Continue”**

![img alt](/img/publish-app/iOS/declare-apple-18.jpg)

Select **"App"** -> Select **“Continue”**

![img alt](/img/publish-app/iOS/declare-apple-19.jpg)

:::caution

**Note:** You need to go to Dashboard Appfast Studio and copy the Bundle ID of the app

:::

Select tab **“Settings”** -> **“iOS Application”** -> Copy link of **“iOS Bundle ID”**

![img alt](/img/publish-app/iOS/declare-apple-20.jpg)

Enter app name, iOS Bundle ID -> Select **“Push Notifications”** and **“Sign in with Apple”** -> Select **“Continue”**

![img alt](/img/publish-app/iOS/declare-apple-21.jpg)

Select **“Register”**

![img alt](/img/publish-app/iOS/declare-apple-22.jpg)

---
### Create Profiles (to get the .mobileprovision file) ###

In tab **“Profiles”** select **“Generate a profile”**

![img alt](/img/publish-app/iOS/declare-apple-23.jpg)

Select App Store -> Select **“Continue”**

![img alt](/img/publish-app/iOS/declare-apple-24.jpg)

Select App ID -> Select **“Continue”**

![img alt](/img/publish-app/iOS/declare-apple-25.jpg)

Select Certificates -> Select **“Continue”**

![img alt](/img/publish-app/iOS/declare-apple-26.jpg)

Name **“Provisioning Profile Name”** -> Select **“Generate”**

![img alt](/img/publish-app/iOS/declare-apple-27.jpg)

Download file : .mobileprovision

![img alt](/img/publish-app/iOS/declare-apple-28.jpg)

---
### Create Apps in DEV App Store account ###

Access path: **https://appstoreconnect.apple.com/apps**

![img alt](/img/publish-app/iOS/declare-apple-29.jpg)

Select **“Add Apps”**

![img alt](/img/publish-app/iOS/declare-apple-30.jpg)

Declare the required information for the application -> **“Create”**

1. **Platforms:** What platform does the application you create run on?
2. **Name:** This is your application name
3. **Primary language:** What is the default language that the user sees? If your App is only released in 1 language for 1 country, you choose the app's language. If your application is released worldwide, I think you should choose English because when the user's machine language is not in the list of languages ​​you support, it will display English.
4. **Bundle ID:** This is the bundle ID of your App. It should match the Bundle ID you use in XCode.
5. **SKU:** Short for Stock-Keeping Unit, it helps apple manage their app store when you upload your App to the store. It must be unique, so I often use it with Bundle Id.
6. **User Access:** Access to manage this application

![img alt](/img/publish-app/iOS/declare-apple-31.jpg)

Your new application will be displayed in the list below when the declaration is complete.

![img alt](/img/publish-app/iOS/declare-apple-32.jpg)

Select the App Icon to go to the application management page on the Appstore

![img alt](/img/publish-app/iOS/declare-apple-33.jpg)

---
### Save all the information you created earlier in the same file. ###

Since this is the application's personal information and cannot be recreated, you need to keep this information carefully to use it for later publishing and putting the application in the store.

![img alt](/img/publish-app/iOS/declare-apple-34.jpg)

---
### Declare app information on the store ###

Before uploading the application file to the Appstore, you need to update the information for the application completely.

#### App Information ####
1. **Name:** The application will reuse the name you declared at the creation
2. **Subtitle:** Description title
3. **Category:** Choose the category that corresponds to your application

![img alt](/img/publish-app/iOS/declare-apple-35.jpg)

#### Pricing and Availability ####
1. **Price:** Price to buy apps on Appstore
2. **Availability:** Select the region where in-app purchases are allowed
3. **iPhone and iPad Apps on Apple Silicon Macs:** Is the application allowed on Apple Silicon Macs (Select version)

![img alt](/img/publish-app/iOS/declare-apple-36.jpg)

#### App Distribution Methods #### 
Choose how you want your app to be distributed to users.

![img alt](/img/publish-app/iOS/declare-apple-37.jpg)

#### App Privacy ####
1. **Privacy Policy:** Add a link to the application's privacy policy
2. **Data Types:** Select data types

![img alt](/img/publish-app/iOS/declare-apple-38.jpg)