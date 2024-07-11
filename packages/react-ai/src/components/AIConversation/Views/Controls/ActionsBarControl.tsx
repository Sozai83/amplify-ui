import React from 'react';
import { withBaseElementProps } from '@aws-amplify/ui-react-core/elements';

import { CustomAction } from '../../types';
import { AIConversationElements } from '../../context/elements';
const { Icon, Button, View } = AIConversationElements;

const ACTIONS_BAR_BLOCK = 'actions-bar';

const actionIconProps = () => ({
  children: (
    <path
      fill="none"
      d="M17.206,5.45l0.271-0.27l-4.275-4.274l-0.27,0.269V0.9H3.263c-0.314,0-0.569,0.255-0.569,0.569v17.062
    c0,0.314,0.255,0.568,0.569,0.568h13.649c0.313,0,0.569-0.254,0.569-0.568V5.45H17.206z M12.932,2.302L16.08,5.45h-3.148V2.302z
     M16.344,17.394c0,0.314-0.254,0.569-0.568,0.569H4.4c-0.314,0-0.568-0.255-0.568-0.569V2.606c0-0.314,0.254-0.568,0.568-0.568
    h7.394v4.55h4.55V17.394z"
    ></path>
  ),
  className: `${ACTIONS_BAR_BLOCK}__icon`,
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
});

const ActionIcon = withBaseElementProps(Icon, actionIconProps);

const ActionButtonBase = withBaseElementProps(Button, {
  className: `${ACTIONS_BAR_BLOCK}__button`,
});

const ActionButton: typeof ActionButtonBase = React.forwardRef(
  function ActionButton({ ...rest }, ref) {
    return <ActionButtonBase ref={ref} {...rest} />;
  }
);

const Container = withBaseElementProps(View, {
  className: `${ACTIONS_BAR_BLOCK}__container`,
});

export const ActionsBarControl: ActionsBarControl = ({ actions }) => {
  return (
    <Container>
      {actions.map((action, index) => (
        <ActionButton key={index} onClick={action.handler}>
          <ActionIcon>{action.icon}</ActionIcon>
        </ActionButton>
      ))}
    </Container>
  );
};

ActionsBarControl.Button = ActionButton;
ActionsBarControl.Container = Container;
ActionsBarControl.Icon = ActionIcon;

export interface ActionsBarControl<
  T extends Partial<AIConversationElements> = AIConversationElements,
> {
  (props: { actions: CustomAction[] }): React.JSX.Element;
  Button: T['Button'];
  Container: T['View'];
  Icon: T['Icon'];
}
