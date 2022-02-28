import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  FlatList,
  Touchable,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import ImageConstants from "../../constants/ImageConstants";

const Height = Dimensions.get('screen').height;

export default class CryptoCurrencyModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onChangeText: '',
      topScrollableRowFeed: [
        { title: "Tradable", isSelected: false },
        { title: "WatchList", isSelected: false },
        { title: "New on Coinbase", isSelected: false },
      ],
      bitcoins: [
        {
          image: ImageConstants.bitcoinIcon,
          name: "Bitcoin",
          subTitle: "BTC",
          rightTop: "$1.43",
          rightBottom: "+12.04%",
        },
        {
          image: ImageConstants.bitcoinIcon,
          name: "Ethereum",
          subTitle: "ETH",
          rightTop: "$1.43",
          rightBottom: "+12.04%",
        },
        {
          image: ImageConstants.bitcoinIcon,
          name: "Ethereum",
          subTitle: "ETH",
          rightTop: "$1.43",
          rightBottom: "+12.04%",
        },
        {
          image: ImageConstants.bitcoinIcon,
          name: "Ethereum",
          subTitle: "ETH",
          rightTop: "$1.43",
          rightBottom: "+12.04%",
        },
        {
          image: ImageConstants.bitcoinIcon,
          name: "Ethereum",
          subTitle: "ETH",
          rightTop: "$1.43",
          rightBottom: "+12.04%",
        },
        {
          image: ImageConstants.bitcoinIcon,
          name: "Ethereum",
          subTitle: "ETH",
          rightTop: "$1.43",
          rightBottom: "+12.04%",
        },
        {
          image: ImageConstants.bitcoinIcon,
          name: "Ethereum",
          subTitle: "ETH",
          rightTop: "$1.43",
          rightBottom: "+12.04%",
        },
        {
          image: ImageConstants.bitcoinIcon,
          name: "Ethereum",
          subTitle: "ETH",
          rightTop: "$1.43",
          rightBottom: "+12.04%",
        },
        {
          image: ImageConstants.bitcoinIcon,
          name: "Ethereum",
          subTitle: "ETH",
          rightTop: "$1.43",
          rightBottom: "+12.04%",
        },
        {
          image: ImageConstants.bitcoinIcon,
          name: "Ethereum",
          subTitle: "ETH",
          rightTop: "$1.43",
          rightBottom: "+12.04%",
        },
      ],
    };
  }

  componentDidMount() {
    this.callAPI();
  }

  callAPI() {
    fetch(
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=20&convert=USD',
      {
        method: 'GET',
        headers: {
          'X-CMC_PRO_API_KEY': '7e2634f5-fef1-4bc9-9e4c-0bcb30271008',
        },
      }
    )
      .then((response) => {
        console.log('response:= ', response);
      })
      .catch((error) => {
        console.log('error: ' + error);
      });
  }

  headerView() {
    return (
      <View style={{ height: 60, justifyContent: 'center' }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 22,
            fontWeight: 'bold',
          }}
        >
          Trade
        </Text>
      </View>
    );
  }

  searchBarView() {
    return (
      <View
        style={{
          borderColor: "black",
          height: 50,
          marginHorizontal: 20,
          borderWidth: 1,
          borderRadius: 5,
          justifyContent: "center",
        }}
      >
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}
        >
          <Image
            style={{ width: 20, height: 20 }}
            source={ImageConstants.searchIcon}
          />
          <TextInput
            placeholder="Search For an asset"
            style={{
              flex: 1,
              height: 40,
              marginLeft: 10,
            }}
          />
        </View>
      </View>
    );
  }

  renderItem = ({ item }) => {
    return (
      <View
        style={
          item.isSelected
            ? {
                backgroundColor: item.isSelected
                  ? "rgba(245, 248, 255, 1)"
                  : "",
                height: 25,
                alignSelf: "flex-start",
                justifyContent: "center",
                paddingHorizontal: 8,
                borderRadius: 25 / 2,
                marginRight: 8,
              }
            : {
                height: 25,
                alignSelf: "flex-start",
                justifyContent: "center",
                paddingHorizontal: 8,
                borderRadius: 25 / 2,
                marginRight: 8,
              }
        }
      >
        <TouchableOpacity
          onPress={() => {
            const dataFromArray = [...this.state.topScrollableRowFeed];
            dataFromArray.map((value) => {
              if (value.isSelected) {
                value.isSelected = false;
              }
              if (item.title === value.title) {
                value.isSelected = true;
              }
            });
            this.setState({
              topScrollableRowFeed: dataFromArray,
            });
          }}
        >
          <Text
            style={
              item.isSelected
                ? {
                    fontSize: 12,
                    fontWeight: '700',
                    color: 'rgba(9, 89, 255, 1)',
                  }
                : {
                    fontSize: 12,
                    fontWeight: '700',
                  }
            }
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderBitCoinRow = ({ item }) => {
    console.log(item.name);
    return (
      <View style={{ height: 50, marginTop: 10 }}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <Image
            style={{ marginLeft: 10, height: 25, width: 25 }}
            source={item.image}
          />
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, marginLeft: 20 }}>
              <Text>{item.name}</Text>
              <Text>{item.subTitle}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text>{item.rightTop}</Text>
              <Text>{item.rightBottom}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  bitcoinScrollableList() {
    return (
      <FlatList
        data={this.state.bitcoins}
        renderItem={this.renderBitCoinRow}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 20,
        }}
        style={{ marginBottom: 20 }}
      />
    );
  }

  topScrollableRow() {
    return (
      <FlatList
        horizontal
        data={this.state.topScrollableRowFeed}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        style={{ marginTop: 20 }}
      />
    );
  }

  seeMoreButton() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={{
          height: 40,
          borderWidth: 1,
          borderColor: 'black',
          position: 'absolute',
          bottom: 50,
          left: 20,
          right: 20,
          backgroundColor: "white",
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: 'center' }}>See More</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={{}}>
        <SafeAreaView>
          {this.headerView()}
          {this.searchBarView()}
          {this.topScrollableRow()}
          {this.bitcoinScrollableList()}
        </SafeAreaView>
        {this.seeMoreButton()}
      </View>
    );
  }
}
