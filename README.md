# Firestore starter for Gridsome

[DEMO](https://gridsome-firestore-source.netlify.com/)

This is an example blog of how to use Gridsome and the [Firestore Source plugin](https://gridsome.org/plugins/gridsome-source-firestore) to create a static site:

`gridsome new firestore-blog https://github.com/u12206050/gridsome-firestore-starter`.

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Create a new project with the starter

1. `gridsome create firestore-blog https://github.com/u12206050/gridsome-firestore-starter` to install default starter
2. `cd firestore-blog` to open the folder
3. Update `gridsome.config.js` with your AdminSDK credentials file.
4. `gridsome develop` to start a local dev server at `http://localhost:8080`
5. Happy coding 🎉🙌

## Setup

Until Firestore receives support for handling custom service accounts, the only way is to download the Firebase AdminSDK service account credentials for your project. This does give the plugin full access to your Firebase.

In order to build your site from another server, you'll also these credentials but: BE VERY CAREFUL HOW YOU TRANSPORT THEM! DO NOT PUSH THEM TO GITHUB OR ANY OTHER CODE REPOSITORY!

### Set up Firebase AdminSDK service credentials

1. Navigate to the [settings/serviceaccounts/adminsdk](https://console.firebase.google.com/u/0/project/_/settings/serviceaccounts/adminsdk) of your firebase project.
2. Make sure `Firebase Admin SDK` is selected, and click `Generate new private key``
3. Download the key and save it to the root of your project.
4. For the saftey of everyone included this line in your `.gitignore` file: `*-firebase-adminsdk-*.json`
