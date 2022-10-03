import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native';
import { View } from 'react-native';

// Types
import { CardProps } from './types';

// Components
import { ScreenWidth } from '../Shared';
import { Colors } from '../Colors';
import RegularText from '../Text/RegularText';
import SmallText from '../Text/SmallText';

// Images
import card_bg from '../../assets/bgs/background_transparent.png';

// Navigation
import { useNavigation } from '@react-navigation/native';
import { Props as HomeProps } from '../../screens/Home';

const CardBackground = styled.ImageBackground`
    height: 75%;
    width: ${ScreenWidth * 0.67}px;
    resize-mode: cover;
    background-color: ${Colors.accent};
    border-radius: 25px;
    margin-right: 25px;
    overflow: hidden;
`;

const CardTouchable = styled.TouchableHighlight`
    height: 100%;
    border-radius: 25px;
`;

const TouchableView = styled.View`
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    flex: 1;
`;

const CardRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const Logo = styled.Image`
    width: 100%;
    height: 80%;
    resize-mode: contain;
    flex: 1;
`;

const CardItem: FunctionComponent<CardProps> = (props) => {
    // configuring navigation
    const navigation = useNavigation<HomeProps['navigation']>();

    // move to balance screen
    const handlePress = () => {
        navigation.navigate('Balance', {...props});
    };

    return (
        <CardBackground source={card_bg}>
            <CardTouchable underlayColor={Colors.secondary} onPress={handlePress}>
                <TouchableView>
                    <CardRow>
                        <RegularText textStyles={{ color: Colors.white }}>
                            ********{props.accountNo.slice(8, 12)}
                        </RegularText>
                    </CardRow>
                    <CardRow>
                        <View style={{ flex: 3 }}>
                            <SmallText textStyles={{ marginBottom: 5, color: Colors.white }}>
                                Total balance
                            </SmallText>
                            <RegularText textStyles={{ fontSize: 19 }}>
                                ${props.balance}
                            </RegularText>
                        </View>
                        <Logo source={props.logo} />
                    </CardRow>
                </TouchableView>
            </CardTouchable>
        </CardBackground>
    );
}

export default CardItem;