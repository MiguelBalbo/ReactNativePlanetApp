import { Spacing } from "@/constants/theme";
import { Archivo_300Light, Archivo_400Regular, Archivo_500Medium } from "@expo-google-fonts/archivo";
import { useFonts } from "expo-font";
import { GlassView, isGlassEffectAPIAvailable } from "expo-glass-effect";
import { LinearGradient } from 'expo-linear-gradient';
import { SymbolView } from "expo-symbols";
import { ArrowCircleRightIcon } from "phosphor-react-native";
import React, { useRef, useState } from "react";
import { Animated, FlatList, Image, Platform, PlatformColor, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance, Pagination } from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";
import PlanetComponent from "../components/svg/PlanetIcon";


export default function HomeScreen() {
  const [fontsLoaded] = useFonts({ Archivo_500Medium, Archivo_400Regular, Archivo_300Light });
  const { width } = useWindowDimensions();
  const progress = useSharedValue(0);

  const [inputSearch, setInputSearch] = useState("");

  const carouselContent = [
    {
      id: "1",
      image: { uri: "https://avontheatre.org/wp-content/uploads/2023/08/2_Landscape-Hero-Art_16x9_3000-scaled.jpg" },
      title: "Taylor Swift: The Eras Tour",
      classificacao: 0,
    },
    {
      id: "2",
      image: { uri: "https://www.xfinitymobilearena.com/assets/img/25MKE000-CONAN-GRAY-WEB-GRAPHICS-760x460-7f9acbfc7d.png" },
      title: "Conan Gray: Wishbone Tour",
      classificacao: 1
    },
    {
      id: "3",
      image: { uri: "https://images.ticket360.com.br/images.ticket360/eventos/interna/33195-20260515191011.webp" },
      title: "Marina Sena: Coisas Naturais Tour",
      classificacao: 2
    },
    {
      id: "4",
      image: { uri: "https://themusicuniverse.com/wp-content/uploads/2025/08/arianagrandeeternaltour.jpg" },
      title: "Ariana Grande: Eternal Sunshine Tour",
      classificacao: 3
    },
    {
      id: "5",
      image: { uri: "https://climatepledgearena.com/wp-content/uploads/2025/10/26-Demi-Lovato_CPA-Web_1600x900.jpg" },
      title: "Demi Lovato: It's Not That Deep Tour",
      classificacao: 4
    },
  ];

  const novidadesData = [
    {
      id: "1",
      nome: "Turne 1",
      artista: "Artista",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mi eget purus venenatis dapibus. Nulla sed nisl et justo scelerisque convallis vel ullamcorper nibh. Nullam vulputate arcu libero, ac semper velit vehicula euismod. Duis egestas nunc felis, in aliquet elit scelerisque a. Aliquam erat volutpat. Quisque sollicitudin ultricies quam, non malesuada diam blandit et. Vivamus finibus tincidunt efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer in mattis ligula, sed auctor turpis. Donec in facilisis felis. Curabitur et tincidunt felis. Donec fringilla urna quis nisl fringilla, in rutrum ante pulvinar.",
      img: { uri: "https://images.pexels.com/photos/12607330/pexels-photo-12607330.jpeg" }
    },
    {
      id: "2",
      nome: "Turne 2",
      artista: "Artista",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mi eget purus venenatis dapibus. Nulla sed nisl et justo scelerisque convallis vel ullamcorper nibh. Nullam vulputate arcu libero, ac semper velit vehicula euismod. Duis egestas nunc felis, in aliquet elit scelerisque a. Aliquam erat volutpat. Quisque sollicitudin ultricies quam, non malesuada diam blandit et. Vivamus finibus tincidunt efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer in mattis ligula, sed auctor turpis. Donec in facilisis felis. Curabitur et tincidunt felis. Donec fringilla urna quis nisl fringilla, in rutrum ante pulvinar.",
      img: { uri: "https://images.pexels.com/photos/12607330/pexels-photo-12607330.jpeg" }
    },
    {
      id: "3",
      nome: "Turne 3",
      artista: "Artista",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mi eget purus venenatis dapibus. Nulla sed nisl et justo scelerisque convallis vel ullamcorper nibh. Nullam vulputate arcu libero, ac semper velit vehicula euismod. Duis egestas nunc felis, in aliquet elit scelerisque a. Aliquam erat volutpat. Quisque sollicitudin ultricies quam, non malesuada diam blandit et. Vivamus finibus tincidunt efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer in mattis ligula, sed auctor turpis. Donec in facilisis felis. Curabitur et tincidunt felis. Donec fringilla urna quis nisl fringilla, in rutrum ante pulvinar.",
      img: { uri: "https://images.pexels.com/photos/12607330/pexels-photo-12607330.jpeg" }
    },
    {
      id: "4",
      nome: "Turne 4",
      artista: "Artista",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mi eget purus venenatis dapibus. Nulla sed nisl et justo scelerisque convallis vel ullamcorper nibh. Nullam vulputate arcu libero, ac semper velit vehicula euismod. Duis egestas nunc felis, in aliquet elit scelerisque a. Aliquam erat volutpat. Quisque sollicitudin ultricies quam, non malesuada diam blandit et. Vivamus finibus tincidunt efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer in mattis ligula, sed auctor turpis. Donec in facilisis felis. Curabitur et tincidunt felis. Donec fringilla urna quis nisl fringilla, in rutrum ante pulvinar.",
      img: { uri: "https://images.pexels.com/photos/12607330/pexels-photo-12607330.jpeg" }
    },
    {
      id: "5",
      nome: "Turne 5",
      artista: "Artista",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mi eget purus venenatis dapibus. Nulla sed nisl et justo scelerisque convallis vel ullamcorper nibh. Nullam vulputate arcu libero, ac semper velit vehicula euismod. Duis egestas nunc felis, in aliquet elit scelerisque a. Aliquam erat volutpat. Quisque sollicitudin ultricies quam, non malesuada diam blandit et. Vivamus finibus tincidunt efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer in mattis ligula, sed auctor turpis. Donec in facilisis felis. Curabitur et tincidunt felis. Donec fringilla urna quis nisl fringilla, in rutrum ante pulvinar.", img: { uri: "https://images.pexels.com/photos/12607330/pexels-photo-12607330.jpeg" }
    },
    {
      id: "6",
      nome: "Turne 6",
      artista: "Artista",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mi eget purus venenatis dapibus. Nulla sed nisl et justo scelerisque convallis vel ullamcorper nibh. Nullam vulputate arcu libero, ac semper velit vehicula euismod. Duis egestas nunc felis, in aliquet elit scelerisque a. Aliquam erat volutpat. Quisque sollicitudin ultricies quam, non malesuada diam blandit et. Vivamus finibus tincidunt efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer in mattis ligula, sed auctor turpis. Donec in facilisis felis. Curabitur et tincidunt felis. Donec fringilla urna quis nisl fringilla, in rutrum ante pulvinar.", img: { uri: "https://images.pexels.com/photos/12607330/pexels-photo-12607330.jpeg" }
    },
    {
      id: "7",
      nome: "Turne 7",
      artista: "Artista",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mi eget purus venenatis dapibus. Nulla sed nisl et justo scelerisque convallis vel ullamcorper nibh. Nullam vulputate arcu libero, ac semper velit vehicula euismod. Duis egestas nunc felis, in aliquet elit scelerisque a. Aliquam erat volutpat. Quisque sollicitudin ultricies quam, non malesuada diam blandit et. Vivamus finibus tincidunt efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer in mattis ligula, sed auctor turpis. Donec in facilisis felis. Curabitur et tincidunt felis. Donec fringilla urna quis nisl fringilla, in rutrum ante pulvinar.", img: { uri: "https://images.pexels.com/photos/12607330/pexels-photo-12607330.jpeg" }
    },
    {
      id: "8",
      nome: "Turne 8",
      artista: "Artista",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mi eget purus venenatis dapibus. Nulla sed nisl et justo scelerisque convallis vel ullamcorper nibh. Nullam vulputate arcu libero, ac semper velit vehicula euismod. Duis egestas nunc felis, in aliquet elit scelerisque a. Aliquam erat volutpat. Quisque sollicitudin ultricies quam, non malesuada diam blandit et. Vivamus finibus tincidunt efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer in mattis ligula, sed auctor turpis. Donec in facilisis felis. Curabitur et tincidunt felis. Donec fringilla urna quis nisl fringilla, in rutrum ante pulvinar.",
      img: { uri: "https://images.pexels.com/photos/12607330/pexels-photo-12607330.jpeg" }
    },
    {
      id: "9",
      nome: "Turne 9",
      artista: "Artista",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in mi eget purus venenatis dapibus. Nulla sed nisl et justo scelerisque convallis vel ullamcorper nibh. Nullam vulputate arcu libero, ac semper velit vehicula euismod. Duis egestas nunc felis, in aliquet elit scelerisque a. Aliquam erat volutpat. Quisque sollicitudin ultricies quam, non malesuada diam blandit et. Vivamus finibus tincidunt efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer in mattis ligula, sed auctor turpis. Donec in facilisis felis. Curabitur et tincidunt felis. Donec fringilla urna quis nisl fringilla, in rutrum ante pulvinar.",
      img: { uri: "https://images.pexels.com/photos/12607330/pexels-photo-12607330.jpeg" }
    }
  ];

  const artistasData = [
    {
      id: "1",
      nome: "Taylor Swift",
      pfp: { uri: "https://hips.hearstapps.com/hmg-prod/images/taylor-swift-performs-onstage-during-taylor-swift-the-news-photo-1727782003.jpg?crop=0.65234xw:1xh;center,top&resize=1120:*" }
    }, {
      id: "2",
      nome: "Conan Gray",
      pfp: { uri: "https://yt3.googleusercontent.com/vmWABWRDo-CWedrSHB6pSK6Y1nu4yn7iAV-lEuqTHVXJLBMCJXzrLY3HmSEniP2IzDep_SMMYg=s900-c-k-c0x00ffffff-no-rj" }
    }, {
      id: "3",
      nome: "KATSEYE",
      pfp: { uri: "https://shop.umusic.com.au/cdn/shop/files/KATSEYE_Square_c7e0428b-02d5-42ec-ae1b-31f66159e185.jpg?v=1750292407&width=900" }
    }, {
      id: "4",
      nome: "Marina Sena",
      pfp: { uri: "https://akamai.sscdn.co/uploadfile/letras/fotos/f/3/f/e/f3fef4e3d75ded9cb10bc54b6a6f34c8.jpg" }
    }, {
      id: "5",
      nome: "Beyoncé",
      pfp: { uri: "https://static01.nyt.com/images/2022/06/17/multimedia/16beyonce1/16beyonce1-mediumSquareAt3X.jpg" }
    }, {
      id: "6",
      nome: "Lady Gaga",
      pfp: { uri: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2021_20/1720200/lady-gaga-assault-today-sk-square-210520.jpg" }
    }]

  const sections = [
    {
      title: "Eventos recomendados",
      type: "rec",
      data: [1]
    },
    {
      title: "Novidades",
      type: "news",
      data: [1]
    },
    {
      title: "Artistas",
      type: "art",
      data: [1]
    }
  ];



  type CarouselItem = {
    image: any;
    title: string;
    classificacao: number;
  };

  const renderItem = ({ item }: { item: CarouselItem }) => (
    <TouchableOpacity activeOpacity={0.5} style={{ flex: 1, borderRadius: 16, overflow: "hidden" }}>
      <Image
        source={item.image}
        style={{ width: "100%", height: "100%", borderRadius: 16 }}
        resizeMode="cover"
      />
      <LinearGradient
        colors={['transparent', '#1a0d23dc']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 0, y: 1 }}
        style={StyleSheet.absoluteFillObject}
      />
      <Text style={{ position: "absolute", bottom: Spacing.three, left: Spacing.three, fontFamily: "Archivo_300Light", fontSize: 20, color: 'white', width: 300 }}>
        {item.title}
      </Text>
      <View
        style={{
          backgroundColor: { 0: "#4CAF50", 1: "#9C27B0", 2: "#2196F3", 3: "#d6cb29", 4: "#FF9800", 5: "#F44336", 6: "#000000" }[item.classificacao],
          width: 30,
          height: 30,
          position: "absolute",
          bottom: Spacing.three,
          right: Spacing.three,
          borderRadius: 5,
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Text style={{ color: "white", fontSize: 12, fontFamily: "Archivo_500Medium" }}>
          {{ 0: "L", 1: "6", 2: "10", 3: "12", 4: "14", 5: "16", 6: "18" }[item.classificacao]}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const ref = React.useRef<ICarouselInstance>(null);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  const scrollY = useRef(new Animated.Value(0)).current;

  //const headerHeight = scrollY.interpolate({
  //inputRange: [0, 120],
  //outputRange: [200, 105],
  //extrapolate: "clamp",
  //});

  const titleOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const searchSize = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: ['100%', '86%'],
    extrapolate: "clamp",
  });

  const searchTranslateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -65],
    extrapolate: "clamp",
  });

  const searchTranslateX = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 54],
    extrapolate: "clamp",
  });



  return (
    <View style={{ flex: 1, backgroundColor: PlatformColor("systemBackground") }}>
      <Animated.SectionList
        sections={sections}
        style={{ paddingTop: 185 }}
        keyExtractor={(item, index) => String(index)}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item, section }) => {
          if (section.type === "rec") {
            return <View style={styles.carrSection}>
              <Text style={styles.archivoTitle}>{section.title}</Text>
              <View id="carousel-component">
                <View style={{ marginLeft: -Spacing.four }}>
                  <Carousel
                    autoPlayInterval={7000}
                    autoPlay={true}
                    data={carouselContent}
                    loop={true}
                    pagingEnabled={true}
                    snapEnabled={true}
                    width={width}
                    height={258}
                    mode="parallax"
                    modeConfig={{ parallaxScrollingScale: 0.9, parallaxScrollingOffset: 50 }}
                    onProgressChange={(offsetProgress, absoluteProgress) => { progress.value = absoluteProgress; }}
                    renderItem={renderItem}
                  />
                </View>

                <Pagination.Basic<{}>
                  progress={progress}
                  data={carouselContent}
                  dotStyle={{ width: 25, height: 4, backgroundColor: PlatformColor("secondaryLabel") }}
                  activeDotStyle={{ overflow: "hidden", backgroundColor: PlatformColor("label") }}
                  containerStyle={{ gap: 10, marginBottom: 10 }}
                  horizontal
                  onPress={onPressPagination}
                />
              </View>
            </View>
          }

          if (section.type === "news") {
            return <View style={styles.novidadesSection}>
              <Text style={styles.archivoTitle}>{section.title}</Text>
              <FlatList
                horizontal
                data={novidadesData}
                showsHorizontalScrollIndicator
                persistentScrollbar
                contentContainerStyle={{
                  paddingBottom: 16,
                }}
                keyExtractor={(item) => item.id}
                style={{ marginTop: Spacing.three, marginLeft: -Spacing.four, marginRight: -Spacing.four }}
                renderItem={({ item, index }) => (
                  <TouchableOpacity style={[styles.cardMedio, index === 0 && { marginLeft: Spacing.four }]} activeOpacity={0.5}>
                    <Image source={item.img} style={{ width: "100%", height: "60%", borderTopLeftRadius: 6, borderTopRightRadius: 6 }} />
                    <View style={{ padding: 10, backgroundColor: "transparent" }}>
                      <Text style={{ fontSize: 20, fontFamily: "Archivo_400Regular", color: PlatformColor("label"), marginTop: Spacing.one }}>{item.nome}</Text>
                      <Text style={{ fontSize: 16, fontFamily: "Archivo_300Light", color: PlatformColor("label"), marginTop: Spacing.half }}>{item.artista}</Text>
                      <Text numberOfLines={3} ellipsizeMode="tail" style={{ fontSize: 12, fontFamily: "Archivo_300Light", lineHeight: 15, marginTop: Spacing.two, color: PlatformColor("secondaryLabel") }}>{item.descricao}</Text>
                    </View>
                  </TouchableOpacity>
                )}
                ListFooterComponent={() => (
                  <TouchableOpacity style={styles.cardMedio} activeOpacity={0.5}
                    onPress={() => {
                      // navegar para tela de "ver mais"
                    }}
                  >
                    <ArrowCircleRightIcon size={40} weight="light" color={PlatformColor("label")} />
                    <Text style={{ fontSize: 20, fontFamily: "Archivo_400Regular", color: PlatformColor("label") }}>Ver mais</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          }

          if (section.type === "art") {
            return <View style={styles.artistasSection}>
              <Text style={styles.archivoTitle}>{section.title}</Text>
              <FlatList
                data={artistasData}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{
                  alignItems: "center",
                }}
                columnWrapperStyle={{
                  justifyContent: "center",
                }}
                numColumns={3}
                renderItem={({ item }) => (
                  <TouchableOpacity activeOpacity={0.5} style={{ marginHorizontal: Spacing.two, marginTop: Spacing.three }}>
                    <Image style={{ width: 100, height: 100, borderRadius: "100%" }} source={item.pfp} />
                    <Text style={{ fontSize: 16, fontFamily: "Archivo_400Regular", color: PlatformColor("label"), textAlign: "center", marginTop: Spacing.one }}> {item.nome}</Text>
                  </TouchableOpacity>
                )}

                ListFooterComponent={() => (
                  <TouchableOpacity activeOpacity={0.5} style={{ width: "100%", height: 60, backgroundColor: PlatformColor("tertiarySystemFill"), display: "flex", alignItems: 'center', marginTop: Spacing.three, flexDirection: "row", justifyContent: "center", gap: Spacing.one, borderRadius: 7 }}>
                    <ArrowCircleRightIcon size={36} weight="light" color={PlatformColor("label")} />
                    <Text style={{ fontSize: 18, fontFamily: "Archivo_400Regular", color: PlatformColor("label") }}>Ver mais</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          }

          //<View style={styles.categoriasSection}>
          //<Text style={styles.archivoTitle}>Categorias</Text>
          //</View>

          return null

        }}
      />



      <Animated.View style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 200,
        zIndex: 10,
        overflow: "hidden"
      }}>

        <LinearGradient
          colors={['#1a0d23', 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={StyleSheet.absoluteFillObject}
        />

        <SafeAreaView style={styles.headerSection}>
          <Animated.View style={{}}>
            <View style={styles.welcomeSection}>
              <PlanetComponent />
              <Animated.Text style={[styles.archivoTitle, { opacity: titleOpacity }]}>Bem vindo de volta!</Animated.Text>
            </View>
            <Animated.View style={[styles.searchSection, { width: searchSize, transform: [{ translateY: searchTranslateY }, { translateX: searchTranslateX }] }]}>
              {Platform.OS === "ios" && isGlassEffectAPIAvailable() ? (
                <GlassView style={styles.glassInputWrapper} glassEffectStyle="regular">
                  <SymbolView
                    style={styles.searchIcon}
                    name="magnifyingglass"
                    tintColor={inputSearch ? "#8e8e9300" : "#8e8e93"}
                    fallback={<Text>🔍</Text>}
                  />
                  <TextInput
                    style={styles.glassInput}
                    placeholder="Digite algo aqui"
                    autoCorrect={false}
                    autoCapitalize="words"
                    value={inputSearch}
                    onChangeText={(text) => {
                      setInputSearch(text);
                    }}
                  />
                </GlassView>
              ) : (
                <View>
                  <SymbolView
                    style={styles.searchIcon}
                    name="magnifyingglass"
                    tintColor={inputSearch ? "#8e8e9300" : "#8e8e93"}
                    fallback={<Text>🔍</Text>}
                  />

                  <TextInput
                    style={styles.input}
                    placeholder="Ex: Miguel Victor"
                    placeholderTextColor="#999"
                    autoCorrect={false}
                    autoCapitalize="words"
                  />
                </View>
              )}
            </Animated.View>
          </Animated.View>
        </SafeAreaView>
      </Animated.View >



    </View >
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },

  welcomeSection: {
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: Spacing.four,
    gap: Spacing.two,
    paddingTop: Spacing.two,
    flexDirection: "row",
  },

  headerSection: {
    paddingTop: Spacing.two,
  },

  archivoTitle: {
    fontSize: 22,
    fontFamily: "Archivo_500Medium",
    color: PlatformColor("label"),
  },

  archivoRegular: {
    fontSize: 20,
    fontFamily: "Archivo_400Regular",
  },

  archivoSmall: {
    fontSize: 16,
    fontFamily: "Archivo_300Light",
  },

  carrSection: {
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.three,
  },

  novidadesSection: {
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.three,
  },

  artistasSection: {
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.three,
    paddingBottom: 100,
  },

  categoriasSection: {
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.three,
  },

  cardMedio: {
    width: 200,
    height: 300,
    backgroundColor: PlatformColor("tertiarySystemFill"),
    marginRight: Spacing.two,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },


  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#000", // Cor do texto digitado
    fontFamily: "Archivo_400Regular",
  },

  glassInputWrapper: {
    borderRadius: 32,
    overflow: "hidden",
    minHeight: 52,
    justifyContent: "center",
    paddingHorizontal: 14,
    flexDirection: "column",
  },

  glassInput: {
    minHeight: 52,
    fontSize: 16,
    color: PlatformColor("label"),
    backgroundColor: "transparent",
    fontFamily: "Archivo_400Regular",
  },

  searchSection: {
    paddingHorizontal: Spacing.four,
    marginTop: Spacing.three,
  },

  searchIcon: {
    position: "absolute",
    right: Spacing.three,
    top: "50%",
    transform: [{ translateY: -12 }],
    zIndex: 1,
  },
});
