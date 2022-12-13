import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import LifeStatus from '../../Components/Common/LifeStatus';
import StatusBar from '../../Components/Home/StatusBar';
import CreateHabit from '../../Components/Home/CreateHabit';
import EditHabit from '../../Components/Home/EditHabit';

function Home() {

  const navigation = useNavigation();
  const [mindHabit, setMindHabit] = useState("Habito preenchido")
  const [moneyHabit, setMoneyHabit] = useState()
  const [bodyHabit, setBodyHabit] = useState()
  const [funHabit, setFunHabit] = useState()

  function handleNavExplanation() {
    navigation.navigate("AppExplanation")
  }

  return (
    <View style={styles.container}>
        <ScrollView>
            <View style={{alignItems: "center"}}>
                <Text style={styles.dailyChecks}> ❤️ 20 dias - ✔️ 80 checks </Text>
                <LifeStatus />
                <StatusBar />
                {mindHabit ? (
                    <EditHabit 
                        habit={"Habito 01"}
                        frequency={"Todos os dias, ás 10:30"}
                        habitArea={"Mente"}
                        checkColor="#90B7F3"
                    />
                ) : (
                    <CreateHabit habitArea="Mente" borderColor="#90B7F3" />
                )}
                    <CreateHabit habitArea="Financeiro" borderColor="#85BB65" />
                    <CreateHabit habitArea="Corpo" borderColor="#FF0044" />
                    <CreateHabit habitArea="Humor" borderColor="#FE7F23" />
            </View>
            <Text
                style={styles.explanationText}
                onPress={() => {
                    handleNavExplanation()
                }}
            >
                Ver explicação novamente
            </Text>
        </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },

    dailyChecks: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        marginTop: 40,
    },

    explanationText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 15,
        paddingBottom: 25,
    },

})