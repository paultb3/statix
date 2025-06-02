export function createOptions(arrayHeader,inputId){
    
    arrayHeader.forEach(cabecera => {
        const option = document.createElement('option');
            option.value       = cabecera;
            option.textContent = cabecera;
            inputId.appendChild(option);   
    });
}