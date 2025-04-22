# NewsApp 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start or npm start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

3. Api Key

Get your Gnews Api key, create a file named .env in the root of the project folder.
then append it to the file like this

```javascript
EXPO_PUBLIC_API_KEY=your_api_key
```

## Technologies

- Typescript
- NativeWind // tailwindcss like css for rapid styling
- useFetch // this is a custom made hook that call the fetch api
method and return the data, loading, or possible error