import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

// Custom Components
import { Colors } from '../Colors';

// Icons
import { Ionicons } from '@expo/vector-icons';

// Types
import { TransactionAviProps } from './types';

const StyledView = styled.View`
    height: 45px;
    width: 45px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const TransactionAvi: FunctionComponent<TransactionAviProps> = (props) => {
    return (
        <StyledView style={{ backgroundColor: props.background }}>
            <Ionicons name={props.icon} size={25} color={Colors.white} />
        </StyledView>
    );
}

export default TransactionAvi;