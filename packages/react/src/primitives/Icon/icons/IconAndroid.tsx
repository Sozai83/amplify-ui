import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { useDeprecationWarning } from '../../../hooks/useDeprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconAndroid } from '@aws-amplify/ui-react';` → `import { MdAndroid } from 'react-icons/md';`
 */
export const IconAndroid = (props) => {
  const { className, ...rest } = props;
  useDeprecationWarning({
    shouldWarn: true,
    message: `Built-in icons are being deprecated in the next major release. You can use the react-icons (https://react-icons.github.io/react-icons) package with the Material Icon set in place of these icons or any other React Icon library.
import { IconAndroid } from '@aws-amplify/ui-react'; → import { MdAndroid } from 'react-icons/md';`,
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
        <g clip-path="url(#clip0_1020_37520)">
          <path
            d="M6 18C6 18.55 6.45 19 7 19H8V22.5C8 23.33 8.67 24 9.5 24C10.33 24 11 23.33 11 22.5V19H13V22.5C13 23.33 13.67 24 14.5 24C15.33 24 16 23.33 16 22.5V19H17C17.55 19 18 18.55 18 18V8H6V18ZM3.5 8C2.67 8 2 8.67 2 9.5V16.5C2 17.33 2.67 18 3.5 18C4.33 18 5 17.33 5 16.5V9.5C5 8.67 4.33 8 3.5 8ZM20.5 8C19.67 8 19 8.67 19 9.5V16.5C19 17.33 19.67 18 20.5 18C21.33 18 22 17.33 22 16.5V9.5C22 8.67 21.33 8 20.5 8ZM15.53 2.16L16.83 0.86C17.03 0.66 17.03 0.35 16.83 0.15C16.63 -0.05 16.32 -0.05 16.12 0.15L14.64 1.63C13.85 1.23 12.95 1 12 1C11.04 1 10.14 1.23 9.34 1.63L7.85 0.15C7.65 -0.05 7.34 -0.05 7.14 0.15C6.94 0.35 6.94 0.66 7.14 0.86L8.45 2.17C6.97 3.26 6 5.01 6 7H18C18 5.01 17.03 3.25 15.53 2.16V2.16ZM10 5H9V4H10V5ZM15 5H14V4H15V5Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_1020_37520">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </View>
  );
};