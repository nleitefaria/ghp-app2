import React from 'react';

const PlanetsContext = React.createContext({});

export const PlanetsProvider = PlanetsContext.Provider;
export const PlanetsConsumer = PlanetsContext.Consumer;