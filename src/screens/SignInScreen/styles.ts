import { StyleSheet } from 'react-native';

import theme from '../../global/styles/theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFF',
        flex: 1,
        alignItems: 'center',
    },
    svgLogo: {
        resizeMode: 'contain',
        marginTop: 100,
        left: -15,
    },
    textPassword: {
        fontFamily: 'Poppins-Thin',
        color: theme.colors.TEXT,
        fontSize: 14,
        textAlign: "center",
        marginTop: 20, 

    },
    svg: {
        position: 'absolute',
        top: 540,
        left: 0,
    },
    loginContainer: {
        width: '100%',
        alignItems:'center',
        flex: 1,
        marginBottom: 50,
        top: -50,
    }

})

export default styles;