import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './Style'
import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType'
import { MaterialIcons } from '@expo/vector-icons';
import PaymentIcon from "@expo/vector-icons/MaterialIcons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';



export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <View style={styles.texts}

                >
                    <MaterialIcons
                        name="add-alert"
                        size={24}
                        color="black"
                        style={{ alignSelf: "center", marginRight: 3, }}
                    />
                    <Text style={styles.title}>Alerts</Text>

                </View>
                <View style={styles.texts}>
                    <PaymentIcon
                        name="payment"
                        size={20}
                        color="black"
                        style={{ alignSelf: "center", marginRight: 5, }}
                    />
                    <Text style={styles.title}>Payments</Text>
                </View>
                <View style={styles.texts}>
                    <FontAwesome5
                        name="address-book"
                        size={24}
                        color="black"
                        style={{ alignSelf: "center", marginRight: 5, }}

                    />
                    <Text style={styles.title}>Addrress Book</Text>
                </View>
                <View style={styles.Verifytext}>
                    <MaterialCommunityIcons
                        name="shield-check"
                        size={24}
                        color="black"
                        style={{ alignSelf: "center", marginRight: 5, }}

                    />
                    <Text style={styles.title}>Verification</Text>
                </View>
            </View>
            <View>
                <View style={styles.midContainer}>

                    <Text style={styles.text} >Profile</Text>
                    <Text style={styles.text}>Settings</Text>
                    <Text style={styles.text}>Security</Text>
                    <Text style={styles.text}>History</Text>
                    <Text style={styles.text}>Support center</Text>
                    <Text style={styles.text}>Referrals</Text>
                </View>
                    <Text style={styles.text}>others</Text>
                <View style={styles.midContainer}>
                    <Text style={styles.text}>Rate the app</Text>
                    <Text style={styles.text}>Terms of service</Text>
                    <Text style={styles.text}>About</Text>
                    <Text style={styles.text}>Logout</Text>
                </View>
            </View>
        </View>
    )
}