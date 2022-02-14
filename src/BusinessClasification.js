import React, { useState } from "react";
import Industry from "./Industry";

export default function BusinessClasification({ data }) {
  const [industry, setIndustry] = useState(null);
  console.log(JSON.stringify(data));

  return (
    <div>
      <h1> Business Classification </h1>
      <div>
        <label>Choose a industry:</label>
        <select>
          {data.map((parent) => {
            return (
              <optgroup label={parent.key} key={parent.key}>
                {parent.values.map((child) => {
                  return (
                    <option
                      onClick={() => setIndustry(child)}
                      value={child.id}
                      key={child.id}
                    >
                      {child.name}
                    </option>
                  );
                })}
              </optgroup>
            );
          })}
        </select>
      </div>

      <Industry industry={industry} />
    </div>
  );
}
