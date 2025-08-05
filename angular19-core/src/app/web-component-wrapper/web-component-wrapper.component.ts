import { loadRemoteModule } from '@angular-architects/native-federation';
import { Component, ElementRef, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  route = inject(ActivatedRoute);

  config?: WrapperConfig;

  async ngOnInit() {
    this.config = this.route.snapshot.data['config'];

    if (!this.config) {
      throw new Error('WebComponentWrapperComponent requires a config object in route data');
    }
    await loadRemoteModule(this.config.remoteName, this.config.exposedModule);
    const root = document.createElement(this.config.elementName);
    this.elm.nativeElement.appendChild(root);
  }
}
