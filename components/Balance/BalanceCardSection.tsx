import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

// Types
import { BalanceCardProps } from './types';

// Components
import BalanceCard from './BalanceCard';

const BalanceCardSectionBackground = styled.View`
    flex: 2;
    width: 100%;
    align-items: center;
`;

const BalanceCardSection: FunctionComponent<BalanceCardProps> = (props) => {
    return (
        <BalanceCardSectionBackground>
            <BalanceCard {...props} />
        </BalanceCardSectionBackground>
    );
}

export default BalanceCardSection;