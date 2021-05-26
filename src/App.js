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
      {tags.length > 0 ? (
        tags.map((tag) => (
          <div>
            <p>{tags.length} items.</p>
            <p key={tag}>
              {tag}{" "}
              <button style={butStyle} onClick={() => delTag(tag)}>
                Remove
              </button>
            </p>
          </div>
        ))
      ) : (
        <h4 style={{ color: "green" }}>Empty array!</h4>
      )}
    </div>
  );
}
