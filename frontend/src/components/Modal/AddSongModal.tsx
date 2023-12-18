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
        console.log(data)
        handleSongAdition(data)
    }

    return(
        <View>
            <Text>Adicionar Música</Text>
            <View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior="position" enabled>
                <Controller
                    name='titulo'
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
                  !!errors.titulo && <Text style={styles.errorMessage}>{errors.titulo.message}</Text>
                }
                <Controller
                    name='artista'
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
                  !!errors.artista && <Text style={styles.errorMessage}>{errors.artista.message}</Text>
                }
                <Controller
                    name='album'
                    control={control}
                    render={({ field }) => (
                    <InputCamp
                      label="Album"
                      placeholder="Album"
                      onChangeText={field.onChange}
                      value={field.value}
                    />
                  )}
                />
                {
                  !!errors.album && <Text style={styles.errorMessage}>{errors.album.message}</Text>
                }
                <Controller
                    name='genero'
                    control={control}
                    render={({ field }) => (
                    <InputCamp
                      label="Genero"
                      placeholder="Genero"
                      onChangeText={field.onChange}
                      value={field.value}
                    />
                  )}
                />
                {
                  !!errors.genero && <Text style={styles.errorMessage}>{errors.genero.message}</Text>
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