import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

function App() {

  function handleEditorChange(e){
    console.log('Content was updated:', e.target.getContent());
  }

  return (
    <Editor
      apiKey='your-api-key'
      initialValue="<p>Conteúdo inicial vai aqui, não esquecça de ir no site: <a href='https://www.tiny.cloud/auth/signup/'>TinyMCE</a> para pegar your-api-key!</p>"
      init={{
        height: 500,
        menubar: true,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help'
      }}
      onChange={handleEditorChange}
    />
  );
}

export default App;
