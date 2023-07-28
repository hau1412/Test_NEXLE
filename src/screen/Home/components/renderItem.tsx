import {Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setListChoose} from '../../../redux/actions/pageList';
const ItemList = (props: any) => {
  const {item} = props;
  const listChosse = useSelector(state => state.state);
  const dispatch = useDispatch();
  const dispatchAddToList = (item: any) => dispatch(setListChoose(item));

  const onHandlePress_ = async (item: any) => {
    dispatchAddToList(item);
  };

  return (
    <TouchableOpacity
      onPress={() => onHandlePress_(item)}
      style={{
        backgroundColor: 'black',
        width: 100,
        height: 71,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderColor: 'rgba(31, 31, 31, 1)',
        borderWidth: 1,
        marginRight: 15,
      }}>
      <Text
        style={{
          color: 'white',
        }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};
export default ItemList;
