import { InputCamp } from "../Input/Input";
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View, Text, StyleSheet } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { IRegisterUser, registerSchema } from "../../utils/registerFormSchema";
import { Button } from "../Button/Button";

const RegisterForm = () => {
    const { control, handleSubmit, formState:{errors} } = useForm<IRegisterUser>({resolver: zodResolver(registerSchema)})

    const handleUserLogin = (data:any) => {
        console.log(data)
    }

    return(
        <View style={styles.formContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                <KeyboardAvoidingView behavior="position" enabled >
                <Controller
                    name='name'
                    control={control}
                    render={({ field }) => (
                    <InputCamp
                      label="Nome"
                      placeholder="Nome"
                      onChangeText={field.onChange}
                      value={field.value}
                    />
                  )}
                />
                {
                  !!errors.email && <Text style={styles.errorMessage}>{errors.email.message}</Text>
                }
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
                <Controller
                    name='passwordConfirm'
                    control={control}
                    render={({ field }) => (
                    <InputCamp
                      label="Confirmar Senha"
                      placeholder="Repita a senha"
                      onChangeText={field.onChange}
                      value={field.value}
                    />
                  )}
                />
                {
                  !!errors.email && <Text style={styles.errorMessage}>{errors.email.message}</Text>
                }
                <View style={styles.buttonContainer}>
                  <Button containerStyle={styles.overAllButton} textStyle={styles.loginButton} title="registrar" onPress={handleSubmit(handleUserLogin)}/>
                </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
  formContainer:{
    flexDirection: "column",
    alignItems: "center",
  },
  loginButton: {
      color: "#000",
      textAlign: "center"
  },
  errorMessage: {
    color: "#FFF"
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: "#D9D9D9",
    borderRadius: 50,
  },
  overAllButton: {
    backgroundColor: "#D9D9D9",
    padding: 10,
    borderRadius: 40,
    width: "35%",
    alignContent: "center"
  }
})

export { RegisterForm }