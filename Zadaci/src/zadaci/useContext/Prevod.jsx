import React, { useState, useContext, createContext } from 'react';

const LanguageContext = createContext();

function LanguageProvider({ children }) {
const [language, setLanguage] = useState('en');

const toggleLanguage = () => {
setLanguage(language === 'en' ? 'sr' : 'en');
};

return (
<LanguageContext.Provider value={{ language, toggleLanguage }}>
    {children}
</LanguageContext.Provider>
);
}

function Header() {
const { language } = useContext(LanguageContext);
return <h1>{language === 'en' ? 'Welcome' : 'Dobrodošli'}</h1>;
}

function LanguageToggleButton() {
const { toggleLanguage } = useContext(LanguageContext);
return <button className='text-white bg-black px-6 py-2 mr-2' onClick={toggleLanguage}>Promeni Jezik</button>;
}

function Prevod() {
return (
<div className='text-center mt-10'>
  <p className='text-lg'>Opis: Napravite aplikaciju koja omogućava korisniku da izabere jezik aplikacije (npr. Engleski ili Srpski) koristeći useContext. Izabrani jezik treba da utiče na prikaz teksta u različitim komponentama.</p>

    <div className='text-xl mt-10 border-2 border-gray-300 py-10'>
        <LanguageProvider>
            <Header />
            <LanguageToggleButton />
        </LanguageProvider>
    </div>
</div>
);
}

export default Prevod;