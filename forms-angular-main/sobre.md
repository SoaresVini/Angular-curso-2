Outra forma de fazer formularios reativos 

passar no modulo o import FormsModule

na tag HTML cria uma variavel e passar para ela o ngforms
e passar o no (ngSubimit) o metodo

ngForm - instancia validadora e ve se o formulario está valido, e o ng model e só um componente 

required -  Obriga a ser preenchido

se tiver ? - ele só vai ser renderizado caso o if seja vdd


Diretivas

Validaitor Customizado 

    providers:
      provide: NG_VALIDATORS,
      //Token que permite adiconar novas diretas validadoras a uma coleção
      useExisting: MaiorIdadeDirective,
      multi: true


    Sincronos  implements Validaitor

    A principal diferença entre os validadores síncronos e assíncronos é o retorno que retorno do síncrono é uma instância de objeto de erro, enquanto no assíncrono é um observável do mesmo objeto.

    Assincronos implements AsyncValidator


    teste unitario - https://cursos.alura.com.br/formacao-angular-aplicacoes-acessiveis-testes-automatizados


    