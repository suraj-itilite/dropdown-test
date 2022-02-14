import React, { useState } from "react";
import Industry from "./Industry";

export default function Categories({ data }) {
  const [industry, setIndustry] = useState(null);
  console.log(JSON.stringify(data));

  return (
    <div>
      <h1> MyComp </h1>
      <div>
        <label>Choose a industry:</label>
        <select>
          {data.map((parent) => {
            const key = Object.keys(parent)[0];
            return (
              <optgroup key={key} label={key}>
                {parent[key].map((child) => {
                  return (
                    <option
                      key={child.id}
                      onClick={() => setIndustry(child)}
                      value={child.id}
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
