/* eslint-disable react/react-in-jsx-scope */
import { Env } from '@env';
import { useColorScheme } from 'nativewind';


import { translate, useAuth } from '@/lib';

export default function Settings() {
  const signOut = useAuth.use.signOut();
  const { colorScheme } = useColorScheme();
  const iconColor =
    "#dddddd";
  return (
    <>
      
    </>
  );
}
