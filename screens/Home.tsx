import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native';

// Custom components
import { Container } from '../components/Shared';
import { Colors } from '../components/Colors';
import { StatusBar } from 'expo-status-bar';
import CardSection from '../components/Card/CardSection';
import TransactionSection from '../components/Transactions/TransactionSection';
import SendMoneySection from '../components/SendMoney/SendMoneySection';

// Misc assets
import { TransactionProps } from '../components/Transactions/types';
import { CardProps } from '../components/Card/types';
import { SendMoneyProps } from '../components/SendMoney/types';
import mc_logo from '../assets/cards/mc.png';
import visa_logo from '../assets/cards/visa_white.png';
import portrait1 from './../assets/portraits/1.jpg';
import portrait2 from './../assets/portraits/2.jpg';
import portrait3 from './../assets/portraits/3.jpg';

// Types
import { RootStackParamList } from '../navigators/RootStack';
import { StackScreenProps } from '@react-navigation/stack';
export type Props = StackScreenProps<RootStackParamList, 'Home'>;

const HomeContainer = styled(Container)`
    background-color: #${Colors.graylight};
    width: 100%;
    flex: 1;
`;

const Home: FunctionComponent<Props> = () => {
    const cardData: CardProps[] = [
        {
            id: 1,
            accountNo: '086296417092',
            balance: 1000.00,
            alias: 'Work Debit',
            logo: mc_logo,
        },
        {
            id: 2,
            accountNo: '320154711282',
            balance: 2000.00,
            alias: 'Personal Prepaid',
            logo: visa_logo,
        },
        {
            id: 3,
            accountNo: '744741804501',
            balance: 5000.21,
            alias: 'School Prepaid',
            logo: mc_logo,
        },
    ];

    const transactionData: TransactionProps[] = [
        {
            id: 1,
            amount: '-$100.00',
            date: '14 Sep 2022',
            title: 'Amazon',
            subtitle: 'Online Shopping',
            art: {
                background: Colors.primary,
                icon: 'cart',
            },
        },
        {
            id: 2,
            amount: '-$45.00',
            date: '14 Sep 2022',
            title: 'Uber',
            subtitle: 'Taxi',
            art: {
                background: Colors.tertiary,
                icon: 'car',
            },
        },
        {
            id: 3,
            amount: '-$75.00',
            date: '14 Sep 2022',
            title: 'Southwestern Airlines',
            subtitle: 'Travel',
            art: {
                background: Colors.accent,
                icon: 'car',
            },
        },
    ]

    const sendMoneyData: SendMoneyProps[] = [
        {
            id: 1,
            amount: '$100.00',
            name: 'Kylo Ren',
            background: Colors.tertiary,
            img: portrait1,
        },
        {
            id: 2,
            amount: '$200.00',
            name: 'Leia Organa',
            background: Colors.primary,
            img: portrait2,
        },
        {
            id: 3,
            amount: '$50.00',
            name: 'Han Solo',
            background: Colors.accent,
            img: portrait3,
        },
    ]

    return (
        <HomeContainer>
            <StatusBar style='dark' />
            <CardSection data={cardData} />
            <TransactionSection data={transactionData} />
            <SendMoneySection data={sendMoneyData} />
        </HomeContainer>
    );
}

export default Home;