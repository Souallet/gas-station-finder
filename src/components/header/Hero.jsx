import React from 'react';

import Container from '../common/Container';
import DarkModeToggler from '../common/DarkModeToggler';

function Hero() {
    return (
        <header className="py-12 mb-4">
            <Container>
                <DarkModeToggler />
                <div className="flex flex-col justify-center items-center w-full text-center text-indigo-500 dark:text-indigo-400">
                    <h1 className="font-semibold text-5xl tracking-widest">GSF</h1>
                    <p className="mt-10 text-lg">Trouvez les stations essence à proximité</p>
                </div>
            </Container>
        </header>
    );
}

export default Hero;
