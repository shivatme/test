import React, { useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const AppImage = ({ imageUrl }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <View style={[styles.container]}>
      {imageUrl && !imageError ? (
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          onError={() => setImageError(true)}
        />
      ) : (
        <View style={styles.fallbackContainer}>
          <Image
            source={{
              uri: "https://www.pansuriyaimpex.com/Content/images/StoneDetail/no_image.png",
            }}
            style={styles.image}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 300,
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: "cover",
  },
  fallbackContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  fallbackText: {
    marginTop: 10,
    color: "#888",
  },
});

export default AppImage;
