import { Params, Data } from '@angular/router';

export interface RouterStateCustom {
  url: string;
  params: Params;
  queryParams: Params;
  data: Data;
}
