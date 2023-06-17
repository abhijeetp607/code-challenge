import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const HomeScreen = ({ navigation }) => {


  const [arrayData, setArrayData] = useState([
    {
      item_name: "GSA BNF Directional",
      item_status: "Live-Entered",
      item_price: "2,502",
      item_percentage: 1.00,
      sub_data: [
        {
          unique_name: "OPTIDX_BANKNIFTY_04MAY2023_CE_45000",
          qty: 0.00,
          ltp: 2.3,
          val: 0,
          pnl: 2
        },
        {
          unique_name: "OPTIDX_BANKNIFTY_04MAY2023_PE_45000",
          qty: 0.00,
          ltp: 3.20,
          val: 160,
          pnl: -22
        },
        {
          unique_name: "OPTIDX_BANKNIFTY_04MAY2023_CE_45000",
          qty: 0.00,
          ltp: 301.20,
          val: 0,
          pnl: -1395
        },
        {
          unique_name: "OPTIDX_BANKNIFTY_04MAY2023_PE_45000",
          qty: 0.00,
          ltp: 241.20,
          val: -12.072,
          pnl: 3758
        },

      ],
      is_open: false
    },
    {
      item_name: "GSA Nifty Directional",
      item_status: "Expired",
      item_price: "-1,502",
      item_percentage: -0.10,
      sub_data: [
        {
          unique_name: "OPTIDX_BANKNIFTY_04MAY2023_CE_45000",
          qty: 1.00,
          ltp: 2.3,
          val: 3,
          pnl: 2
        },
        {
          unique_name: "OPTIDX_BANKNIFTY_04MAY2023_PE_45000",
          qty: 0.00,
          ltp: 3.20,
          val: 160,
          pnl: -122
        },
        {
          unique_name: "OPTIDX_BANKNIFTY_04MAY2023_CE_45000",
          qty: 0.00,
          ltp: 301.20,
          val: 0,
          pnl: -195
        },
        {
          unique_name: "OPTIDX_BANKNIFTY_04MAY2023_PE_45000",
          qty: 0.00,
          ltp: 241.20,
          val: -12.072,
          pnl: 378
        },

      ],
      is_open: false
    },
    {
      item_name: "GSA BNF Directional",
      item_status: "Live-Entered",
      item_price: "2,502",
      item_percentage: 1.00,
      sub_data: [
        {
          unique_name: "OPTIDX_BANKNIFTY_04MAY2023_CE_45000",
          qty: 0.00,
          ltp: 2.3,
          val: 0,
          pnl: 2
        },
        {
          unique_name: "OPTIDX_BANKNIFTY_04MAY2023_PE_45000",
          qty: 0.00,
          ltp: 3.20,
          val: 160,
          pnl: -22
        },
        {
          unique_name: "OPTIDX_BANKNIFTY_04MAY2023_CE_45000",
          qty: 0.00,
          ltp: 301.20,
          val: 0,
          pnl: -1395
        },
        {
          unique_name: "OPTIDX_BANKNIFTY_04MAY2023_PE_45000",
          qty: 0.00,
          ltp: 241.20,
          val: -12.072,
          pnl: 3758
        },

      ],
      is_open: false
    },
    {
      item_name: "GSA BNF Directional",
      item_status: "Live-Entered",
      item_price: "2,502",
      item_percentage: 1.00,
      sub_data: [
        {
          unique_name: "OPTIDX_BANKNIFTY_04MAY2023_CE_45000",
          qty: 0.00,
          ltp: 2.3,
          val: 0,
          pnl: 2
        },
        {
          unique_name: "OPTIDX_BANKNIFTY_04MAY2023_PE_45000",
          qty: 0.00,
          ltp: 3.20,
          val: 160,
          pnl: -22
        },
        {
          unique_name: "OPTIDX_BANKNIFTY_04MAY2023_CE_45000",
          qty: 0.00,
          ltp: 301.20,
          val: 0,
          pnl: -1395
        },
        {
          unique_name: "OPTIDX_BANKNIFTY_04MAY2023_PE_45000",
          qty: 0.00,
          ltp: 241.20,
          val: -12.072,
          pnl: 3758
        },

      ],
      is_open: false
    }
  ]
  )
  const [summaryPnl,setSummaryPnl]=useState('')


  useEffect(() => {
   
    const interval = setInterval(() => setSummaryPnl(Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1)),
      500,
    );

  const interval2 = setInterval(() => {
    setArrayData(prevArray => {
      const newArray = prevArray.map(item => {
          const newValues = item.sub_data.map(sub_value => sub_value.pnl= ( Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1)));
         return { ...item, values: newValues };
        });
      return newArray;
      });
    
  }, 1000); 
    return () => {
      clearInterval(interval);
      clearInterval(interval2)
    };
  }, []);
  const renderSeparator = () => (
    <View
      style={{
        backgroundColor: '#E7E7E7',
        height: 0.5,
      }}
    />
  );

  const handleIsFound = (text, key) => {
    console.log("text", text)
    console.log("key", key)
    const isFoundInput = [...arrayData];
    isFoundInput[key].is_open = text;
    setArrayData(isFoundInput)

};
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        translucent={true}
      />
      <SafeAreaView style={styles.safeViewStyle}>
        <View style={styles.containerViewStyle}>
          <View style={styles.navigationBarStyle}>
            <View
              style={styles.view1}>
              <View style={styles.menuView}>
                <TouchableOpacity
                >
                  <Image
                    style={styles.menuImage}
                    source={require('../assets/image/menu.png')}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.headingView}>
                <Text style={styles.iconHeading} >Strategies</Text>
              </View>
            </View>

          </View>

          <View style={styles.summaryBox}>
            <View style={{ flexDirection: "row", margin: 10 }}>
              <View style={{ flex: 1, minHeight: 30 }}>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: "700" }}>Summary</Text>
              </View>
              <View style={styles.expiryBox}>
                <Text style={styles.expirtText}>Expiry</Text>
                <Image
                  source={require('../assets/image/down-arrow.png')}
                  style={styles.downArrow}></Image>
              </View>
            </View>
            <View style={{ flexDirection: "row", margin: 10 }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.textHeadingsummary}>
                  Capital:
                </Text>
              </View>
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={styles.textHeadingsummary}>
                  P&L:
                </Text>
              </View>
              <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>
                <Text style={styles.textHeadingsummary}>
                  Value:
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.textValuesummary}>
                  ₹ 5.13 Cr
                </Text>
              </View>
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={styles.textValuesummary}>
                  ₹ {summaryPnl} k (-0.009%)
                </Text>
              </View>
              <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>
                <Text style={styles.textValuesummary}>
                  ₹ -43.66 L(43)
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.flatlistViewParent}>
            <FlatList
              data={arrayData}
              ItemSeparatorComponent={renderSeparator}
              renderItem={({ item, key, index }) => {
                let number = parseInt(item.item_percentage)
                // console.log(typeof number,number)
                return (
                  <>
                    <TouchableOpacity 
                     onPress={() => handleIsFound(!item.is_open, index)}

                    style={{ minHeight: 50, paddingHorizontal: 5, marginTop: 10 }} >
                      <View>
                        <Text style={{ color: '#6771E4', fontWeight: "600", fontSize: 13 }}>{item.item_name}</Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1 }}>
                          <Text style={{ color: '#8B8B8B', fontWeight: "400", fontSize: 12 }}>{item.item_status}</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: "flex-end", flexDirection: "row", justifyContent: "flex-end" }}>
                          <Text style={{ color: 'black', fontWeight: "400", fontSize: 12 }}>₹ </Text>
                          {
                            number > 0 ?
                              <Text style={{ color: '#4B994C', fontWeight: "400", fontSize: 12 }}>{item.item_price} ({item.item_percentage}%)</Text>
                              :
                              <Text style={{ color: '#D73842', fontWeight: "400", fontSize: 12 }}>{item.item_price} ({item.item_percentage}%)</Text>
                          }

                        </View>

                      </View>
                      {item.is_open ?
                        <>
                          <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <View style={{ justifyContent: "center", flex: 1 }}>
                              <Text style={{ color: 'black', fontSize: 12 }}>QTY:</Text>
                            </View>
                            <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
                              <Text style={{ color: 'black', fontSize: 12 }}>LTP:</Text>
                            </View>
                            <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
                              <Text style={{ color: 'black', fontSize: 12 }}>Val:</Text>
                            </View>
                            <View style={{ justifyContent: "center", flex: 1, alignItems: "flex-end" }}>
                              <Text style={{ color: 'black', fontSize: 12 }}>PNL:</Text>
                            </View>
                          </View>
                          <FlatList
                            data={item.sub_data}
                            renderItem={({ item, key, index }) => {
                              const pnlNumber = item.pnl.toLocaleString("en-US")
                              let numberCheck = parseInt(item.pnl)

                              return (
                                <>
                                <View style={{marginTop:10}}>
                                  <Text style={{fontSize:12,color:'black',textDecorationLine: 'underline',}}>
                                    {index+1}.{item.unique_name}
                                  </Text>
                                </View>
                                  <View style={{ flexDirection: "row", marginTop: 5 }}>
                                    <View style={{ justifyContent: "center", flex: 1 }}>
                                      <Text style={{ color: 'black', fontSize: 12 }}>{item.qty}</Text>
                                    </View>
                                    <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
                                      <Text style={{ color: 'black', fontSize: 12 }}>{item.ltp}</Text>
                                    </View>
                                    <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
                                      <Text style={{ color: 'black', fontSize: 12 }}>{item.val}</Text>
                                    </View>
                                    <View style={{ justifyContent: "center", flex: 1, alignItems: "flex-end" }}>
                                      {
                                       numberCheck > 0 ?
                                       <Text style={{ color: '#4B994C', fontWeight: "400", fontSize: 12 }}>{pnlNumber}</Text>

                                        :
                                        <Text style={{ color: '#D73842', fontWeight: "400", fontSize: 12 }}>{pnlNumber}</Text>

                                      }
                                    </View>
                                  </View>
                                </>
                              )
                            }}
                          />

                        </>


                        :
                        null
                      }

                    </TouchableOpacity >
                  </>
                );
              }}
            />

          </View>
        </View>
      </SafeAreaView>
    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
    // justifyContent: "center",
    // alignItems: "center"
  },
  safeViewStyle: {
    flex: 1,
  },
  containerViewStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 10
  },
  view1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center'
  },
  navigationBarStyle: {
    height: 50,
  },
  menuView: {

  },
  menuImage: {
    height: 25,
    width: 25,
    resizeMode: "contain",


  },
  iconHeading: {
    fontSize: 18,
    color: 'black',
    fontWeight: "bold"
  },
  headingView: {
    alignSelf: "center",
    flex: 1,
    alignItems: "center",
    marginRight: 30
  },
  summaryBox: {
    height: 130,
    backgroundColor: "#6771E4",
    borderRadius: 10
  },
  expiryBox: {
    flex: 1,
    minHeight: 30,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'white',
    flexDirection: "row",
    alignItems: "center"
  },
  expirtText: {
    textAlignVertical: "center", marginLeft: 10, color: 'white', fontWeight: "400"
  },
  downArrow: {
    marginLeft: "auto", height: 20, width: 20, marginRight: 10
  },
  textHeadingsummary: {
    color: '#FFFFFF', fontWeight: "700", fontSize: 15
  },
  textValuesummary: {
    color: '#FFFFFF', fontWeight: "400", fontSize: 12
  },
  flatlistViewParent: {
    flex: 1,
    // backgroundColor: 'gray',
    marginTop: 10,
    marginBottom: 10
  },
});
export default HomeScreen;
