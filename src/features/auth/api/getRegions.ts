import { addressRequest } from '@/libraries/axios';

export const getRegions = (regcode: string) => {
  return addressRequest.get(`/v1/regcodes?regcode_pattern=${regcode}`);
};
