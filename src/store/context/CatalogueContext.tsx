import React, { useState, FC } from 'react';

interface IThemeContext {
  selected: Array<any>;
  handleSelected?: any;
}

const defaultState = {
  selected: [],
};

export const CatalogueContext =
  React.createContext<IThemeContext>(defaultState);

export const CatalogueContextProvider: FC = ({ children }) => {
  const [selected, setSelected] = useState(defaultState.selected);

  const handleSelected = (values: any) => {
    setSelected(values);
  };

  return (
    <CatalogueContext.Provider
      value={{
        selected,
        handleSelected,
      }}
    >
      {children}
    </CatalogueContext.Provider>
  );
};
