
# aerogear-react-native-core

## Getting started

`$ npm install aerogear-react-native-core --save`

### Mostly automatic installation

`$ react-native link aerogear-react-native-core`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `aerogear-react-native-core` and add `MobileCore.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libMobileCore.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.MobileCorePackage;` to the imports at the top of the file
  - Add `new MobileCorePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':aerogear-react-native-core'
  	project(':aerogear-react-native-core').projectDir = new File(rootProject.projectDir, 	'../node_modules/aerogear-react-native-core/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':aerogear-react-native-core')
  	```

## Usage
```javascript
import MobileCore from 'aerogear-react-native-core';

const SDK = MobileCore.getDeviceMetrics();
```
  