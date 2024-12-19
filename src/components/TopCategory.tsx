import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  FlatList,
  Dimensions,
  Button,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Category Images
import one from '../images/1.png';
import two from '../images/2.png';
import three from '../images/3.png';
import four from '../images/4.png';
import five from '../images/5.png';
import six from '../images/6.png';
import seven from '../images/7.png';
import eigth from '../images/8.png';

// Banner Images
import bunner from '../images/bunner.webp';
import bunner1 from '../images/bunner1.webp';
import bunner2 from '../images/bunner2.webp';

// TopCategory bestseller

import best from '../images/best1.webp';
import best1 from '../images/best2.webp';

//   Dr. Chauhan’s Recommendation

import DR from '../images/Dr.webp';

// Products Images

import productImg from '../images/Chyawanprash-1kg.webp';
import product1Img from '../images/chywanprasha-Sugar-free-f-1-kg_3fb0f065-6a49-42e6-98d8-ed226a217162.webp';
import product2Img from '../images/Honey_-_1kg__Front_072d522e-c792-464a-b39c-1916f0112d7c.webp';
import product3Img from '../images/Amla_Candy_Front_550x.webp';

// SpotLight Images
import one1 from '../images/Jiva-Spotlight-0.webp';
import two2 from '../images/Jiva-Spotlight.webp';

const TopCategories = () => {
  const images = [
    {source: one, label: 'Hair Care'},
    {source: two, label: 'Skin Care'},
    {source: three, label: 'Health'},
    {source: four, label: "Men's"},
    {source: five, label: "Women's"},
    {source: six, label: 'Eye Care'},
    {source: seven, label: 'Bone'},
    {source: eigth, label: 'Immunity'},
  ];

  const banner = [bunner, bunner1, bunner2];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const screenWidth = Dimensions.get('window').width;
    const currentIndex = Math.round(scrollPosition / screenWidth);
    setActiveIndex(currentIndex);
  };

  const bestImage = [best, best1];
  const product = {
    name: 'Chyawanprash | Boosts Immunity & Digestion',
    description: 'Chyawanprash for a healthy lifestyle',
    reviews: 200,
    pricing: {
      regularPrice: 500,
      salePrice: 380,
      discount: '10% off',
    },
    weight: '1000 g',
    packaging: 'Pack of 1',
    image: productImg,
  };

  const product1 = {
    name: 'Sugar Free Chyawanprash | Rich in Vitamin-C',
    description: 'Boosts Immunity & Nourishes Brain Cells',
    reviews: 300,
    pricing: {
      regularPrice: 500,
      salePrice: 450,
      discount: '10% off',
    },
    weight: '1000 g',
    packaging: 'Pack of 1',
    image: product1Img,
  };

  const product2 = {
    name: 'Multiflora Honey 100%',
    description: 'Pure With No Adulteration',
    reviews: 120,
    pricing: {
      regularPrice: 300,
      salePrice: 270,
      discount: '10% off',
    },
    weight: '1000 g',
    packaging: 'Pack of 1',
    image: product2Img,
  };

  const product3 = {
    name: 'Amla Chatpata Candy For Immunity',
    description: 'Rich In Dietary Fibres & Vitamin C',
    reviews: 50,
    pricing: {
      regularPrice: 200,
      salePrice: 190,
      discount: '5% off',
    },
    weight: '250 g',
    packaging: 'Pack of 1',
    image: product3Img,
  };

  const Products = [product, product1, product2, product3];

  const Spot = [one1, two2];

  return (
    <>
      <View>
        {/* Horizontal ScrollView for Categories */}
        <View style={styles.container}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContent}>
            {images.map((item, index) => (
              <View key={index} style={styles.categoryItem}>
                <Image source={item.source} style={styles.image} />
                <Text style={styles.categoryLabel}>{item.label}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Scrollable Banner Carousel */}
        <View style={styles.bannerContainer}>
          <FlatList
            data={banner}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            keyExtractor={(item, index) => index.toString()}
            onScroll={handleScroll}
            renderItem={({item}) => (
              <Image source={item} style={styles.banner} resizeMode="cover" />
            )}
          />

          {/* Dots on Banner */}
          <View style={styles.dotsContainer}>
            {banner.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  activeIndex === index ? styles.activeDot : styles.inactiveDot,
                ]}
              />
            ))}
          </View>
        </View>
      </View>
      {/* OUR BEST SELLER */}
      <View>
        <Text style={styles.TopCategory1}>Our Bestsellers</Text>
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.container1}>
            {bestImage.map((be, index) => (
              <Image
                key={index}
                source={be}
                style={styles.bestcote}
                resizeMode="cover"
              />
            ))}
          </View>
        </ScrollView>
        {/* <View style={styles.container5}>
          {}
        </View> */}
      </View>
      {/*     Dr. Chauhan’s Recommendation   */}
      <View>
        <Text style={styles.TopCategory1}>Dr. Chauhan’s Recommendation</Text>
        <Image source={DR} style={styles.Dr} />
      </View>
      {/** Products */}
      <View style={styles.container10}>
        {Products.map((pro, index) => (
          <View key={index} style={styles.productContainer}>
            <Image source={pro.image} style={styles.productImage} />
            <Text style={styles.productName}>{pro.name}</Text>
            <Text style={styles.productDescription}>{pro.description}</Text>
            <Text style={styles.productWeight}>
              {pro.weight} | {pro.packaging}
            </Text>
            <View style={styles.ratingContainer}>
              {[...Array(5)].map((_, i) => (
                <FontAwesome
                  key={i}
                  name={i < Math.round(pro.reviews / 40) ? 'star' : 'star-o'}
                  size={14}
                  color="#FFD700"
                />
              ))}
              <Text style={styles.reviewCount}>({pro.reviews} reviews)</Text>
            </View>
            <Text style={styles.productPrice}>
              <Text style={styles.salePrice}>Rs. {pro.pricing.salePrice} </Text>
              <Text style={styles.discount}>({pro.pricing.discount})</Text>
            </Text>
            <Button title="Add to Cart" color="#c74919" />
          </View>
        ))}

        {/** Services in Spotlight section */}

        <View>
          <Text style={styles.TopCategory1}>Services in Spotlight</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.spotlightContainer}>
            {Spot.map((sp, index) => (
              <Image
                key={index}
                source={sp}
                style={styles.spotlightImage}
                resizeMode="contain"
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  // bc: {
  //   backgroundColor: '#fff',
  // },
  container: {
    marginTop: 5,
    paddingHorizontal: 10,
    // backgroundColor: 'orange',
  },
  scrollViewContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 0,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  categoryLabel: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
  },
  bannerContainer: {
    marginBlockStart: 5,
    position: 'relative',
  },
  banner: {
    width: Dimensions.get('window').width,
    height: 150,
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#c74919',
  },
  inactiveDot: {
    backgroundColor: 'rgba(252, 143, 84, 1)',
  },
  container1: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    alignItems: 'center',
    // margin: 20,
  },
  bestcote: {
    width: 300,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    margin: 10,
  },
  TopCategory1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    textDecorationLine: 'underline',
    //textDecorationColor: 'red',
  },
  Dr: {
    height: 80,
    width: '100%',
  },

  container10: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  productContainer: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 3},
    elevation: 4,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  productDescription: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  productWeight: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  reviewCount: {
    fontSize: 12,
    color: '#555',
    marginLeft: 5,
  },
  productPrice: {
    fontSize: 25,
    color: '#333',
    marginBottom: 15,
  },
  salePrice: {
    fontWeight: 'bold',
    color: '#c74919',
  },
  discount: {
    fontSize: 14,
    color: '#f00',
  },
  topCategory: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  spotlightContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBlockStart: 15,
  },
  spotlightImage: {
    height: 350,
    width: 350,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default TopCategories;
