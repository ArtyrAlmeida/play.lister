import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InitialPage from './InitialPage';
import YourPlaylists from './YourPlaylists';

const Home = () => {
    return(
        <View style={styles.container}>
            <Header />
              <YourPlaylists />
            <Footer />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131112',
      alignItems: 'center',
    },
});

export { Home }