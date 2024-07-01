import {SubmitSignUpValues} from '../screens/SignUpScreen';
import {SubmitSignUpAddressValues} from '../screens/SignUpAddressScreen';
import {PetType} from '../interfaces';

type SignUpPhotoScreenParams = SubmitSignUpValues & SubmitSignUpAddressValues;

export type RootStackParamList = {
  SignInScreen: undefined;
  SignUpScreen: undefined;
  SignUpAddressScreen: SubmitSignUpValues;
  SignUpPhotoScreen: SignUpPhotoScreenParams;
  HomeScreen: undefined;
  PetProfileScreen: {pet: PetType};
  UserProfileScreen: undefined;
  AdoptionRequestScreen: undefined;
};
