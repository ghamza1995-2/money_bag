import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

// Types
import { TransactionProps, TransactionSectionProps } from './types';

// Components
import { Colors } from '../Colors';
import RegularText from '../Text/RegularText';
import SmallText from '../Text/SmallText';
import TransactionItem from './TransactionItem';

const TransactionSectionBackground = styled.View`
    width: 100%;
    padding-horizontal: 25px;
    padding-top: 5px;
    flex: 2;
`;

const TransactionRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const TransactionList = styled.FlatList`
    width: 100%;
`;

const TransactionSection: FunctionComponent<TransactionSectionProps> = (props) => {
    return (
        <TransactionSectionBackground>
            <TransactionRow style={{ marginBottom: 25 }}>
                <RegularText textStyles={{ fontSize: 19, color: Colors.secondary }}>
                    Transactions
                </RegularText>
                <SmallText textStyles={{ color: Colors.secondary }}>
                    Recent
                    <Ionicons name='caret-down' size={13} color={Colors.graydark} />
                </SmallText>
            </TransactionRow>

            <TransactionList
                data={props.data}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 25 }}
                keyExtractor={({ id }: any) => id.toString()}
                renderItem={({ item }: any) => <TransactionItem {...item} />}
            />
        </TransactionSectionBackground>
    );
}

export default TransactionSection;
