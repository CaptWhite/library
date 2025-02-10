### Google Drive

Para obtener un archivo PDF desde Google Drive usando JavaScript (Node.js) con ES modules, puedes utilizar la API de Google Drive. Aquí están los pasos detallados para lograrlo:
<hr>

#### 1. Configurar Google Cloud Console
- Ve a Google Cloud Console.
- Crea un nuevo proyecto o usa uno existente.
- Habilita la Google Drive API:
    - Ve a "APIs y servicios" > "Biblioteca".
    - Busca Google Drive API y habilítala.
- Crea credenciales:
    - Ve a "APIs y servicios" > "Credenciales".
    - Crea una nueva credencial de tipo Cuenta de servicio.
    - Descarga el archivo JSON con las credenciales.

<hr>

#### 2. Código para obtener un archivo PDF de Google Drive
``` javascript
import { google } from 'googleapis';
import fs from 'fs';

// Configura las credenciales de la cuenta de servicio
const auth = new google.auth.GoogleAuth({
  keyFile: './credenciales.json', // Ruta al archivo JSON descargado desde Google Cloud Console
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
});

// Inicializa la API de Google Drive
const drive = google.drive({ version: 'v3', auth });

// Función para descargar un archivo de Google Drive
async function downloadPDF(fileId, outputFilePath) {
  try {
    // Obtener el archivo como flujo de datos
    const res = await drive.files.get(
      {
        fileId,
        alt: 'media',
      },
      { responseType: 'stream' }
    );

    // Crear un flujo para guardar el archivo localmente
    const dest = fs.createWriteStream(outputFilePath);
    res.data.pipe(dest);

    dest.on('finish', () => {
      console.log(`Archivo descargado exitosamente en: ${outputFilePath}`);
    });

    dest.on('error', (err) => {
      console.error('Error al guardar el archivo:', err);
    });
  } catch (error) {
    console.error('Error al descargar el archivo:', error.message);
  }
}

// ID del archivo PDF en Google Drive
const fileId = '1GT1J98NnXGHt2MoWWwqs0E5PdMb2bqiY'; // Reemplaza con el ID del archivo en Google Drive
const outputFilePath = './archivo_descargado.pdf'; // Ruta donde se guardará el archivo

// Llama a la función para descargar el archivo
downloadPDF(fileId, outputFilePath);
```

#### 3. Cómo obtener el fileId de Google Drive
El campo fileId es una cadena única que identifica tu archivo en Google Drive. Lo encuentras en la URL del archivo cuando se hace público:

Ejemplo de URL:
``` bash
https://drive.google.com/file/d/1AbCDeFGH12345/view
```

El field en este caso es:
``` bash
1AbCDeFGH12345/view
```

<hr>

#### 4. Explicación del código
1. Autenticación:
- Se usa google.auth.GoogleAuth para autenticar la cuenta de servicio usando el archivo JSON descargado desde Google Cloud Console.
- Se configuran los permisos necesarios para leer archivos de Google Drive (https://www.googleapis.com/auth/drive.readonly).

2. Obtener archivo:
- Se usa el método **drive.files.get** para obtener el contenido del archivo especificado por fileId.
- La opción alt: 'media' asegura que se descargue el archivo como flujo de datos en lugar de obtener solo sus metadatos.
3. Guardar archivo:
- La respuesta del método **drive.files.get** se canaliza (pipe) hacia un flujo de escritura en el sistema de archivos, creando un archivo PDF local.
<hr>

#### 5. Permisos del archivo en Google Drive
- Asegúrate de que el archivo tenga permisos de acceso correctos:
Si usas una cuenta de servicio, comparte el archivo con el correo electrónico de la cuenta de servicio (lo encuentras en el archivo JSON).
- Si el archivo es público, no necesitas configuraciones adicionales.

<hr>

#### 6. Dependencias utilizadas
- **googleapis**: SDK oficial para interactuar con las APIs de Google.
- **fs**: Módulo integrado de Node.js para trabajar con archivos.

