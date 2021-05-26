import "./styles.css";
import { useState } from "react";

export default function App() {
  const butStyle = {
    color: "blue",
    backgrounColor: "red"
  };
  const initArr = ["dog", "horse", "cat"];
  const [tags, setTags] = useState(initArr);
  const delTag = (tag) => {
    const newList = tags.filter((item) => item !== tag);
    setTags(newList);
  };
  return (
    <div className="App">
      <p>{tags.length} items.</p>
      {tags.length > 0 ? (
        tags.map((tag) => (
          <p key={tag}>
            {tag}{" "}
            <button style={butStyle} onClick={() => delTag(tag)}>
              Remove
            </button>
          </p>
        ))
      ) : (
        <h4 style={{ color: "green" }}>Empty array!</h4>
      )}
    </div>
  );
}
