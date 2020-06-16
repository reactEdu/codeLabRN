import React from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import axios from 'axios';
import cheerio from 'react-native-cheerio';

class Data {
	@observable list = [];
}

function encodeParams(obj) {
	let params = [];
	for (let p in obj) {
		params.push(p + '=' + encodeURIComponent(obj[p]));
	}
	return params.join('&');
}

@observer
class SongFinder extends React.Component {
	data = new Data();

	componentDidMount() {
		const url = 'https://www.ziller.co.kr/SingingroomSearchList.do';
		const params = {
			currpage: 1,
			searchRange: 'play',
			limit: 10,
			noraeSelect: 'artist_name',
			searchKeyword: '레드벨벳',
			x: 0,
			y: 0,
		};
		axios.post( url, encodeParams( params ) )
			.then( response => {
				const $ = cheerio.load( response.data );
				let songNumbers = $( '.play_list_num01' ); // 곡 번호
				let data = this.data; // mobx 스토어

				songNumbers.each( function( i, elem ) {
					data.list.push( {
						key: $( this ).text(),
						number: $( this ).text(),
						title: $( this ).parent().find( '.play_txt_01' ).text() // 곡명
					} );
				} );
				console.log( this.data.list );
			} )
			.catch( error => {
				console.log( error );
			} );
	}

	render() {
		return (
			<View style={styles.container}>
				<View>
					<TextInput/>
				</View>

				<ScrollView>
					<FlatList data={ this.data.list }
							  extraData={ this.data.list.length }
							  renderItem={ ( { item } ) => {
								return <Button title={ `${item.number} ${item.title}` } onPress={ () => {} }/>
							  } }
					/>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
} );

export default SongFinder;