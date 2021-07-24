import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { auth } from "../api/firebase";
import useAuth from "../auth/useAuth";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import IconView from "../components/IconView";
import ListSeparator from "../components/ListSeparator";

function AccountScreen({ navigation }) {
  const { logOut } = useAuth();
  const items = [
    {
      id: 1,
      title: "My Appointments",
      backgroundColor: "#4ecdc4",
      iconName: "stethoscope",
      targetScreen: "My Appointments",
    },
    {
      id: 2,
      title: "Medical Log",
      backgroundColor: "#fc5c65",
      iconName: "history",
      targetScreen: "My Appointments",
    },
  ]; // Dummy Array for account screen items.

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Signs user out of firebase
      logOut(); // Deletes authentication state variable
    } catch (error) {
      console.log("Couldnt log out", error);
    }
  }; // Logs user out

  return (
    <Screen style={styles.container}>
      <ListItem
        title={auth.currentUser.displayName}
        subTitle={auth.currentUser.email}
      />
      <View style={{ marginTop: 50 }}>
        <FlatList
          data={items}
          keyExtractor={(x) => x.id.toString()}
          renderItem={({ item }) => (
            <IconView
              color={item.backgroundColor}
              name={item.iconName}
              title={item.title}
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListSeparator}
        />
      </View>
      <View style={{ marginTop: 30 }}>
        <IconView
          color="yellow"
          name="logout"
          title="Logout"
          onPress={handleLogout}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8E8E8",
    flex: 1,
    padding: 10,
  },
});

export default AccountScreen;
