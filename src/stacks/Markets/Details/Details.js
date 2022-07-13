import React from 'react';
import {Layout} from '@ui-kitten/components';
import DetailsRow from './components/DetailsRow';
import DetailsHeader from './components/DetailsHeader';

export default function Details() {
  return (
    <Layout>
      <DetailsHeader />
      <DetailsRow label="Symbol" value="test" />
      <DetailsRow label="Hashing algorithm" value="test" />
      <DetailsRow label="Description" value="test" />
      <DetailsRow label="Market cap" value="test" />
      <DetailsRow label="Genesis Date" value="test" />
    </Layout>
  );
}
