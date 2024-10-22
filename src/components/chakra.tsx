import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager
} from '@chakra-ui/react';

import theme from '@/lib/theme';
import { ReactNode } from 'react';

export function Chakra({ cookies, children }: { cookies: string, children: ReactNode }) {
  const colorModeManager = typeof cookies === 'string' ? cookieStorageManagerSSR(cookies) : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
};

export async function getServerSideProps({ req }: { req: any }) {
  return {
    props: {
      cookies: req.headers.cookies ?? ''
    }
  }
}
