import React from 'react';

import type { Post } from '@/api';
import { usePosts } from '@/api';

export default function Feed() {
  const {  isError } = usePosts();
  

  if (isError) {
    return <></>;
  }
  return <></>;
}
