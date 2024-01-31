import { View, Text, Image, TouchableOpacity } from 'react-native';
import { minioInstance } from '../API';
import React, { useState, useEffect } from 'react';
import base64 from 'base64-js';

export default function ActionCard(props) {
     
   const [loading, setLoading] = useState(true);

   return (
        <View>
            {/* <Text>{props.action.img}</Text> */}
            <Text style={{textAlign: 'center', fontSize:15}}>{props.action.title}</Text>
            <Image style={{marginTop: 10, width: 200, height: 200}} source={{ uri: props.action.img }} />
        </View>
   );
}
