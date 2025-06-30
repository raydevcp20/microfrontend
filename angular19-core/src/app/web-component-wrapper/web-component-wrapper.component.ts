import { loadRemoteModule } from '@angular-architects/native-federation';
import { Component, ElementRef, inject, Input, OnInit } from '@angular/core';

export interface WrapperConfig {
    remoteName: string;
    exposedModule: string;
    elementName: string;
}

export const initWrapperConfig: WrapperConfig = {
    remoteName: '',
    exposedModule: '',
    elementName: '',
}

@Component({
  selector: 'app-web-component-wrapper',
  imports: [],
  templateUrl: './web-component-wrapper.component.html',
  styleUrl: './web-component-wrapper.component.scss',
})
export class WebComponentWrapperComponent implements OnInit {

  elm = inject(ElementRef);

  @Input() config = initWrapperConfig;

  async ngOnInit() {
    const { exposedModule, remoteName, elementName } = this.config;

    await loadRemoteModule(remoteName, exposedModule);
    const root = document.createElement(elementName);
    this.elm.nativeElement.appendChild(root);
  }
  // ngOnInit(): void {
  //   const container = document.getElementById('web-component-container');
  //   if (container) {
  //     // Aguarda até que o Web Component esteja registrado
  //     if (typeof customElements.get('ray-component') === 'undefined') {
  //       customElements
  //         .whenDefined('ray-component')
  //         .then(() => {
  //           console.log(
  //             'Web Component <ray-component> registrado com sucesso!'
  //           );
  //           const element = document.createElement('ray-component');
  //           container.appendChild(element);
  //         })
  //         .catch((err) => {
  //           console.error('Erro ao aguardar o registro do Web Component:', err);
  //         });
  //     } else {
  //       // Se já estiver registrado, cria o elemento imediatamente
  //       const element = document.createElement('ray-component');
  //       container.appendChild(element);
  //     }
  //   }
  // }
}
