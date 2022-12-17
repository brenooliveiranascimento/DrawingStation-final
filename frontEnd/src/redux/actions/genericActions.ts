import { SubModulesTypes } from '../Types/AuthTypes';

export const genericRequestControl = (actionType: string) => ({
  type: actionType,
});

export const genericSuccesRequest = (actionType: string, payload: any) => ({
  type: actionType,
  payload
});

export const setCurrSubmodule = (subModuleId: number) => ({
  type: SubModulesTypes.SELECT_MODULE,
  payload: subModuleId,
});
