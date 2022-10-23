import React, { useContext, useRef, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styled from "styled-components/native";
import { Button, TouchableOpacity, View } from "react-native";
import { Text } from "../../../components/typography/text.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const PermissionsContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

const PermissionsText = styled(Text)`
  text-align: center;
`;

export const CameraScreen = ({ navigation }) => {
  const [type, setType] = useState(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const { user } = useContext(AuthenticationContext);

  const cameraRef = useRef();

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  if (!permission) {
    // Camera permissions are still loading
    return (
      <View>
        <Text>No Access to Camera</Text>
      </View>
    );
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <PermissionsContainer>
        <PermissionsText>
          We need your permission to show the camera
        </PermissionsText>
        <Button onPress={requestPermission} title="Grant permission" />
      </PermissionsContainer>
    );
  }

  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={type}
        ratio={"16:9"}
      />
    </TouchableOpacity>
  );
};
