import React, { useEffect , useState } from "react" ;
import { View , TouchableOpacity , StyleSheet, Text} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const value = {
    name: "Chimezie",
    job: "Software Developer"
  };

const storeTranscripts = async ( value ) => {
    try {
      const response = await AsyncStorage.setItem("transcripts", JSON.stringify(value));
      return response ;
    } catch (error) {
      console.log(error);
    }
};
const getTranscripts = async () => {
    try {
      const transcripts = await AsyncStorage.getItem("transcripts");
      const transcripts_list = JSON.parse(transcripts);
      return transcripts_list;
    } catch (error) {
      console.log(error);
    }
};

const Transcripts = () => {
    const [ transcripts , setTranscripts ] = useState([])
    useEffect(() => {
        const result = getTranscripts()
        if (result._transcripts === undefined ) {
            console.log("nulll")
            const response = storeTranscripts(["John", "Peter", "Sally", "Jane"])
        }
    },[])

    useEffect(() => {
        (async () => {
            const response = await getTranscripts();
            console.log('RESPONSE',response);
            setTranscripts(response)
        })()
    },[transcripts[-1]])


    return (
        <View style={styles.container} >
            { transcripts.map((text, index) =>
                <TouchableOpacity key={index} style={styles.component}>
                    <Text>
                        {text}
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
      display:"flex",
      paddingVertical: 40,
      flexDirection: "column",
      alignItems: "stretch"
    },
    component : {
        padding: "100%",
        display : "flex",   
        borderBottomColor:'black',
        borderTopColor:'black',
        borderWidth: 1,
        
    }
});

export default Transcripts ;