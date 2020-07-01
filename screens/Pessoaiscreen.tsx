import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function pessoais() {
  return (
    <View style={estilo.area}>
      <Image
        source={require("../navigation/img/perfil.png")}
        style={{ width: "25%", height: 100, marginLeft: 154 }}
      />
      <Text style={estilo.nome}>Carlos Henrique</Text>
      <Text></Text>
      <Text></Text>
      <Text style={estilo.texto}>
        Idade: <Text style={estilo.semNegrito}>17</Text>
      </Text>
      <Text style={estilo.texto}>
        Estado Civil: <Text style={estilo.semNegrito}>Solteiro</Text>
      </Text>
      <Text style={estilo.texto}>
        Nacionalidade: <Text style={estilo.semNegrito}>Brasileiro</Text>
      </Text>
      <Text style={estilo.texto}>
        CPF: <Text style={estilo.semNegrito}>XXX.XXX.XXX-XX</Text>
      </Text>
      <Text></Text>
      <Text style={estilo.texto}>
        Telefone: <Text style={estilo.semNegrito}>XXXXXXXX</Text>
      </Text>
      <Text style={estilo.texto}>
        Celular: <Text style={estilo.semNegrito}>(11) 94281-4438</Text>
      </Text>
      <Text style={estilo.texto}>
        Email: <Text style={estilo.semNegrito}>chfaria13@gmail.com</Text>
      </Text>
      <Text></Text>
      <Text style={estilo.texto}>
        Endereço:
        <Text style={estilo.semNegrito}> Rua São Vitório 435, São Paulo - SP</Text>
      </Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  area: {
    backgroundColor: "white",
    flex: 1,
  },
  nome: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 8,
  },
  texto: {
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 4,
    padding: 10,
    textAlign: "justify",
  },
  semNegrito: {
    fontWeight: "normal",
  },
});
