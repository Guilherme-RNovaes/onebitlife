import { View, Text, Image, ScrollView } from 'react-native'

function Start() {
  return (
    <View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Image source={riquire("../../assets/icons/logo3.png")}/>
                <Text>
                    Vamos transformar sua via {/n} em jogo, buscando sempre {/n} o melhor nível.
                </Text>
            </View>
        </ScrollView>
    </View>
  )
}

export default Start