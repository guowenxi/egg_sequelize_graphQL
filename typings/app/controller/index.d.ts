// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportGraphql from '../../../app/controller/graphql';
import ExportHome from '../../../app/controller/Home';

declare module 'egg' {
  interface IController {
    graphql: ExportGraphql;
    home: ExportHome;
  }
}
