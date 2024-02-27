import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { useDeprecationWarning } from '../../../hooks/useDeprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconBorderInner } from '@aws-amplify/ui-react';` → `import { MdBorderInner } from 'react-icons/md';`
 */
export const IconBorderInner = (props) => {
  const { className, ...rest } = props;
  useDeprecationWarning({
    shouldWarn: true,
    message: `Built-in icons are being deprecated in the next major release. You can use the react-icons (https://react-icons.github.io/react-icons) package with the Material Icon set in place of these icons or any other React Icon library.
import { IconBorderInner } from '@aws-amplify/ui-react'; → import { MdBorderInner } from 'react-icons/md';`,
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
          d="M3 21H5V19H3V21ZM7 21H9V19H7V21ZM5 7H3V9H5V7ZM3 17H5V15H3V17ZM9 3H7V5H9V3ZM5 3H3V5H5V3ZM17 3H15V5H17V3ZM19 9H21V7H19V9ZM19 3V5H21V3H19ZM15 21H17V19H15V21ZM13 3H11V11H3V13H11V21H13V13H21V11H13V3ZM19 21H21V19H19V21ZM19 17H21V15H19V17Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};