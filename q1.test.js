/**
 * Find all files' name end with .txt
 * @param {string} doc
 * @returns {Array<string>} Array of all txt files' name
 * @example
 * findAllTxtFiles("file1.txt file2.png") returns ["file1.txt"]
 */
function findAllTxtFiles(doc) {
  // TODO: your implementation here. You can use String.match()
}

test('Easy one', () => {
  const doc = 'file0.txt, file2.jpg; file3.net';
  const txtFiles = findAllTxtFiles(doc);
  expect(txtFiles).toHaveLength(1);
  expect(txtFiles).toEqual(expect.arrayContaining(['file0.txt']));
});

test('Multiline', () => {
  const doc = `
    Dear developers,
    Here is the list of files that you can find in Attachments:
    - file1.txt
    - file2.jpg
    -file3.xlsx - file4.txt
    file5.doc, file6.docx,
    If you have any trouble downloading these files, please let us know.
    
    PS: we do not include readme.txt since it's not finished yet.
    BR,
    Long  
  `;
  const txtFiles = findAllTxtFiles(doc);
  expect(txtFiles).toHaveLength(3);
  expect(txtFiles).toEqual(
    expect.arrayContaining(['file1.txt', 'file4.txt', 'readme.txt'])
  );
});

test('should not return .txtn', () => {
  const doc = 'file0.txtn, file2.jpg; file3.net';
  const txtFiles = findAllTxtFiles(doc);
  expect(txtFiles).toHaveLength(0);
});

test('.txt at last', () => {
  const doc = 'file0.txtn and file1.txt';
  const txtFiles = findAllTxtFiles(doc);
  expect(txtFiles).toHaveLength(1);
  expect(txtFiles).toEqual(expect.arrayContaining(['file1.txt']));
});

test('.txt at last with spaces', () => {
  const doc = 'file0.txtn and file1.txt  ';
  const txtFiles = findAllTxtFiles(doc);
  expect(txtFiles).toHaveLength(1);
  expect(txtFiles).toEqual(expect.arrayContaining(['file1.txt']));
});

test('shoud not return ..txt', () => {
  const doc = 'file0.txtn and file1..txt';
  const txtFiles = findAllTxtFiles(doc);
  expect(txtFiles).toHaveLength(0);
});
