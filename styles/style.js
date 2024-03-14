import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        margin: 15,
        flex: 1,
    },
    addButton: {
        borderRadius: 20,
        backgroundColor: '#0083da',
        width: 330,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    input: {
        width: 330,
        height: 45,
        padding: 5,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#33adff7e',
        marginTop: 5
    },
    dateInput: {
        width: 300,
        height: 45,
        padding: 2,
        borderRadius: 3,
        backgroundColor: '#33adff7e',
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    type: {
        width: 330,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    textitem:{
        padding: 10,
        width: 110,
        textAlign: 'center',
        borderColor: '#33adff7e',
        borderWidth: 1,
        flexDirection: 'row',
    },
    listView: {
        backgroundColor: '#33adff7e',
        marginTop: 10,
        padding: 8,
    },
    listTitle: {
        flexDirection: 'row',
        gap: 5,
    },
    listDetails: {
        paddingLeft: 25,
    },
    totals: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold'
    },
    totalsContainer: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 25,
        justifyContent: 'space-evenly',
    },
    totalsItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    radioContainer: {
        backgroundColor: '#33adff7e',
        borderRadius: 15,
        margin: 15,
        paddingBottom: 12
    },
    radioLabel: {
        fontSize: 24,
        marginLeft: 12,
        marginTop: 18,
    },
    radioButtons: {
        alignItems: 'baseline',
        marginTop: 25,
    },
  });