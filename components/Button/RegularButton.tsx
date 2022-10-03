import React, { FunctionComponent, ReactNode } from 'react';
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

// Components
import { Colors } from '../Colors';
import RegularText from '../Text/RegularText';

const ButtonView = styled.TouchableOpacity`
    align-items: center;
    background-color: ${Colors.primary};
    width: 100%;
    padding: 20px;
    border-radius: 20px;
`

// Types
interface ButtonProps {
    btnStyles?: StyleProp<ViewStyle>;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
    textStyles?: StyleProp<TextStyle>;
    children: ReactNode;
}

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
    return (
        <ButtonView onPress={props.onPress} style={props.btnStyles}>
            <RegularText textStyles={props.textStyles}>{props.children}</RegularText>
        </ButtonView>
    );
}
 
export default RegularButton;