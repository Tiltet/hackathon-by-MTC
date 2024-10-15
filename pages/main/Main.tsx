import * as React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, RefreshControl } from "react-native";
import { mainStyle } from "./mainStyle";
import { Header } from "../../components/header/Header";
import { chatStyle } from "../chat/chatStyle";
import { useState, useCallback } from "react";
import { News } from "./news/News";
import { Event } from "./event/Event";

export function Main() {
    const [index, setIndex] = useState(1);
    const [textFirstColor, setTextFirstColor] = useState('#000');
    const [textSecondColor, setTextSecondColor] = useState('#000');
    const [refreshing, setRefreshing] = useState(false);

    const handleButtonPress = (index) => {
        setIndex(index);
        setTextFirstColor(index === 1 ? 'red' : '#000');
        setTextSecondColor(index === 2 ? 'red' : '#000');
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        // Здесь вы можете добавить логику для обновления данных
        setTimeout(() => {
            // Симуляция обновления данных
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
      <SafeAreaView>
          <Header />
          <ScrollView
            style={mainStyle.container}
            refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                  colors={['#0000ff']} // Цвет индикатора загрузки
                />
            }
          >
              <View style={chatStyle.container}>
                  <View style={chatStyle.headerContainer}>
                      <TouchableOpacity
                        style={chatStyle.headerContainer_link_first}
                        onPress={() => handleButtonPress(1)}
                      >
                          <Text style={[chatStyle.headerContainer_link_text, { color: textFirstColor }]}>Новости</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={chatStyle.headerContainer_link_second}
                        onPress={() => handleButtonPress(2)}
                      >
                          <Text style={[chatStyle.headerContainer_link_text, { color: textSecondColor }]}>События</Text>
                      </TouchableOpacity>
                  </View>

                  {index === 1 ? (
                    <View style={{ marginBottom: 60 }}>
                        <News />
                    </View>
                  ) : index === 2 ? (
                    <View>
                        <Event />
                    </View>
                  ) : (
                    <View></View>
                  )}

              </View>
          </ScrollView>
      </SafeAreaView>
    );
}
