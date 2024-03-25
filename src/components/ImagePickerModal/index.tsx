import React, {
    useRef,
    useEffect
  } from "react";
  import { 
    Text, 
    View 
  } from "react-native";
  import FontAwesome from "react-native-vector-icons/FontAwesome";
  import { Portal } from "react-native-portalize";
  import { Modalize } from 'react-native-modalize';
  import { RectButton } from "react-native-gesture-handler";
  import { 
    launchCamera, 
    launchImageLibrary, 
    ImagePickerResponse
  } from 'react-native-image-picker';
  
  import styles from './styles';
  import theme from "../../global/styles/theme";

  interface ImagePickerModalProps {
    isVisible: boolean;
    hasRemoveOption?: boolean;
    onClose: () => void;
    onImageSelected: (response: ImagePickerResponse) => void;
    onRemoveImage?: () => void;
  }

  const ImagePickerModal:  React.FC<ImagePickerModalProps> = ({
    isVisible,
    hasRemoveOption = false,
    onClose,
    onImageSelected,
    onRemoveImage
  }) => {
    const ref = useRef<Modalize>(null);
  
    useEffect(() => {
      if(isVisible) {
        ref.current?.open();
      } else {
        ref.current?.close();
      }
    }, [isVisible]);
  
    const handleLaunchCamera = () => {
      ref.current?.close();
  
      launchCamera({
        mediaType: 'photo',
        includeBase64: false,
      }, response => {
        if(
          response.didCancel ||
          response.errorCode ||
          response.errorMessage
        ){
          return;
        }
  
        if(response?.assets) {
          onImageSelected(response);
        };
      });
    }
  
    const handleLaunchImageLibrary = () => {
      ref.current?.close();
  
      launchImageLibrary({
        mediaType: 'photo',
        includeBase64: false,
      }, response => {
        if(
          response.didCancel ||
          response.errorCode ||
          response.errorMessage
        ){
          return;
        }
  
        if(response?.assets) {
          onImageSelected(response);
        };
      });
    }
  
    return (
      <Portal>
        <Modalize 
          ref={ref}
          adjustToContentHeight={true}
          scrollViewProps={{ showsVerticalScrollIndicator: false }}
          overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          panGestureEnabled={true}
          onClose={() => {
            onClose();
          }}
        >
          <View style={styles.container}>
            <Text style={styles.title}>
              Selecione alguma opção:
            </Text>
  
            <RectButton 
              style={styles.button}
              onPress={() => {
                handleLaunchCamera();
              }}
            >
              <View style={styles.icon}>
                <FontAwesome 
                  size={24} 
                  name="camera" 
                  color={theme.colors.TEXT} 
                />
              </View>
  
              <Text style={styles.text}>
                Tirar foto agora
              </Text>
            </RectButton>
  
            <RectButton 
              style={styles.button}
              onPress={() => {
                handleLaunchImageLibrary();
              }}
            >
              <View style={styles.icon}>
                <FontAwesome 
                  size={24} 
                  name="image" 
                  color={theme.colors.TEXT} 
                />
              </View>
  
              <Text style={styles.text}>
                Escolher da galeria
              </Text>
            </RectButton>
  
            {hasRemoveOption && (
              <RectButton 
                style={styles.button}
                onPress={() => {
                  ref.current?.close();
  
                  if(onRemoveImage) {
                    onRemoveImage();
                  }
                }}
              >
                <View style={styles.icon}>
                  <FontAwesome 
                    size={24} 
                    name="trash" 
                    color={theme.colors.DANGER} 
                  />
                </View>
  
                <Text style={[
                  styles.text,
                  { color: theme.colors.DANGER }
                ]}>
                  Remover imagem atual
                </Text>
              </RectButton>
            )}
          </View>
        </Modalize>
      </Portal>
    )
  }
  
  export default ImagePickerModal;