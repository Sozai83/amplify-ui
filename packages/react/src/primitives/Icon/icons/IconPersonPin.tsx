import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { useDeprecationWarning } from '../../../hooks/useDeprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconPersonPin } from '@aws-amplify/ui-react';` → `import { MdPersonPin } from 'react-icons/md';`
 */
export const IconPersonPin = (props) => {
  const { className, ...rest } = props;
  useDeprecationWarning({
    shouldWarn: true,
    message: `Built-in icons are being deprecated in the next major release. You can use the react-icons (https://react-icons.github.io/react-icons) package with the Material Icon set in place of these icons or any other React Icon library.
import { IconPersonPin } from '@aws-amplify/ui-react'; → import { MdPersonPin } from 'react-icons/md';`,
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
          d="M19 2H5C3.89 2 3 2.9 3 4V18C3 19.1 3.89 20 5 20H9L12 23L15 20H19C20.1 20 21 19.1 21 18V4C21 2.9 20.1 2 19 2ZM19 18H14.17L13.58 18.59L12 20.17L10.41 18.58L9.83 18H5V4H19V18ZM12 11C13.65 11 15 9.65 15 8C15 6.35 13.65 5 12 5C10.35 5 9 6.35 9 8C9 9.65 10.35 11 12 11ZM12 7C12.55 7 13 7.45 13 8C13 8.55 12.55 9 12 9C11.45 9 11 8.55 11 8C11 7.45 11.45 7 12 7ZM18 15.58C18 13.08 14.03 12 12 12C9.97 12 6 13.08 6 15.58V17H18V15.58ZM8.48 15C9.22 14.49 10.71 14 12 14C13.29 14 14.78 14.49 15.52 15H8.48Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};