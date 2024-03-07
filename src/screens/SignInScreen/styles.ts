import { StyleSheet } from 'react-native';

import theme from '../../global/styles/theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFF',
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: 180,
        height: 180,
        resizeMode: 'contain',
        marginTop:100,
    }

})

export default styles;