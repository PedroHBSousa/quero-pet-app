import { StyleSheet } from "react-native"
import theme from "../../global/styles/theme"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: theme.colors.TESTE,
        elevation: 3,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 30,
        marginRight: 20,
    },
    nameProfile: {
        fontSize: 20,
        fontFamily: theme.fonts.MEDIUM,
        color: theme.colors.YELLOW,
        marginLeft: 20,
    }
})

export default styles;