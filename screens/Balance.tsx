import React, { FunctionComponent } from 'react'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native';

// Custom components
import { Container } from '../components/Shared';
import { Colors } from '../components/Colors';
import AmountSection from '../components/Balance/AmountSection';
import BalanceCardSection from '../components/Balance/BalanceCardSection';
import ButtonSection from '../components/Balance/ButtonSection';

// Types
import { RootStackParamList } from '../navigators/RootStack';
import { StackScreenProps } from '@react-navigation/stack';
type Props = StackScreenProps<RootStackParamList, 'Balance'>;

const BalanceContainer = styled(Container)`
    background-color: ${Colors.graylight};
    width: 100%;
    padding: 25px;
    flex: 1;
`;

const Balance: FunctionComponent<Props> = ({ route }) => {
    return (
        <BalanceContainer>
            <StatusBar style="dark" />
            <AmountSection balance={route?.params?.balance} />
            <BalanceCardSection {...route?.params} />
            <ButtonSection />
        </BalanceContainer>
    );
}

export default Balance;
