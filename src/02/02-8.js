import MyModule from './Mymodule.js';
import { ModuleName } from './Mymodule.js';
import { ModuleName as ReNameModuleName } from './Mymodule.js';
function Func() {
  MyModule();
}

export const CONST_VALUE = 0;
export class MYClass {}
export default new Func();
