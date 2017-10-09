import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


class AlbumDetail extends Component {

	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		const { title, artist, thumbnail_image } = this.props.album;
		console.log(title, artist, thumbnail_image);

		return (
			<Card>
				<CardSection>
					<View style={styles.thumbnailContainerStyle}>
						<Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
					</View>
					<View style={styles.headerContentStyle}>
						<Text style={styles.headerTextStyle}>{title}</Text>
						<Text>{artist}</Text>
					</View>
				</CardSection>
				<CardSection>
					<Image style={styles.imageStyle} source={{ uri: this.props.album.image }} />
				</CardSection>
				<CardSection>
					<Button onPress={() => console.log(title)} />
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10

	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default AlbumDetail;
