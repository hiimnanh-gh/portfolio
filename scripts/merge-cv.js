import fs from 'fs';
import path from 'path';
import { PDFDocument } from 'pdf-lib';

async function mergePDFs() {
  const publicDir = path.resolve('public');
  const cv1Path = path.join(publicDir, 'CV.pdf');
  const cv2Path = path.join(publicDir, 'CV-1.pdf');

  console.log('Loading CV.pdf and CV-1.pdf...');
  const cv1Bytes = fs.readFileSync(cv1Path);
  const cv2Bytes = fs.readFileSync(cv2Path);

  const doc1 = await PDFDocument.load(cv1Bytes);
  const doc2 = await PDFDocument.load(cv2Bytes);

  console.log(`CV.pdf has ${doc1.getPageCount()} page(s)`);
  console.log(`CV-1.pdf has ${doc2.getPageCount()} page(s)`);

  const mergedDoc = await PDFDocument.create();

  const pages1 = await mergedDoc.copyPages(doc1, doc1.getPageIndices());
  pages1.forEach((page) => mergedDoc.addPage(page));

  const pages2 = await mergedDoc.copyPages(doc2, doc2.getPageIndices());
  pages2.forEach((page) => mergedDoc.addPage(page));

  const mergedBytes = await mergedDoc.save();
  const outputPath = path.join(publicDir, 'Nguyen_Anh_CV.pdf');
  fs.writeFileSync(outputPath, mergedBytes);

  console.log(`Successfully merged ${mergedDoc.getPageCount()} pages into ${outputPath}`);
}

mergePDFs().catch(console.error);
