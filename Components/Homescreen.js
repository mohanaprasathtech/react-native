import React from 'react';
import '../languages/i18n.js'
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, View} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
function Homescreen() {
  const {t, i18n} = useTranslation();
  const options = [
    {label: 'English', value: 'en'},
    {label: 'French', value: 'fr'},
    {label: 'Tamil', value: 'tn'},
    {label: 'Italian', value: 'it'},
  ];
  return (
    <View>
      <SwitchSelector
        style={styles.container}
        options={options}
        initial={0}
        onPress={(val)=>i18n.changeLanguage(val)}
      />
      <View>
        <Text style={styles.font}>{t('welcome')}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingLeft: 60,
    paddingRight: 60,
    marginTop: 200,
  },
  font: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    fontWeight: '800',
  },
});
export default Homescreen;
