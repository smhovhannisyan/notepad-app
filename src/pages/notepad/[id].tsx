import { useCallback } from 'react';

import TextInput from 'components/TextInput';
import Textarea from 'components/Textarea';
import Layout from 'components/Layout';
import Button from 'components/Button';

function Notepad() {
  const handleBtnClick = useCallback(() => {
    console.log('abc');
  }, []);

  return (
    <Layout>
      <TextInput label="hello" value="" placeholder="Placeholder" />
      <Textarea label="world" value="" placeholder="Placeholder" />
      <Button handleOnClick={handleBtnClick} type="blue" />
      <Button type="green" />
      <Button type="red" />
      <Button />
    </Layout>
  );
}

export default Notepad;
