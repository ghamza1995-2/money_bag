import React, { FunctionComponent } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import styled from 'styled-components/native';

// Custom components
import { Colors } from '../Colors';
import RegularText from '../Text/RegularText';
import SmallText from '../Text/SmallText';

const StyledView = styled.View`
    flex-direction: column;
    flex: 1;
    justify-content: center;
`

interface GreetingProps {
    mainText: string;
    subText: string;
    mainTextStyles?: StyleProp<TextStyle>;
    subTextStyles?: StyleProp<TextStyle>;
}

const Greeting: FunctionComponent<GreetingProps> = (props) => {
    return (
        <StyledView>
            <RegularText 
                textStyles={[
                    {
                        color: Colors.secondary,
                        fontSize: 22,
                    },
                    props.mainTextStyles,
                ]}
            >
                {props.mainText}
            </RegularText>
            <SmallText
                textStyles={[
                    {
                        color: Colors.graydark,
                    },
                    props.subTextStyles,
                ]}
            >
                {props.subText}
            </SmallText>
        </StyledView>
    );
}

export default Greeting;