import { getColumnNames } from "../utils/excelUtils.js";

export async function extractColumnName(event) {
    const file = event.target.files[0];
        if (file) {
            console.log('Archivo seleccionado:', file.name);
    try {
        const columnNames = await getColumnNames(file);
        console.log('Nombres de columnas:', columnNames);
        return columnNames
    } catch (error) {
        console.error(error.message);
    }

        } else {
        console.log('No se seleccionó ningún archivo.');
  }
}