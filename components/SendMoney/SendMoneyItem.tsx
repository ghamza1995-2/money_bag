import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native';

// Types
import { SendMoneyProps } from './types';

// Custom components
import { Colors } from '../Colors';
import RegularText from '../Text/RegularText';
import SmallText from '../Text/SmallText';
import Profile from '../Header/Profile';

// Misc assets
import { ScreenWidth } from '../Shared';

const SendMoneyItemContainer = styled.TouchableHighlight`
    height: 130px;
    width: ${ScreenWidth * 0.27}px;
    padding: 10px;
    border-radius: 15px;
    justify-content: space-around;
    margin: 0px 10px 10px 0px;
`;

const SendMoneyItem: FunctionComponent<SendMoneyProps> = (props) => {
    return (
        <SendMoneyItemContainer
            underlayColor={Colors.secondary}
            style={{ backgroundColor: props.background }}
            onPress={() => alert('Send money to ' + props.name)}
        >
            <>
                <Profile 
                    img={props.img}
                    imgContainerStyle={{ marginBottom: 10 }}
                />
                <SmallText 
                    textStyles={{ 
                        textAlign: 'left',
                        color: Colors.white,
                        fontSize: 12,
                    }}
                >
                    {props.name}
                </SmallText>
                <RegularText
                textStyles={{ 
                        textAlign: 'left',
                        color: Colors.white,
                        fontSize: 13,
                    }}
                >
                    {props.amount}
                </RegularText>
            </>
        </SendMoneyItemContainer>
    );
}

export default SendMoneyItem;
