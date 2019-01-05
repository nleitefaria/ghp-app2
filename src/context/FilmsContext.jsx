import React from 'react';

const FilmsContext = React.createContext({});

export const FilmsProvider = FilmsContext.Provider;
export const FilmsConsumer = FilmsContext.Consumer;