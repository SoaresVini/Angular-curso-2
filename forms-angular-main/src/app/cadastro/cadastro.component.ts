import { ConsultaCepService } from './../service/consulta-cep.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})


export class CadastroComponent implements OnInit{

  constructor(
    private router: Router,
    private service: ConsultaCepService
    ) { }

  ngOnInit(): void {
  }

  consultaCep(ev: any, form: NgForm){
    const cep = ev.target.value;

    if(cep != ''){
      this.service.getConsultaCep(cep).subscribe( resultado => {
        this.pooulandoEndereco(resultado,form)
      })}
   
  }

  pooulandoEndereco(dados: any, f:NgForm){

    f.form.patchValue({
      edereco: dados.logradouro,
      complemento: dados.bairro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    })
  }

  cadastrar(form: NgForm){
    if(form.valid){
      this.router.navigate(['./sucesso'])
      }else{
        alert('Formulario invalido')
      console.log(form.controls);
  }
}
}
