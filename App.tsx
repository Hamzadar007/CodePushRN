import React, { useEffect } from 'react';
import {
  AppState,
  SafeAreaView,

} from 'react-native';


import codePush from "react-native-code-push";
import CodePush from "react-native-code-push";


let codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  installMode: CodePush.InstallMode.IMMEDIATE, // Ensures the update is installed immediately
  updateDialog: {
    title: "Update available",
    optionalUpdateMessage:
      "An update is available. Would you like  to install it?",
    mandatoryUpdateMessage:
      "An update is available and needs to be installed. Your app will refresh after the update is complete.",
    optionalIgnoreButtonLabel: "Later",
    optionalInstallButtonLabel: "Install",
  },
};

function App(): React.JSX.Element {


 
  return (
    <SafeAreaView style={{backgroundColor:"blue",flex:1}}>
   
    </SafeAreaView>
  );
}


export default codePush(codePushOptions)( App);
