import { ModulesInterface } from '../../../interfaces/modules/ModulesInterface';
import { ModulesTypes } from '../../Types/AuthTypes';

export const initReques = () => ({
  type: ModulesTypes.INIT_REQUEST
});

export const requestSuccess = (modulesData: ModulesInterface[]) => ({
  type: ModulesTypes.REQUEST_SUCCESS,
  payload: modulesData
});

export const requestFaield = () => ({
  type: ModulesTypes.INIT_REQUEST
});

export const updateModule = (updatedModule: ModulesInterface, ) => ({
  type: ModulesTypes.EDIT_MODULE_MODULE,
  payload: updatedModule
});

export const deleteModule = (deletedModule: ModulesInterface, ) => ({
  type: ModulesTypes.DELETE_MODULE,
  payload: deletedModule
});
