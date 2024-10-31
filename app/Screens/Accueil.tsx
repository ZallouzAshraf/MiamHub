import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
  Image,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const images: { [key: string]: ImageSourcePropType } = {
  pâtes: require("../../assets/images/Foods/pate.jpg"),
  pizza: require("../../assets/images/Foods/pizza.jpg"),
  burgers: require("../../assets/images/Foods/burger.jpg"),
  sandwichs: require("../../assets/images/Foods/sandwich.jpg"),
  tacos: require("../../assets/images/Foods/tacos.jpg"),
};

const imagesrecommended: { [key: string]: ImageSourcePropType } = {
  baguettefarcie: require("../../assets/images/Foods/baguettefarcie.jpg"),
  spaghetti: require("../../assets/images/Foods/spaghetti.jpg"),
};

export default function Accueil() {
  const categories: string[] = [
    "Pâtes",
    "Pizza",
    "Burgers",
    "Sandwichs",
    "Tacos",
  ];
  const recommendedcategories: Array<{
    name: string;
    price: string;
    rating: number;
    img: string;
  }> = [
    {
      name: "Baguette Farcie",
      price: "9.5 dt",
      rating: 4.5,
      img: "baguettefarcie",
    },
    {
      name: "Spaghetti Fruits de mer",
      price: "16 dt",
      rating: 4.7,
      img: "spaghetti",
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Order Your Favorite Food!</Text>
        <Ionicons name="notifications-outline" size={30} color="#fcb823" />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search food, drink, desserts"
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.bannerText}>
            Grab Our Exclusive Food Discounts Now!
          </Text>
          <TouchableOpacity style={styles.bannerButton}>
            <Text style={styles.bannerButtonText}>Order Now</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("../../assets/images/burgerAccueilbg.png")}
          style={styles.bannerImage}
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryCarousel}
      >
        {categories.map((item, index) => (
          <TouchableOpacity key={index} style={styles.categoryItem}>
            <Image
              source={images[item.toLowerCase()]}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recommended For You</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.recommendedList}>
        {recommendedcategories.map((item, index) => (
          <View key={index} style={styles.recommendedItem}>
            <Image
              source={imagesrecommended[item.img.toLowerCase()]}
              style={styles.foodImage}
            />
            <View style={styles.foodDetails}>
              <Text style={styles.foodName}>{item.name}</Text>
              <Text style={styles.foodPrice}>{item.price}</Text>
              <View style={styles.rating}>
                <FontAwesome name="star" size={16} color="#fcb823" />
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 16 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
  },
  title: { fontSize: 28, fontWeight: "bold", width: 260 },
  searchContainer: { flexDirection: "row", marginTop: 16 },
  searchInput: {
    flex: 1,
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 8,
  },
  searchButton: {
    backgroundColor: "#fcb823",
    padding: 10,
    borderRadius: 8,
    marginLeft: 8,
  },
  banner: {
    flexDirection: "row",
    backgroundColor: "#fcb823",
    borderRadius: 8,
    marginTop: 20,
    padding: 16,
  },
  bannerContent: { flex: 1, justifyContent: "center" },
  bannerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
    margin: 2,
    letterSpacing: 0,
  },
  bannerButton: {
    backgroundColor: "#000",
    padding: 11,
    width: 130,
    textAlign: "center",
    borderRadius: 20,
    marginTop: 10,
  },
  bannerButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  bannerImage: { width: 120, height: 150, borderRadius: 40 },
  categoryCarousel: { flexDirection: "row", marginTop: 20 },
  categoryItem: { alignItems: "center", marginRight: 16 },
  categoryImage: { width: 65, height: 65, borderRadius: 26 },
  categoryText: { marginTop: 8, fontSize: 12, fontWeight: "500" },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold" },
  seeAll: { color: "#f57c00" },
  recommendedList: { marginTop: 10 },
  recommendedItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 10,
  },
  foodImage: { width: 60, height: 60, borderRadius: 30 },
  foodDetails: { marginLeft: 16, flex: 1 },
  foodName: { fontWeight: "bold", fontSize: 16 },
  foodPrice: { marginTop: 4, color: "#555" },
  rating: { flexDirection: "row", alignItems: "center", marginTop: 4 },
  ratingText: { marginLeft: 4, color: "#fcb823" },
});
