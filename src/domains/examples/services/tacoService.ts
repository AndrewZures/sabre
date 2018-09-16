import { merge } from 'lodash';
import { throwError } from 'rxjs';
import { ajax, AjaxError, AjaxRequest } from 'rxjs/ajax';
import { catchError, map } from 'rxjs/operators';


class TacoService {
    public fetchTacoRecipe() {
        const url = 'http://taco-randomizer.herokuapp.com/random/'
        return this.baseRequest(url);
    }

    private baseOptions(url: string): AjaxRequest {
        return { url };
    }

    private baseRequest<T>(url: string, options: AjaxRequest = {}) {
        const request: AjaxRequest = merge(this.baseOptions(url), options);
    
        return ajax(request).pipe(
          map(({ response }) => response as T),
          catchError((error: AjaxError) => throwError(error.response)),
        );
      }
}

export const tacoService = new TacoService();