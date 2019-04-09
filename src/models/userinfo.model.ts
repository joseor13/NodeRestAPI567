import { Request, Response, NextFunction } from 'express';

export class Userinfo {
    _model: any;
    constructor(norm: any) {
      this.model = [{
        id: { type: Number, key: 'primary' },
        first_name: { type: String, maxlength: 100 },
        last_name: { type: String, maxlength: 100 },
        email: { type: String, maxlength: 100 },
        password: { type: String, maxlength: 1000 },
        city: { type: String, maxlength: 100 },
        job: { type: String, maxlength: 100 },
        experience: { type: String, maxlength: 1000 },
        education: { type: String, maxlength: 1000 },
        industry: { type: String, maxlength: 1000 },
        interests: { type: String, maxlength: 1000 },
      }, 'A table to store users information model', [
        {
          route: '/get-all-userinfo',
          method: 'POST',
          callback: this.getAllUserinfo,
          requireToken: true,
      },
      {
          route: '/get-userinfo-by-id/:id',
          method: 'POST',
          callback: this.getUserinfoById,
          requireToken: true,
      },
      {
          route: '/create-userinfo',
          method: 'POST',
          callback: this.createUserinfo,
          requireToken: true,
      },
      {
          route: '/update-userinfo-id/:id',
          method: 'PUT',
          callback: this.updateUserinfo,
          requireToken: true,
      },
      {
          route: '/delete-userinfo-id/:id',
          method: 'DELETE',
          callback: this.deleteUserinfo,
          requireToken: true,
      },
  ]];
}
deleteUserinfo(model: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
      let userinfoCtrl = model.controller;
      let resp = await userinfoCtrl.remove(req, null, null);
      res.json({ message: 'Success', resp });
  }
}
updateUserinfo(model: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
      let userinfoCtrl = model.controller;
      let resp = await userinfoCtrl.update(req, null, null);
      res.json({ message: 'Success', resp });
  }
}
createUserinfo(model: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
      let userinfoCtrl = model.controller;
      let resp = await userinfoCtrl.insert(req, null, null);
      res.json({ message: 'Success', resp });
  }
}

getAllUserinfo(model: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
          get: ['*']
      }
      let userinfoCtrl = model.controller;
      let resp = await userinfoCtrl.get(req, null, null);
      res.json({ message: 'Success', resp });
  }
}

getUserinfoById(model: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
          get: ['*'],
          where: {
              id: req.params.id
          }
      }
      let userinfoCtrl = model.controller;
      let resp = await userinfoCtrl.get(req, null, null);
      res.json({ message: 'Success', resp });
  }
}
    set model(model: any) {
      this._model = model;
    }
  
    get model() {
      return this._model;
    }
  
  }