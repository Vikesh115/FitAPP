import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';

export default function WeightLossScreen() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.box}>
        <Text style={styles.text}>WeightLoss Diet</Text></View>
      <Text style={styles.text2}>
        STEP 1:  CALCULATE THE BMR
      </Text>
      <Text>
        Use Online BMR calculator or BMR Mobile App.
      </Text>
      <Text>
        Enter Height/Weight/Age including Moderate Active (5 days a week) Lets assume your BMR came 1700.
      </Text>
      <Text style={styles.text2}>
        STEP 2:  CACULATE THE MAINTENANCE CALORIES

      </Text>
      <Text>
        [FORMULA: BMR x 1.5]
      </Text>
      <Text>
        1700 x 1.5 = 2550 calories
      </Text>
      <Text>
        So maintenance calories is 2550
      </Text>
      <Text style={styles.text2}>
        STEP 3: ADD EXTRA CALORIES FOR GAINING
      </Text>
      <Text>
        If you want to gain 0.5lbs per week then add 250 calories 2550 + 250 = 2800
      </Text>
      <Text>
        If you want to gain 1lbs per week then add 500 calories 2550 + 500 = 3050
      </Text>
      <Text>
        If you want to gain 2lbs per week then add 1000 calories 2550 + 500 = 3550
        </Text>

      <Text style={styles.text1}>MEAL 1-BANANA SHAKE</Text>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style={styles.header}>INGREDIENTS</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.header}>CARBS</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.header}>PROTEINS</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.header}>FATS</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>2 Banana</Text>
        </View>
        <View style={styles.cell}>
          <Text>48g</Text>
        </View>
        <View style={styles.cell}>
          <Text>2g</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>300ml milk</Text>
        </View>
        <View style={styles.cell}>
          <Text>12g</Text>
        </View>
        <View style={styles.cell}>
          <Text>10g</Text>
        </View>
        <View style={styles.cell}>
          <Text>6g</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>140 ml water</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>1.5SP Penut Butter </Text>
        </View>
        <View style={styles.cell}>
          <Text>5g</Text>
        </View>
        <View style={styles.cell}>
          <Text>5g</Text>
        </View>
        <View style={styles.cell}>
          <Text>10g</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>1/2 Cup Oats Powder</Text>
        </View>
        <View style={styles.cell}>
          <Text>27g</Text>
        </View>
        <View style={styles.cell}>
          <Text>3g</Text>
        </View>
        <View style={styles.cell}>
          <Text>1g</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>Pinch Cinnamon</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
      </View>
      <View style={styles.row1}>
        <View style={styles.cell}>
          <Text>Total Calories=680</Text>
        </View>
        <View style={styles.cell}>
          <Text>92g</Text>
        </View>
        <View style={styles.cell}>
          <Text>40g</Text>
        </View>
        <View style={styles.cell}>
          <Text>17g</Text>
        </View>
      </View>
      <Text style={styles.text1}>MEAL 2-BREAD TOAST AND OMELATE</Text>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style={styles.header}>INGREDIENTS</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.header}>CARBS</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.header}>PROTEINS</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.header}>FATS</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>2 Whole eggs</Text>
        </View>
        <View style={styles.cell}>
          <Text>2g</Text>
        </View>
        <View style={styles.cell}>
          <Text>12g</Text>
        </View>
        <View style={styles.cell}>
          <Text>10g</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>2 egg whites</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
        <View style={styles.cell}>
          <Text>8g</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>3-4 Multigrain Bread Slices</Text>
        </View>
        <View style={styles.cell}>
          <Text>56g</Text>
        </View>
        <View style={styles.cell}>
          <Text>8g</Text>
        </View>
        <View style={styles.cell}>
          <Text>10g</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>2SP jam </Text>
        </View>
        <View style={styles.cell}>
          <Text>20g</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
      </View>
      <View style={styles.row1}>
        <View style={styles.cell}>
          <Text>Total Calories=550</Text>
        </View>
        <View style={styles.cell}>
          <Text>78g</Text>
        </View>
        <View style={styles.cell}>
          <Text>28g</Text>
        </View>
        <View style={styles.cell}>
          <Text>14g</Text>
        </View>
      </View>
      <Text style={styles.text1}>MEAL 3-RICE EGG PEAS</Text>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style={styles.header}>INGREDIENTS</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.header}>CARBS</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.header}>PROTEINS</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.header}>FATS</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>1 CUP RICE</Text>
        </View>
        <View style={styles.cell}>
          <Text>45g</Text>
        </View>
        <View style={styles.cell}>
          <Text>3g</Text>
        </View>
        <View style={styles.cell}>
          <Text>1g</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>1/2 CUP KIDNEY BEANS</Text>
        </View>
        <View style={styles.cell}>
          <Text>15g</Text>
        </View>
        <View style={styles.cell}>
          <Text>5g</Text>
        </View>
        <View style={styles.cell}>
          <Text>1g</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>4 EGG WHITES</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
        <View style={styles.cell}>
          <Text>16g</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>1/2 cup PEAS </Text>
        </View>
        <View style={styles.cell}>
          <Text>3g</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>1SP GHEE</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
        <View style={styles.cell}>
          <Text>13g</Text>
        </View>
      </View>
      <View style={styles.row1}>
        <View style={styles.cell}>
          <Text>Total Calories=680</Text>
        </View>
        <View style={styles.cell}>
          <Text>60g</Text>
        </View>
        <View style={styles.cell}>
          <Text>24g</Text>
        </View>
        <View style={styles.cell}>
          <Text>15g</Text>
        </View>
      </View>
      <Text style={styles.text1}>MEAL 4-BANANA SHAKE(same as meal 1)</Text>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style={styles.header}>INGREDIENTS</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.header}>CARBS</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.header}>PROTEINS</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.header}>FATS</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>2 Banana</Text>
        </View>
        <View style={styles.cell}>
          <Text>48g</Text>
        </View>
        <View style={styles.cell}>
          <Text>2g</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>300ml milk</Text>
        </View>
        <View style={styles.cell}>
          <Text>12g</Text>
        </View>
        <View style={styles.cell}>
          <Text>10g</Text>
        </View>
        <View style={styles.cell}>
          <Text>6g</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>140 ml water</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>1.5SP Penut Butter </Text>
        </View>
        <View style={styles.cell}>
          <Text>5g</Text>
        </View>
        <View style={styles.cell}>
          <Text>5g</Text>
        </View>
        <View style={styles.cell}>
          <Text>10g</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>1/2 Cup Oats Powder</Text>
        </View>
        <View style={styles.cell}>
          <Text>27g</Text>
        </View>
        <View style={styles.cell}>
          <Text>3g</Text>
        </View>
        <View style={styles.cell}>
          <Text>1g</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>Pinch Cinnamon</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
      </View>
      <View style={styles.row1}>
        <View style={styles.cell}>
          <Text>Total Calories=680</Text>
        </View>
        <View style={styles.cell}>
          <Text>92g</Text>
        </View>
        <View style={styles.cell}>
          <Text>40g</Text>
        </View>
        <View style={styles.cell}>
          <Text>17g</Text>
        </View>
      </View>
      <Text style={styles.text1}>PRE/DURING/POST WORKOUT</Text>
      <View style={styles.row2}>
        <View style={styles.cell}>
          <Text style={styles.header}>PRE WORKOUT</Text></View>
        <View style={styles.cell}>
          <Text style={styles.header}>QUANTITY</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>1 SCOOP ANY PRE WORKOUT SUPPLEMENT</Text>
        </View>
        <View style={styles.cell}>
          <Text>1 SCOOP</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>WATER</Text>
        </View>
        <View style={styles.cell}>
          <Text>200-240ML</Text>
        </View>
      </View>
      <View style={styles.row2}>
        <View style={styles.cell}>
          <Text style={styles.header}>DURING WORKOUT</Text></View>
        <View style={styles.cell}>
          <Text style={styles.header}>QUANTITY</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>BCAA</Text>
        </View>
        <View style={styles.cell}>
          <Text>5-10gm</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>WATER</Text>
        </View>
        <View style={styles.cell}>
          <Text>300-600ML</Text>
        </View>
      </View>
      <View style={styles.row2}>
        <View style={styles.cell}>
          <Text style={styles.header}>POST WORKOUT</Text></View>
        <View style={styles.cell}>
          <Text style={styles.header}>QUANTITY</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>1-2 SCOOP WHEY PROTIEN</Text>
        </View>
        <View style={styles.cell}>
          <Text>25 - 50gm</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>WATER</Text>
        </View>
        <View style={styles.cell}>
          <Text>200-350ML</Text>
        </View>
      </View>
      <View style={styles.row1}>
        <View style={styles.cell}>
          <Text>Total Calories=680</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
        <View style={styles.cell}>
          <Text>50gm</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
      </View>
      <Text style={styles.text1}>MEAL 5- POTATO CHICKEN BEANS</Text>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style={styles.header}>INGREDIENTS</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.header}>CARBS</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.header}>PROTEINS</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.header}>FATS</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>220gm POTATO</Text>
        </View>
        <View style={styles.cell}>
          <Text>50g</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>1/2 cup white CHANE</Text>
        </View>
        <View style={styles.cell}>
          <Text>15g</Text>
        </View>
        <View style={styles.cell}>
          <Text>6g</Text>
        </View>
        <View style={styles.cell}>
          <Text>2g</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>1 TOMATO</Text>
        </View>
        <View style={styles.cell}>
          <Text>5g</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>80gm grilled CHICKEN</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
        <View style={styles.cell}>
          <Text>10g</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
      </View>
      <View style={styles.row1}>
        <View style={styles.cell}>
          <Text>Total Calories=378</Text>
        </View>
        <View style={styles.cell}>
          <Text>70</Text>
        </View>
        <View style={styles.cell}>
          <Text>20g</Text>
        </View>
        <View style={styles.cell}>
          <Text>2g</Text>
        </View>
      </View>
      <Text style={styles.text1}>MEAL 6- BEFORE BED PROTIEN</Text>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style={styles.header}>INGREDIENTS</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.header}>CARBS</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.header}>PROTEINS</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.header}>FATS</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>300ml MILK</Text>
        </View>
        <View style={styles.cell}>
          <Text>18g</Text>
        </View>
        <View style={styles.cell}>
          <Text>15g</Text>
        </View>
        <View style={styles.cell}>
          <Text>3g</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>1 BREAD</Text>
        </View>
        <View style={styles.cell}>
          <Text>16g</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
        <View style={styles.cell}>
          <Text>0g</Text>
        </View>
      </View>
      <View style={styles.row1}>
        <View style={styles.cell}>
          <Text>Total Calories=340</Text>
        </View>
        <View style={styles.cell}>
          <Text>34</Text>
        </View>
        <View style={styles.cell}>
          <Text>15g</Text>
        </View>
        <View style={styles.cell}>
          <Text>3g</Text>
        </View>
      </View>
      <Text style={styles.text3}>Best wishes to Everyone</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 40,
    padding: 10,
  },
  box: {
    backgroundColor: '#ffa500',
    alignItems: 'center',
    borderWidth: 4,
    borderRadius: 20,
    borderColor: 'black',
    padding: 5,
  },
  text: {
    fontSize: 30,
    alignItems: 'center',
  },
  text1: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  text2: {
    color: '#cd853f',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 14,
  },
  text3: {
    color: '#2e8b57',
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  row1: {
    backgroundColor:'grey',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  row2: {
    backgroundColor:'orange',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  cell: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
  },
});