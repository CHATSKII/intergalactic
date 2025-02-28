import React from 'react';
import Tag from '@semcore/tag';
import EditXS from '@semcore/icon/Edit/m';

export default function () {
  return (
    <>
      <Tag theme="#FFD7DF" color="#D1002F">
        <Tag.Addon tag={EditXS} />
        <Tag.Text>Tag</Tag.Text>
      </Tag>
    </>
  );
}
