import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { useDeprecationWarning } from '../../../hooks/useDeprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconMonochromePhotos } from '@aws-amplify/ui-react';` → `import { MdMonochromePhotos } from 'react-icons/md';`
 */
export const IconMonochromePhotos = (props) => {
  const { className, ...rest } = props;
  useDeprecationWarning({
    shouldWarn: true,
    message: `Built-in icons are being deprecated in the next major release. You can use the react-icons (https://react-icons.github.io/react-icons) package with the Material Icon set in place of these icons or any other React Icon library.
import { IconMonochromePhotos } from '@aws-amplify/ui-react'; → import { MdMonochromePhotos } from 'react-icons/md';`,
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
          d="M20 5H16.8L15 3H9L7.2 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5ZM20 19H12V18C9.2 18 7 15.8 7 13C7 10.2 9.2 8 12 8V7H20V19ZM17 13C17 10.2 14.8 8 12 8V9.8C13.8 9.8 15.2 11.2 15.2 13C15.2 14.8 13.8 16.2 12 16.2V18C14.8 18 17 15.8 17 13ZM8.8 13C8.8 14.8 10.2 16.2 12 16.2V9.8C10.2 9.8 8.8 11.2 8.8 13Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};