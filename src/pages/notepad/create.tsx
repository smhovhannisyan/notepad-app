import { useCallback } from 'react';
import dynamic from 'next/dynamic';

import TextInput from 'components/TextInput';
import Textarea from 'components/Textarea';
import Layout from 'components/Layout';
import Button from 'components/Button';

const Loading = dynamic(() => import('components/Loading'), { ssr: false });

function Notepad() {
  const handleBtnClick = useCallback(() => {
    console.log('abc');
  }, []);

  return (
    <Layout>
      <Loading />
      <TextInput label="hello" value="" placeholder="Placeholder" />
      <Textarea label="world" value="" placeholder="Placeholder" />
      <Button label="View State" />
      <Button label="Save" handleOnClick={handleBtnClick} type="blue" />
      <Button label="Add" type="green" />
      <Button label="Delete" type="red" />
    </Layout>
  );
}

export default Notepad;
