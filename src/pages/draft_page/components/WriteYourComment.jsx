import { CKEditor } from "ckeditor4-react";
import { useContext } from "react";
import CommentTextContext from "../context/CommentTextContext";

export default function WriteYourComment() {
  const { commentText, setCommentText } = useContext(CommentTextContext);

  return (
    <div className="bg-[#fff] p-[30px] rounded-[10px] flex flex-col flex-1 gap-[20px]">
      <h1>Write Your Comment</h1>

      <CKEditor
        editorUrl="https://cdn.ckeditor.com/4.22.1/standard/ckeditor.js"
        config={{
          contentsCss: [
            "body { font-size: 15px !important; padding-left: 10px;}",
          ],
          versionCheck: false,
          resize_enabled: false,
        }}
        initData="<p>Write your comment here!</p>"
        onChange={({ editor }) => {
          setCommentText(editor.getData());
        }}
      />
    </div>
  );
}
