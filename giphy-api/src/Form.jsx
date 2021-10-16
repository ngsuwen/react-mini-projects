import React, { useRef } from 'react';

function Form(props) {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(inputRef.current.value)
    props.handleSubmit(inputRef.current.value)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='search a tag (eg. cat)'
          ref={inputRef}
        />
        <input type="submit"/>
      </form>
    </>
  );
}

export default Form;