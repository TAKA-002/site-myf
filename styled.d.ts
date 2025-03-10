import 'styled-components';
import { Theme } from './src/app/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme { }
}
