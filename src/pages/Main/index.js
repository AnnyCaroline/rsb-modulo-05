import React from 'react';

import { Title } from './styles';

function Main() {
    return (
        // <Title error>
        <Title error={false}>
            Main
            <small>menor</small>
        </Title>
    );
}

export default Main;
