import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { useDeprecationWarning } from '../../../hooks/useDeprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconFilterDrama } from '@aws-amplify/ui-react';` → `import { MdFilterDrama } from 'react-icons/md';`
 */
export const IconFilterDrama = (props) => {
  const { className, ...rest } = props;
  useDeprecationWarning({
    shouldWarn: true,
    message: `Built-in icons are being deprecated in the next major release. You can use the react-icons (https://react-icons.github.io/react-icons) package with the Material Icon set in place of these icons or any other React Icon library.
import { IconFilterDrama } from '@aws-amplify/ui-react'; → import { MdFilterDrama } from 'react-icons/md';`,
  });
  return (
    <View
      as="span"
      width="1em"
      height="1em"
      className={classNames(ComponentClassNames.Icon, className)}
      {...rest}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.61 5.64 5.36 8.04C2.35 8.36 0 10.9 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM19 18H6C3.79 18 2 16.21 2 14C2 11.79 3.79 10 6 10C8.21 10 10 11.79 10 14H12C12 11.24 10.14 8.92 7.6 8.22C8.61 6.88 10.2 6 12 6C15.03 6 17.5 8.47 17.5 11.5V12H19C20.65 12 22 13.35 22 15C22 16.65 20.65 18 19 18Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};