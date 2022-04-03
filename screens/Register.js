import React, { useState } from 'react';
import {
  InnerContainer,
  LeftIcon,
  PageLogo,
  PageTitle,
  StyledContainer,
  StyledFormArea,
  SubTitle,
  Colors,
  StyledInputLabel,
  StyledInput,
  RightIcon,
  StyledButton,
  ButtonText,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from '../components/Style';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { View } from 'react-native';

// icons
import { Octicons, Ionicons } from '@expo/vector-icons';

// Colors
const { brand, darkLight } = Colors;

const Register = ({ navigation }) => {
  const [hidePass, setHidePass] = useState(true);

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo resizeMode="cover" source={require('../assets/logo.svg')} />
        <PageTitle>TVINM</PageTitle>
        <SubTitle>Account Login</SubTitle>

        <Formik
          initialValues={{ username: '', email: '', password: '' }}
          onSubmit={(values) => {
            console.log(values);
            navigation.navigate('Welcome');
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <TextInput
                label={'Name'}
                icon="person"
                placeholder="Enter Name"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
              <TextInput
                label={'Email'}
                icon="mail"
                placeholder="Enter Email Address"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              <TextInput
                label={'Password'}
                icon="lock"
                placeholder="* * * * * * * *"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePass}
                isPassword={true}
                hidePass={hidePass}
                setHidePass={setHidePass}
              />
              <MsgBox>...</MsgBox>
              <StyledButton>
                <ButtonText>Register</ButtonText>
              </StyledButton>
              <Line></Line>
              <ExtraView>
                <ExtraText>Already have an account?</ExtraText>
                <TextLink onPress={() => navigation.navigate('Login')}>
                  <TextLinkContent>Login</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const TextInput = ({ label, icon, setHidePass, hidePass, isPassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePass((hidePass) => !hidePass)}>
          <Ionicons name={hidePass ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

export default Register;
