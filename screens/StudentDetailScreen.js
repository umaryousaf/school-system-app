import React from 'react';
import Screen from '../components/Screen'
import { Text, View,StyleSheet,Linking} from 'react-native'
import colors from '../config/colors'
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import AppButton from '../components/AppButton'
import { ScrollView } from 'react-native-gesture-handler'


function StudentDetailScreen({navigation}) {
    const data = [
        {
            id: 1,
            title: "User Name",
            description: "This is our student. He id currently read in 5th class. He is very intelligent and he got 3 times 1st position in our school. LAast Year he got highest marks in all district of punjab and makes us proud",
            donors: [
                {
                    text: "1st Class",
                    desc: "1st Postion"
                },
                {
                    text: "2nd Class",
                    desc: "2nd Postion"
                },
                {
                    text: '3rd Class',
                    desc: "1st Postion"
                },
                {
                    text: "4th Class",
                    desc: "2nd Postion"
                }
            ],
            receptor: [
                {
                    text: "1st Position",
                    desc: "1 Time in Punjab"
                },
                {
                    text: "3rd Postion",
                    desc: "1 Time in district"
                },
                {
                    text: "4rd Postion",
                    desc: "1 Time in district"
                }
            ],
        }
       ]
    

    return (
        <Screen>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>{data[0].title}</Text>
                    <Text style={styles.subtitle}>About:</Text>
                    <Text style={styles.desc}>{data[0].description}</Text>
                    <Text style={styles.subtitle}>Position In School:</Text>

                    <TableView style={styles.tableInfo}>
                        <Section>
                            
                            <Cell 
                                cellStyle="RightDetail" 
                                title={data[0].donors[0].text}
                                detail={data[0].donors[0].desc} 
                                />
                            <Cell 
                                cellStyle="RightDetail" 
                                title={data[0].donors[1].text} 
                                detail={data[0].donors[1].desc}
                                />
                            <Cell 
                                cellStyle="RightDetail" 
                                title={data[0].donors[2].text} 
                                detail={data[0].donors[2].desc} 
                                />
                            <Cell 
                                cellStyle="RightDetail" 
                                title={data[0].donors[3].text} 
                                detail={data[0].donors[3].desc}
                                />
                        
                        </Section>
                    </TableView>

                    <Text style={styles.subtitle}>Position in All over </Text>
                    <TableView style={styles.tableInfo}>
                        <Section>
                            <Cell 
                                cellStyle="RightDetail" 
                                title={data[0].receptor[0].text} 
                                detail={data[0].receptor[0].desc}
                            />
                            <Cell 
                                cellStyle="RightDetail" 
                                title={data[0].receptor[1].text} 
                                detail={data[0].receptor[1].desc} 
                            />
                              <Cell 
                                cellStyle="RightDetail" 
                                title={data[0].receptor[1].text} 
                                detail={data[0].receptor[1].desc} 
                            />
                        </Section>
                    </TableView>

                    <AppButton title="Contact That Student" onPress={() => Linking.openURL("tel:03177123070")}/>

                </View>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 10
    },
    title:{
        color: colors.blue,
        fontWeight: "bold",
        fontSize: 24
    },
    subtitle:{
        color: colors.blue,
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10
    },
    desc:{
        textAlign: "justify"
    }
})

export default StudentDetailScreen;