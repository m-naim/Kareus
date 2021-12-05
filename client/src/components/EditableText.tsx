import React, { useState } from 'react';

const EditableText = ({ initialValue }: any) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div contentEditable onChange={handleChange}>
      {value}
    </div>
  );
};

export default EditableText;
