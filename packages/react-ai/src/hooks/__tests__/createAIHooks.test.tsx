import { act, renderHook } from '@testing-library/react-hooks';
import { createAIHooks } from '../createAIHooks';
import { AIContextProvider } from '../AIContextProvider';
import React from 'react';

const mockClient = jest.fn();

describe('createAIHooks', () => {
  it('returns an useAIGeneration and useAIConversation hooks', async () => {
    const client = new mockClient();
    const { useAIConversation, useAIGeneration } = createAIHooks(client);

    expect(useAIConversation).toBeDefined();
    expect(useAIGeneration).toBeDefined();
  });

  describe('useAIConversation', () => {
    it('returns some messages', async () => {
      const client = new mockClient();
      const { useAIConversation } = createAIHooks(client);

      expect(useAIConversation).toBeDefined();

      const { result } = renderHook(() => useAIConversation('pirateChat'));

      const [
        {
          data: { messages },
        },
        sendMessage,
      ] = result.current;
      expect(messages).toHaveLength(3);
    });

    it.todo('hook can send a message which updates state');

    it.todo('hook can receive new messages from the conversation subscription');

    it.todo(
      'multiple hook uses with the same route and id combination have shared message state'
    );
    // const wrapper = ({ children }: { children: React.ReactNode }) => (
    //   <AIContextProvider>{children}</AIContextProvider>
    // )
    // const { result } = renderHook(() => useAIConversation('pirateChat'), { wrapper });
  });

  describe('useAIGeneration', () => {
    it('returns a result', async () => {
      const client = new mockClient();
      const { useAIGeneration } = createAIHooks(client);

      const { result: hookResult, waitForNextUpdate } = renderHook(() =>
        useAIGeneration('recipe')
      );

      const [{ data }, generate] = hookResult.current;
      act(() => {
        generate({ arguments: ['apple', 'banana', 'grape'] });
      });

      const [loadingState] = hookResult.current;
      expect(loadingState.isLoading).toBeTruthy();

      await waitForNextUpdate();

      const [awaitedState] = hookResult.current;
      expect(awaitedState.data.result).toBeDefined();
    });
  });
});
