import React from 'react';
import { render, screen } from '@testing-library/react';

import { ConversationMessage } from '../../../types';

import { ActionsProvider } from '../../../context/ActionsContext';
import { AvatarsProvider } from '../../../context/AvatarsContext';
import { MessagesProvider } from '../../../context/MessagesContext';
import { MessageVariantProvider } from '../../../context/MessageVariantContext';
import {
  MessagesControl,
  MessageControl,
  RoleContext,
} from '../MessagesControl';

import { convertBufferToBase64 } from '../../../utils';

const AITextMessage: ConversationMessage = {
  id: '1',
  content: [{ type: 'text', value: 'I am your virtual assistant!' }],
  role: 'assistant',
  timestamp: new Date(2023, 4, 21, 15, 23),
};
const userTextMessage: ConversationMessage = {
  id: '2',
  content: [
    {
      type: 'text',
      value: 'Are you sentient?',
    },
  ],
  role: 'user',
  timestamp: new Date(2023, 4, 21, 15, 24),
};
const AIImageMessage: ConversationMessage = {
  id: '3',
  content: [
    {
      type: 'text',
      value: 'Yes, here is proof.',
    },
    {
      type: 'image',
      value: {
        format: 'png',
        bytes: new Uint8Array([]).buffer,
      },
    },
  ],
  role: 'assistant',
  timestamp: new Date(2025, 4, 21, 15, 25),
};
const userDoubleText: ConversationMessage = {
  id: '4',
  content: [
    {
      type: 'text',
      value: 'Wow.',
    },
    {
      type: 'text',
      value: `What an impressive product! AND you're from the future?`,
    },
  ],
  role: 'user',
  timestamp: new Date(2023, 4, 21, 8, 26),
};

const avatars = {
  user: {
    username: 'Scottleigh',
    avatar: (
      <svg>
        <text x="10" y="20">
          UAvatar
        </text>
      </svg>
    ),
  },
  ai: {
    username: 'Raven',
    avatar: (
      <svg>
        <text x="10" y="20">
          RAvatar
        </text>
      </svg>
    ),
  },
};

const customActions = [
  {
    displayName: 'Heart',
    icon: (
      <svg width="20px" height="20px">
        <path d="M13.22,2.984c-1.125,0-2.504,0.377-3.53,1.182C8.756,3.441,7.502,2.984,6.28,2.984c-2.6,0-4.714,2.116-4.714,4.716c0,0.32,0.032,0.644,0.098,0.96c0.799,4.202,6.781,7.792,7.46,8.188c0.193,0.111,0.41,0.168,0.627,0.168c0.187,0,0.376-0.041,0.55-0.127c0.011-0.006,1.349-0.689,2.91-1.865c0.021-0.016,0.043-0.031,0.061-0.043c0.021-0.016,0.045-0.033,0.064-0.053c3.012-2.309,4.6-4.805,4.6-7.229C17.935,5.1,15.819,2.984,13.22,2.984z M12.544,13.966c-0.004,0.004-0.018,0.014-0.021,0.018s-0.018,0.012-0.023,0.016c-1.423,1.076-2.674,1.734-2.749,1.771c0,0-6.146-3.576-6.866-7.363C2.837,8.178,2.811,7.942,2.811,7.7c0-1.917,1.554-3.47,3.469-3.47c1.302,0,2.836,0.736,3.431,1.794c0.577-1.121,2.161-1.794,3.509-1.794c1.914,0,3.469,1.553,3.469,3.47C16.688,10.249,14.474,12.495,12.544,13.966z" />
      </svg>
    ),
    handler: jest.fn(),
  },
];

describe('MessagesControl', () => {
  it('renders a MessagesControl element', () => {
    const result = render(<MessagesControl />);
    expect(result.container).toBeDefined();
  });

  it('renders a MessagesControl element with messages', () => {
    render(
      <MessagesProvider
        messages={[AITextMessage, userTextMessage, AIImageMessage]}
      >
        <MessagesControl />
      </MessagesProvider>
    );
    const messageElements = screen.getAllByTestId('message');
    expect(messageElements).toHaveLength(3);
  });

  it('renders MessagesControl with default classnames', () => {
    const { container } = render(
      <MessagesProvider
        messages={[AITextMessage, userTextMessage, AIImageMessage]}
      >
        <MessagesControl />
      </MessagesProvider>
    );
    const messagesContainer = container.firstChild;
    expect(messagesContainer).toBeDefined();
    expect(messagesContainer).toHaveClass('ai-messages__container');
    expect(messagesContainer).toHaveClass('ai-messages__container--borderless');

    const messageContainer = messagesContainer?.firstChild;
    expect(messageContainer).toBeDefined();
    expect(messageContainer).toHaveClass('ai-message');
    expect(messageContainer).toHaveClass('ai-message--assistant');
    expect(messageContainer).toHaveClass('ai-message--borderless');
  });

  it('renders MessagesControl with custom classnames', () => {
    const { container } = render(
      <MessagesProvider
        messages={[AITextMessage, userTextMessage, AIImageMessage]}
      >
        <MessageVariantProvider variant="bubble-2">
          <MessagesControl />
        </MessageVariantProvider>
      </MessagesProvider>
    );
    const messagesContainer = container.firstChild;
    expect(messagesContainer).toBeDefined();
    expect(messagesContainer).toHaveClass('ai-messages__container');
    expect(messagesContainer).toHaveClass('ai-messages__container--bubble-2');

    const messageContainer = messagesContainer?.firstChild;
    expect(messageContainer).toBeDefined();
    expect(messageContainer).toHaveClass('ai-message');
    expect(messageContainer).toHaveClass('ai-message--assistant');
    expect(messageContainer).toHaveClass('ai-message--bubble-2');
  });

  it('renders a MessagesControl element with avatars and actions', () => {
    render(
      <AvatarsProvider avatars={avatars}>
        <ActionsProvider actions={customActions}>
          <MessagesProvider
            messages={[AITextMessage, userTextMessage, AIImageMessage]}
          >
            <MessagesControl />
          </MessagesProvider>
        </ActionsProvider>
      </AvatarsProvider>
    );
    const avatarElements = screen.getAllByTestId('avatar');
    const actionElements = screen.getAllByRole('button');
    expect(avatarElements).toHaveLength(3);
    expect(actionElements).toHaveLength(3);
  });

  it('renders a MessagesControl element with a custom renderMessage function', () => {
    const customMessage = jest.fn((message: ConversationMessage) => (
      <div key={message.id} data-testid="custom-message">
        {message.content.map((content, index) => {
          return content.type === 'text' ? (
            <p key={index}>{content.value}</p>
          ) : (
            <img
              key={index}
              src={convertBufferToBase64(
                content.value.bytes,
                content.value.format
              )}
            ></img>
          );
        })}
      </div>
    ));

    render(
      <MessagesProvider
        messages={[AITextMessage, userTextMessage, AIImageMessage]}
      >
        <MessagesControl renderMessage={customMessage} />
      </MessagesProvider>
    );

    expect(customMessage).toHaveBeenCalledTimes(3);

    const defaultMessageElements = screen.queryAllByTestId('message');
    expect(defaultMessageElements).toHaveLength(0);

    const customMessageElements = screen.queryAllByTestId('custom-message');
    expect(customMessageElements).toHaveLength(3);
  });

  it('renders avatars and actions appropriately if the same user sends multiple messages', () => {
    const { rerender } = render(
      <AvatarsProvider avatars={avatars}>
        <ActionsProvider actions={customActions}>
          <MessagesProvider messages={[AITextMessage]}>
            <MessagesControl />
          </MessagesProvider>
        </ActionsProvider>
      </AvatarsProvider>
    );
    let avatarElements = screen.getAllByTestId('avatar');
    let actionElements = screen.getAllByRole('button');
    let messages = screen.getAllByTestId('message');
    let contentChunks = screen.queryAllByTestId(
      /^(text-content|image-content)$/
    );
    expect(avatarElements).toHaveLength(1);
    expect(actionElements).toHaveLength(1);
    expect(messages).toHaveLength(1);
    expect(contentChunks).toHaveLength(1);
    // TODO follow up -- do we want to show avatar twice if a user sends a completely different message?
    rerender(
      <AvatarsProvider avatars={avatars}>
        <ActionsProvider actions={customActions}>
          <MessagesProvider
            messages={[AITextMessage, AIImageMessage, userTextMessage]}
          >
            <MessagesControl />
          </MessagesProvider>
        </ActionsProvider>
      </AvatarsProvider>
    );

    avatarElements = screen.getAllByTestId('avatar');
    actionElements = screen.getAllByRole('button');
    messages = screen.getAllByTestId('message');
    contentChunks = screen.queryAllByTestId(/^(text-content|image-content)$/);
    expect(avatarElements).toHaveLength(3);
    expect(actionElements).toHaveLength(3);
    expect(messages).toHaveLength(3);
    expect(contentChunks).toHaveLength(4);
    rerender(
      <AvatarsProvider avatars={avatars}>
        <ActionsProvider actions={customActions}>
          <MessagesProvider
            messages={[AITextMessage, userDoubleText, AIImageMessage]}
          >
            <MessagesControl />
          </MessagesProvider>
        </ActionsProvider>
      </AvatarsProvider>
    );

    avatarElements = screen.getAllByTestId('avatar');
    actionElements = screen.getAllByRole('button');
    messages = screen.getAllByTestId('message');
    contentChunks = screen.queryAllByTestId(/^(text-content|image-content)$/);
    expect(avatarElements).toHaveLength(3);
    expect(actionElements).toHaveLength(3);
    expect(messages).toHaveLength(3);
    expect(contentChunks).toHaveLength(5);
  });
});

describe('MessageControl', () => {
  it('renders default classnames', () => {
    render(
      <RoleContext.Provider value="assistant">
        <MessageControl message={AIImageMessage} />
      </RoleContext.Provider>
    );

    const content = screen.getByTestId('content');
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('ai-message__content');
    expect(content).toHaveClass('ai-message__content--borderless');

    const textContent = screen.getByText('Yes, here is proof.');
    const imageContent = screen.getByRole('img');
    expect(textContent).toBeInTheDocument();
    expect(textContent).toHaveClass('ai-message__text-content');
    expect(imageContent).toBeInTheDocument();
    expect(imageContent).toHaveClass('ai-message__image-content');
  });

  it('renders custom classnames', () => {
    render(
      <RoleContext.Provider value="assistant">
        <MessageVariantProvider variant="borderless-background">
          <MessageControl message={AIImageMessage} />
        </MessageVariantProvider>
      </RoleContext.Provider>
    );

    const content = screen.getByTestId('content');
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('ai-message__content');
    expect(content).toHaveClass('ai-message__content--borderless-background');
  });

  it('renders text content', () => {
    render(<MessageControl message={userTextMessage} />);
    const message = screen.getByText('Are you sentient?');
    expect(message).toBeInTheDocument();
  });

  it('renders image content', () => {
    render(<MessageControl message={AIImageMessage} />);
    const message = screen.getByRole('img');
    expect(message).toBeInTheDocument();
  });
});
