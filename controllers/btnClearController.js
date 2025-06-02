import { divSelectColumn } from "../views/columnSelectView.js";
import { bntClear } from "../views/btnClearView.js";
import { fileInput } from "../views/fileInputViews.js";

export function setupClearButton(btnClear){

        bntClear.style.display = "block"
    
        btnClear.addEventListener('click', () => {
        fileInput.value = '';
        divSelectColumn.innerHTML = '';
        console.log('Contenido limpiado');
    });
}