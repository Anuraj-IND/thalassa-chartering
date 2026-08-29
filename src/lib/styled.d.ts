import 'styled-components';
import type { AppTheme } from './theme';

// Augment styled-components' DefaultTheme so `props.theme` is fully typed.
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends AppTheme {}
}
