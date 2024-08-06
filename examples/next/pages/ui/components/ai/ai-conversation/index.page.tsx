import React from 'react';

import { Icon } from '@aws-amplify/ui-react';
import { createAIConversation } from '@aws-amplify/ui-react-ai';
import '@aws-amplify/ui-react/styles.css';
import '@aws-amplify/ui-react-ai/ai-conversation-styles.css';

export interface ImageContent {
  format: 'png' | 'jpeg' | 'gif' | 'webp';
  bytes: ArrayBuffer;
}

interface ImageContentBlock {
  type: 'image';
  value: ImageContent;
}

export interface TextContent {
  type: 'text';
  value: string;
}

export type Content = ImageContentBlock | TextContent;

export interface ConversationMessage {
  id: string;
  content: Content[];
  role: 'user' | 'assistant';
  timestamp: Date;
}

function convertBufferToBase64(
  buffer: ArrayBuffer,
  format: 'png' | 'jpeg' | 'gif' | 'webp'
): string {
  const base64string = Buffer.from(new Uint8Array(buffer)).toString('base64');
  return `data:image/${format};base64,${base64string}`;
}

const roles = ['user', 'assistant'] as const;
const sampleMessages: Content[][] = [
  [
    { type: 'text', value: 'How can I assist you today?' },
    { type: 'text', value: 'How can I assist you today?' },
    { type: 'text', value: 'How can I assist you today?' },
  ],
  [
    { type: 'text', value: 'What are you looking for?' },
    { type: 'text', value: 'What are you looking for?' },
    { type: 'text', value: 'What are you looking for?' },
  ],
  [
    { type: 'text', value: 'Can you provide more details?' },
    { type: 'text', value: 'Can you provide more details?' },
  ],
  [
    { type: 'text', value: 'I will get back to you shortly.' },
    { type: 'text', value: 'I will get back to you shortly.' },
    { type: 'text', value: 'I will get back to you shortly.' },
  ],
  [{ type: 'text', value: 'Thank you for your patience.' }],
  [{ type: 'text', value: `I'm a real AI!` }],
];

const PROMPTS = [
  {
    header: 'Help me find a rental',
    inputText: 'Find a rental with a pool',
  },
  {
    header: 'Help me find a rental',
    inputText: 'Find a rental with a basketball court',
  },
];

export const actions = [
  {
    displayName: 'Heart',
    icon: (
      <Icon
        pathData="M13.22,2.984c-1.125,0-2.504,0.377-3.53,1.182C8.756,3.441,7.502,2.984,6.28,2.984c-2.6,0-4.714,2.116-4.714,4.716c0,0.32,0.032,0.644,0.098,0.96c0.799,4.202,6.781,7.792,7.46,8.188c0.193,0.111,0.41,0.168,0.627,0.168c0.187,0,0.376-0.041,0.55-0.127c0.011-0.006,1.349-0.689,2.91-1.865c0.021-0.016,0.043-0.031,0.061-0.043c0.021-0.016,0.045-0.033,0.064-0.053c3.012-2.309,4.6-4.805,4.6-7.229C17.935,5.1,15.819,2.984,13.22,2.984z M12.544,13.966c-0.004,0.004-0.018,0.014-0.021,0.018s-0.018,0.012-0.023,0.016c-1.423,1.076-2.674,1.734-2.749,1.771c0,0-6.146-3.576-6.866-7.363C2.837,8.178,2.811,7.942,2.811,7.7c0-1.917,1.554-3.47,3.469-3.47c1.302,0,2.836,0.736,3.431,1.794c0.577-1.121,2.161-1.794,3.509-1.794c1.914,0,3.469,1.553,3.469,3.47C16.688,10.249,14.474,12.495,12.544,13.966z"
        width="20px"
        height="20px"
      />
    ),
    // eslint-disable-next-line no-console -- This is a mock handler
    handler: () => console.log('Heart clicked'),
  },
  {
    displayName: 'Star',
    icon: (
      <Icon
        pathData="M16.85,7.275l-3.967-0.577l-1.773-3.593c-0.208-0.423-0.639-0.69-1.11-0.69s-0.902,0.267-1.11,0.69L7.116,6.699L3.148,7.275c-0.466,0.068-0.854,0.394-1,0.842c-0.145,0.448-0.023,0.941,0.314,1.27l2.871,2.799l-0.677,3.951c-0.08,0.464,0.112,0.934,0.493,1.211c0.217,0.156,0.472,0.236,0.728,0.236c0.197,0,0.396-0.048,0.577-0.143l3.547-1.864l3.548,1.864c0.18,0.095,0.381,0.143,0.576,0.143c0.256,0,0.512-0.08,0.729-0.236c0.381-0.277,0.572-0.747,0.492-1.211l-0.678-3.951l2.871-2.799c0.338-0.329,0.459-0.821,0.314-1.27C17.705,7.669,17.316,7.343,16.85,7.275z M13.336,11.754l0.787,4.591l-4.124-2.167l-4.124,2.167l0.788-4.591L3.326,8.5l4.612-0.67l2.062-4.177l2.062,4.177l4.613,0.67L13.336,11.754z"
        width="20px"
        height="20px"
      />
    ),
    // eslint-disable-next-line no-console -- This is a mock handler
    handler: () => console.log('Star clicked'),
  },
];

const initialMessages = [
  {
    id: '1',
    content: [{ type: 'text' as const, value: 'I am your virtual assistant' }],
    role: 'assistant' as const,
    timestamp: new Date(2023, 4, 21, 15, 23),
  },
  {
    id: '2',
    content: [
      {
        type: 'text' as const,
        value:
          'I have a really long question. This is a long message This is a long message This is a long message This is a long message This is a long message',
      },
    ],
    role: 'user' as const,
    timestamp: new Date(2023, 4, 21, 15, 24),
  },
  {
    id: '3',
    content: [
      {
        type: 'image' as const,
        value: {
          format: 'png' as const,
          bytes: new Uint8Array([]).buffer,
        },
      },
    ],
    role: 'assistant' as const,
    timestamp: new Date(2023, 4, 21, 15, 25),
  },
];

const avatars = {
  user: {
    username: 'User',
    avatar: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#5f6368"
      >
        <path d="M480-40q-23 0-46-3t-46-8Q300 14 194.5-4.5T33-117q-45-74-29-159t77-143v-3Q19-479 4-562.5T32-720q37-63 102-95.5T271-838q32-57 87.5-89.5T480-960q66 0 121.5 32.5T689-838q72-10 137 22.5T928-720q43 74 28 157.5T879-422v3q61 58 77 143t-29 159Q871-23 765.5-4.5T572-51q-23 5-46 8t-46 3ZM288-90q-32-18-61-41.5T174-183q-24-28-42.5-60.5T101-311q-20 36-20 76.5t21 75.5q29 48 81.5 68.5T288-90Zm384 0q52 20 104.5-.5T858-159q21-35 21-75.5T859-311q-12 35-30.5 67.5T786-183q-24 28-52.5 51.5T672-90Zm-192-30q134 0 227-93t93-227q0-29-4.5-55.5T782-547q-29 20-64 31t-73 11q-102 0-173.5-71.5T400-750q-104 26-172 112t-68 198q0 134 93 227t227 93ZM360-350q-21 0-35.5-14.5T310-400q0-21 14.5-35.5T360-450q21 0 35.5 14.5T410-400q0 21-14.5 35.5T360-350Zm240 0q-21 0-35.5-14.5T550-400q0-21 14.5-35.5T600-450q21 0 35.5 14.5T650-400q0 21-14.5 35.5T600-350ZM94-544q9-33 23-63.5t33-57.5q19-27 41.5-51t48.5-44q-43 0-79.5 21T102-681q-20 32-22 67t14 70Zm772 0q16-35 14-70t-22-67q-22-37-58.5-58T720-760q26 20 48.5 44t41.5 51q19 27 33 57.5t23 63.5Zm-221-41q29 0 54-9t46-25q-21-32-50-57.5T632-721q-34-19-72-29t-80-10v10q0 69 48 117t117 48Zm-54-239q-20-26-49-41t-62-15q-33 0-62 15t-49 41q26-8 54-12t57-4q29 0 57 4t54 12ZM150-665Zm660 0Zm-330-85Zm0-90ZM174-183Zm612 0Z" />
      </svg>
    ),
  },
  ai: {
    username: 'Raven',
    avatar: (
      <img
        src={convertBufferToBase64(
          new Uint8Array([
            137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0,
            0, 28, 0, 0, 0, 28, 8, 3, 0, 0, 0, 69, 211, 47, 166, 0, 0, 0, 168,
            80, 76, 84, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 51,
            51, 26, 26, 26, 23, 23, 46, 20, 20, 39, 18, 18, 36, 12, 24, 36, 9,
            26, 35, 15, 23, 38, 15, 29, 36, 12, 23, 41, 11, 28, 40, 13, 26, 38,
            12, 27, 39, 15, 26, 36, 14, 25, 39, 14, 24, 38, 13, 26, 36, 13, 27,
            38, 12, 27, 39, 12, 27, 37, 12, 27, 37, 12, 27, 39, 12, 26, 38, 14,
            26, 38, 13, 26, 38, 12, 26, 39, 13, 27, 38, 13, 27, 38, 12, 26, 39,
            14, 26, 38, 13, 26, 38, 13, 26, 38, 13, 26, 38, 13, 26, 38, 13, 26,
            38, 13, 26, 38, 13, 26, 38, 13, 27, 38, 12, 26, 39, 14, 26, 38, 13,
            26, 38, 13, 26, 38, 13, 26, 38, 12, 26, 39, 13, 26, 38, 13, 26, 38,
            13, 26, 38, 13, 26, 38, 13, 26, 38, 13, 26, 38, 255, 255, 255, 26,
            7, 228, 96, 0, 0, 0, 54, 116, 82, 78, 83, 0, 1, 2, 3, 4, 5, 10, 11,
            13, 14, 21, 29, 34, 35, 44, 45, 60, 65, 70, 72, 73, 77, 95, 105,
            123, 124, 125, 126, 128, 135, 145, 153, 162, 165, 170, 174, 175,
            176, 179, 209, 215, 220, 221, 225, 226, 228, 229, 243, 245, 247,
            249, 250, 252, 253, 138, 189, 133, 44, 0, 0, 0, 1, 98, 75, 71, 68,
            55, 48, 184, 184, 71, 0, 0, 0, 214, 73, 68, 65, 84, 40, 207, 125,
            147, 233, 22, 130, 32, 16, 133, 49, 181, 210, 74, 203, 74, 219, 168,
            44, 91, 21, 211, 22, 222, 255, 209, 82, 212, 57, 160, 232, 253, 197,
            229, 67, 206, 48, 115, 69, 136, 147, 110, 219, 26, 146, 75, 245, 98,
            74, 137, 167, 202, 216, 236, 70, 153, 238, 139, 6, 26, 29, 41, 232,
            58, 17, 208, 96, 151, 82, 78, 159, 189, 1, 72, 113, 227, 114, 55,
            140, 202, 69, 236, 42, 101, 141, 151, 234, 139, 196, 52, 147, 106,
            29, 232, 12, 110, 225, 58, 31, 33, 31, 204, 154, 193, 39, 120, 7,
            33, 7, 204, 131, 193, 95, 101, 73, 246, 68, 149, 84, 238, 203, 32,
            156, 197, 185, 195, 96, 121, 72, 240, 48, 119, 6, 38, 117, 152, 158,
            150, 208, 213, 222, 244, 240, 226, 97, 104, 138, 253, 50, 35, 14,
            70, 93, 176, 243, 218, 162, 32, 163, 165, 160, 214, 167, 116, 54,
            161, 179, 125, 27, 121, 227, 87, 197, 200, 2, 217, 200, 206, 122,
            125, 216, 81, 99, 216, 153, 250, 98, 76, 222, 92, 76, 26, 1, 27,
            183, 71, 115, 46, 15, 53, 105, 13, 117, 38, 205, 178, 132, 223, 225,
            15, 14, 216, 81, 244, 178, 122, 71, 86, 0, 0, 0, 0, 73, 69, 78, 68,
            174, 66, 96, 130,
          ]).buffer,
          'png'
        )}
      ></img>
    ),
  },
};

const getRandomMessage = (): {
  role: (typeof roles)[number];
  content: Content[];
  timestamp: Date;
} => {
  const role = roles[Math.floor(Math.random() * roles.length)];
  const message =
    sampleMessages[Math.floor(Math.random() * sampleMessages.length)];
  return {
    role,
    content: message,
    timestamp: new Date(),
  };
};

const useRandomMessages = (initialMessages: any[]) => {
  const [messages, setMessages] = React.useState(initialMessages);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setMessages((prevMessages) => [...prevMessages, getRandomMessage()]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return messages;
};

const { AIConversation } = createAIConversation({
  suggestedPrompts: PROMPTS,
  actions: actions,
  variant: 'bubble-2',
});

export default function Example() {
  // uncomment to use growing list of messages
  // const messages = useRandomMessages(initialMessages);
  const messages = initialMessages;

  return <AIConversation messages={messages} avatars={avatars} />;
  // return <div>hello world</div>;
}
