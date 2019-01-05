import React from 'react';

const StarshipsContext = React.createContext({});

export const StarshipsProvider = StarshipsContext.Provider;
export const StarshipsConsumer = StarshipsContext.Consumer;