import React from 'react';
import { useDataState } from '@aws-amplify/ui-react-core';
import { createListLocationsAction } from '../../context/actions';
import { useConfig } from '../../context/config';
import { Controls } from '../Controls';
import { CommonControl, ViewComponent } from '../types';
import { StorageBrowserElements } from '../../context/elements';
import { CLASS_BASE } from '../constants';
import { ViewTypeProvider } from '../ViewContext';

const { Message, Navigate, Paginate, Refresh, Search, Table, Title } = Controls;

interface LocationsViewControls<
  T extends StorageBrowserElements = StorageBrowserElements,
  // exlcude `Toggle` from `Search` for Locations List
> extends Exclude<
    Pick<Controls<T>, CommonControl | 'Paginate' | 'Refresh' | 'Search'>,
    Controls<T>['Search']['Toggle']
  > {
  (): React.JSX.Element;
}

export interface LocationsView<
  T extends StorageBrowserElements = StorageBrowserElements,
> extends ViewComponent<T, LocationsViewControls<T>> {}

const LocationsViewProvider = (props: { children?: React.ReactNode }) => (
  <ViewTypeProvider {...props} type="LOCATIONS_VIEW" />
);

const LocationsViewControls: LocationsViewControls = () => (
  <div className={`${CLASS_BASE}__header`}>
    <Navigate />
    <div className={`${CLASS_BASE}__header__primary`}>
      <Title />
      <div className={`${CLASS_BASE}__header__primary__actions`}>
        <Refresh />
      </div>
    </div>
    <div className={`${CLASS_BASE}__header__secondary`}>
      <Paginate />
    </div>
  </div>
);

LocationsViewControls.Message = Message;
LocationsViewControls.Navigate = Navigate;
LocationsViewControls.Paginate = Paginate;
LocationsViewControls.Refresh = Refresh;
LocationsViewControls.Search = Search;
LocationsViewControls.Title = Title;

export const LocationsView: LocationsView = () => {
  const { listLocations } = useConfig();

  const listLocationsAction = React.useRef(
    createListLocationsAction(listLocations)
  );
  const [{ data, isLoading }, handleList] = useDataState(
    listLocationsAction.current,
    {
      locations: [],
      nextToken: undefined,
    }
  );

  React.useEffect(() => {
    handleList();
  }, [handleList]);

  const hasLocations = !!data.locations.length;

  return (
    <LocationsViewProvider>
      <div className={CLASS_BASE}>
        <LocationsViewControls />
        {!hasLocations || isLoading
          ? '...loading'
          : data.locations.map(({ scope }) => <p key={scope}>{scope}</p>)}
      </div>
    </LocationsViewProvider>
  );
};

LocationsView.Controls = LocationsViewControls;
LocationsView.Provider = LocationsViewProvider;
LocationsView.Table = Table;
