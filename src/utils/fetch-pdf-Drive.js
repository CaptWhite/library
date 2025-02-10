import { google } from 'googleapis';
import fs from 'fs/promises';
const credentials = import.meta.env.GOOGLE_CREDENTIALS

export async function fetchAndSavePDF(urlDrive) {

  let outputFilePath
  if (import.meta.env.MODE === 'development') {
     outputFilePath = './fichero.pdf';
  } else if (import.meta.env.MODE === 'production') {
      outputFilePath = './dist/client/fichero.pdf'
  }

    const auth = new google.auth.GoogleAuth({
        keyFile: './credenciales.json', // Ruta al archivo JSON descargado desde Google Cloud Console
        credentials: credentials,
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
        });

        // Inicializa la API de Google Drive
    const drive = google.drive({ version: 'v3', auth });
        
   try {
     // Obtener el archivo completo
     const res = await drive.files.get(
       {
         fileId: urlDrive,
         alt: 'media',
       },
       { responseType: 'arraybuffer' } // Usamos arraybuffer para recibir los datos en formato binario
     );
 
     // Convertir los datos en un Buffer
     const buffer = Buffer.from(res.data);
 
     // Escribir el contenido del archivo en el sistema de archivos
     fs.writeFile(outputFilePath, buffer);
     console.log(`Archivo descargado exitosamente en: ${outputFilePath}`);
   } catch (error) {
     console.error('Error al descargar el archivo:', error.message);
   }
}