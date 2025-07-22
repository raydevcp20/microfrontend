import { HttpInterceptorFn } from '@angular/common/http';

export const tenantInterceptor: HttpInterceptorFn = (req, next) => {
  const tenantAsString = localStorage.getItem('tenant');
  let uuid = '';
  if(tenantAsString){
    try {
      const tenant = JSON.parse(tenantAsString);
      uuid = tenant.ucloudIdentifier;
    } catch (error) {
      console.error(error)
    }
  }
  const newReq = req.clone({
    headers: req.headers.append('tenant', uuid),
  });
  return next(newReq);
};
