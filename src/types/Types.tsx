export interface CountryDetailProps {
  flags: {
    png: string;
  };
  name: {
    official: string;
  };
  altSpellings: [];
  region: string;
}

export interface CountryBodyProps {
  [key: number]: CountryDetailProps;
  countryDetail: CountryDetailProps;
}

export interface CurrenciesProps {
  [key: string]: {
    name: string;
    symbol: string;
  };
}

export interface CountryListProps {
  countryDetail: {
    altSpellings: [];
    region: string;
    borders?: [];
    currencies?: CurrenciesProps;
  };
}

export interface HeaderProps {
  title: string;
  check: boolean;
}

export interface BodydataProps {
  data: [] | undefined;
}

export interface FavoritenameProps {
  name: string;
}

export interface RowProps {
  flags: {
    png: string;
  };
  name: {
    official: string;
    common: string;
  };
  population: number;
  languages: {
    [key: string]: string;
  };
  region: string;
}

export interface filteredCountriesProps {
  name: {
    common: string;
  };
}

export interface CheckProps {
  check: boolean;
}
