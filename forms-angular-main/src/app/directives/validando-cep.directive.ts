import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { ConsultaCepService } from '../service/consulta-cep.service';

@Directive({
  selector: '[validadorCep]',
  providers: [{
    //diretivas assincronas
    provide: NG_ASYNC_VALIDATORS,
    useExisting: ValidandoCepDirective,
    multi: true
  }]
})
export class ValidandoCepDirective implements AsyncValidator{

  constructor(private service: ConsultaCepService) { }
  
  validate(control: AbstractControl<any, any>): 
  
  Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const cep = control.value

    return this.service.getConsultaCep(cep).pipe(map(
      (resultado: any) => resultado.erro ? {'validadorCep': true} : null
    ))
  }

}
