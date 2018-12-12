import React from 'react';

const PeopleContext = React.createContext({});

export const PeopleProvider = PeopleContext.Provider;
export const PeopleConsumer = PeopleContext.Consumer;