
import React, { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

mermaid.initialize({
    startOnLoad:false,
    theme:"default"
})

const cleanMermaidChart = (diagram) =>{
    if (!diagram) return "";

    let clean = diagram
        .replace(/\r\n/g, "\n")
        .trim();

        if(!clean.startsWith("graph")){
            clean = `graph TD\n${clean}`
        }

        return clean;
};


// const autoFixNodes = (diagram)=>{
//     let index = 0;
//     const used = new Map();

//     return diagram.replace(/\[(.*?)\]/g, (match, label) =>{
//         //normalize label for key
//         const key = label.trim();

//         //reuse same node if label already seen
//         if (used.has(key)){
//             return used.get(key);
//         }

//         index++;
//         const id = `N${index}`;
//         // const node = `${id}["${key}]`;
//         const node = `${id}["${key}"]`;

//         used.set(key, node);
//         return node;
//     });
// };


const autoFixNodes = (diagram) => {
  if (!diagram || typeof diagram !== "string") return "";

  let index = 0;
  const used = new Map();

  return diagram.replace(/\[(.*?)\]/g, (_, rawLabel) => {
    // 🔹 Normalize label
    let key = rawLabel
      .trim()
      .replace(/\s+/g, " "); // remove extra spaces

    // 🔹 Skip empty labels
    if (!key) key = "Node";

    // 🔹 Escape quotes (important for Mermaid)
    const safeKey = key.replace(/"/g, '\\"');

    // 🔹 Reuse existing node
    if (used.has(key)) {
      return used.get(key);
    }

    // 🔹 Create new node
    index++;
    const id = `N${index}`;
    const node = `${id}["${safeKey}"]`;

    used.set(key, node);
    return node;
  });
};




function MermaidSetup  ({diagram}) {
const containerRef = useRef(null)

useEffect(()=>{
    if(!diagram || !containerRef.current)return;

    const renderDiagram = async () =>{
        try{
            containerRef.current.innerHTML = "";

            const uniqueId = `mermaid-${Math.random()
                .toString(36)
                .substring(2, 9)}`;

            // sanitize before render
            const safeChart = autoFixNodes(cleanMermaidChart(diagram));

            const { svg } = await mermaid.render(uniqueId, safeChart);

            containerRef.current.innerHTML = svg;
        } catch (error){
            console.error("Mermaid render failde:", error);
        }
    };

    renderDiagram();
},[diagram]);

  return (
    <div className='bg-white border rounded-lg p-4 overflow-x-auto'>
        <div ref={containerRef}/>
    </div>
  )
}

export default MermaidSetup

