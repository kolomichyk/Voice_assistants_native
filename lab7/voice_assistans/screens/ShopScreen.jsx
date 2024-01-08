import { ScrollView, StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { axiosInstance, minioInstance } from '../API';
import ActionCard from '../components/ActionCard';
import { setActions, setSearchString } from '../store/actionSlice';

export default function ShopScreen({ navigation }) {
 const dispatch = useDispatch();
 const actions = useSelector((state) => state.action.actions);
 const search = useSelector((state) => state.action.search);
//  const [search, setSearch] = useState('');

const handleSearch = (text) => {
  dispatch(setSearchString(text));
  axiosInstance.get(`/actions/?search=${text}`)
    .then((response) => {
      dispatch(setActions(response.data));
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
    });
 };
 
 
 useEffect(() => {
   const interval = setInterval(() => {
     axiosInstance.get(`/actions/?search=${search}`)
         .then(response => {
             dispatch(setActions(response.data));
         })
         .catch(error => {
             console.error('Error fetching data: ', error);
         });
   }, 5000); // 5000 миллисекунд = 5 секунд

   return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
 }, [dispatch, search]);

//  const filteredActions = actions.filter(action =>
//    action.title.toLowerCase().includes(search.toLowerCase())
//  );

 return (
  <ScrollView>
    <TextInput
      style={styles.input}
      onChangeText={handleSearch}
      value={search}
      placeholder="Search"
    />
    {actions.map(action => (
      action.status === 0 && (
        <View key={action.id} style={styles.card}>
          <ActionCard key={action.id} action={action} props={{title: action.title, img: action.img}} navigation={navigation}/>
          <Button title="Подробнее" onPress={() => navigation.navigate('Страница подробнее', { action })} />
        </View>
      )
    ))}
  </ScrollView>
 );
}

const styles = StyleSheet.create({
 card: {
 backgroundColor: 'lightblue',
 alignItems: 'center',
 justifyContent: 'center',
 margin: 10,
 padding: 10,
 borderRadius: 10,
 },
 input: {
 height: 40,
 borderColor: 'gray',
 borderWidth: 1,
 paddingLeft: 10,
 },
});
