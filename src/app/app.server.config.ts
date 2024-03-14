import { mergeApplicationConfig, ApplicationConfig, makeEnvironmentProviders } from '@angular/core';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    makeEnvironmentProviders([])
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
