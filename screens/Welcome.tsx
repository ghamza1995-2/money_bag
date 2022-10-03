import React, { FunctionComponent } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

// Custom components
import { Colors } from '../components/Colors';
import { Container } from '../components/Shared';
import BigText from '../components/Text/BigText';
import SmallText from '../components/Text/SmallText';
import RegularButton from '../components/Button/RegularButton';

// Assets 
import background from './../assets/bgs/background_v1.png';

// Types
import { RootStackParamList } from '../navigators/RootStack';
import { StackScreenProps } from '@react-navigation/stack';
type Props = StackScreenProps<RootStackParamList, 'Welcome'>;

const WelcomeContainer = styled(Container)`
    background-color: ${Colors.secondary};
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

const TopSection = styled.View`
    width: 100%;
    flex: 1;
    max-height: 55%;
`;

const TopImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: stretch;
`;

const BottomSection = styled.View`
    width: 100%;
    padding: 25px;
    flex: 1;
    justify-content: flex-end;
`;

const Welcome: FunctionComponent<Props> = ({ navigation }) => {
    return (
        <>
            <StatusBar style="light" />
            <WelcomeContainer>
                <TopSection>
                    <TopImage source={background} />
                </TopSection>
                <BottomSection>
                    <BigText textStyles={{ width: '70%', marginBottom: 25 }}>
                        Best way to track your money
                    </BigText>
                    <SmallText textStyles={{ width: '70%', marginBottom: 25 }}>
                        Best payment method, connects your money to your friends and family.
                    </SmallText>
                    <RegularButton onPress={() => { navigation.navigate('Home') }}>
                        Get Started
                    </RegularButton>
                </BottomSection>
            </WelcomeContainer>
        </>
    );
}

export default Welcome;