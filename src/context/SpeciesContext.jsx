import React from 'react';

const SpeciesContext = React.createContext({});

export const SpeciesProvider = SpeciesContext.Provider;
export const SpeciesConsumer = SpeciesContext.Consumer;