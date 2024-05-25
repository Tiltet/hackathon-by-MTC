import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ProgressBar = ({progress}) => {
    return (<View style={{flex:1, flexDirection:'column'}}>
            <View style={styles.container}>
                <View style={{
                    height: '100%',
                    width: `${progress}%`,
                    backgroundColor: '#fa0d0d',
                    borderRadius: 5,
                }}/>
            </View>
            {progress < 75 ? <Text style={{}}>{progress} из 100</Text> :<Text>Тебе осталось {100-progress} до премии</Text>}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 10,
        width: 150,
        backgroundColor: '#e0e0de',
        borderRadius: 5,
        marginTop: 20,
        marginBottom:3,
        marginRight: 15
    }
})

export default ProgressBar;