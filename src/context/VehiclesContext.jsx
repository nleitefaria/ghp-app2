import React from 'react';

const VehiclesContext = React.createContext({});

export const VehiclesProvider = VehiclesContext.Provider;
export const VehiclesConsumer = VehiclesContext.Consumer;