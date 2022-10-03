import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native';

// Types
import { AmountProps } from './types';

// Custom components
import { Colors } from '../Colors';
import RegularText from '../Text/RegularText';
import SmallText from '../Text/SmallText';

const AmountSectionBackground = styled.View`
    flex: 1;
    width: 100%;
    padding-top: 5px;
    align-items: center;
`;

const AmountSection: FunctionComponent<AmountProps> = (props) => {
    return (
        <AmountSectionBackground>
            <SmallText
                textStyles={{ 
                    color: Colors.secondary,
                    marginBottom: 15,
                }}
            >
                Total balance
            </SmallText>
            <RegularText
                textStyles={{ 
                    color: Colors.secondary,
                    fontSize: 28,
                }}
            >
                ${props.balance}
            </RegularText>
        </AmountSectionBackground>
    );
}

export default AmountSection;