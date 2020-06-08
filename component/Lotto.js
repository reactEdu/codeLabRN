import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import _ from 'lodash';

class Lotto extends Component {
    state = { list: [] }
    shuffle = () => {
        // 45개 번호 생성 후 섞어서 앞에서 여섯개만 사용
        let numberList = [];
        _.times(45, n => { // 콜백함수 연속적 실행
            numberList.push(n + 1);
        });
        numberList = _.shuffle(numberList); // 섞어주는 함수
        numberList.length = 6;
        this.setState({ list: numberList });
    }
    componentDidMount() {
        this.shuffle();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.list.join(' ')}</Text>
                <View>
                    <Button title={'다시'} onPress={this.shuffle}></Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 24,
    }
});

export default Lotto;