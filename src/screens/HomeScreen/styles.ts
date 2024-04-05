import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.BACKGROUND,
    },
    titleCategory: {
        fontFamily: theme.fonts.SEMI_BOLD,
        color: theme.colors.TESTE,
        fontSize: 20,
        marginBottom: 15
    },
    rowItens: {
        flexDirection:'row',
        width: '100%',
        height:'auto',
    }, 
    button: {
        padding:10,
        borderRadius: 20, 
        width: 100, 
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:10,
        marginRight: 15,
        shadowColor: 'black',
        backgroundColor: theme.colors.SHAPE,
    },
    textButton:{
        fontFamily: theme.fonts.MEDIUM,
        color: theme.colors.TESTE,
        fontSize: 14,
        marginTop: 15
    },
    header: {
        padding:25,
        paddingBottom:30,
        backgroundColor: theme.colors.PRIMARY,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor:'blue',
        alignItems:'center'
    },
});

export default styles;