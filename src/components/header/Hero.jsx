import React from 'react';

function Hero() {
    return (
        <header className="relative py-12 mb-4">
            <div className="flex justify-center w-full">
                <div className="lg:w-6/12 text-center">
                    <h1 className="text-indigo-500 font-semibold text-5xl tracking-widest">GSF</h1>
                    <p className="mt-10 text-lg text-indigo-500">
                        Trouvez les stations essence à proximité
                    </p>
                </div>
            </div>
        </header>
    );
}

export default Hero;
