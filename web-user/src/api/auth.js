import apiClient from './client';
import axios from 'axios';

export const getGoogleUrl = async (redirectTarget) => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_API_URL}/auth/google/url`,
    {
      params: {
        redirectTarget,
      },
    }
  );

  return data;
};

export const completeGoogleRegistration = async (registrationToken, accountCode) => {
  const { data } = await apiClient.post('/auth/complete-google-registration', {
    registration_token: registrationToken,
    account_code: accountCode
  }, {
    timeout: 15000   // 15 seconds timeout
  });
  return data;
};

export const getMe = async () => {
  const { data } = await apiClient.get('/auth/me');
  return data;
};