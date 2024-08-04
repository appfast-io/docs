# FastMart Template Documentation

## 1. Introduction

**Project Title**: FastMart Template

**Version**: 1.0.0

**Author**: Appfast.io

**Date**: August 2, 2024

**Description**: FastMart Template is a fully functional mobile app template built with React Native and Expo, designed for quick and easy customization. You can use it to quickly create your own mobile app with minimal effort for your existing WooCommerce website, compatible with any templates.

## 2. Table of Contents

- [FastMart Template Documentation](#fastmart-template-documentation)
  - [1. Introduction](#1-introduction)
  - [2. Table of Contents](#2-table-of-contents)
  - [3. Getting Started](#3-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [4. Configuration](#4-configuration)
    - [Project Structure](#project-structure)
    - [Configuration Files](#configuration-files)
    - [WooCommerce Configuration](#woocommerce-configuration)
  - [5. Customization](#5-customization)
    - [Modifying Components](#modifying-components)
    - [Adding New Features](#adding-new-features)
  - [6. Deployment](#6-deployment)
    - [Android](#android)
    - [iOS](#ios)
    - [Web](#web)
  - [7. FAQs](#7-faqs)
  - [8. Support](#8-support)
  - [9. Changelog](#9-changelog)

## 3. Getting Started

### Prerequisites

- **Software Requirements**:

  - Node.js (version 14.x or later)
  - npm (version 6.x or later) or yarn (version 4.x or later)
  - Expo CLI (version 4.x or later)
- **Knowledge Requirements**:

  - Basic understanding of React Native

### Installation

After purchasing FastMart app on CodeCanyon, download the source code package.

Extracting the zip file of source code, open it with Android Studio or Visual Studio Code.

Open iOS/Android simulator.

Install Dependencies:

```bash
yarn install
```

Run the App:

```bash
yarn start
```

## 4. Configuration

### Project Structure

The project structure is as follows:

```bash
├── assets
├── src
│ ├── app
│ │ ├── blocks
│ │ ├── components
│ │ ├── utils
│ └── project.json
├── index.ts
├── package.json
└── readme.md
```

- assets: Contains images and other assets
- src/blocks: Contains block components
- src/components: Contains reusable components
- src/utils: Contains utility functions
- index.ts: Entry point of the app
- package.json: Project metadata and dependencies

### Configuration Files

- src/project.json: All configuration settings for the app here.

### WooCommerce Configuration

If you already had a WooCommerce website, you can get the [WooCommerce API key](https://docs.appfast.io/docs/WORDPRESS%20PLUGIN/wordpress-plugin#%EF%B8%8F-woocommerce) and configure it in the `config.js` file.

If you don't have a WooCommerce website, you can use our [Appfast cloud backend](https://docs.appfast.io/docs/GETTING%20STARTED/backend-tab) in the [Appfast Studio](https://www.appfast.io/).

## 5. Customization

There are 2 ways to customize the design of this app:

1. Customize via the drag&drop [Appfast Studio tool](https://docs.appfast.io/).

    You can import the `src/project.json` file, customize your design, then export the JSON file, and replace it with `src/project.json` in the source code of app.

2. Customize directly on the source code of app via Android Studio or Visual Studio Code as below:

### Modifying Components

To customize a component, locate it in the src/components directory. For example, to modify the Button component:

```javascript
// src/app/components/Pressable.tsx

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = {
  button: {
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  }
};

export default Button;
```

### Adding New Features

To add a new component, create a new file in the `src/app/components` directory. For example, to add a `Profile` component:

```javascript
// src/app/components/Profile.tsx

import React from 'react';
import { View, Text } from 'react-native';

const Profile = () => (
  <View style={styles.container}>
    <Text style={styles.text}>This is the Profile component.</Text>
  </View>
);

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  }
};

export default Profile;
```

## 6. Deployment

### Android

1. **Build APK**:

   ```bash
   expo build:android
   ```

2. **Install APK on Device**:

   - Transfer the APK file to your device and open it to install.

### iOS

1. **Build IPA**:

   ```bash
   expo build:ios
   ```

2. **Install IPA on Device**:

   - Use Xcode or TestFlight to install the IPA on your iOS device.

### Web

1. **Build Web App**:

   ```bash
   expo build:web
   ```

2. **Open Web App**:

   ```bash
   open http://localhost:19006
   ```

## 7. FAQs

- **How do I change the app name and icon?**

  - Modify the app.json file and update the name and icon properties.

- **How do I integrate third-party services (e.g., Firebase)?**

  - Follow the official documentation for integrating third-party services. Add necessary packages and configuration in App.js.

## 8. Support

For support, contact us at [[support@appfast.io](support@appfast.io)].

## 9. Changelog

- 1.0.0: Initial release.
