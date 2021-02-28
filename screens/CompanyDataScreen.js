import React from 'react';
import { View, FlatList } from 'react-native'
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'


function CompanyDataScreen({navigation}) {

    const users = [
        {
            id: 1,
            name: "Al- Faisal Grammar High School",
            class: "A Catagory",
        },
        {
            id: 2,
            name: "Al-Aziz High School",
            class: "A Catagory",
        },
        {
            id: 3,
            name: "Govt Muslim Model",
            class: "A Catagory",
        },
        {
            id: 4,
            name: "DMC",
            class: "A Catagory",
        },
        {
            id: 5,
            name: "DPS",
            class: "A Catagory",
        }, 
        {
            id: 6,
            name: "Roots",
            class: "A Catagory",
        },
        {
            id: 7,
            name: "Bechonhouse",
            class: "A Catagory",
        },
        {
            id: 8,
            name: "Punjab School",
            class: "A Catagory",
        },
        {
            id: 9,
            name: "Community School",
            class: "A Catagory",
        },
        {
            id: 10,
            name: "Sent Merry",
            class: "A Catagory",
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
                        onPress={()=> navigation.navigate("company_detail")}
                    /> }  
                    ItemSeparatorComponent={ListItemSeparator}
                />
            </View> 
        </Screen>
    );
}


export default CompanyDataScreen;