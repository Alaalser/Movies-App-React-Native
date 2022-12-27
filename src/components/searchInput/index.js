import {Pressable, TextInput, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {icons} from '../../utils/icons';
import {styles} from './styles';

const SearchInput = ({onTouchStart, onChangeText, value, onPress}) => {
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
      <Pressable onPress={onPress} style={styles.icon}>
        <SvgXml xml={icons.search} height={30} width={30} />
      </Pressable>
    </View>
  );
};

export default SearchInput;
