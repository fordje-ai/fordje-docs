export enum CodeDocBlockType {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  p = "p"
};

export type CodeDoc = {
  id: string;
  content: CodeDocBlock[];
}

export type CodeDocBlock = {
  id: string;
  type: string;
  text: string;
  path?: string;
  children?: CodeDocBlock[];
}

export const flattenCodeDoc = (codeDoc:CodeDocBlock[]) => {
  let result: CodeDocBlock[] = [];

  // Helper function to traverse the object
  function traverse(currentObj: CodeDocBlock) {
      result.push({ id: currentObj.id, type: CodeDocBlockType[currentObj.type], text: currentObj.text, path: currentObj.path });
      
      if ('children' in currentObj && Array.isArray(currentObj.children)) {
          currentObj.children.forEach(child => traverse(child));
      }
  }

  // Start the recursion
  codeDoc.forEach((doc) => {
    traverse(doc);
  })

  return result;
}

export const reshapeCodeDoc = (flattenedCodeDoc: CodeDocBlock[]) => {
  const resultObj = flattenedCodeDoc.reduce((acc, val) => {
    const key = val.path || 'prime';
    acc[key] = {...acc[key], [val.id]: val};
    return acc;
  }, {})

  Object.keys(resultObj).forEach((val) => {
    const keySplit = val.split('.');
    const lastKey = keySplit.pop();
    if(keySplit.length > 0) {
      if(lastKey) {
        resultObj[keySplit.join('.')][lastKey].children = Object.keys(resultObj[val]).map(subVal => resultObj[val][subVal]);
      } 
    } else {
      if (lastKey !== 'prime') {
        resultObj['prime'][lastKey].children = Object.keys(resultObj[val]).map(subVal => resultObj[val][subVal]);
      }
    }
  });

  const result = Object.keys(resultObj['prime']).map(key => resultObj['prime'][key]);
  return result;
}
