import { useEffect, useState } from "react"
import { TouchableOpacity, StyleSheet, View, Image, Text, FlatList } from "react-native";
import { Button } from "../components/Button/Button";
import Header from "../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AddSongModal } from "../components/Modal/AddSongModal";
import Song from "../components/Song/Song";
import { InputCamp } from "../components/Input/Input";
import { PlaylistPrivacy } from "../components/Privacy/PlaylistPrivacy";
import { useAuthContext } from "../hooks/useAuthContext";

const homeIcon = require('../assets/icons/home-icon.png');

const AddPlaylist = ({navigation, route}:any) => {
    const context = useAuthContext();
    const userContext = JSON.parse(context.user)
    
    const [user, setUser] = useState<any>(userContext);
    const [isActive, setIsActive] = useState(false);
    const [songs, setSongs] = useState<any>([])
    const [playlistName, setPlaylistName] = useState<string>("")
    const [playlistPrivacy, setPlaylistPrivacy] = useState<boolean>(false)

    const handleAddPlaylist = () => {
      if(playlistName.length == 0 || songs.length == 0){
        return
      }
    }

    const handlePrivacyChange = () => {
      setPlaylistPrivacy(privacy => !privacy)
    }

    const handleTitleChange = (title: string) => {
      console.log(title)
      setPlaylistName(title)
    }

    const handleActivateModal = (data:any) => {
      setIsActive(true)
    }

    const addSongToPlaylist = (data:any) => {
      setIsActive(false)
      setSongs((songsArr:any) => {
        let newSongs = [...songsArr]
        return [...newSongs, data]
      })
    }

    return(
        <View style={styles.page}>
          <Header userName={user && user.name} navigation={navigation}/>
          {isActive && 
          <View style={styles.modalWrapper}>
            <AddSongModal handleSongAdition={addSongToPlaylist}/>
          </View>}
          <View style={styles.playlistInfo} >
                <Image style={styles.playlistImage} source={homeIcon}/>
                <InputCamp 
                placeholder="Título"
                onChangeText={handleTitleChange}
                value={playlistName}></InputCamp>
          </View>
          <PlaylistPrivacy isPrivate={playlistPrivacy} onPress={handlePrivacyChange}></PlaylistPrivacy>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={() => { setIsActive((state)=> { return !state })}}>
                <Button containerStyle={styles.overAllButton} textStyle={styles.addButton} title="Adicionar Musica" onPress={handleActivateModal}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setIsActive((state)=> { return !state })}}>
                <Button containerStyle={styles.overAllButton} textStyle={styles.addButton} title="Criar Playlist" onPress={handleAddPlaylist}/>
            </TouchableOpacity>
          </View>
          {songs && <FlatList
                        ItemSeparatorComponent={() => <View style={{height: 7}} />}
                        keyExtractor={(item) => item._id as string} 
                        data={songs}
                        renderItem={({item, index}) => <Song titulo={item.titulo} album={item.album} genero={item.genero} artista={item.artista} id={item._id as string} key={index}/>}
          />}
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer:{
      flexDirection: "column",
      alignItems: "center",
    },
    page: {
      flex: 1,
      backgroundColor: "#131112",
      gap: 5
    },
    modalWrapper: {
      zIndex: 1,
      height: "100%",
      backgroundColor: "#000",
    },
    addButton: {
        color: "#000",
        textAlign: "center"
    },
    buttonWrapper:{
      flexDirection: "row",
      justifyContent: "center",
      paddingVertical: 10,
      borderRadius: 30,
      gap: 40
    },
    overAllButton: {
      backgroundColor: "#D9D9D9",
      padding: 10,
      borderRadius: 40,
      alignContent: "center"
    },
    playlistInfo: {
      alignItems: "center",
      marginBottom: 24
  },
  playlistImage: {
      width: 100,
      height: 100,
      backgroundColor: '#D9D9D9',
      marginBottom: 12
  },
  pageWrapper: {
      paddingHorizontal: 18,
      paddingTop: 29,
      width: '100%',
  },
  songList: {
      paddingHorizontal: 18,
      paddingVertical: 20,
      backgroundColor: '#D9D9D9',
      borderRadius: 20,
      minHeight: 460,
      gap: 10
  },
  title: {
      fontSize: 12,
      color: '#ffffff'
  },
  date: {
      fontSize: 10,
      color: '#ffffff'
  }
  })
  

  export { AddPlaylist }