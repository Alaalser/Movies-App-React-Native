import {TextInput, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {icons} from '../../utils/icons';
import {styles} from './styles';

const SearchInput = ({onTouchStart, onChangeText, value}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onTouchStart={onTouchStart}
        onChangeText={onChangeText}
        value={value}
        placeholder="Search"
        placeholderTextColor="#67686D"
      />
      <SvgXml xml={icons.search} style={styles.icon} height={30} width={30} />
    </View>
  );
};

export default SearchInput;
