import { StyleSheet } from 'react-native';
import defaultStyles from "../../global/styles";

import theme from '../../global/styles/theme';

const styles = StyleSheet.create({
    ...defaultStyles,
    
    container: {
        backgroundColor: '#FFFF',
        flex: 1,
    },
    main: {
        flex: 1,
        padding: 25,
        paddingTop: 0,

    },
})

export default styles;