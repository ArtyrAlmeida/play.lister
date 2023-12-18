import { View, Text, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, StyleSheet } from "react-native"
import { InputCamp } from "../Input/Input"
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ILoginUser } from "../../utils/loginFormSchema";
import { ISongSchema, songSchema } from "../../utils/songFormSchema";
import { PlaylistPrivacy } from "../Privacy/PlaylistPrivacy";
import { Button } from "../Button/Button";

const AddSongModal = ({handleSongAdition}:any) => {
    const { control, handleSubmit, formState:{errors} } = useForm<ISongSchema>({resolver: zodResolver(songSchema)});

    const handleAddSong = async (data:any) => {
        handleSongAdition(data)
    }

    return(
        <View>
            <Text>Adicionar Música</Text>
            <View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior="position" enabled>
                <Controller
                    name='name'
                    control={control}
                    render={({ field }) => (
                    <InputCamp
                      label="Titulo"
                      placeholder="Titulo"
                      onChangeText={field.onChange}
                      value={field.value}
                    />
                  )}
                />
                {
                  !!errors.name && <Text style={styles.errorMessage}>{errors.name.message}</Text>
                }
                <Controller
                    name='length'
                    control={control}
                    render={({ field }) => (
                    <InputCamp
                      label="Duracao"
                      placeholder="Duracao"
                      onChangeText={field.onChange}
                      value={field.value}
                    />
                  )}
                />
                {
                  !!errors.length && <Text style={styles.errorMessage}>{errors.length.message}</Text>
                }
                <Controller
                    name='description'
                    control={control}
                    render={({ field }) => (
                    <InputCamp
                      label="Descricao"
                      placeholder="Descricao"
                      onChangeText={field.onChange}
                      value={field.value}
                    />
                  )}
                />
                {
                  !!errors.description && <Text style={styles.errorMessage}>{errors.description.message}</Text>
                }
                <Controller
                    name='author'
                    control={control}
                    render={({ field }) => (
                    <InputCamp
                      label="Artista"
                      placeholder="Artista"
                      onChangeText={field.onChange}
                      value={field.value}
                    />
                  )}
                />
                {
                  !!errors.author && <Text style={styles.errorMessage}>{errors.author.message}</Text>
                }
                <View style={styles.buttonContainer}>
                  <Button containerStyle={styles.overAllButton} textStyle={styles.addButton} title="Adicionar" onPress={handleSubmit(handleAddSong)}/>
                </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
      color: "#FFF"
    },
    addButton: {
        color: "#000"
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

export { AddSongModal }