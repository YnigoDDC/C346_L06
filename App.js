import React, {useState} from 'react';
import {View, ScrollView, Text, Button, Alert, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const FullQuestion = ({qn, picture, val1, val2, val3, ans, setAns})=> {
    return (
        <View>
            <Text>{qn}</Text>

            <Image
                source={picture}
                style={{width:412,height:412}}
            />

            <Picker
                selectedValue={ans}
                onValueChange={(value) => setAns(value)}
                style={{backgroundColor:'lightgrey'}}
            >
                <Picker.Item label={'--Select Option--'} value={'-'}></Picker.Item>
                <Picker.Item label={val1} value={val1}/>
                <Picker.Item label={val2} value={val2}/>
                <Picker.Item label={val3} value={val3}/>
            </Picker>
        </View>
    );
};

const QuizApp=()=>{
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');

    const correctans1='U.U.F.O.'
    const correctans2='Heart of Android'
    const correctans3='Chimera Dragons'

    return (
        <ScrollView>
            <Text></Text>
            <Text style={{fontSize: 50, textAlign: 'center'}}>
                THE{' '}
                <Image
                    source={{uri: 'https://static.wikia.nocookie.net/logopedia/images/a/a9/%E3%81%8B%E3%82%81%E3%82%8A%E3%81%82_Camellia_logo_%28black%29.svg/revision/latest/scale-to-width-down/284?cb=20250129213038'}}
                    style={{width: 165, height: 60}}
                />{' '}
                QUIZ
            </Text>
            <Text></Text>


            <FullQuestion
                qn="Which album is this?"
                picture={{uri: 'https://i.scdn.co/image/ab67616d0000b2731d3890de53ed676047ca3629'}}
                val1="Blackmagik Blazing"
                val2="U.U.F.O."
                val3="Planet//Shaper"
                ans={ans1}
                setAns={setAns1}
            />

            <Text></Text>
            <Text></Text>

            <FullQuestion
                qn="Which album is this?"
                picture={{uri: 'https://f4.bcbits.com/img/a2469364123_5.jpg'}}
                val1="Tera I/O"
                val2="REX"
                val3="Heart of Android"
                ans={ans2}
                setAns={setAns2}
            />

            <Text></Text>
            <Text></Text>

            <FullQuestion
                qn="Which album is this?"
                picture={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1wctTgUMpnuSPg_o_cVneTYXzurVm6MFgE9kvYIJrJw&s=10'}}
                val1="Chimera Dragons"
                val2="Crystallized"
                val3="Ashed Wings"
                ans={ans3}
                setAns={setAns3}
            />

            <Text></Text>

            <Button
                title="SUBMIT ANSWERS"
                onPress={() => {
                    let score = 0;
                    if(ans1 === correctans1) score++;
                    if(ans2 === correctans2) score++;
                    if(ans3 === correctans3) score++;
                    if(score === 0) {
                        Alert.alert('Quiz Results', 'damn you scored 0/3');
                    }
                    else if(score === 1) {
                        Alert.alert('Quiz Results', 'nice, you scored 1/3');
                    }
                    else if(score === 2) {
                        Alert.alert('Quiz Results', 'woah cool you scored 2/3!');
                    }
                    else if(score === 3) {
                        Alert.alert('Quiz Results', 'You scored 3/3\nwe love camellia');
                    }
                }}
            />
        </ScrollView>
    );
};

export default QuizApp;
