import UserModel from '../database/models/UserModel';
import AdmModel from '../database/models/AdmModel';
import { GetUserInterface, UserInterface } from '../interfaces/userTypes';
import { errorMapTypes } from '../utils/errorMap';

class UserService {
  public async findUserById(id: number):Promise<GetUserInterface> {
    try {
      const user = await UserModel.findOne({ where: { id }, attributes: {
        exclude: ["password"]
      }});
  
      if(!user) return { error: { message: errorMapTypes.USER_DONT_EXIST }, message: null };
      return { error: null, message: user }
    } catch(e) {
       return { error: { message: errorMapTypes.REQUEST_ERROR }, message: e };
    }
  }

  public async findAdm(email: string):Promise<GetUserInterface> {
    console.log('dniowajdiwoadjiowajdioawjdiowajdiwd')
    try {
      const user = await AdmModel.findOne({ where: { email }});
      if(!user) return { error: { message: errorMapTypes.ADM_NOT_DOUND }, message: errorMapTypes.ADM_NOT_DOUND };
      return { error: null, message: user }
    } catch(e) {
       return { error: { message: errorMapTypes.REQUEST_ERROR }, message: e };
    }
  }
}

export default UserService;
