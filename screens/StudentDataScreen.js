import React from 'react';
import { View, FlatList } from 'react-native'
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'


function StudentDataScreen({navigation}) {

    const users = [
        {
            id: 1,
            name: "Umar Yousaf",
            class: "Class 2",
        },
        {
            id: 2,
            name: "Shaheryar Yousaf",
            class: "Class 2",
        },
        {
            id: 3,
            name: "Muhammad Ali Mughal",
            class: "Class 2",
        },
        {
            id: 4,
            name: "Basit",
            class: "Class 2",
        },
        {
            id: 5,
            name: "Ghous Ahmad",
            class: "Class 2",
        }, 
        {
            id: 6,
            name: "Sajawal Awan",
            class: "Class 2",
        },
        {
            id: 7,
            name: "Ahmad",
            class: "Class 2",
        },
        {
            id: 8,
            name: "Abdullah",
            class: "Class 2",
        },
        {
            id: 9,
            name: "Abdullah",
            class: "Class 2",
        },
        {
            id: 10,
            name: "Abdullah bin UMAR",
            class: "Class 2",
        }
       
    ]

    return (
        <Screen>
            <View>
                <FlatList 
                    data={users}
                    keyExtractor={users => users.id.toString()}
                    renderItem={({item}) => 
                    <ListItem 
                        title={item.name}
                        subTitle={item.class}
                        image={item.image}
                        onPress={()=> navigation.navigate("Student_detail")}
                    /> }  
                    ItemSeparatorComponent={ListItemSeparator}
                />
            </View> 
        </Screen>
    );
}


export default StudentDataScreen;