import { MaterialIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BlueButton, HeaderSimple, SafeAreaView } from '../Components';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import ConditionCard from '../Components/ConditionCard';

interface ConditionsProps {
    condition: string;
}

export function HealthConditions() {
    const [search, setSearch] = useState<string>('');
    const [conditions, setConditions] = useState<ConditionsProps[]>([
        { condition: 'Hipertensão' },
        { condition: 'Diabetes Tipo 2' },
        { condition: 'Alergia a Amendoim' }
    ]);
    const navigation = useNavigation();

    useEffect(() => {
        const filteredConditions = conditions.filter(item =>
            item.condition.toLowerCase().includes(search.toLowerCase())
        );
        setConditions(filteredConditions);
    }, [search]);

    async function handleSymptom() {
        try {
            const newCondition = { condition: search };
            setConditions([...conditions, newCondition]);
            setSearch('');

            Alert.alert(
                "Atualização concluída",
                `Condição cadastrada: ${search}`,
                [
                    {
                        text: "Ok"
                    }
                ]
            );
            console.log("Condição submetida");
        } catch (error) {
            Alert.alert(
                "Erro na atualização da condição",
                `${error.response.data.message}`,
                [
                    {
                        text: "Ok",
                        onPress: () => navigation.navigate('Profile')
                    }
                ]
            );
            console.log(error.response.data.message);
        }
    }

    return (
        <SafeAreaView accessible={true}>
            <HeaderSimple titleScreen="Condições e Sintomas" />
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.container}>
                    <View style={styles.bodyUp} accessible={true}>
                        <MaterialIcons style={styles.icons} name="menu" size={24} color="black" />
                        <View style={styles.textAPP} accessible={true}>
                            <Text style={styles.appName}>MoniPaEp</Text>
                        </View>
                    </View>
                    {conditions.map((item, index) => (
                        <View key={index}>
                            <View style={[styles.hr, index === conditions.length - 1 && { marginBottom: 0 }]} />
                            <ConditionCard condition={item.condition} />
                            {index !== conditions.length && <View style={styles.hr} />}
                        </View>
                    ))}
                    <View style={styles.bottom}>
                        <BlueButton
                            accessibilityLabel="Botão. Clique para atualizar condições de saúde"
                            title="Atualizar Condições"
                            onPress={handleSymptom}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    container: {
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    bodyUp: {
        width: '100%',
        height: Dimensions.get('window').height * 0.15,
        justifyContent: 'center',
        paddingBottom: 15
    },
    icons: {
        padding: 20
    },
    appName: {
        fontFamily: fonts.appName,
        fontSize: 32,
        color: colors.blue
    },
    textAPP: {
        alignItems: 'center',
    },
    search: {
        width: Dimensions.get('window').width * 0.9,
        marginBottom: 10,
        alignItems: 'center',
        padding: 10
    },
    textSerch: {
        color: colors.gray_dark2,
        width: '70%',
        fontFamily: fonts.generic,
        fontSize: 16,
        marginVertical: 5,
    },
    Icon: {
        padding: 10,
    },
    hr: {
        borderBottomColor: colors.gray_light2,
        borderBottomWidth: 1,
        marginBottom: 10,
        marginTop: 10,
    },
    bottom: {
        width: Dimensions.get('window').width * 0.9,
        paddingBottom: 30,
        paddingTop: 10,
    }
});

export default HealthConditions;
