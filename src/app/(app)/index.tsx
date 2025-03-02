import { FlashList } from '@shopify/flash-list';
import React from 'react';

import type { Post } from '@/api';
import { usePosts } from '@/api';


export default function Feed() {
  const { data, isPending, isError } = usePosts();
  const renderItem = React.useCallback(
    ({ item }: { item: Post }) => {},
    []
  );

  if (isError) {
    return (
      <>
      </>
    );
  }
  return (
    <>
    </>
  );
}
