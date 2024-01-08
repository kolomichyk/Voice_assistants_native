import { View, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { axiosInstance } from '../API';
import ActionCard from '../components/ActionCard';
import { setActions } from '../store/actionSlice';
import { useEffect } from 'react';

export default function DetailScreen({ route }) {
    const { action } = route.params;


    return (
        <View>
            <Image style={{marginTop: 20, marginLeft:18, width: 200, height: 200}} source={{ uri: action.img }} />
            <Text style={{marginTop: 10, marginLeft:20, fontSize: 20}}>{action.title}</Text>
            <Text style={{marginTop: 10, marginLeft:20}}>{action.description}</Text>
        </View>
    );
 }
