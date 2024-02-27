import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { useDeprecationWarning } from '../../../hooks/useDeprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconForward_30 } from '@aws-amplify/ui-react';` → `import { MdForward_30 } from 'react-icons/md';`
 */
export const IconForward_30 = (props) => {
  const { className, ...rest } = props;
  useDeprecationWarning({
    shouldWarn: true,
    message: `Built-in icons are being deprecated in the next major release. You can use the react-icons (https://react-icons.github.io/react-icons) package with the Material Icon set in place of these icons or any other React Icon library.
import { IconForward_30 } from '@aws-amplify/ui-react'; → import { MdForward_30 } from 'react-icons/md';`,
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
          d="M18 13C18 16.31 15.31 19 12 19C8.69 19 6 16.31 6 13C6 9.69 8.69 7 12 7V11L17 6L12 1V5C7.58 5 4 8.58 4 13C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13H18ZM10.54 15.22C10.48 15.27 10.42 15.31 10.34 15.34C10.26 15.37 10.17 15.38 10.07 15.38C9.98 15.38 9.9 15.37 9.82 15.34C9.74 15.31 9.68 15.28 9.62 15.23C9.56 15.18 9.52 15.13 9.49 15.06C9.46 14.99 9.44 14.92 9.44 14.84H8.59C8.59 15.05 8.63 15.23 8.71 15.39C8.79 15.55 8.9 15.67 9.04 15.77C9.18 15.87 9.33 15.95 9.5 16C9.67 16.05 9.85 16.07 10.03 16.07C10.24 16.07 10.44 16.04 10.63 15.99C10.82 15.94 10.97 15.85 11.11 15.75C11.25 15.65 11.35 15.51 11.43 15.36C11.51 15.21 11.55 15.03 11.55 14.83C11.55 14.6 11.49 14.39 11.37 14.22C11.25 14.05 11.07 13.92 10.83 13.83C10.93 13.78 11.03 13.73 11.11 13.66C11.19 13.59 11.26 13.52 11.31 13.44C11.36 13.36 11.41 13.28 11.44 13.19C11.47 13.1 11.48 13.01 11.48 12.92C11.48 12.72 11.44 12.55 11.37 12.39C11.3 12.23 11.2 12.11 11.07 12.01C10.94 11.91 10.79 11.83 10.61 11.78C10.43 11.73 10.24 11.7 10.02 11.7C9.83 11.7 9.64 11.73 9.48 11.78C9.32 11.83 9.16 11.91 9.04 12.01C8.92 12.11 8.81 12.23 8.74 12.38C8.67 12.53 8.63 12.68 8.63 12.86H9.48C9.48 12.79 9.5 12.72 9.53 12.66C9.56 12.6 9.6 12.55 9.65 12.51C9.7 12.47 9.76 12.44 9.83 12.41C9.9 12.38 9.97 12.38 10.05 12.38C10.15 12.38 10.23 12.39 10.3 12.42C10.37 12.45 10.43 12.48 10.48 12.53C10.53 12.58 10.56 12.64 10.59 12.7C10.62 12.76 10.63 12.84 10.63 12.92C10.63 13.1 10.58 13.24 10.47 13.35C10.36 13.46 10.21 13.51 9.99 13.51H9.56V14.17H10.01C10.12 14.17 10.21 14.18 10.3 14.21C10.39 14.24 10.46 14.27 10.52 14.32C10.58 14.37 10.63 14.44 10.66 14.52C10.69 14.6 10.71 14.7 10.71 14.81C10.71 14.9 10.7 14.98 10.67 15.05C10.64 15.12 10.59 15.16 10.54 15.22V15.22ZM14.44 11.78C14.26 11.71 14.07 11.68 13.85 11.68C13.63 11.68 13.44 11.71 13.26 11.78C13.08 11.85 12.93 11.96 12.81 12.11C12.69 12.26 12.58 12.45 12.52 12.68C12.46 12.91 12.42 13.18 12.42 13.5V14.24C12.42 14.56 12.46 14.84 12.53 15.06C12.6 15.28 12.7 15.48 12.83 15.63C12.96 15.78 13.11 15.89 13.29 15.96C13.47 16.03 13.66 16.06 13.88 16.06C14.1 16.06 14.29 16.03 14.47 15.96C14.65 15.89 14.8 15.78 14.92 15.63C15.04 15.48 15.14 15.29 15.21 15.06C15.28 14.83 15.31 14.56 15.31 14.24V13.5C15.31 13.18 15.27 12.9 15.2 12.68C15.13 12.46 15.03 12.26 14.9 12.11C14.77 11.96 14.62 11.85 14.44 11.78ZM14.45 14.35C14.45 14.54 14.44 14.7 14.41 14.83C14.38 14.96 14.35 15.07 14.3 15.15C14.25 15.23 14.19 15.29 14.11 15.32C14.03 15.35 13.95 15.37 13.86 15.37C13.77 15.37 13.68 15.35 13.61 15.32C13.54 15.29 13.47 15.23 13.42 15.15C13.37 15.07 13.33 14.96 13.3 14.83C13.27 14.7 13.26 14.54 13.26 14.35V13.38C13.26 13.19 13.27 13.03 13.3 12.9C13.33 12.77 13.36 12.67 13.42 12.59C13.48 12.51 13.53 12.45 13.61 12.42C13.69 12.39 13.77 12.37 13.86 12.37C13.95 12.37 14.04 12.39 14.11 12.42C14.18 12.45 14.25 12.51 14.3 12.59C14.35 12.67 14.39 12.77 14.42 12.9C14.45 13.03 14.46 13.19 14.46 13.38V14.35H14.45Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};