// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportClasss = require('../../../app/model/classs');
import ExportColumns = require('../../../app/model/columns');
import ExportDetail = require('../../../app/model/detail');
import ExportRouterconfig = require('../../../app/model/routerconfig');
import ExportTables = require('../../../app/model/tables');

declare module 'egg' {
  interface IModel {
    Classs: ReturnType<typeof ExportClasss>;
    Columns: ReturnType<typeof ExportColumns>;
    Detail: ReturnType<typeof ExportDetail>;
    Routerconfig: ReturnType<typeof ExportRouterconfig>;
    Tables: ReturnType<typeof ExportTables>;
  }
}
