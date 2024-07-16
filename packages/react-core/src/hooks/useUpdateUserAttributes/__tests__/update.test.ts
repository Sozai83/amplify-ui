import { act, renderHook } from '@testing-library/react-hooks';

import {
  updateUserAttributes,
  UpdateUserAttributesInput,
} from '@aws-amplify/auth';

import { DefaultUpdate, useUpdateUserAttributes } from '../constants';
import { UpdateData } from '../types';

const mockOutput: UpdateData = {
  nickname: {
    isUpdated: true,
  },
  locale: {
    isUpdated: true,
  },
};

const mockInput: UpdateUserAttributesInput = {
  userAttributes: {
    nickname: 'new_nickname',
    locale: 'new_locale',
  },
};

const mockError = new Error('Sample error');

jest.mock('@aws-amplify/auth', () => ({
  updateUserAttributes: jest.fn(),
}));

describe('useUpdateUserAttributes', () => {
  beforeEach(jest.clearAllMocks);

  it('data should be falsy if error received', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useUpdateUserAttributes()
    );
    (updateUserAttributes as jest.Mock).mockRejectedValueOnce(mockError);
    act(async () => {
      await new Promise<void>((resolve) => {
        result.current[1](mockInput);
        resolve();
      });
    });

    await waitForNextUpdate();

    expect(result.current[0].data).toBe(DefaultUpdate);
    expect(result.current[0].message).toBe(String(mockError));
  });

  it('should have an error message if error occurs', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useUpdateUserAttributes()
    );
    (updateUserAttributes as jest.Mock).mockRejectedValue(mockError);
    act(async () => {
      await new Promise<void>((resolve) => {
        result.current[1](mockInput);
        resolve();
      });
    });

    await waitForNextUpdate();

    expect(result.current[0].data).toBe(DefaultUpdate);
    expect(result.current[0].message).toBe(String(mockError));
  });

  it('data should be mockOutput if successful', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useUpdateUserAttributes()
    );
    (updateUserAttributes as jest.Mock).mockResolvedValue(mockOutput);

    // THIS IS AN ISSUE I SEE IN MY DEMO APP AS WELL. ON THE FIRST CALL OF HANDLEUPDATE(input), the data is the default data, not the actual data from the API request.
    act(async () => {
      await new Promise<void>((resolve) => {
        result.current[1](mockInput);
        resolve();
      });
    });

    expect(result.current[0].data).toBe(DefaultUpdate);

    act(async () => {
      await new Promise<void>((resolve) => {
        result.current[1](mockInput);
        resolve();
      });
    });

    await waitForNextUpdate();

    expect(result.current[0].data).toBe(mockOutput);
    expect(result.current[0].message).toBe(undefined);
  });
});