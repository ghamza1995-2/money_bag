import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native';
import { View } from 'react-native';

// Types
import { BalanceCardProps } from './types';

// Components
import { Colors } from '../Colors';
import RegularText from '../Text/RegularText';
import SmallText from '../Text/SmallText';

// Images
import card_bg from '../../assets/bgs/background_transparent.png';

const CardBackground = styled.ImageBackground`
    height: 75%;
    width: 100%;
    resize-mode: cover;
    background-color: ${Colors.accent};
    border-radius: 25px;
    overflow: hidden;
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

const BalanceCard:FunctionComponent<BalanceCardProps> = (props) => {
    return (
        <CardBackground source={card_bg}>
            <TouchableView>
                <CardRow>
                    <RegularText textStyles={{ color: Colors.white }}>
                        ********{props?.accountNo?.slice(8, 12)}
                    </RegularText>
                </CardRow>
                <CardRow>
                    <View style={{ flex: 3 }}>
                        <SmallText textStyles={{ marginBottom: 5, color: Colors.white }}>
                            Total balance
                        </SmallText>
                        <RegularText textStyles={{ fontSize: 19 }}>
                            ${props?.balance}
                        </RegularText>
                    </View>
                    <Logo source={props?.logo} />
                </CardRow>
            </TouchableView>
        </CardBackground>
    );
}

export default BalanceCard;