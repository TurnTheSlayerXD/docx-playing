// Patch a document with patches

import * as fs from "fs";
import {
    ExternalHyperlink,
    HeadingLevel,
    ImageRun,
    Paragraph,
    patchDocument,
    PatchType,
    Table,
    TableCell,
    TableRow,
    TextDirection,
    TextRun,
    VerticalAlignTable,
    //eslint-disable-next-line import/no-unresolved
} from "./src/index";

// patchDocument({
//     outputType: "nodebuffer",
//     data: fs.readFileSync("./form2.docx"),
//     patches: {
//         part1: {
//             type: PatchType.PARAGRAPH,
//             children: [new TextRun("Sir. "), new TextRun("John Doe"), new TextRun("(The Conqueror)")],
//         },
//         "part2": {
//             type: PatchType.PARAGRAPH,
//             children: [new TextRun("Sir. "), new TextRun("John Doe"), new TextRun("(The Conqueror)")],
//         },
//         "part3": {
//             type: PatchType.PARAGRAPH,
//             children: [new TextRun("Sir. "), new TextRun("John Doe"), new TextRun("(The Conqueror)")],
//         },
//         "part4": {
//             type: PatchType.PARAGRAPH,
//             children: [new TextRun("Sir. "), new TextRun("John Doe"), new TextRun("(The Conqueror)")],
//         },
//         "part5": {
//             type: PatchType.PARAGRAPH,
//             children: [new TextRun("Sir. "), new TextRun("John Doe"), new TextRun("(The Conqueror)")],
//         },
//         "part6": {
//             type: PatchType.PARAGRAPH,
//             children: [new TextRun("Sir. "), new TextRun("John Doe"), new TextRun("(The Conqueror)")],
//         },
//     },
//     placeholderDelimiters: { start: '<<', end: '>>' },
//     recursive: true,
// }).then((doc) => {
//     fs.writeFileSync("My Document.docx", doc);
// });



// patchDocument({
//     outputType: "nodebuffer",
//     data: fs.readFileSync("./form2.docx"),
//     patches: {
//         part1: {
//             type: PatchType.PARAGRAPH,
//             children: [new TextRun("Sir. "), new TextRun("John Doe"), new TextRun("(The Conqueror)")],
//         },
//         "part2": {
//             type: PatchType.PARAGRAPH,
//             children: [new TextRun("Sir. "), new TextRun("John Doe"), new TextRun("(The Conqueror)")],
//         },
//         "part3": {
//             type: PatchType.PARAGRAPH,
//             children: [new TextRun("Sir. "), new TextRun("John Doe"), new TextRun("(The Conqueror)")],
//         },
//         "part4": {
//             type: PatchType.PARAGRAPH,
//             children: [new TextRun("Sir. "), new TextRun("John Doe"), new TextRun("(The Conqueror)")],
//         },
//         "part5": {
//             type: PatchType.PARAGRAPH,
//             children: [new TextRun("Sir. "), new TextRun("John Doe"), new TextRun("(The Conqueror)")],
//         },
//         "part6": {
//             type: PatchType.PARAGRAPH,
//             children: [new TextRun("Sir. "), new TextRun("John Doe"), new TextRun("(The Conqueror)")],
//         },
//     },
//     placeholderDelimiters: { start: '<<', end: '>>' },
//     recursive: true,
// }).then((doc) => {
//     fs.writeFileSync("My Document.docx", doc);
// });


const patches: any = {};

for (let i = 0; i < 100; ++i) {
    patches[`field_${i}`] = {
        type: PatchType.PARAGRAPH,
        children: [new TextRun(`{{field_${i}}}`)],
    };
}

patchDocument({
    outputType: "nodebuffer",
    data: fs.readFileSync("Форма Акта приема-передачи оборудования.docx"),
    patches,
    placeholderDelimiters: /_{3,}/g,
    recursive: true,
}).then((doc) => {
    fs.writeFileSync("My Document.docx", doc);
});
