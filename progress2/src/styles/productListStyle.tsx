
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey'
  },
  headerFl: {
    marginTop: 5
  },
  txtHeaderFl: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: '#bdbdbd'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    marginRight: 25
  },
  tleIn4: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  proTle: {
    fontSize: 13,
    color: 'grey',
    marginLeft: 10
  },
  proPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF4000',
  },
  btnHeader: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'center',

  },
  viewContent: {
    width: 1,
    height: 13,
    backgroundColor: 'silver'
  },
  txtTitle: {
    marginRight: 8,
    color: 'black',
    fontSize: 16
  },
  ProductImg: {
    width: 185,
    height: 250,
    margin: 5,
  },
  Flat: {
    backgroundColor: 'white',
    height: 'auto'
  },
})
export default styles;
