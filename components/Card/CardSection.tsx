import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native';

// Types
import { CardSectionProps } from './types';

// Components
import CardItem from './CardItem';

const CardList = styled.FlatList`
    width: 100%;
    flex: 1;
    padding-left: 25px;
    padding-bottom: 15px;
`;


const CardSection: FunctionComponent<CardSectionProps> = (props) => {
    return (
        <CardList
            data={props.data}
            horizontal={true}
            showsHorizontalScrollIndicator={false} 
            contentcontainerstyle={{
                paddingRight: 25,
                alignItems: 'center',
            }}
            keyExtractor={({ id }: any) => id.toString()}
            renderItem={({ item }: any) => <CardItem {...item} />}
        />
    );
}

export default CardSection;