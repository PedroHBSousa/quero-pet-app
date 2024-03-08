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
        marginTop: 100,
    },
    textPassword: {
        fontFamily: theme.fonts.REGULAR,
        color: theme.colors.TEXT,
        fontSize: 14,
        textAlign: "center",
        marginTop: 20
    },
    svg: {
        position: 'absolute',
        top: -40,
        left: -100,

    }

})

export default styles;