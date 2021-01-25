import React from 'react';
import ContentHeader from '../../components/ContentHeader'
import { Container } from './styles'
import SelectInput from '../../components/SelectInput'

const Dashboard: React.FC = () => {

    const optionsList = [
        {value: 'Armando', label: 'Armando'},
        {value: 'Marcos', label: 'Marcos'},
        {value: 'Camila', label: 'Camila'},
        {value: 'Cida', label: 'Cida'}
    ]

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#FFF" >
            
            </ContentHeader>
        </Container>
        
    )
};

export default Dashboard;