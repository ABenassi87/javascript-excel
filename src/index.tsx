import * as JSZip from 'jszip';
import {saveAs} from 'file-saver';


export default function downloadExcel(): void {
    var zip = new JSZip();
    zip.file("Hello.txt", "Hello World\n");
    zip.generateAsync({type: "blob"}).then(function (content: any) {
        saveAs(content, "excelFile.xlsx");
    });
}