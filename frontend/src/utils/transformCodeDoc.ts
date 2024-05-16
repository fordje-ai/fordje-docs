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
  type: string;
  text: string;
  children?: CodeDocBlock[];
}

export const flattenCodeDoc = (codeDoc:CodeDocBlock[]) => {
  let result: CodeDocBlock[] = [];

  // Helper function to traverse the object
  function traverse(currentObj: CodeDocBlock) {
      result.push({ type: CodeDocBlockType[currentObj.type], text: currentObj.text });
      
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
  let result: CodeDocBlock[] = [], prevResult;

  flattenedCodeDoc.forEach((docBlock) =>{
    if(!prevResult) {
      result.push({type: docBlock.type, text: docBlock.text, children: []});
    } else {
      if (headerRank(prevResult.type) < headerRank(docBlock.type)) {
        result[(result.length-1)].children?.push(docBlock)
      } else {
        result.push(docBlock);
      }
    }
    if (docBlock.type !== 'p') {
      prevResult = docBlock;
    }
  })
}

const headerRank = (header) => {
  switch (header) {
    case 'h1':
      return 1;
    case 'h2':
      return 2;
    case 'h3':
      return 3;
    case 'h4':
      return 4;
    default:
      return 5;
  }
}