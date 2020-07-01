import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Formacao() {
  return (
    <View style={estilo.area}>
      <Text style={estilo.titulo}>Formação Acadêmica</Text>
      <Text style={estilo.textoN}>Ensino Médio</Text>
      <Text style={estilo.texto}> - Instituição: Dr. José Pereira de Queiróz</Text>
      <Text style={estilo.texto}> - Situação: Cursando</Text>
      <Text style={estilo.texto}> - Prévia de conclusão: 2020</Text>
      <Text style={estilo.textoN}>Técnico em Informática</Text>
      <Text style={estilo.texto}> - Instituição: SENAC Tatuapé</Text>
      <Text style={estilo.texto}> - Situação: Cursando</Text>
      <Text style={estilo.texto}> - Duração: 3 semestres</Text>
      <Text style={estilo.texto}> - Prévia de conclusão: Outubro de 2020</Text>
      <Text style={estilo.textoN}>Curso de Inglês</Text>
      <Text style={estilo.texto}> - Instituição: CNA</Text>
      <Text style={estilo.texto}> - Situação: Completo</Text>
      <Text style={estilo.texto}> - Duração: 8 anos</Text>
      <Text style={estilo.texto}> - Ano de conclusão: 2019</Text>
      <Text style={{ borderBottomWidth: 2 }}></Text>
      <Text style={estilo.titulo}>Cursos Complementares</Text>
      <Text style={estilo.textoN}>Redes (Avançado)</Text>
      <Text style={estilo.texto}> - Instituição: AulaEAD</Text>
      <Text style={estilo.texto}> - Tipo: Online</Text>
      <Text style={estilo.texto}> - Situação: Concluído</Text>
      <Text style={estilo.texto}> - Ano de conclusão: 2020</Text>
      <Text style={estilo.textoN}>Programação(Intermediário)</Text>
      <Text style={estilo.texto}> - Instituição: AulaEAD</Text>
      <Text style={estilo.texto}> - Tipo: Online</Text>
      <Text style={estilo.texto}> - Situação: Concluído</Text>
      <Text style={estilo.texto}> - Ano de conclusão: 2020</Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  area: {
    backgroundColor: "white",
    flex: 1,
  },
  titulo: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
  },
  texto: {
    textAlign: "justify",
    fontSize: 11,
    marginLeft: 120,
  },
  textoN: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});
