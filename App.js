import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingViewComponent, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, Animated } from 'react-native';

export default function App() {

  const [offset] = useState(new Animated.ValueXY({x: 100, y: 0}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x: 100, y: 0}));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.x, {
        toValue: 0,
        speed: 5,
        bounciness: 30
      }),

        Animated.spring(logo.x, {
          toValue: 0,
          speed: 5,
          bounciness: 30
        }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
      })
    ]).start();
   
  }, []);

  return (
    <KeyboardAvoidingView style={styles.backgroud}>
      <View style={styles.containerLogo}>
        <Image style={{
          width: 130,
          height: 155
        }} source={require('./assets/logo.png')} />
      </View>

      <Animated.View style={[styles.container,{
          opacity: opacity,
          transform: [
            { translateX: offset.x }
          ]
      }]}>
        <TextInput style={styles.input} placeholder="Email" autoCorrect={false} onChangeText={() => {}} />
        <TextInput style={styles.input} placeholder="Senha" autoCorrect={false} onChangeText={() => {}} />

        <TouchableOpacity style={styles.btnAcessar}>
          <Text style={styles.acessarText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCriar}>
          <Text style={styles.criarText}>Crie sua conta gratuita</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnEsqueceu}>
          <Text style={styles.esqueceuText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  backgroud:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919'
  },
  containerLogo:{
    flex: 1,
    justifyContent: 'center',
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50
  },
  input:{
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },
  btnAcessar:{
    backgroundColor: '#A4C639',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  acessarText:{
    color: '#FFF',
    fontSize: 18
  },
  btnCriar:{
    
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 7,
    borderRadius: 7
  },
  criarText:{
    color: '#D3D3D3',
    fontSize: 18
  },
  btnEsqueceu:{
    
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 27,
    borderRadius: 7
  },
  esqueceuText:{
    color: '#A9A9A9',
    fontSize: 18
  }
});
