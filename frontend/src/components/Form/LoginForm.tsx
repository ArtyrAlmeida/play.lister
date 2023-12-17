import { InputCamp } from "../Input/Input";
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View, Text, StyleSheet } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { ILoginUser, loginSchema } from "../../utils/loginFormSchema";
import { Button } from "../Button/Button";
import { loginUser } from "../../api/login";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthContext } from "../../hooks/useAuthContext";

const LoginForm = ({navigation}:any) => {
    const { control, handleSubmit, formState:{errors} } = useForm<ILoginUser>({resolver: zodResolver(loginSchema)});
    const [loginError, setLoginError] = useState<any>({error: false, message: ''})
    const { dispatch } = useAuthContext();

    const handleUserLogin = async (data:any) => {
        const response = await loginUser(data);
        if(!response){
          setLoginError((err: any) => {
            let newError = err;
            newError['error'] = true;
            newError['message'] = 'unable to realize login into app, please verify your credentials'

            return newError
          })
        }

        AsyncStorage.setItem("@user", response);
        dispatch({type: "LOGIN", payload: response});  
    }

    return(
      <>
      <View style={styles.formContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior="position" enabled >
                <Controller
                    name='email'
                    control={control}
                    render={({ field }) => (
                    <InputCamp
                      label="Email"
                      placeholder="Email"
                      onChangeText={field.onChange}
                      value={field.value}
                    />
                  )}
                />
                {
                  !!errors.email && <Text style={styles.errorMessage}>{errors.email.message}</Text>
                }
                <Controller
                    name='password'
                    control={control}
                    render={({ field }) => (
                    <InputCamp
                      label="Senha"
                      placeholder="Senha"
                      onChangeText={field.onChange}
                      value={field.value}
                    />
                  )}
                />
                {
                  !!errors.password && <Text style={styles.errorMessage}>{errors.password.message}</Text>
                }
                <View style={styles.buttonContainer}>
                  <Button
                    onPress={() => {navigation.navigate('Register')}}
                    title="Ainda não tenho um cadastro"
                    textStyle={styles.registerButton}
                  />
                  <Button containerStyle={styles.overAllButton} textStyle={styles.loginButton} title="entrar" onPress={handleSubmit(handleUserLogin)}/>
                </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
            {}
        </View>
        {loginError && <Text>{ loginError.message }</Text>}
        </>
    )
}

const styles = StyleSheet.create({
  formContainer:{
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
  loginButton: {
      color: "#000",
      textAlign: "center"
  },
  registerButton: {
    color: "#FFF"
  },
  errorMessage: {
    color: "#FFF"
  },
  buttonContainer: {
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  overAllButton: {
    backgroundColor: "#D9D9D9",
    padding: 10,
    borderRadius: 40,
    width: "35%",
    alignContent: "center"
  }
})



export { LoginForm }