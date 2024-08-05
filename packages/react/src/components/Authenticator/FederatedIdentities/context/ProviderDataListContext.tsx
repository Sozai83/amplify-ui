import React from 'react';
import {
  FederatedProviderList,
  ProviderData,
  ProviderType,
} from '../controls/types';
import { FederatedProvider } from '@aws-amplify/ui';

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getSupportedProviderData(
  providerName: FederatedProvider
): ProviderData {
  const capitalizedProviderName = capitalizeFirstLetter(providerName);
  return {
    displayName: capitalizedProviderName,
    icon: providerName,
    providerName: capitalizedProviderName,
  };
}

function validateProviderTypes(providers: ProviderType[]): void {
  const providerNames = new Set<string>();

  providers.forEach((provider) => {
    const providerName =
      typeof provider === 'string' ? provider : provider.providerName;

    if (providerNames.has(providerName)) {
      throw new Error(`Duplicate provider name found: ${providerName}`);
    }

    providerNames.add(providerName);
  });
}

function toProviderData(providers: ProviderType[]): ProviderData[] {
  validateProviderTypes(providers);
  return providers.map((provider) => {
    const federatedProvider = provider as FederatedProvider;
    if (FederatedProviderList.includes(federatedProvider)) {
      return getSupportedProviderData(federatedProvider);
    } else {
      return provider as ProviderData;
    }
  });
}

const ProviderDataListContext = React.createContext<ProviderData[] | undefined>(
  undefined
);

export const ProviderDataListProvider = ({
  children,
  providerTypes,
}: {
  children?: React.ReactNode;
  providerTypes: ProviderType[];
}): JSX.Element => {
  const providerDataList: ProviderData[] = toProviderData(providerTypes);

  return (
    <ProviderDataListContext.Provider value={providerDataList}>
      {children}
    </ProviderDataListContext.Provider>
  );
};

export const useProviderDataList = (): ProviderData[] => {
  const context = React.useContext(ProviderDataListContext);

  if (!context) {
    throw new Error('ProviderDataList context does not exist');
  }

  const providers = context;

  return providers;
};
