import React, {useEffect, useState, useContext} from 'react';
import {
  Text, 
  Image, 
  View, 
  ScrollView, 
  SafeAreaView, 
  Button, 
  StyleSheet
  } from 'react-native';

import { getProduct } from './ProductsService.js';
import { CartContext } from './CartContext';

export function ProductDetails({route}) {
  const { productId } = route.params;
  const [product, setProduct] = useState({});
  
  const { addItemToCart } = useContext(CartContext);

  const { removeItemfromCart } = useContext(CartContext);

  const { deleteItemfromCart } = useContext(CartContext);
  useEffect(() => {
    setProduct(getProduct(productId));
  });
  
  function onAddToCart() {
    addItemToCart(product.id);
  }
  function onRemovefromCart() {
    removeItemfromCart(product.id);
  }
  function ondeletefromCart() {
    deleteItemfromCart(product.id);
  }
  
  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={styles.image}
          source={product.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          
            <Button
            onPress={onAddToCart}
            title="Add to cart"
            / >
            <Text style={{height:20}}></Text>
            <Button 
            onPress={onRemovefromCart}
            color="#FF9300"
            title="Remove from cart"
            / >
            
            <Text style={{height:20}} ></Text>
            <Button
            onPress={ondeletefromCart}
            color="#C70039"
            title="delete items from cart"
            / >
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  image: {
    height: 300,
    width: '100%'
    
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  
});
