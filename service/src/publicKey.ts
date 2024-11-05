import makeRequest from './makeRequest';
import { IGetPublicKeyReturn } from './public/types';

export const sharePublicKey = async ({ aesKey, publicKey, sender, channelId }) => {
  try {
    return await makeRequest('chat/share-public-key', {
      method: 'POST',
      body: {
        aesKey,
        publicKey,
        sender,
        channel: channelId
      }
    });
  } catch (error) {
    console.error('Error sharing public key:', error);
    throw error;
  }
};

export const getPublicKey = async ({ userId, channelId }): Promise<IGetPublicKeyReturn> => {
  try {
    return await makeRequest(`chat/get-public-key/?userId=${userId}&channel=${channelId}&timeStamp=${Date.now()}`, {
      method: 'GET'
    });
  } catch (error) {
    console.error('Error getting public key:', error);
    throw error;
  }
};
