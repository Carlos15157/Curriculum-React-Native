import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Objetivo() {
  return (
    <View style={estilo.area}>
      <Text style={estilo.titulo}>Objetivo Profissional</Text>
      <Text style={estilo.texto}>
        Desejo encontrar uma empresa onde eu possa ir mais longe com meus conhecimentos e habilidades
        , ao lados de pessoas com grandes desejos de crescerem na vida e sempre trabalhando juntos para o futuro
        da empresa
      </Text>
      <Text style={estilo.titulo}>Áreas de interesse</Text>
      <Text style={estilo.texto2}>- Programação/T.I no nível Técnico</Text>
      <Text style={estilo.texto2}>- Infraestrutura/T.I para Estágio</Text>
      <Text style={estilo.texto2}>- Auxiliar de Redes/T.I para Estágio</Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  area: {
    backgroundColor: "white",
    flex: 1,
  },
  titulo: {
    textAlign: "left",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    padding: 10,
  },
  texto: {
    textAlign: "justify",
    fontSize: 14,
    padding: 10,
  },
  texto2: {
    fontSize: 14,
    padding: 4,
  },
});
