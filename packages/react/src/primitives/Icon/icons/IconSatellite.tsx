import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { useDeprecationWarning } from '../../../hooks/useDeprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconSatellite } from '@aws-amplify/ui-react';` → `import { MdSatellite } from 'react-icons/md';`
 */
export const IconSatellite = (props) => {
  const { className, ...rest } = props;
  useDeprecationWarning({
    shouldWarn: true,
    message: `Built-in icons are being deprecated in the next major release. You can use the react-icons (https://react-icons.github.io/react-icons) package with the Material Icon set in place of these icons or any other React Icon library.
import { IconSatellite } from '@aws-amplify/ui-react'; → import { MdSatellite } from 'react-icons/md';`,
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
          d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM8.57 6H6V8.58C7.42 8.58 8.57 7.42 8.57 6ZM12 6H10.29C10.29 8.36 8.37 10.29 6 10.29V12C9.32 12 12 9.31 12 6ZM14.14 11.86L11.14 15.73L9 13.15L6 17H18L14.14 11.86Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};