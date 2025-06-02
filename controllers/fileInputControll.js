import { fileInput } from "../views/fileInputViews.js";
import { extractColumnName } from "../models/fileInputModel.js";
import { divSelectColumn } from "../views/columnSelectView.js";
import { createOptions } from "../models/columnSelectModel.js";

fileInput.addEventListener('change', async function (event) {
    const headerExcel = await extractColumnName(event);
    console.log('heder corec' + headerExcel);
    createOptions(headerExcel,divSelectColumn)
});