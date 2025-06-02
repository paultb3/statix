import { fileInput } from "../views/fileInputViews.js";
import { extractColumnName } from "../models/fileInputModel.js";
import { divSelectColumn } from "../views/columnSelectView.js";
import { createOptions } from "../models/columnSelectModel.js";
import { setupClearButton } from "./btnClearController.js";
import { bntClear } from "../views/btnClearView.js";

import { loadingOverlay } from "../utils/overlayUtil.js";
import { loadingText } from "../utils/overlayUtil.js";


fileInput.addEventListener('change', async function (event) {
    try {

        loadingOverlay.style.display = "flex";  // Mostrar overlay al iniciar
        loadingText.textContent = 'Cargando Archivo Excel...';
        divSelectColumn.innerHTML = '';
    
        const headerExcel = await extractColumnName(event);

        createOptions(headerExcel, divSelectColumn);
        // Mostrar el botón para eliminar el excel cargado
        setupClearButton(bntClear);

    } catch (error) {
        alert('Error al procesar el archivo: ' + error.message);
    } finally {
        loadingOverlay.style.display = "none"; // Ocultar overlay siempre al final
    }
});
