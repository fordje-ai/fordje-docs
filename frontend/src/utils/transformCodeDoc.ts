export enum CodeDocBlockType {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  p = "p"
};

export type CodeDocBlock = {
  type: string;
  text: string;
  children?: CodeDocBlock[];
}

export const flattenCodeDoc = (codeDoc:CodeDocBlock) => {
  let result: CodeDocBlock[] = [];

  // Helper function to traverse the object
  function traverse(currentObj: CodeDocBlock) {
      result.push({ type: CodeDocBlockType[currentObj.type], text: currentObj.text });
      
      if ('children' in currentObj && Array.isArray(currentObj.children)) {
          currentObj.children.forEach(child => traverse(child));
      }
  }

  // Start the recursion
  traverse(codeDoc);

  return result;
}