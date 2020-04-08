import * as Config from '../config';
import * as GenerateSwaggerSpec from '../module/generate-swagger-spec';

const TSOA_SWAGGER_OPTIONS: Config.SwaggerConfig = {
  schemes: ['http'],
  basePath: '/api/v1',
  entryFile: './src/main.ts',
  specVersion: 3,
  outputDirectory: './dist/api-docs',
  controllerPathGlobs: ['./src/sample/controllers/**/*controller.ts'],
  responseBodyContentType: 'application/x-www-form-urlencoded',
};

const TSOA_ROUTE_OPTIONS: Config.RoutesConfig = {
  basePath: '/api/v1',
  entryFile: '../src/main.ts',
  routesDir: './generated-scripts',
  middleware: 'express',
};

GenerateSwaggerSpec.generateSwaggerSpec(TSOA_SWAGGER_OPTIONS, TSOA_ROUTE_OPTIONS);
