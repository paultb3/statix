export async function getColumnNames(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];

        // Convierte a JSON sin eliminar encabezados (header: 1 devuelve una matriz)
        const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // Extrae la primera fila, que contiene los encabezados
        const columnNames = rows[0];

        resolve(columnNames);
      } catch (err) {
        reject(new Error('Error al leer encabezados: ' + err.message));
      }
    };

    reader.onerror = () => reject(new Error('No se pudo leer el archivo'));
    reader.readAsArrayBuffer(file);
  });
}
