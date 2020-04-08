import { Controller } from '../../interfaces/controller';
import { Body } from '../../decorators/parameter';
import { Post } from '../../decorators/methods';
import { Route } from '../../decorators/route';
import { Tags } from '../../decorators/tags';

interface SampleType {
  name?: string;
  id: number;
}

@Route('sample')
@Tags('Sample')
export class SampleController extends Controller {
  @Post('/paramBodyType')
  postSimpleParamBodyWithType(@Body() sample: SampleType) {
    return { msg: 'getSimpleQuery', input: sample };
  }

  @Post('/paramNestedObjectLiteral')
  postSimpleParamBody(@Body() sample: { name: string; id: number; chickenWings?: string }) {
    return { msg: 'getSimpleQuery', input: sample };
  }
}
