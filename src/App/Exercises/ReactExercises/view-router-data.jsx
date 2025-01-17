import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { WelcomeViewRouterMetaData } from './WelcomeView/router-data';
import { SubRouteExercise2 } from './Exercise2/router-data';
import { SubRouteExercise3 } from './Exercise3/router-data';
import { SubRouteExercise4 } from './Exercise4/router-data';
import { SubRouteMUI } from './MaterialUI/router-data';
import { SubRouteMUITemplateDash } from './MUITemplateDash/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  WelcomeViewRouterMetaData,
  SubRouteExercise2,
  SubRouteExercise3,
  SubRouteExercise4,
  SubRouteMUI,
  SubRouteMUITemplateDash,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
