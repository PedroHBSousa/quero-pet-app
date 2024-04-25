import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";


const styles = StyleSheet.create({
    card: {
        width: 200,
        height: 300,
        borderRadius: 11,
        flex: 1,
        justifyContent: 'center',
        marginRight:20
    },
    cardElevetad: {
        backgroundColor: theme.colors.TESTE,
        elevation: 3
    },
    cardImage: {
        width: 200,
        height: 200,
        borderRadius: 10,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    cardTitle: {
        fontSize: 18,
        color: theme.colors.YELLOW,
        fontFamily: theme.fonts.MEDIUM,
    },
    cardBody: {
        flexGrow: 1,
        padding: 15,
    },
    icon: {
        marginRight: 5,
    },
    cardDescription: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardSubTitle: {
        color: theme.colors.YELLOW,
        fontFamily: theme.fonts.LIGHT,
        fontSize: 14,
        lineHeight: 20,
    }

});

export default styles;