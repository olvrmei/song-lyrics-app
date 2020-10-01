import { StyleSheet } from 'react-native';
import * as Colors from './colors';

export const globalStyles = StyleSheet.create({
    gradient:{
        flex: 1,
        alignItems: 'center',
    },
    logo:{
        marginTop: 40,
        marginBottom: 20,
        width: 232,
        height: 30,
        alignSelf: 'center',
    },
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
    },
    titleText: {
        fontFamily:'OpenSans-Bold',
        fontSize: 24,
        textAlign: 'center',
        color: Colors.WHITE,
        marginBottom: 20,
        marginTop: 29,
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: Colors.YELLOW,
        fontFamily:'OpenSans-Bold',
        fontSize: 16,
        width: 274,
        padding: 14,
    },
    buttonText:{
        fontFamily:'OpenSans-Bold',
        fontSize: 16,
        marginHorizontal: 15,
        color: Colors.YELLOW,
    }
})