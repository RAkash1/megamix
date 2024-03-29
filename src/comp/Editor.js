import ReactQuill from "react-quill";

export default function Editor({value,onChange}) {
  const modules = {
    toolbar: [
      [{ header: [1, 2,3,4,5,6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link'],
      ['clean'],
    ],
  };
  return (
    <div className="content">
    <ReactQuill
      value={value}
      theme={'snow'}
      onChange={onChange}
      modules={modules}
      style={{width:'60vw',height:'30vh'}}
       />
    </div>
  );
}
