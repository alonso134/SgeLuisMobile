
import { StyleSheet, TextInput} from 'react-native';

export default function InputEmail({placeHolder, setValor, setTextChange}) {

  return (

    <TextInput
    style={styles.Input}
    placeholder={placeHolder}
    value={setValor}
    placeholderTextColor={'#000000'}
    onChangeText={setTextChange}
    keyboardType="email-address"
    />

  );
}

const styles = StyleSheet.create({
  Input: {
    backgroundColor:'#D9D9D9',
    color: "#000000", fontWeight:'800',
    width:250,
    borderRadius:5,
    padding: 5,
    marginVertical:10
  },

});