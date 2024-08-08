import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

export default function MaskedInputDui({dui, setDui}) {
    return (
            <TextInputMask
                style={styles.Input}
                placeholder="Dui"
                placeholderTextColor="#000000"
                type={'custom'}
                options={{
                    mask: '99999999-9' // Formato para el número de teléfono
                }}
                value={dui}
                onChangeText={setDui}
            />
    );
}

const styles = StyleSheet.create({
    Input: {
      backgroundColor:'#D9D9D9',
      color: "#000000",
      fontWeight:'800',
      width:250,
      borderRadius:5,
      padding: 5,
      marginVertical:10
    },
  
  });