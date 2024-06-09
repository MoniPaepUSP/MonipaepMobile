import React, { useState } from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function Menu({ onCloseMenu }) {
  const [menuWidth, setMenuWidth] = useState(2*windowWidth / 3); // Inicialmente com metade da largura da tela

  const toggleMenu = () => {
    setMenuWidth(menuWidth === 0 ? windowWidth / 2 : 0);
  };

  return (
    <View style={[styles.menuContainer, { width: menuWidth }]}>
      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
      </TouchableOpacity>
      <View style={styles.menuContent}>
        <TouchableOpacity style={styles.menuItem} onPress={onCloseMenu}>
          <Image
            style={styles.menuItemImage}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/vemm8idxb0n-I34%3A617%3B227%3A3875?alt=media&token=2ff04cc6-6bd7-402c-9d32-1824d59690c2",
            }}
          />
          <Text style={styles.menuText}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={onCloseMenu}>
          <Image
            style={styles.menuItemImage}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/vemm8idxb0n-I34%3A617%3B227%3A4446?alt=media&token=b6860785-00be-491b-8e99-843e5e8b47f6",
            }}
          />
          <Text style={styles.menuText}>Minha Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={onCloseMenu}>
          <Image
            style={styles.menuItemImage}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/vemm8idxb0n-I34%3A617%3B227%3A5493?alt=media&token=c1195ef6-8080-445b-aadd-8b65a463cf52",
            }}
          />
          <Text style={styles.menuText}>Saúde e Sintomas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={onCloseMenu}>
          <Image
            style={styles.menuItemImage}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/vemm8idxb0n-I34%3A617%3B227%3A4992?alt=media&token=3cdd0fef-d92a-4960-a049-36d0c7b75ff7",
            }}
          />
          <Text style={styles.menuText}>Minhas Consultas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={onCloseMenu}>
          <Image
            style={styles.menuItemImage}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/vemm8idxb0n-I34%3A617%3B227%3A5999?alt=media&token=5d3bbe9d-e462-4c63-9763-670d3c335581",
            }}
          />
          <Text style={styles.menuText}>Histórico de Doenças</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={onCloseMenu}>
          <Image
            style={styles.menuItemImage}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/vemm8idxb0n-I34%3A617%3B229%3A4?alt=media&token=7ca4500d-43bc-4eb8-bdc0-435f7a0acc38",
            }}
          />
          <Text style={styles.menuText}>Configurações</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: windowHeight,
    backgroundColor: '#fff',
    zIndex: 1000,
  },
  menuButton: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  menuContent: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 20,
    width: '100%',
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  menuText: {
    color: "rgba(0,0,0,1)",
    fontSize: 17,
    lineHeight: 17,
    fontFamily: "Roboto",
    fontWeight: "500",
  },
});
