import React from 'react';
import * as Styles from './styles';
import ImgSrc from './Image/Elton.webp';

const Home = () => {
    return (
        
        <Styles.Container>
            <Styles.HeaderContainer>
                <Styles.HeaderApres>
                    <Styles.HeaderImg src={ImgSrc} alt="Elton" />
                </Styles.HeaderApres>
                <Styles.HeaderApres>
                    <h2>Elton Carlos do Nascimento</h2>
                </Styles.HeaderApres>

            </Styles.HeaderContainer>
        </Styles.Container>
    );
};

export default Home;