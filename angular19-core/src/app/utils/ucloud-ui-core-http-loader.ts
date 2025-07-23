import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

export class UcloudUiCoreTranslateHttpLoader {
  constructor(
    private http: HttpClient,
    public prefix: string = "/assets/i18n/",
    public suffix: string = ".json",
    public manifest: string = "/assets/manifest.json" // URL do arquivo manifest
  ) {}

  public getTranslation(lang: string): Observable<Object> {
    const coreObservable = this.http.get<any>(`${this.prefix}${lang}${this.suffix}`);
    const manifestObservable = this.http.get<any>(this.manifest);

    return forkJoin([coreObservable, manifestObservable]).pipe(
      mergeMap(([coreData, manifestData]) => {
        const keys = manifestData && Object.keys(manifestData) || [];

        if (keys.length === 0) {
          return of(coreData);
        }

        const keyRequests = keys.map((key: any) => {
          const url = new URL(manifestData[key]);
          const baseUrl = `${url.protocol}//${url.host}`;

          return this.http.get<any>(`${baseUrl}/i18n/${lang}${this.suffix}`).pipe(
            map((jsonResponse: any) => {
              coreData[key] = jsonResponse[key];
            }),
            catchError((error) => {
              console.error(`Erro ao carregar a tradução para a chave ${key}`);
              return of(null);
            })
          );
        });

        return forkJoin(keyRequests).pipe(
          map(() => coreData)
        );
      })
    );
  }

}
