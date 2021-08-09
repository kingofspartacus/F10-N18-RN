
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 50,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey'
  },
  ImgDetail: {
    width: '100%',
    height: '68%',
    margin: 5,
  },
  priceContent: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white'
  },
  txtPrice: {
    fontWeight: 'bold',
    fontSize: 20
  },
  startContent: {
    flexDirection: 'row',
    marginTop: 2
  },
  star: {
    marginTop: 11,
    color: '#FF4000'
  },
  groupBtn: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  btnMocha: {
    backgroundColor: 'brown',
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 20,
  },
  maginLeft10: {
    marginLeft: 10
  },
  btnAdd: {
    backgroundColor: 'black',
    width: '60%',
    height: 40,
    marginLeft: 30,
  },
  txtAdd: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 5
  },
});
export default styles;
