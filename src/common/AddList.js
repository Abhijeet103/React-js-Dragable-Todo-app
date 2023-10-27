import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const AddButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  margin-right: 4px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  font-size: 16px;
  flex-grow: 1;
`;

function AddList({ onAddList }) {
  const [isAdding, setIsAdding] = useState(false);
  const [newListTitle, setNewListTitle] = useState('');

  const handleAddList = () => {
    if (newListTitle) {
      onAddList(newListTitle);
      setNewListTitle('');
      setIsAdding(false);
    }
  };

  return (
    <Container>
      {isAdding ? (
        <>
          <Input
            type="text"
            placeholder="Enter list title"
            value={newListTitle}
            onChange={(e) => setNewListTitle(e.target.value)}
          />
          <button onClick={handleAddList}>Add</button>
        </>
      ) : (
        <AddButton onClick={() => setIsAdding(true)}>+</AddButton>
      )}
    </Container>
  );
}

export default AddList;
