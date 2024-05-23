import * as React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView} from "react-native";
import { profileStyle } from "./profileStyle";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Statistics } from "./statistics/Statistics";
import { Schedule } from "./schedule/Schedule";
import { Bonuses } from "./bonuses/Bonuses";
import {Settings} from "./settings/Settings";

const ProfileStack = createNativeStackNavigator();

export function Profile() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="Профиль"
                component={ProfileRender}
                options={{
                    headerShown: false,
                }}
            />
            <ProfileStack.Screen name="Статистика" component={Statistics} />
            <ProfileStack.Screen name="График" component={Schedule} />
            <ProfileStack.Screen name="Бонусы" component={Bonuses} />
            <ProfileStack.Screen name="Настройки" component={Settings} />
        </ProfileStack.Navigator>
    )
}

export function ProfileRender({ navigation }) {
    return (
        <SafeAreaView style={profileStyle.wrapper}>
            <ScrollView>
                <View style={profileStyle.container}>
                    <View style={profileStyle.header}>
                        <View>
                            <Image style={profileStyle.image} source={require('../../assets/MTC_logo.png')}/>
                        </View>
                        <View style={profileStyle.headerImageContainer}>
                            <TouchableOpacity>
                                <Image style={profileStyle.headerImage} source={require('../../assets/img/profile/exit.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={profileStyle.profile_container}>
                    <Image style={profileStyle.profileImage}  source={{ uri: "https://img.freepik.com/free-photo/portrait-of-handsome-bearded-man-outside_23-2150266915.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1715990400&semt=ais_user"}}/>
                    <View style={profileStyle.profileTextContainer}>
                        <Text style={profileStyle.profileText}>Кирилл</Text>
                        <Text style={profileStyle.profileText}>Макаров</Text>
                    </View>
                </View>

                <View style={profileStyle.container}>
                    <View style={profileStyle.infoContainer}>
                        <View style={profileStyle.outerContainer}>
                            <View>
                                <Text style={profileStyle.mainInfoText}>Механик</Text>
                                <Text style={profileStyle.infoText}>Специальность</Text>
                            </View>
                            <View>
                                <Text style={profileStyle.mainInfoText}>12.06.2004</Text>
                                <Text style={profileStyle.infoText}> Дата рождения</Text>
                            </View>
                        </View>
                        <View style={profileStyle.outerContainer}>
                            <View style={profileStyle.underInfo}>
                                <Text style={profileStyle.mainInfoText}>Отдел продаж</Text>
                                <Text style={profileStyle.infoText}>Отдел сотрудника</Text>
                            </View>
                            <View style={profileStyle.underInfo}>
                                <Text style={profileStyle.mainInfoText}>68969</Text>
                                <Text style={profileStyle.infoText}>Номер телефона</Text>
                            </View>
                        </View>
                    </View>


                    <View style={profileStyle.mainButtonContainer}>
                        <View style={profileStyle.buttonContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate('Статистика')}>
                                <View style={profileStyle.button}>
                                    <Image source={require("../../assets/img/profile/stat.png")} style={profileStyle.buttonImg}></Image>
                                    <Text style={profileStyle.buttonText}> Статистика</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('График')}>
                                <View style={profileStyle.button}>
                                    <Image source={require("../../assets/img/profile/schedule.png")} style={profileStyle.buttonImg}></Image>
                                    <Text style={profileStyle.buttonText}> График</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={profileStyle.buttonContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate('Бонусы')}>
                                <View style={profileStyle.button}>
                                    <Image source={require("../../assets/img/profile/bonus.png")} style={profileStyle.buttonImg}></Image>
                                    <Text style={profileStyle.buttonText}> Бонусы</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Настройки')}>
                                <View style={profileStyle.button}>
                                    <Image source={require("../../assets/img/profile/settings.png")} style={profileStyle.buttonImg}></Image>
                                    <Text style={profileStyle.buttonText}> Настройки</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
