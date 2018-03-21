
# react-native-device-metrics

## Getting started

`$ npm install react-native-device-metrics --save`

### Mostly automatic installation

`$ react-native link react-native-device-metrics`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-device-metrics` and add `RNReactNativeLibrary.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNReactNativeLibrary.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNReactNativeLibraryPackage;` to the imports at the top of the file
  - Add `new RNReactNativeLibraryPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-device-metrics'
  	project(':react-native-device-metrics').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-device-metrics/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-device-metrics')
  	```

## Usage
```javascript
import RNReactNativeLibrary from 'react-native-device-metrics';

const SDK = RNReactNativeLibrary.getDeviceMetrics();
```
  