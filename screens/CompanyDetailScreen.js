import React from 'react';
import Screen from '../components/Screen'
import { Text, View,StyleSheet,Linking} from 'react-native'
import colors from '../config/colors'
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import AppButton from '../components/AppButton'
import { ScrollView } from 'react-native-gesture-handler'


function CompanyDetailScreen({navigation}) {
    const data = [
        {
            id: 1,
            title: "School Name",
            description: "This is very good school. Almost every year one or 2 students takes a overall position and make us proud. This school is very old but as you know OLD is GOLD ",
            donors: [
                {
                    text: "Ali Ahmad",
                    desc: "1070 Marks"
                },
                {
                    text: "Umar",
                    desc: "1040 Marks"
                },
                {
                    text: 'Abdullah',
                    desc: "1039 Marks"
                },
                {
                    text: "Ali Waqas",
                    desc: "1000 Marks"
                }
            ],
            receptor: [
              {  text: "1st Postion",
                desc: "Tayyaba Imran"
            },
                {
                    text: "2nd Position",
                    desc: "Ayesha Tariq"
                },
                
                {
                    text: "4rd Postion",
                    desc: "Nameera Dawood"
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
                    <Text style={styles.subtitle}>Position In District:</Text>

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
                                title={data[0].receptor[2].text} 
                                detail={data[0].receptor[2].desc} 
                            />
                        </Section>
                    </TableView>

                    <AppButton title="Contact That School" onPress={() => Linking.openURL("tel:03177123070")}/>

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

export default CompanyDetailScreen;