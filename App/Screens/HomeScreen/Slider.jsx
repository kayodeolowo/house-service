import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Global from '../../Utils/Global'

export default function Slider() {

    const [slider, setSlider] = useState();
    useEffect(()=>{
        getSliders()
    },[])

    
    const getSliders=()=> {
        Global.getSlider().then(resp=>{
            // console.log("resp", resp)
            setSlider(resp?.sliders)
        })
    }
  return (
    <View>
      <Text>Slider</Text>

      <FlatList data={slider} renderItem={({item,index})=>(
        <View>
            <Text> {item.name}</Text>
        </View>
      )}/>

      
    </View>
  )
}