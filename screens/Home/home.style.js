
import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants'
import { Platform } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 40,
        backgroundColor: COLORS.white
    },
    logoSection: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    taglineContainer: {
        flex: 0,
    },
    tagline: {
        fontSize: SIZES.large,
        color: COLORS.secondary,
        fontWeight: "bold",
        // fontFamily:FONT.bold,
    },
    imageContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        position: "absolute",
        bottom: 40,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 40,
    },
    image: {
        width: 300,
        height: 200,
    },
    buttonStyle: {
        backgroundColor: "transparent",
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    getStartedButton: {
        backgroundColor: COLORS.secondary,
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 20,

    },
    buttonTitleStyleSkip: {
        fontWeight: "bold",
        fontSize: SIZES.medium,
        color: COLORS.primary,
    },
    buttonTitleStyle: {
        color: COLORS.white,
        fontWeight: "bold",
        fontSize: SIZES.medium,
    },
    getStartedButtonWithArrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    arrowWrapper: {
        marginLeft: 8, 
    },
    iconRight: {
        width: 20,
        height: 20
    }
});