import * as React from 'react';
import {View, Text, TouchableOpacity,Image} from "react-native";
import {page} from "./profileStyle";

export function Profile() {
    return (
        <View>
            <View  style={page.header}>
                <View>
                    <Image source={require('../../assets/img/profile/MTSlogo.png')} style={page.image} />
                </View>
                <View style={page.headeImageContainer}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/img/profile/profile.png')} style={page.headerImage} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/img/profile/exit.png')} style={page.headerImage} />
                    </TouchableOpacity>
                </View>

            </View>
            <View style={page.profile_container}>
                <Image source={require("../../assets/img/profile/ava.jpg")} style={page.profileImage} />
                <View style={page.profileTextContainer}>
                    <Text style={page.profileText}> ГАЛЯ </Text>
                    <Text style={page.profileText}> ПОПКИНА </Text>
                </View>

            </View>
            <View style={page.infoContainer}>
                <View style={page.outerContainer}>
                    <View>
                        <Text style={page.mainInfoText}>Механик</Text>
                        <Text style={page.infoText}>Специальность</Text>
                    </View>
                    <View>
                        <Text style={page.mainInfoText}>12.06.2004</Text>
                        <Text style={page.infoText}> Дата рождения</Text>
                    </View>
                </View>
                <View style={page.outerContainer}>
                     <View>
                         <Text style={page.mainInfoText}>Отдел продаж</Text>
                         <Text style={page.infoText}>Отдел сотрудника</Text>
                     </View>
                     <View>
                         <Text style={page.mainInfoText}>68969</Text>
                         <Text style={page.infoText}>Номер телефона</Text>
                     </View>
                </View>


            </View>
            <View style={page.mainButtonContainer}>
                <View style={page.buttonContainer}>
                    <TouchableOpacity>
                        <View style={page.button}>
                            <Image source={require("../../assets/img/profile/stat.png")} style={page.buttonImg}></Image>
                            <Text style={page.buttonText}> Статистика</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={page.button}>
                            <Image source={require("../../assets/img/profile/schedule.png")} style={page.buttonImg}></Image>
                            <Text style={page.buttonText}> График</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={page.buttonContainer}>
                    <TouchableOpacity>
                        <View style={page.button}>
                            <Image source={require("../../assets/img/profile/bonus.png")} style={page.buttonImg}></Image>
                            <Text style={page.buttonText}> Бонусы</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={page.button}>
                            <Image source={require("../../assets/img/profile/settings.png")} style={page.buttonImg}></Image>
                            <Text style={page.buttonText}> Настройки</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
