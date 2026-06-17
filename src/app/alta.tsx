import { BottomTabInset, Spacing } from '@/constants/theme';
import React from 'react';
import { FlatList, Image, PlatformColor, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const insets = {
    ...safeAreaInsets,
    bottom: safeAreaInsets.bottom + BottomTabInset + Spacing.three,
  };

  const emaltaData = [
    {
      id: "1",
      title: "Titulo do show",
      image: { uri: ("https://picsum.photos/200") },
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed porta ipsum, eu suscipit felis. Vivamus fermentum felis lorem, sed pellentesque nibh facilisis vel. Pellentesque facilisis mi ut leo congue, vel rutrum augue aliquet. Mauris nec tellus justo. Morbi dapibus nisi sit amet odio ultrices, vel ultrices turpis posuere. Suspendisse et efficitur turpis. Vestibulum tincidunt, eros in aliquam varius, lorem quam semper justo, malesuada convallis sapien urna id tortor. ",
      artista: "Artista"
    }, {
      id: "2",
      title: "Titulo do show",
      image: { uri: ("https://picsum.photos/200") },
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed porta ipsum, eu suscipit felis. Vivamus fermentum felis lorem, sed pellentesque nibh facilisis vel. Pellentesque facilisis mi ut leo congue, vel rutrum augue aliquet. Mauris nec tellus justo. Morbi dapibus nisi sit amet odio ultrices, vel ultrices turpis posuere. Suspendisse et efficitur turpis. Vestibulum tincidunt, eros in aliquam varius, lorem quam semper justo, malesuada convallis sapien urna id tortor. ",
      artista: "Artista"
    }, {
      id: "3",
      title: "Titulo do show",
      image: { uri: ("https://picsum.photos/200") },
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed porta ipsum, eu suscipit felis. Vivamus fermentum felis lorem, sed pellentesque nibh facilisis vel. Pellentesque facilisis mi ut leo congue, vel rutrum augue aliquet. Mauris nec tellus justo. Morbi dapibus nisi sit amet odio ultrices, vel ultrices turpis posuere. Suspendisse et efficitur turpis. Vestibulum tincidunt, eros in aliquam varius, lorem quam semper justo, malesuada convallis sapien urna id tortor. ",
      artista: "Artista"
    }, {
      id: "4",
      title: "Titulo do show",
      image: { uri: ("https://picsum.photos/200") },
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed porta ipsum, eu suscipit felis. Vivamus fermentum felis lorem, sed pellentesque nibh facilisis vel. Pellentesque facilisis mi ut leo congue, vel rutrum augue aliquet. Mauris nec tellus justo. Morbi dapibus nisi sit amet odio ultrices, vel ultrices turpis posuere. Suspendisse et efficitur turpis. Vestibulum tincidunt, eros in aliquam varius, lorem quam semper justo, malesuada convallis sapien urna id tortor. ",
      artista: "Artista"
    }, {
      id: "5",
      title: "Titulo do show",
      image: { uri: ("https://picsum.photos/200") },
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed porta ipsum, eu suscipit felis. Vivamus fermentum felis lorem, sed pellentesque nibh facilisis vel. Pellentesque facilisis mi ut leo congue, vel rutrum augue aliquet. Mauris nec tellus justo. Morbi dapibus nisi sit amet odio ultrices, vel ultrices turpis posuere. Suspendisse et efficitur turpis. Vestibulum tincidunt, eros in aliquam varius, lorem quam semper justo, malesuada convallis sapien urna id tortor. ",
      artista: "Artista"
    }, {
      id: "6",
      title: "Titulo do show",
      image: { uri: ("https://picsum.photos/200") },
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed porta ipsum, eu suscipit felis. Vivamus fermentum felis lorem, sed pellentesque nibh facilisis vel. Pellentesque facilisis mi ut leo congue, vel rutrum augue aliquet. Mauris nec tellus justo. Morbi dapibus nisi sit amet odio ultrices, vel ultrices turpis posuere. Suspendisse et efficitur turpis. Vestibulum tincidunt, eros in aliquam varius, lorem quam semper justo, malesuada convallis sapien urna id tortor. ",
      artista: "Artista"
    }, {
      id: "7",
      title: "Titulo do show",
      image: { uri: ("https://picsum.photos/200") },
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed porta ipsum, eu suscipit felis. Vivamus fermentum felis lorem, sed pellentesque nibh facilisis vel. Pellentesque facilisis mi ut leo congue, vel rutrum augue aliquet. Mauris nec tellus justo. Morbi dapibus nisi sit amet odio ultrices, vel ultrices turpis posuere. Suspendisse et efficitur turpis. Vestibulum tincidunt, eros in aliquam varius, lorem quam semper justo, malesuada convallis sapien urna id tortor. ",
      artista: "Artista"
    }, {
      id: "8",
      title: "Titulo do show",
      image: { uri: ("https://picsum.photos/200") },
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed porta ipsum, eu suscipit felis. Vivamus fermentum felis lorem, sed pellentesque nibh facilisis vel. Pellentesque facilisis mi ut leo congue, vel rutrum augue aliquet. Mauris nec tellus justo. Morbi dapibus nisi sit amet odio ultrices, vel ultrices turpis posuere. Suspendisse et efficitur turpis. Vestibulum tincidunt, eros in aliquam varius, lorem quam semper justo, malesuada convallis sapien urna id tortor. ",
      artista: "Artista"
    }, {
      id: "9",
      title: "Titulo do show",
      image: { uri: ("https://picsum.photos/200") },
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed porta ipsum, eu suscipit felis. Vivamus fermentum felis lorem, sed pellentesque nibh facilisis vel. Pellentesque facilisis mi ut leo congue, vel rutrum augue aliquet. Mauris nec tellus justo. Morbi dapibus nisi sit amet odio ultrices, vel ultrices turpis posuere. Suspendisse et efficitur turpis. Vestibulum tincidunt, eros in aliquam varius, lorem quam semper justo, malesuada convallis sapien urna id tortor. ",
      artista: "Artista"
    }, {
      id: "10",
      title: "Titulo do show",
      image: { uri: ("https://picsum.photos/200") },
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed porta ipsum, eu suscipit felis. Vivamus fermentum felis lorem, sed pellentesque nibh facilisis vel. Pellentesque facilisis mi ut leo congue, vel rutrum augue aliquet. Mauris nec tellus justo. Morbi dapibus nisi sit amet odio ultrices, vel ultrices turpis posuere. Suspendisse et efficitur turpis. Vestibulum tincidunt, eros in aliquam varius, lorem quam semper justo, malesuada convallis sapien urna id tortor. ",
      artista: "Artista"
    },
  ]

  return (
    emaltaData.length > 0 ? <FlatList
      data={emaltaData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{ display: "flex", flexDirection: "row", marginTop: Spacing.four, gap: Spacing.three, marginHorizontal: Spacing.three }}>
          <Text style={{ color: PlatformColor("label"), fontFamily: "Archivo_500Medium", fontSize: 32, alignSelf: "center", width: 36 }}>{item.id}</Text>
          <TouchableOpacity activeOpacity={0.5} style={{ flex: 1, height: 150, backgroundColor: PlatformColor("tertiarySystemFill"), display: "flex", flexDirection: "row" }}>
            <Image source={item.image} style={{ height: "100%", width: 100 }} />
            <View style={{ justifyContent: "flex-start", alignContent: "flex-start", display: "flex", gap: Spacing.one, marginTop: Spacing.two, marginLeft: Spacing.three }}>
              <Text style={{ color: PlatformColor("label"), fontFamily: "Archivo_400Regular", fontSize: 24, }}>{item.title}</Text>
              <Text style={{ color: PlatformColor("label"), fontFamily: "Archivo_400Regular", fontSize: 18 }}>{item.artista}</Text>
              <Text numberOfLines={4} style={{ color: PlatformColor("secondaryLabel"), fontFamily: "Archivo_300Light", fontSize: 12, width: 200 }}>{item.descricao}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    />
      : <View>
        <Text>Hello world</Text>
      </View>
  );
}

const styles = StyleSheet.create({

});
