import { Component } from '@angular/core';

@Component({
  selector: 'app-comunidade',
  standalone: true,
  imports: [],
  templateUrl: './comunidade.component.html',
  styleUrl: './comunidade.component.scss'
})
export class ComunidadeComponent {
  showWelcomeText: boolean = true;

  ngOnInit(): void {
    // Após 5 segundos, altera a variável para exibir a descrição completa
    setTimeout(() => {
      this.showWelcomeText = false;
    }, 5000); // 5000 milissegundos = 5 segundos
  }
}