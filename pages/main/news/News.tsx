import * as React from 'react';
import { Image, View, Text, TouchableOpacity, ScrollView, RefreshControl, ActivityIndicator } from "react-native";
import { newsStyle } from "./newsStyle";
import { useState } from "react";
import staticNews from "../../../static/staticNews";

export function News() {
    const [news, setNews] = useState(staticNews);

    function renderNews() {
        return news.map((item) => (
          <View key={item.id} style={newsStyle.container}>
              <View style={newsStyle.news_block}>
                  <Image
                    style={newsStyle.news_block_image}
                    source={{ uri: item.imgUrl }}
                  />
                  <TouchableOpacity style={newsStyle.news_text_block}>
                      <Text style={newsStyle.news_block_title}>
                          {item.title.length > 50
                            ? item.title.substring(0, 100) + "..."
                            : item.title}
                      </Text>
                      <Text style={newsStyle.news_block_description}>
                          {item.description.length > 70
                            ? item.description.substring(0, 70) + "..."
                            : item.description}
                      </Text>
                  </TouchableOpacity>
              </View>
          </View>
        ));
    }

    return (
      <View style={newsStyle.container}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={{ height: 240 }}
          >
              <View style={newsStyle.news_image_container}>
                  <Image
                    style={newsStyle.news_image}
                    source={{ uri: "https://www.mts.by/upload/iblock/6d1/j5ibbkmiqnffibtnb04wcog36p5y9j87/1136kh625_3.webp" }}
                  />
              </View>
              <View style={newsStyle.news_image_container}>
                  <Image
                    style={newsStyle.news_image}
                    source={{ uri: "https://www.mts.by/upload/iblock/6d1/j5ibbkmiqnffibtnb04wcog36p5y9j87/1136kh625_3.webp" }}
                  />
              </View>
              <View style={newsStyle.news_image_container}>
                  <Image
                    style={newsStyle.news_image}
                    source={{ uri: "https://www.mts.by/upload/iblock/6d1/j5ibbkmiqnffibtnb04wcog36p5y9j87/1136kh625_3.webp" }}
                  />
              </View>
              <View style={newsStyle.news_image_container}>
                  <Image
                    style={newsStyle.news_image}
                    source={{ uri: "https://www.mts.by/upload/iblock/6d1/j5ibbkmiqnffibtnb04wcog36p5y9j87/1136kh625_3.webp" }}
                  />
              </View>
          </ScrollView>
          {renderNews()}
      </View>
    );
}
