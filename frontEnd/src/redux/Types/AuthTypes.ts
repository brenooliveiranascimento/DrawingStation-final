export const AuthTypes = {
  INIT_LOGIN: 'INIT_LOGIN',
  LOGIN_FAIL: 'LOGIN_FAIL',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  SIGOUT: 'SIGOUT',
  REQUEST_USERS: 'REQUEST_USERS',
  REQUEST_USERS_FAIL: 'REQUEST_USERS_FAIL',
  TRANSFORM_USER_PREMIUM: 'TRANSFORM_USER_PREMIUM',
  REMOVE_USER_PREMIUM: 'REMOVE_USER_PREMIUM',
  DISABLE_USER: 'DISABLE_USER',
  ACTIVE_USER: 'ACTIVE_USER',
  HANDLE_SCREEN: 'HANDLE_SCREEN'
};

export const ModulesTypes = {
  INIT_REQUEST: 'INIT_REQUEST',
  REQUEST_SUCCESS: 'REQUEST_SUCCESS',
  REQUEST_FAIL: 'REQUEST_FAIL',
  ADD_NEW_MODULE: 'ADD_NEW_MODULE',
  EDIT_MODULE_MODULE: 'EDIT_MODULE_MODULE',
  DELETE_MODULE: 'DELETE_MODULE',
};

export const SubModulesTypes = {
  INIT_REQUEST: 'INIT_REQUEST_SUBMODULES',
  REQUEST_SUCCESS: 'REQUEST_SUCCESS_SUBMODULES',
  REQUEST_FAIL: 'REQUEST_FAIL_SUBMODULES',
  ADD_NEW_MODULE: 'ADD_NEW_MODULE_SUBMODULES',
  EDIT_SUB_MODULES: 'EDIT_MODULE_MODULE_SUBMODULES',
  DELETE_MODULE: 'DELETE_MODULE_SUBMODULES',
};

export const ClassroomsTypes = {
  INIT_REQUEST: 'INIT_REQUEST_CLASSROOMS',
  REQUEST_SUCCESS: 'REQUEST_SUCCESS_CLASSROOMS',
  REQUEST_FAIL: 'REQUEST_FAIL_CLASSROOMS',
  ADD_NEW_CLASSROOMS: 'ADD_NEW_CLASSROOMS',
  EDIT_SUB_CLASSROOMS: 'EDIT_SUB_CLASSROOMS',
  DELETE_CLASSROOMS: 'DELETE_CLASSROOMS',
  SELECT_CLASSROOMSDATA: 'SELECT_CLASSROOMSDATA',
};

export const ClassroomControllerTypes = {
  SELECT_SUBMODULE: 'SELECT_SUBMODULE',
  SELECT_MODULE: 'SELECT_MODULE',
  SELECT_CLASSROOMS: 'SELECT_CLASSROOMS',
  INCOMPLETE_SUBMODULE: 'INCOMPLETE_SUBMODULE',
  BUY_PREIUM: 'BUY_PREIUM',
};

export const CommentsTypes = {
  REQUEST_COMMENTS: 'REQUEST_COMMENTS',
  REQUEST_COMMENTS_FAIL: 'REQUEST_COMMENTS_FAIL',
  ADD_NEW_COMMENT: 'ADD_NEW_COMMENT',
  DELETE_COMMENT: 'DELETE_COMMENT',
  UPDATE_COMMENT: 'UPDATE_COMMENT',
};

export const NotificationTyoes = {
  REQUEST_NOTIFICATIONS: 'REQUEST_NOTIFICATIONS',
  NOTIFICATION_FAIL: 'NOTIFICATION_FAIL'
};
