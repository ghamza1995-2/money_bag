import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

// Custom components
import RegularButton from '../Button/RegularButton';
import { Colors } from '../Colors';
import { Ionicons } from '@expo/vector-icons';

const ButtonSectionBackground = styled.View`
    width: 100%;
    align-items: center;
    flex: 1;
`;

const ButtonSection: FunctionComponent = () => {
    return (
        <ButtonSectionBackground>
            <RegularButton 
                btnStyles={{ width: '50%' }}
                onPress={() => console.log('Pressed')} 
            >
                Cancel  <Ionicons name='card' size={17} color={Colors.white} />
            </RegularButton>
        </ButtonSectionBackground>
    );
}

export default ButtonSection;
