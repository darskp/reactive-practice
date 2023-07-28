
import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 40,
        backgroundColor: COLORS.white
    },
    taglineContainer: {
        flex: 0,
    },
    tagline: {
        fontSize: SIZES.large,
        color: COLORS.secondary,
        fontWeight: "bold",
    },
});